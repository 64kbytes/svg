jQuery(document).ready(function(){
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
		}
$('#x5F_Progress').hover(function(){

							$('#x5F_Progress .backcolor, #x5F_Progress .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Progress .backcolor').attr('fill', '#FFF');

							$('#x5F_Progress .text').attr('fill', 'black');

						});

						
						$('#x5F_Progress').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Progress').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Progress').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Kvant1').hover(function(){

							$('#x5F_Kvant1 .backcolor, #x5F_Kvant1 .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Kvant1 .backcolor').attr('fill', '#FFF');

							$('#x5F_Kvant1 .text').attr('fill', 'black');

						});

						
						$('#x5F_Kvant1').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Kvant1').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Kvant1').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Spektre').hover(function(){

							$('#x5F_Spektre .backcolor, #x5F_Spektre .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Spektre .backcolor').attr('fill', '#FFF');

							$('#x5F_Spektre .text').attr('fill', 'black');

						});

						
						$('#x5F_Spektre').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Spektre').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Spektre').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Docking_Module').hover(function(){

							$('#x5F_Docking_Module .backcolor, #x5F_Docking_Module .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Docking_Module .backcolor').attr('fill', '#FFF');

							$('#x5F_Docking_Module .text').attr('fill', 'black');

						});

						
						$('#x5F_Docking_Module').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Docking_Module').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Docking_Module').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Kristall').hover(function(){

							$('#x5F_Kristall .backcolor, #x5F_Kristall .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Kristall .backcolor').attr('fill', '#FFF');

							$('#x5F_Kristall .text').attr('fill', 'black');

						});

						
						$('#x5F_Kristall').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Kristall').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Kristall').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Core_Module').hover(function(){

							$('#x5F_Core_Module .backcolor, #x5F_Core_Module .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Core_Module .backcolor').attr('fill', '#FFF');

							$('#x5F_Core_Module .text').attr('fill', 'black');

						});

						
						$('#x5F_Core_Module').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Core_Module').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Core_Module').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Soyuz').hover(function(){

							$('#x5F_Soyuz .backcolor, #x5F_Soyuz .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Soyuz .backcolor').attr('fill', '#FFF');

							$('#x5F_Soyuz .text').attr('fill', 'black');

						});

						
						$('#x5F_Soyuz').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Soyuz').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Soyuz').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Priroda').hover(function(){

							$('#x5F_Priroda .backcolor, #x5F_Priroda .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Priroda .backcolor').attr('fill', '#FFF');

							$('#x5F_Priroda .text').attr('fill', 'black');

						});

						
						$('#x5F_Priroda').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Priroda').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Priroda').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});$('#x5F_Kvant2').hover(function(){

							$('#x5F_Kvant2 .backcolor, #x5F_Kvant2 .text').attr('fill', '#F2D14D');
							
						}, function(){

							$('#x5F_Kvant2 .backcolor').attr('fill', '#FFF');

							$('#x5F_Kvant2 .text').attr('fill', 'black');

						});

						
						$('#x5F_Kvant2').mousedown(function(e){							
						drag = new mouseDrag(e.screenX, e.screenY, this);
						});
											
						$('#x5F_Kvant2').mousemove(function(e){
							if(drag && this === drag.target){
								drag.update(e.screenX, e.screenY);
									$(this).attr('transform', 'translate(' + drag.XY().x + ', ' + drag.XY().y + ')');
								}
							});
												
						$('#x5F_Kvant2').mouseup(function(e){
							if(drag){
								drag = false;
							}
						});});