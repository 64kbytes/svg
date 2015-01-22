
<?php

include("XMLParser.php");

class SVGParser extends PEAR_XMLParser {

	public $foutput = null;
	public $currentAncestor = null;
	public $currentTag  = null;
	public $code ="jQuery(document).ready(function(){
	var drag = false;
		function mouseDrag(x, y, target){
			this.target = target;
			this.beginX = x;
			this.beginY = y;
			this.deltaX = 0;
			this.deltaY = 0;
			this.update = function(x, y){
				this.deltaX = x - this.beginX;
				this.deltaY = y - this.beginY;
			}
			this.XY = function(){
				return {x: this.deltaX, y: this.deltaY};
			}
		}\n";
	
	function parse($finput, $foutput) {
		
		$this->foutput = fopen($foutput, 'w');
		
		if($data = file_get_contents($finput))
			parent::parse($data);
		else
			throw new Exception('SVG file not found');
		
		$this->code .= "});";
		fwrite($this->foutput, $this->code);
		fclose($this->foutput);
	}
	
	function parseCSSstyle($style){
	
		$ret = array();
	
		$rules = explode(';', $style);
		
		foreach($rules as $rule){
			
			if($rule == "")
				continue;
			
			$rulePair = explode(':', $rule);
			
			$rulePair[0] = trim($rulePair[0]);
			$rulePair[1] = trim($rulePair[1]);
			
			switch($rulePair[0]){			
				case 'stroke-width':
					$ret[] = "'{$rulePair[0]}': '{$rulePair[1]}'";
					break;
				case 'stroke':
				case 'fill':
					$ret[] = "{$rulePair[0]}: Raphael.getRGB('{$rulePair[1]}').hex";
					break;
				default:
			}
		}	
		
		return ((count($ret) > 0) ? join(', ', $ret) : "");
	}

	function startHandler($parser, $name, $attribs)	{
	
		if($attribs['class']){		
			
			switch ($attribs['class']) {
				case 'module':								
					if($id = $attribs['id']){					
						$this->code .= 
						"$('#{$attribs['id']}').hover(function(){\n
							$('#{$attribs['id']} .backcolor, #{$attribs['id']} .text').attr('fill', '#F2D14D');\n							
						}, function(){\n
							$('#{$attribs['id']} .backcolor').attr('fill', '#FFF');\n
							$('#{$attribs['id']} .text').attr('fill', 'black');\n
						});\n
						
						$('#{$attribs['id']}').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#{$attribs['id']}').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#{$attribs['id']}').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});";
					}
					break;
				case 'rect':
					$this->code .= "";
					break;
				default:
				$this->currentTag = $name;
			}		
			
		}
		
		$style = ($attribs['style']) ? $this->parseCSSstyle($attribs['style']) : "";
			
		
	}

	function endHandler($parser, $name) {
		$this->currentTag = null;
	}

	function cdataHandler($parser, $data) {
		$data = trim($data);
		if (empty($data)) {
			return true;
		}
	}

}

$p = &new SVGParser();
$p->parse("./MIRconfig.svg", "./MIRconfig_script.js");

?>