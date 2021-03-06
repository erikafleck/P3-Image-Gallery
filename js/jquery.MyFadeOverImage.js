// JavaScript Document
/**
 * @author Paul Chan / KF Software House 
 * http://www.kfsoft.info
 *
 * Version 0.7
 * Copyright (c) 2010 KF Software House
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
	
(function($) {

    var _options = new Array();
	var _itemId = 0;

	jQuery.fn.MyFadeOverImage = function(options) {
		_options[_options.length] = $.extend({}, $.fn.MyFadeOverImage.defaults, options);
		
		var idx = _options.length-1;
		var opt = _options[idx];
		
		$(this).each(function(){
			$(this).attr("idx", idx);
			$(this).fadeTo("fast", opt.normalAlpha);
			$(this).wrap("<DIV class=tongBg></DIV>");
			
			$(this).parent().css("background", opt.normalToneColor);
			$(this).parent().css("width",  opt.imageWidth+"px");
			$(this).parent().css("height",  opt.imageHeight+"px");
			
		}).mouseenter(function(){
			$(this).stop();
			$(this).fadeTo(_options[idx].fadeInSpeed, _options[idx].hoverAlpha);			
		}).mouseout(function(){
			$(this).stop();
			$(this).fadeTo(_options[idx].fadeOutSpeed, _options[idx].normalAlpha);
		});
	}

	jQuery.fn.MyFadeOverImage.defaults = {
		normalAlpha:0.8,
		hoverAlpha: 1,
		normalToneColor:"#000",
		fadeInSpeed: "1000",
		fadeOutSpeed: "1000"
	};

})(jQuery);