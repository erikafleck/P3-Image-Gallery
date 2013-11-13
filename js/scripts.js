// JavaScript Document

$(document).ready(function() {
    $('#animals_show').fotorama();
  });

// Slider Kit execution
$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility				

				// Carousel > Demo #1
				$("#carousel-demo1").sliderkit({
					auto:false,
					shownavitems:4,
					start:2
				});
				
				// Carousel > Demo #2
				$(".carousel-demo2").sliderkit({
					shownavitems:3,
					scroll:1,
					mousewheel:true,
					circular:true,
					start:2
				});

				// Carousel > Demo #3
				$("#carousel-demo3").sliderkit({
					auto:false,
					shownavitems:2,
					navscrollatend:true
				});
				
				// Carousel > Continuous
				$(".carousel-continuous").sliderkit({
					auto:false,
					circular:false,
					shownavitems:5,
					scroll:1,
					navcontinuous: true,
					scrollspeed: 700,
					scrolleasing: "linear"
				});
				
				// Carousel > Demo #5
				$("#carousel-demo5").sliderkit({
					auto:true,
					autospeed:4000,
					shownavitems:3,
					circular:false,
					fastchange:false,
					scrolleasing:"easeOutExpo", //"easeOutBounce, easeOutBack"
					scrollspeed:500
				});	
			});	  
				

//$(document).ready(function(){
	//switch to grid view 
	$('#grid').click(function() {
		//hide paragraphs
		$('p').hide();
		//remove existing class
		$('section').removeClass('col-md-6');
		//add new class
		$('section').addClass('col-md-3');
		
	});
	
		//switch to list view 
	$('#list').click(function() {
		//hide paragraphs
		$('p').show();
		//remove existing class
		$('section').removeClass('col-md-3');
		//add new class
		$('section').addClass('col-md-6');
		
	});
	
	
	
//});

