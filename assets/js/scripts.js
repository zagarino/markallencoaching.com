window.width=jQuery(window).width();jQuery(window).ready(function(){jQuery.browserDetect();loadScript('js/bootstrap.min.js',function(){Init(false);});if(jQuery("html").hasClass("chrome")&&jQuery("body").hasClass("smoothscroll")){loadScript(plugin_path+'smoothscroll.js',function(){jQuery.smoothScroll();});}});function
Init(is_ajax){if(is_ajax!=true){_afterResize();_slider_full();_topNav();_sideNav();_stickyFooter();_infiniteScroll();}_owl_carousel();_flexslider();_popover();_lightbox();_mixitup();_animate();_onepageNav();_scrollTo(false,0);_parallax();_video();_youtubeBG();_toggle();_placeholder();_wrotate();_lazyload();_misc();_countDown();_masonryGallery();_toastr(false,false,false,false);_charts();_select2();_form();_pickers();_editors();_pajinate();_zoom();_autosuggest();_stepper();_slimScroll();_modalAutoLoad();_bgimage();_widget_flickr();_widget_twitter();_widget_facebook();_widget_dribbble();_widget_media();jQuery("a[data-toggle=tooltip],
button[data-toggle=tooltip],
span[data-toggle=tooltip]").tooltip();}if(jQuery('#preloader').length>0){jQuery(window).load(function(){jQuery('#preloader').fadeOut(1000,function(){jQuery('#preloader').remove();});});}function
_afterResize(){jQuery(window).load(function(){"use
strict";jQuery(window).resize(function(){if(window.afterResizeApp){clearTimeout(window.afterResizeApp);}window.afterResizeApp=setTimeout(function(){_slider_full();window.width=jQuery(window).width();if(jQuery('.flexslider').length>0){jQuery('.flexslider').resize();}},300);});});}var
_arr={};function
loadScript(scriptName,callback){if(!_arr[scriptName]){_arr[scriptName]=true;var
body=document.getElementsByTagName('body')[0];var
script=document.createElement('script');script.type='text/javascript';script.src=scriptName;script.onload=callback;body.appendChild(script);}else
if(callback){callback();}};function
_slider_full(){_headerHeight=0;if(jQuery("#header").hasClass('transparent')||jQuery("#header").hasClass('translucent')){_headerHeight=0;}else{_headerHeight=jQuery("#header").outerHeight();if(jQuery("#topBar").length>0){_headerHeight=_headerHeight+jQuery("#topBar").outerHeight();}}_screenHeight=jQuery(window).height()-_headerHeight;jQuery("#slider.fullheight").height(_screenHeight);}function
_topNav(){window.scrollTop=0;var
_header_el=jQuery("#header");jQuery(window).scroll(function(){_toTop();});function
_toTop(){_scrollTop=jQuery(document).scrollTop();if(_scrollTop>100){if(jQuery("#toTop").is(":hidden")){jQuery("#toTop").show();}}else{if(jQuery("#toTop").is(":visible")){jQuery("#toTop").hide();}}}var
addActiveClass=false;jQuery("#topMain
a.dropdown-toggle").bind("click",function(e){if(jQuery(this).attr('href')=="#"){e.preventDefault();}addActiveClass=jQuery(this).parent().hasClass("resp-active");jQuery("#topMain").find(".resp-active").removeClass("resp-active");if(!addActiveClass){jQuery(this).parents("li").addClass("resp-active");}return;});jQuery('li.search
i.fa').click(function(){if(jQuery('#header
.search-box').is(":visible")){jQuery('#header
.search-box').fadeOut(300);}else{jQuery('.search-box').fadeIn(300);jQuery('#header
.search-box form input').focus();if(jQuery('#header li.quick-cart
div.quick-cart-box').is(":visible")){jQuery('#header li.quick-cart
div.quick-cart-box').fadeOut(300);}}});if(jQuery('#header li.search
i.fa').size()!=0){jQuery('#header .search-box, #header li.search
i.fa').on('click',function(e){e.stopPropagation();});jQuery('body').on('click',function(){if(jQuery('#header
li.search .search-box').is(":visible")){jQuery('#header
.search-box').fadeOut(300);}});}jQuery(document).bind("click",function(){if(jQuery('#header
li.search .search-box').is(":visible")){jQuery('#header
.search-box').fadeOut(300);}});jQuery("#closeSearch").bind("click",function(e){e.preventDefault();jQuery('#header
.search-box').fadeOut(300);});jQuery("button#page-menu-mobile").bind("click",function(){jQuery(this).next('ul').slideToggle(150);});jQuery('li.quick-cart>a').click(function(e){e.preventDefault();var
_quick_cart_box=jQuery('li.quick-cart
div.quick-cart-box');if(_quick_cart_box.is(":visible")){_quick_cart_box.fadeOut(300);}else{_quick_cart_box.fadeIn(300);if(jQuery('li.search
.search-box').is(":visible")){jQuery('.search-box').fadeOut(300);}}});if(jQuery('li.quick-cart>a').size()!=0){jQuery('li.quick-cart').on('click',function(e){e.stopPropagation();});jQuery('body').on('click',function(){if(jQuery('li.quick-cart
div.quick-cart-box').is(":visible")){jQuery('li.quick-cart
div.quick-cart-box').fadeOut(300);}});}jQuery("#page-menu
ul.menu-scrollTo>li").bind("click",function(e){var
_href=jQuery('a',this).attr('href');if(!jQuery('a',this).hasClass('external')){e.preventDefault();jQuery("#page-menu
ul.menu-scrollTo>li").removeClass('active');jQuery(this).addClass('active');if(jQuery(_href).length>0){_padding_top=0;if(jQuery("#header").hasClass('sticky')){_padding_top=jQuery(_href).css('padding-top');_padding_top=_padding_top.replace('px','');}jQuery('html,body').animate({scrollTop:jQuery(_href).offset().top-_padding_top},800,'easeInOutExpo');}}});if(_header_el.hasClass('bottom')){_header_el.addClass('dropup');window.homeHeight=jQuery(window).outerHeight()-55;if(_header_el.hasClass('sticky')){window.isOnTop=true;jQuery(window).scroll(function(){if(jQuery(document).scrollTop()>window.homeHeight/2){_header_el.removeClass('dropup');}else{_header_el.addClass('dropup');}});jQuery(window).scroll(function(){if(jQuery(document).scrollTop()>window.homeHeight){if(window.isOnTop===true){jQuery('#header').addClass('fixed');_header_el.removeClass('dropup');window.isOnTop=false;}}else{if(window.isOnTop===false){jQuery('#header').removeClass('fixed');_header_el.addClass('dropup');window.isOnTop=true;}}});jQuery(window).resize(function(){window.homeHeight=jQuery(window).outerHeight();});}}else
if(_header_el.hasClass('sticky')){jQuery(window).scroll(function(){if(window.width>768){var
_scrollTop=jQuery(document).scrollTop();_topBar_H=jQuery("#topBar").outerHeight()||0;if(_scrollTop>_topBar_H){_header_el.addClass('fixed');_header_H=_header_el.outerHeight()||0;if(!_header_el.hasClass('transparent')&&!_header_el.hasClass('translucent')){jQuery('body').css({"padding-top":_header_H+"px"});}}else{if(!_header_el.hasClass('transparent')&&!_header_el.hasClass('translucent')){jQuery('body').css({"padding-top":"0px"});}_header_el.removeClass('fixed');}}});}else
if(_header_el.hasClass('static')){}jQuery("#slidetop
a.slidetop-toggle").bind("click",function(){jQuery("#slidetop
.container").slideToggle(150,function(){if(jQuery("#slidetop
.container").is(":hidden")){jQuery("#slidetop").removeClass('active');}else{jQuery("#slidetop").addClass('active');}});});jQuery(document).keyup(function(e){if(e.keyCode==27){if(jQuery("#slidetop").hasClass("active")){jQuery("#slidetop
.container").slideToggle(150,function(){jQuery("#slidetop").removeClass('active');});}}});jQuery("a#sidepanel_btn").bind("click",function(e){e.preventDefault();_pos="right";if(jQuery("#sidepanel").hasClass('sidepanel-inverse')){_pos="left";}if(jQuery("#sidepanel").is(":hidden")){jQuery("body").append('<span
id="sidepanel_overlay"></span>');if(_pos=="left"){jQuery("#sidepanel").stop().show().animate({"left":"0px"},150);}else{jQuery("#sidepanel").stop().show().animate({"right":"0px"},150);}}else{jQuery("#sidepanel_overlay").remove();if(_pos=="left"){jQuery("#sidepanel").stop().animate({"left":"-300px"},300);}else{jQuery("#sidepanel").stop().animate({"right":"-300px"},300);}setTimeout(function(){jQuery("#sidepanel").hide();},500);}_sidepanel_overlay();});jQuery("#sidepanel_close").bind("click",function(e){e.preventDefault();jQuery("a#sidepanel_btn").trigger('click');});function
_sidepanel_overlay(){jQuery("#sidepanel_overlay").unbind();jQuery("#sidepanel_overlay").bind("click",function(){jQuery("a#sidepanel_btn").trigger('click');});}jQuery(document).keyup(function(e){if(e.keyCode==27){if(jQuery("#sidepanel").is(":visible")){jQuery("a#sidepanel_btn").trigger('click');}}});if(jQuery("#menu_overlay_open").length>0){var
is_ie9=jQuery('html').hasClass('ie9')?true:false;if(is_ie9==true){jQuery("#topMain").hide();}jQuery("#menu_overlay_open").bind("click",function(e){e.preventDefault();jQuery('body').addClass('show-menu');if(is_ie9==true){jQuery("#topMain").show();}});jQuery("#menu_overlay_close").bind("click",function(e){e.preventDefault();if(jQuery('body').hasClass('show-menu')){jQuery('body').removeClass('show-menu');}if(is_ie9==true){jQuery("#topMain").hide();}});jQuery(document).keyup(function(e){if(e.keyCode==27){if(jQuery('body').hasClass('show-menu')){jQuery('body').removeClass('show-menu');}if(is_ie9==true){jQuery("#topMain").hide();}}});}if(jQuery("#sidebar_vertical_btn").length>0){if(jQuery("body").hasClass('menu-vertical-hide')){_paddingStatusL=jQuery("#mainMenu.sidebar-vertical").css('left');_paddingStatusR=jQuery("#mainMenu.sidebar-vertical").css('right');if(parseInt(_paddingStatusL)<0){var
_pos="left";}else if(parseInt(_paddingStatusR)<0){var
_pos="right";}else{var
_pos="left";}jQuery("#sidebar_vertical_btn").bind("click",function(e){_paddingStatus=jQuery("#mainMenu.sidebar-vertical").css(_pos);if(parseInt(_paddingStatus)<0){if(_pos=="right"){jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"0px"},200);}else{jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"0px"},200);}}else{if(_pos=="right"){jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"-263px"},200);}else{jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"-263px"},200);}}});jQuery(window).scroll(function(){_paddingStatus=parseInt(jQuery("#mainMenu.sidebar-vertical").css(_pos));if(_paddingStatus>=0){if(_pos=="right"){jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"-263px"},200);}else{jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"-263px"},200);}}});}}if(jQuery("#topBar").length>0){jQuery("#topNav
ul").addClass('has-topBar');}jQuery(window).scroll(function(){if(window.width<769){if(jQuery('#header
li.quick-cart div.quick-cart-box').is(":visible")){jQuery('#header
li.quick-cart div.quick-cart-box').fadeOut(0);}if(jQuery('#header
li.search .search-box').is(":visible")){jQuery('#header
.search-box').fadeOut(0);}}});}function
_sideNav(){jQuery("div.side-nav").each(function(){var
_t=jQuery('ul',this);jQuery('button',this).bind("click",function(){_t.slideToggle(300);});});jQuery("div.side-nav>ul>li>a.dropdown-toggle").bind("click",function(e){e.preventDefault();jQuery(this).next('ul').slideToggle(200);jQuery(this).closest('li').toggleClass('active');});}function
_animate(){if(jQuery("body").hasClass('enable-animation')){var wow=new
WOW({boxClass:'wow',animateClass:'animated',offset:90,mobile:false,live:true});wow.init();}jQuery(".countTo").appear(function(){var
_t=jQuery(this),_from=_t.attr('data-from')||0,_speed=_t.attr('data-speed')||1300,_refreshInterval=_t.attr('data-refreshInterval')||60;_t.countTo({from:parseInt(_from),to:_t.html(),speed:parseInt(_speed),refreshInterval:parseInt(_refreshInterval),});});}function
_onepageNav(){var
_container=jQuery("#topMain.nav-onepage");if(_container.length>0){loadScript(plugin_path+'jquery.nav.min.js',function(){jQuery(_container).onePageNav({currentClass:'active',changeHash:false,scrollSpeed:750,scrollThreshold:0.5,filter:':not(.external)',easing:'easeInOutExpo'});});}}function
_owl_carousel(){var
_container=jQuery("div.owl-carousel");if(_container.length>0){loadScript(plugin_path+'owl-carousel/owl.carousel.min.js',function(){_container.each(function(){var
slider=jQuery(this);var options=slider.attr('data-plugin-options');var
$opt=eval('('+options+')');if($opt.progressBar=='true'){var
afterInit=progressBar;}else{var afterInit=false;}var
defaults={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:true,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:['<i
class="fa fa-angle-left"></i>','<i class="fa
fa-angle-right"></i>'],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,transitionStyle:false,addClassActive:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:afterInit,beforeMove:false,afterMove:(afterInit==false)?false:moved,afterAction:false,startDragging:false,afterLazyLoad:false}
var
config=jQuery.extend({},defaults,options,slider.data("plugin-options"));slider.owlCarousel(config).addClass("owl-carousel-init");var
elem=jQuery(this);function
progressBar(elem){$elem=elem;buildProgressBar();start();}function
buildProgressBar(){$progressBar=jQuery("<div>",{id:"progressBar"});$bar=jQuery("<div>",{id:"bar"});$progressBar.append($bar).prependTo($elem);}function
start(){percentTime=0;isPause=false;tick=setInterval(interval,10);};var
time=7;function
interval(){if(isPause===false){percentTime+=1/time;$bar.css({width:percentTime+"%"});if(percentTime>=100){$elem.trigger('owl.next')}}}function
pauseOnDragging(){isPause=true;}function
moved(){clearTimeout(tick);start();}});});}}function _flexslider(){var
_container=jQuery(".flexslider");if(_container.length>0){loadScript(plugin_path+'slider.flexslider/jquery.flexslider-min.js',function(){if(jQuery().flexslider){var
_controlNav=_container.attr('data-controlNav'),_slideshowSpeed=_container.attr('data-slideshowSpeed')||7000,_pauseOnHover=_container.attr('data-pauseOnHover')||false;if(_pauseOnHover=="true"){_pauseOnHover=true;}else{_pauseOnHover=false;}if(_controlNav=='thumbnails'){_controlNav='thumbnails';}else
if(_controlNav=='true'){_controlNav=true;}else
if(_controlNav=='false'){_controlNav=false;}else{_controlNav=true;}if(_controlNav=='thumbnails'||_controlNav==false){_directionNav=false;}else{_directionNav=true;}jQuery(_container).flexslider({animation:"slide",controlNav:_controlNav,slideshowSpeed:parseInt(_slideshowSpeed)||7000,directionNav:_directionNav,pauseOnHover:_pauseOnHover,start:function(slider){jQuery('.flex-prev').html('<i
class="fa fa-angle-left"></i>');jQuery('.flex-next').html('<i class="fa
fa-angle-right"></i>');}});_container.resize();}});}}function
_popover(){jQuery("a[data-toggle=popover]").bind("click",function(e){jQuery('.popover-title
.close').remove();e.preventDefault();});var
isVisible=false,clickedAway=false;jQuery("a[data-toggle=popover],
button[data-toggle=popover]").popover({html:true,trigger:'manual'}).click(function(e){jQuery(this).popover('show');clickedAway=false;isVisible=true;e.preventDefault();});jQuery(document).click(function(e){if(isVisible&clickedAway){jQuery("a[data-toggle=popover],
button[data-toggle=popover]").popover('hide');isVisible=clickedAway=false;}else{clickedAway=true;}});jQuery("a[data-toggle=popover],
button[data-toggle=popover]").popover({html:true,trigger:'manual'}).click(function(e){$(this).popover('show');$('.popover-title').append('<button
type="button"
class="close">&times;</button>');$('.close').click(function(e){jQuery("a[data-toggle=popover],
button[data-toggle=popover]").popover('hide');});e.preventDefault();});}function
_lightbox(){var
_el=jQuery(".lightbox");if(_el.length>0){loadScript(plugin_path+'magnific-popup/jquery.magnific-popup.min.js',function(){if(typeof(jQuery.magnificPopup)=="undefined"){return
false;}jQuery.extend(true,jQuery.magnificPopup.defaults,{tClose:'Close',tLoading:'Loading...',gallery:{tPrev:'Previous',tNext:'Next',tCounter:'%curr%
/ %total%'},image:{tError:'Image not loaded!'},ajax:{tError:'Content not
loaded!'}});_el.each(function(){var
_t=jQuery(this),options=_t.attr('data-plugin-options'),config={},defaults={type:'image',fixedContentPos:false,fixedBgPos:false,mainClass:'mfp-no-margins
mfp-with-zoom',closeOnContentClick:true,closeOnBgClick:true,image:{verticalFit:true},zoom:{enabled:false,duration:300},gallery:{enabled:false,navigateByImgClick:true,preload:[0,1],arrowMarkup:'<button
title="%title%" type="button" class="mfp-arrow
mfp-arrow-%dir%"></button>',tPrev:'Previous',tNext:'Next',tCounter:'<span class="mfp-counter">%curr%
/
%total%</span>'},};if(_t.data("plugin-options")){config=jQuery.extend({},defaults,options,_t.data("plugin-options"));}jQuery(this).magnificPopup(config);});});}}function
_scrollTo(to,offset){if(to==false){jQuery("a.scrollTo").bind("click",function(e){e.preventDefault();var
href=jQuery(this).attr('href'),_offset=jQuery(this).attr('data-offset')||0;if(href!='#'&&href!='#top'){jQuery('html,body').animate({scrollTop:jQuery(href).offset().top-parseInt(_offset)},800,'easeInOutExpo');}if(href=='#top'){jQuery('html,body').animate({scrollTop:0},800,'easeInOutExpo');}});jQuery("#toTop").bind("click",function(e){e.preventDefault();jQuery('html,body').animate({scrollTop:0},800,'easeInOutExpo');});}else{jQuery('html,body').animate({scrollTop:jQuery(to).offset().top-offset},800,'easeInOutExpo');}}function
_parallax(){if(jQuery().parallax){jQuery(".parallax-1").parallax("50%","0.1");jQuery(".parallax-2").parallax("50%","0.2");jQuery(".parallax-3").parallax("50%","0.3");jQuery(".parallax-4").parallax("50%","0.4");}var
_slider=jQuery('#slider');if(_slider.length>0){if(_slider.hasClass('parallax-slider')){var
block_intro_top=_slider.offset().top;jQuery(window).scroll(function(){var _currentTop=jQuery(document).scrollTop();if(_currentTop<768){var
_sliderH=jQuery('#slider').height();jQuery('#slider>div').css('top',(_currentTop*0.5));jQuery('#slider>div').css('opacity',(1-_currentTop/_sliderH*1));}});}}}function
_video(){if(jQuery("section.section-video").length>0){var
_t=jQuery("section.section-video
.section-container-video>video");_w=jQuery(window).width();_t.width(_w);}}function
_youtubeBG(){var
_container=jQuery('#YTPlayer');if(_container.length>0){loadScript(plugin_path+'jquery.mb.YTPlayer.min.js',function(){if(jQuery().mb_YTPlayer){var
disableMobile=false;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){}if(disableMobile===false){jQuery(".player").mb_YTPlayer();jQuery("#video-volume").bind("click",function(e){e.preventDefault();jQuery('#YTPlayer').toggleVolume();});jQuery("#video-volume").bind("click",function(){if(jQuery('i.fa',this).hasClass('fa-volume-down')){jQuery('i.fa',this).removeClass('fa-volume-down');jQuery('i.fa',this).removeClass('fa-volume-up');jQuery('i.fa',this).addClass('fa-volume-up');}else{jQuery('i.fa',this).removeClass('fa-volume-up');jQuery('i.fa',this).removeClass('fa-volume-v');jQuery('i.fa',this).addClass('fa-volume-down');}});}else{jQuery(".player
, #video-volume").hide();}}});}}function _mixitup(){var
_container=jQuery('.mix-grid');if(_container.length>0){loadScript(plugin_path+'mixitup/jquery.mixitup.min.js',function(){if(jQuery().mixitup){_container.mixitup();jQuery("ul.mix-filter
a").bind("click",function(e){e.preventDefault();});}});}}function
_toggle(){var
$_t=this,previewParClosedHeight=25;jQuery("div.toggle.active >
p").addClass("preview-active");jQuery("div.toggle.active >
div.toggle-content").slideDown(400);jQuery("div.toggle >
label").click(function(e){var
parentSection=jQuery(this).parent(),parentWrapper=jQuery(this).parents("div.toggle"),previewPar=false,isAccordion=parentWrapper.hasClass("toggle-accordion");if(isAccordion&&typeof(e.originalEvent)!="undefined"){parentWrapper.find("div.toggle.active
>
label").trigger("click");}parentSection.toggleClass("active");if(parentSection.find(">
p").get(0)){previewPar=parentSection.find("> p");var
previewParCurrentHeight=previewPar.css("height");var
previewParAnimateHeight=previewPar.css("height");previewPar.css("height","auto");previewPar.css("height",previewParCurrentHeight);}var
toggleContent=parentSection.find(">
div.toggle-content");if(parentSection.hasClass("active")){jQuery(previewPar).animate({height:previewParAnimateHeight},350,function(){jQuery(this).addClass("preview-active");});toggleContent.slideDown(350);}else{jQuery(previewPar).animate({height:previewParClosedHeight},350,function(){jQuery(this).removeClass("preview-active");});toggleContent.slideUp(350);}});}function
_placeholder(){if(navigator.appVersion.indexOf("MSIE")!=-1){jQuery('[placeholder]').focus(function(){var
input=jQuery(this);if(input.val()==input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var
input=jQuery(this);if(input.val()==''||input.val()==input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur();}}function
_wrotate(){jQuery(".word-rotator").each(function(){var
_t=jQuery(this),_items=_t.find(".items"),items=_items.find(">
span"),firstItem=items.eq(0),firstItemClone=firstItem.clone(),_iHeight=jQuery(this).height(),_cItem=1,_cTop=0,_delay=jQuery(this).attr('data-delay')||2000;_items.append(firstItemClone);_t.height(_iHeight).addClass("active");setInterval(function(){_cTop=(_cItem*_iHeight);_items.animate({top:-(_cTop)+"px"},300,"easeOutQuad",function(){_cItem++;if(_cItem>items.length){_items.css("top",0);_cItem=1;}});},_delay);});var
_container=jQuery('span.rotate');if(_container.length>0){loadScript(plugin_path+'text-rotator/jquery.simple-text-rotator.min.js',function(){_container.each(function(){var
_t=jQuery(this),_animation=_t.attr('data-animation')||'fade',_speed=_t.attr('data-speed')||2000;_t.textrotator({animation:_animation,speed:parseInt(_speed)});});});}}function
_lazyload(){var
_container=jQuery('img.lazy');if(_container.length>0){loadScript(plugin_path+'lazyload/jquery.lazyload.min.js',function(){if(jQuery().lazyload){_container.each(function(){var
_t=jQuery(this),_effect=_t.attr('data-effect')||'fadeIn';_t.lazyload({effect:_effect});});}});}}function
_misc(){if(jQuery("#portfolio").length>0){jQuery("#portfolio .item-box
.owl-carousel").each(function(){jQuery(this).parent().parent().find('.item-box-desc').css({"padding-top":"29px"});});}if(jQuery().masonry){jQuery(".masonry").masonry();}var
portfolio_isotope_container=jQuery("#portfolio.portfolio-isotope");if(portfolio_isotope_container.length>0){loadScript(plugin_path+'isotope/isotope.pkgd.min.js',function(){if(jQuery().isotope){var
_container=jQuery('#portfolio');if(_container.hasClass('portfolio-isotope-2')){_cols=2;}else
if(_container.hasClass('portfolio-isotope-3')){_cols=3;}else
if(_container.hasClass('portfolio-isotope-4')){_cols=4;}else
if(_container.hasClass('portfolio-isotope-5')){_cols=5;}else
if(_container.hasClass('portfolio-isotope-6')){_cols=6;}else{_cols=4;}function
_recalcW(){_dw=jQuery(document).width();if(_container.hasClass('fullwidth')){_w=_container.width();_wItem=(_w/_cols);if(_dw<760){_wItem=(_w/2);}if(_dw<480){_wItem=jQuery("#portfolio").width();}jQuery("#portfolio>.portfolio-item").css({"width":_wItem});}else{_mR=parseInt(jQuery("#portfolio>.portfolio-item").css('margin-right'));_w=jQuery("#portfolio").closest('.container').width();_wItem=_w/_cols-_mR;if(_dw<760){_wItem=(_w/2-_mR);}if(_dw<480){_wItem=_w;}jQuery("#portfolio.portfolio-isotope").css({"width":_w});jQuery("#portfolio>.portfolio-item").css({"width":_wItem});}if(jQuery('.flexslider').length>0){jQuery('.flexslider').resize();}}_recalcW();jQuery(window).load(function(){var
_t=setTimeout(function(){_container.isotope({masonry:{},filter:'*',animationOptions:{duration:750,easing:'linear',queue:false}});jQuery('#portfolio_filter>li>a').bind("click",function(e){e.preventDefault();jQuery('#portfolio_filter>li.active').removeClass('active');jQuery(this).parent('li').addClass('active');var
selector=jQuery(this).attr('data-filter');_container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false}});});},50);setTimeout(function(){_container.isotope('layout');},300);});jQuery(window).resize(function(){if(window.afterResizeApp2){clearTimeout(window.afterResizeApp2);}window.afterResizeApp2=setTimeout(function(){_recalcW();setTimeout(function(){_container.isotope('layout');},300);},300);});}});}var
blog_isotope_container=jQuery("#blog.blog-isotope");if(blog_isotope_container.length>0){loadScript(plugin_path+'isotope/isotope.pkgd.min.js',function(){if(jQuery().isotope){var
_container=jQuery('#blog');if(_container.hasClass('blog-isotope-2')){_cols=2;}else
if(_container.hasClass('blog-isotope-3')){_cols=3;}else
if(_container.hasClass('blog-isotope-4')){_cols=4;}else{_cols=4;}function _recalcW(){_dw=jQuery(document).width();if(_container.hasClass('fullwidth')){_w=jQuery(document).width();_wItem=(_w/_cols);if(_dw<760){_wItem=(_w/2);}if(_dw<480){_wItem=jQuery("#blog").width();}jQuery("#blog>.blog-post-item").css({"width":_wItem});}else{_mR=parseInt(jQuery("#blog>.blog-post-item").css('margin-right'));_w=jQuery("#blog").closest('.container').width();_wItem=_w/_cols-_mR;if(_dw<760){_wItem=(_w/2-_mR);}if(_dw<480){_wItem=_w;}jQuery("#blog.blog-isotope").css({"width":_w});jQuery("#blog>.blog-post-item").css({"width":_wItem});}if(jQuery('.flexslider').length>0){jQuery('.flexslider').resize();}}_recalcW();jQuery(window).load(function(){var
_t=setTimeout(function(){_container.isotope({masonry:{},filter:'*',animationOptions:{duration:750,easing:'linear',queue:false}});jQuery('#blog_filter>li>a').bind("click",function(e){e.preventDefault();jQuery('#blog_filter>li.active').removeClass('active');jQuery(this).parent('li').addClass('active');var
selector=jQuery(this).attr('data-filter');_container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false}});});},50);setTimeout(function(){_container.isotope('layout');},300);});jQuery(window).resize(function(){if(window.afterResizeApp2){clearTimeout(window.afterResizeApp2);}window.afterResizeApp2=setTimeout(function(){_recalcW();setTimeout(function(){_container.isotope('layout');},300);},300);});}});}if(jQuery('.box-flip').length>0){jQuery('.box-flip').each(function(){_height1=jQuery('.box1',this).outerHeight();_height2=jQuery('.box2',this).outerHeight();if(_height1>=_height2){_height=_height1;}else{_height=_height2;}jQuery(this).css({"min-height":_height+"px"});jQuery('.box1',this).css({"min-height":_height+"px"});jQuery('.box2',this).css({"min-height":_height+"px"});});jQuery('.box-flip').hover(function(){jQuery(this).addClass('flip');},function(){jQuery(this).removeClass('flip');});}if(jQuery("div.sticky-side").length>0){var
_t=jQuery("div.sticky-side");_h=_t.height()/2;_t.css({"margin-top":"-"+_h+"px"});}jQuery(".incr").bind("click",function(e){e.preventDefault();var
_for=jQuery(this).attr('data-for'),_max=parseInt(jQuery(this).attr('data-max')),_curVal=parseInt(jQuery("#"+_for).val());if(_curVal<_max){jQuery("#"+_for).val(_curVal+1);}});jQuery(".decr").bind("click",function(e){e.preventDefault();var
_for=jQuery(this).attr('data-for'),_min=parseInt(jQuery(this).attr('data-min')),_curVal=parseInt(jQuery("#"+_for).val());if(_curVal>_min){jQuery("#"+_for).val(_curVal-1);}});jQuery("a.toggle-default").bind("click",function(e){e.preventDefault();var
_href=jQuery(this).attr('href');if(jQuery(_href).is(":hidden")){jQuery(_href).slideToggle(200);jQuery('i.fa',this).removeClass('fa-plus-square').addClass('fa-minus-square');}else{jQuery(_href).slideToggle(200);jQuery('i.fa',this).removeClass('fa-minus-square').addClass('fa-plus-square');}});var
file_container=jQuery("input[type=file]");if(file_container.length>0){loadScript(plugin_path+'custom.fle_upload.js');}jQuery("textarea.word-count").on('keyup',function(){var
_t=jQuery(this),words=this.value.match(/\S+/g).length,_limit=_t.attr('data-maxlength')||200;if(words>parseInt(_limit)){var
trimmed=_t.val().split(/\s+/,200).join(" ");_t.val(trimmed+"
");}else{var
_data_info=_t.attr('data-info');if(_data_info==''||_data_info==undefined){var
_infoContainer=_t.next('div');jQuery('span',_infoContainer).text(words+'/'+_limit);}else{jQuery('#'+_data_info).text(words+'/'+_limit);}}});}function
_stickyFooter(){if(jQuery("#footer").hasClass('sticky')){var
footerHeight=0,footerTop=0,_footer=jQuery("#footer.sticky");positionFooter();function
positionFooter(){footerHeight=_footer.height();footerTop=(jQuery(window).scrollTop()+jQuery(window).height()-footerHeight)+"px";if((jQuery(document.body).height()+footerHeight)>jQuery(window).height()){_footer.css({position:"absolute"}).stop().animate({top:footerTop},0);}else{_footer.css({position:"static"});}}jQuery(window).scroll(positionFooter).resize(positionFooter);}}function
_countDown(){var
_container=jQuery(".countdown"),_container2=jQuery(".countdown-download");if(_container.length>0||_container2.length>0){loadScript(plugin_path+'countdown/jquery.countdown.pack.min.js',function(){_container.each(function(){var
_t=jQuery(this),_date=_t.attr('data-from'),_labels=_t.attr('data-labels');if(_labels){_labels=_labels.split(",");}if(_date){var
_d=new Date(_date);jQuery(this).countdown({until:new
Date(_d),labels:_labels||["Years","Months","Weeks","Days","Hours","Minutes","Seconds"]});}});_container2.bind("click",function(e){e.preventDefault();var
_t=jQuery(this),cd_container=_t.attr('data-for'),_countdown=jQuery("#"+cd_container+'
span.download-wait>.countdown'),_seconds=parseInt(_t.attr('data-seconds')),_dataURL=_t.attr('href');_t.fadeOut(250,function(){jQuery("#"+cd_container).fadeIn(250,function(){var
currentDate=new
Date();currentDate.setSeconds(currentDate.getSeconds()+_seconds);_countdown.countdown({until:currentDate,format:'S',expiryUrl:_dataURL,onExpiry:function(){jQuery("#"+cd_container+'
span.download-message').removeClass('hide');jQuery("#"+cd_container+'
span.download-wait').addClass('hide');}});});});return
false;});});}}function
_masonryGallery(){if(jQuery(".masonry-gallery").length>0){jQuery(".masonry-gallery").each(function(){var
_container=jQuery(this),columns=4;if(_container.hasClass('columns-2'))columns=2;else
if(_container.hasClass('columns-3'))columns=3;else
if(_container.hasClass('columns-4'))columns=4;else
if(_container.hasClass('columns-5'))columns=5;else
if(_container.hasClass('columns-6'))columns=6;var
_firstElemWidth=_container.find('a:eq(0)').outerWidth(),_bigImageNo=_container.attr('data-img-big'),_containerWidth=_container.width();var
postWidth=(_containerWidth/columns);postWidth=Math.floor(postWidth);if((postWidth*columns)>=_containerWidth){_container.css({'margin-right':'-1px'});}if(columns<6){_container.children('a').css({"width":postWidth+"px"});}if(parseInt(_bigImageNo)>0){_bigImageNo=Number(_bigImageNo)-1;_container.find('a:eq('+_bigImageNo+')').css({width:_firstElemWidth*2+'px'});loadScript(plugin_path+'isotope/isotope.pkgd.min.js',function(){setTimeout(function(){_container.isotope({masonry:{columnWidth:_firstElemWidth}});_container.isotope('layout');},1000);});}});}}function
_toastr(_message,_position,_notifyType,_onclick){var
_btn=jQuery(".toastr-notify");if(_btn.length>0||_message!=false){loadScript(plugin_path+'toastr/toastr.js',function(){_btn.bind("click",function(e){e.preventDefault();var
_message=jQuery(this).attr('data-message'),_notifyType=jQuery(this).attr('data-notifyType')||"default",_position=jQuery(this).attr('data-position')||"top-right",_progressBar=jQuery(this).attr('data-progressBar')=="true"?true:false,_closeButton=jQuery(this).attr('data-closeButton')=="true"?true:false,_debug=jQuery(this).attr('data-debug')=="true"?true:false,_newestOnTop=jQuery(this).attr('data-newestOnTop')=="true"?true:false,_preventDuplicates=jQuery(this).attr('data-preventDuplicates')=="true"?true:false,_showDuration=jQuery(this).attr('data-showDuration')||"300",_hideDuration=jQuery(this).attr('data-hideDuration')||"1000",_timeOut=jQuery(this).attr('data-timeOut')||"5000",_extendedTimeOut=jQuery(this).attr('data-extendedTimeOut')||"1000",_showEasing=jQuery(this).attr('data-showEasing')||"swing",_hideEasing=jQuery(this).attr('data-hideEasing')||"linear",_showMethod=jQuery(this).attr('data-showMethod')||"fadeIn",_hideMethod=jQuery(this).attr('data-hideMethod')||"fadeOut";toastr.options={"closeButton":_closeButton,"debug":_debug,"newestOnTop":_newestOnTop,"progressBar":_progressBar,"positionClass":"toast-"+_position,"preventDuplicates":_preventDuplicates,"onclick":null,"showDuration":_showDuration,"hideDuration":_hideDuration,"timeOut":_timeOut,"extendedTimeOut":_extendedTimeOut,"showEasing":_showEasing,"hideEasing":_hideEasing,"showMethod":_showMethod,"hideMethod":_hideMethod}
toastr[_notifyType](_message);});if(_message!=false){if(_onclick!=false){onclick=function(){window.location=_onclick;}}else{onclick=null}toastr.options={"closeButton":true,"debug":false,"newestOnTop":false,"progressBar":true,"positionClass":"toast-"+_position,"preventDuplicates":false,"onclick":onclick,"showDuration":"300","hideDuration":"1000","timeOut":"5000","extendedTimeOut":"1000","showEasing":"swing","hideEasing":"linear","showMethod":"fadeIn","hideMethod":"fadeOut"}
setTimeout(function(){toastr[_notifyType](_message);},1500);}});}}function
_charts(){var
_container=jQuery(".piechart");if(_container.length>0){loadScript(plugin_path+'chart.easypiechart/dist/jquery.easypiechart.min.js',function(){jQuery(".piechart").each(function(){var
_t=jQuery(this),_size=_t.attr('data-size')||150,_animate=_t.attr('data-animate')||"3000";_t.easyPieChart({size:_size,animate:_animate,scaleColor:false,trackColor:_t.attr('data-trackcolor')||'rgba(0,0,0,0.04)',lineWidth:_t.attr('data-width')||'2',lineCap:'square',barColor:_t.attr('data-color')||'#0093BF'});jQuery("span",this).attr('style',"line-height:"+_size+"px
!important; height:"+_size+"px;
width:"+_size+"px");jQuery("i",this).attr('style',"line-height:"+_size+"px
!important; height:"+_size+"px; width:"+_size+"px");});});}}function
_select2(){var
_container=jQuery('select.select2');if(_container.length>0){loadScript(plugin_path+'select2/js/select2.full.min.js',function(){if(jQuery().select2){jQuery('select.select2').select2();}});}}function
_form(){if(jQuery('form.validate-plugin').length>0){loadScript(plugin_path+'form.validate/jquery.form.min.js',function(){loadScript(plugin_path+'form.validate/jquery.validation.min.js');});}if(jQuery('form.validate').length>0){loadScript(plugin_path+'form.validate/jquery.form.min.js',function(){loadScript(plugin_path+'form.validate/jquery.validation.min.js',function(){if(jQuery().validate){jQuery('form.validate').each(function(){var
_t=jQuery(this),_Smessage=_t.attr('data-success')||"Successfully! Thank
you!",_Cmessage=_t.attr('data-captcha')||"Invalid
Captcha!",_Tposition=_t.attr('data-toastr-position')||"top-right",_Ttype=_t.attr('data-toastr-type')||"success";_Turl=_t.attr('data-toastr-url')||false;_t.append('<input
type="hidden" name="is_ajax" value="true"
/>');_t.validate({submitHandler:function(form){jQuery(form).find('.input-group-addon').find('.fa-envelope').removeClass('fa-envelope').addClass('fa-refresh
fa-spin');jQuery(form).ajaxSubmit({target:jQuery(form).find('.validate-result').length>0?jQuery(form).find('.validate-result'):'',error:function(data){_toastr("Sent
Failed!",_Tposition,"error",false);},success:function(data){var
data=data.trim();if(data=='_failed_'){_toastr("SMTP ERROR! Please, check
your config file!",_Tposition,"error",false);}else
if(data=='_captcha_'){_toastr("Invalid
Captcha!",_Tposition,"error",false);}else{jQuery(form).find('.input-group-addon').find('.fa-refresh').removeClass('fa-refresh
fa-spin').addClass('fa-envelope');jQuery(form).find('input.form-control').val('');_toastr(_Smessage,_Tposition,_Ttype,_Turl);}}});}});});}});});}var
_container=jQuery('input.masked');if(_container.length>0){loadScript(plugin_path+'form.masked/jquery.maskedinput.js',function(){_container.each(function(){var
_t=jQuery(this);_format=_t.attr('data-format')||'(999)
999-999999',_placeholder=_t.attr('data-placeholder')||'X';jQuery.mask.definitions['f']="[A-Fa-f0-9]";_t.mask(_format,{placeholder:_placeholder});});});}}function
_pickers(){var
_container_1=jQuery('.datepicker');if(_container_1.length>0){loadScript(plugin_path+'bootstrap.datepicker/js/bootstrap-datepicker.min.js',function(){if(jQuery().datepicker){_container_1.each(function(){var
_t=jQuery(this),_lang=_t.attr('data-lang')||'en';if(_lang!='en'&&_lang!=''){loadScript(plugin_path+'bootstrap.datepicker/locales/bootstrap-datepicker.'+_lang+'.min.js');}jQuery(this).datepicker({format:_t.attr('data-format')||'yyyy-mm-dd',language:_lang,rtl:_t.attr('data-RTL')=="true"?true:false,changeMonth:_t.attr('data-changeMonth')=="false"?false:true,todayBtn:_t.attr('data-todayBtn')=="false"?false:"linked",calendarWeeks:_t.attr('data-calendarWeeks')=="false"?false:true,autoclose:_t.attr('data-autoclose')=="false"?false:true,todayHighlight:_t.attr('data-todayHighlight')=="false"?false:true,onRender:function(date){}}).on('changeDate',function(ev){}).data('datepicker');});}});}var
_container_2=jQuery('.rangepicker');if(_container_2.length>0){loadScript(plugin_path+'bootstrap.daterangepicker/moment.min.js',function(){loadScript(plugin_path+'bootstrap.daterangepicker/daterangepicker.js',function(){if(jQuery().datepicker){_container_2.each(function(){var
_t=jQuery(this),_format=_t.attr('data-format').toUpperCase()||'YYYY-MM-DD';_t.daterangepicker({format:_format,startDate:_t.attr('data-from'),endDate:_t.attr('data-to'),ranges:{'Today':[moment(),moment()],'Yesterday':[moment().subtract(1,'days'),moment().subtract(1,'days')],'Last
7 Days':[moment().subtract(6,'days'),moment()],'Last 30
Days':[moment().subtract(29,'days'),moment()],'This
Month':[moment().startOf('month'),moment().endOf('month')],'Last
Month':[moment().subtract(1,'month').startOf('month'),moment().subtract(1,'month').endOf('month')]}},function(start,end,label){});});}});});}var
_container_3=jQuery('.timepicker');if(_container_3.length>0){loadScript(plugin_path+'timepicki/timepicki.min.js',function(){if(jQuery().timepicki){_container_3.timepicki();}});}var
_container_4=jQuery('.colorpicker');if(_container_4.length>0){loadScript(plugin_path+'spectrum/spectrum.min.js',function(){if(jQuery().spectrum){_container_4.each(function(){var
_t=jQuery(this),_preferredFormat=_t.attr('data-format')||"hex",_palletteOnly=_t.attr('data-palletteOnly')||"false",_fullPicker=_t.attr('data-fullpicker')||"false",_allowEmpty=_t.attr('data-allowEmpty')||false;_flat=_t.attr('data-flat')||false;if(_palletteOnly=="true"||_fullPicker=="true"){var
_palette=[["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]];}else{_palette=null;}if(_t.attr('data-defaultColor')){_color=_t.attr('data-defaultColor');}else{_color="#ff0000";}if(!_t.attr('data-defaultColor')&&_allowEmpty=="true"){_color=null;}_t.spectrum({showPaletteOnly:_palletteOnly=="true"?true:false,togglePaletteOnly:_palletteOnly=="true"?true:false,flat:_flat=="true"?true:false,showInitial:_allowEmpty=="true"?true:false,showInput:_allowEmpty=="true"?true:false,allowEmpty:_allowEmpty=="true"?true:false,chooseText:_t.attr('data-chooseText')||"Coose",cancelText:_t.attr('data-cancelText')||"Cancel",color:_color,showInput:true,showPalette:true,preferredFormat:_preferredFormat,showAlpha:_preferredFormat=="rgb"?true:false,palette:_palette});});}});}}function
_editors(){var
_container_1=jQuery('textarea.summernote');if(_container_1.length>0){loadScript(plugin_path+'editor.summernote/summernote.min.js',function(){if(jQuery().summernote){_container_1.each(function(){var
_lang=jQuery(this).attr('data-lang')||'en-US';if(_lang!='en-US'){alert(_lang);loadScript(plugin_path+'editor.summernote/lang/summernote-'+_lang+'.js');}jQuery(this).summernote({height:jQuery(this).attr('data-height')||200,lang:jQuery(this).attr('data-lang')||'en-US',toolbar:[['style',['style']],['fontsize',['fontsize']],['style',['bold','italic','underline','strikethrough','clear']],['color',['color']],['para',['ul','ol','paragraph']],['table',['table']],['media',['link','picture','video']],['misc',['codeview','fullscreen','help']]]});});}});}var
_container_2=jQuery('textarea.markdown');if(_container_2.length>0){loadScript(plugin_path+'editor.markdown/js/bootstrap-markdown.min.js',function(){if(jQuery().markdown){_container_2.each(function(){var
_t=jQuery(this);var
_lang=_t.attr('data-lang')||'en';if(_lang!='en'){loadScript(plugin_path+'editor.markdown/locale/bootstrap-markdown.'+_lang+'.js');}jQuery(this).markdown({autofocus:_t.attr('data-autofocus')=="true"?true:false,savable:_t.attr('data-savable')=="true"?true:false,height:_t.attr('data-height')||'inherit',language:_lang=='en'?null:_lang});});}});}}function
_pajinate(){var
_container=jQuery('div.pajinate');if(_container.length>0){loadScript(plugin_path+'pajinate/jquery.pajinate.bootstrap.min.js',function(){if(jQuery().pajinate){_container.each(function(){var
_t=jQuery(this),_perPage=_t.attr('data-pajinante-items-per-page')||8;_numLinks=_t.attr('data-pajinante-num-links')||5;_t.pajinate({items_per_page:parseInt(_perPage),num_page_links_to_display:parseInt(_numLinks),item_container_id:_t.attr('data-pajinate-container')||'.pajinate-container',nav_panel_id:'.pajinate-nav
ul',show_first_last:false,wrap_around:true,abort_on_small_lists:true,start_page:0,nav_label_prev:'&laquo;',nav_label_next:'&raquo;'});});}});}}function
_infiniteScroll(){var
_container=jQuery(".infinite-scroll");if(_container.length>0){loadScript(plugin_path+'infinite-scroll/jquery.infinitescroll.min.js',function(){_navSelector=_container.attr('data-nextSelector')||"#inf-load-nex",_itemSelector=_container.attr('data-itemSelector')||".item",_nextSelector=_navSelector+"
a";_container.infinitescroll({loading:{finishedMsg:'<i class="fa
fa-check"></i>',msgText:'<i class="fa fa-refresh
fa-spin"></i>',img:"data:image/gif;base64,R0lGODlhGAAYAPUAABQSFCwuLBwaHAwKDKyurGxqbNze3CwqLCQmJLS2tOzu7OTi5JyenBweHBQWFJyanPz+/HRydLSytFxeXPz6/ExOTKSmpFRSVHR2dAwODAQCBOzq7PTy9ISChPT29IyKjIyOjISGhOTm5GRiZJSWlJSSlFRWVMTCxNza3ExKTNTS1KyqrHx6fGRmZKSipMzOzMTGxDQyNDw+PAQGBDQ2NERCRFxaXMzKzGxubDw6PCQiJLy+vERGRLy6vHx+fNTW1CH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAAACwAAAAAGAAYAEAGqECAcAhoRAiojQJFiAiI0Kh0qOsZOhqhDMK9ZadgAI0WBmhAXAhFVm5HbZR0aTYdsFpSkwqjo5sRLAtpIjxuUzZpECmGjI1QA4JcKH5lGVICDHFpGyoqGx4uDWENFh4iKjcbiR4MT1ItLJSPJWkUNo9uAyhpBpaOGjdpOY7ExcYaIQs9OsUpibfENZoQIF9gY1EpqlwiLAh+M4AqJmUCOBJJGz8EOKJRQQAh+QQJBQABACwAAAAAGAAYAAAGp8CAcBhoRBILDgdFKAiI0KHAB5rUZBUWDALxMJ5R4SCmiWpoJ67iEm4TZx0upOCuB1jyir2tuXE3DnthE3IlglENchwDh0QDG3ITjUQ7ciGTQxFybJgBGkcYGhoYPaGdARdyOKchcjunhH8znQAccmCYJZGnDpAQN2WdFXI+pwEFch2znRe+MDTBbzGMbQIPHlwwLBcyNSMgLIF2Ai0WKAocBhI4uERBACH5BAkFACwALAAAAAAYABgAAAaoQJZwyNIEJiAJCpWICIjQKFGD6Gw8D4d0C3UQIJsKd1wsQSgFMldjgUAu6q1jA27EpRg34x5FUCAeT3xDAx5uBQAMJyZ8GRxuFiRuFAF3B24QKguYE3cpmAubbil3I5gGKpgIdwF/EA9tgAN8JicMGQVuHLODQgKGEKu9QgxuGMNCDQpgAMgsF38rGs4Ffx/TyBUiECtayAIPHgohAdi9DRFKTCAj5VJBACH5BAkFAAAALAAAAAAYABgAAAa0QIBwSAQMaphHoVFsOoezlsEleFqJDsnmcu1qLJBW9zpQUSpjqwyycQgPBAIiLYRBGIDMAgJRaegREB4CE3wQFAN0NHwRYHwwdAANfBIqhlx0AXwGCnx+kQV8Cp0QBZEaL3wbBnwBkReGKgl8TGkadnwugRA0dBkUhhMNHhARdBqWEAsZAAwQkHQIEgQHQgIbFDKRTRUUL4nbRC0QFjPhRBcbEm7nQg0uBi3g7Q0RDxEyzFdBACH5BAkFAAgALAAAAAAYABgAAAaxQIRwSCwKHMWkssgLCZbQYmNnUgpMh6gQoIoUZQqIh6ZFHDjV7QLCLpURIcUTAWKzvWUBhYFwcOwnA28IOx4CBXY3AIMIJRAFEmwoSIwYEAQGbDWMQiwQBh4QKpxCjhyhbqQqEByZLKQ1bAaRr4wOKGwSiKlvADd2BQIeJ4MDJ3YcSA8UlFqWdiBCAgohbyR2C4tCJhwBZTQUEAo5RQUqzVAHJuhDJjsNpFIhKfFG7FFBACH5BAkFAAAALAAAAQAYABYAAAa3QIBQmEnlNMOkcgmoGSCQEJNIY048UIhhKqS1lClKFtLjClmmoWAzvunMgJmqIWRkDTYkHIBxARpiECUDe0MIHg0RUCV6hQAaGxESEAszjkkvEk8sl0kqKgoQCJ1CGiIKChuNlwcQCigvpGcQKBKxpAMLEBI4IpaXGiVQODoeb44DwhAUAgAuGIUaEyhZDEINKr9cCDdjG81CJpxmO2MUPEojVVy6UBQ2TDGEUyFQCzKyjzk880NBACH5BAkFAAEALAAAAAAYABgAAAazwIBwGABMOhcNcckUOkoKiJTVrAYqG6k2YWXiKFptpEs0gbWbXmFmHQwbWcjNJlCSYwIhQ9qxk4UaVAIeEB1/TCANBRAnfodCExEEEDSPSzUJKCeWSzQGHBicRBUcHimiQywKC5WoGjAoCTKoATQUBBETqDMnEAUNH6ghEBQOAT6OZBo+UgxCAjF/Mw0TN1IKeUJuVTMFPSJhEBePGOHEBZYJ4SI8nCxaHB/GnBoXISYATUEAIfkECQUAKgAsAAAAABgAGAAABqpAlXCoErQsr4WBlCE6nQ2XB0Ktup5Yk6LKhZywzgKlyplSKRfwsELdYA6DDCI1OaiFgg2EALirHxAfGn5gDR4rg4RPGhEbDopYAQkdkFgjBnaVTiEoiZpDCQmfRBooIKNDBwYjqEIdCQGtDgoFnpoaEh4NqBogEA+oDisQjn4xExUIAAMILCIQFBV+JmNUHh7VEAWEMF1VCmmELt4UDAKQGSUoCy8WI+dPQQAh+QQJBQAJACwAAAAAGAAYAAAGrMCEcJhoRCQoxUblmmSI0KGA4YFYr9bFIUqsbLBgK4ErLFAosEiuESi8sBKyifKqRTWXk+el4zYULgNkQhkaZBYShoOLOigAi5ARE5CQDzOUixGYi3abXANPnlE5olyapUQzD6hELaesDgYNrAkzEi5kMwOKnxYbs1EIKh4wF5dQNSoQF2QSWC8FATo0GDcUHi2DBGFgGymLBwvcEBQPDpQZNi4qGxsoEjgCXEEAIfkEBQUACAAsAAAAABgAGAAABqZAhHCIEBQIBg/HICk4iNCh4OGBWK9WTgkQHZoUlFMJwyKpsJCFrBvhhJ7QGgqrgA9tr0BX6HhhTUQNO3Z7ADBWFAdEIQJ7UAMRJTREAjyOl0MNmJucnZ6foKGio6SdmqQphDljA5wCIUQBVRAwXJcAO6dCJlg3tl0BPxdQAgpYKDVRAh8cOF05C2g/JSw+JTAeCsOFJRxoVx4PjZgORygcHCgETl1BADs=",speed:'normal'},nextSelector:_nextSelector,navSelector:_navSelector,itemSelector:_itemSelector,behavior:'',state:{isDone:false}},function(newElements){Init(true);if(jQuery().isotope){_container.isotope('appended',jQuery(newElements));setTimeout(function(){_container.isotope('layout');},2000);}});});}}function
_zoom(){var
_container=jQuery('figure.zoom');if(_container.length>0){loadScript(plugin_path+'image.zoom/jquery.zoom.min.js',function(){if(jQuery().zoom){_container.each(function(){var
_t=jQuery(this),_mode=_t.attr('data-mode'),_id=_t.attr('id');if(_mode=='grab'){_t.zoom({on:'grab'});}else
if(_mode=='click'){_t.zoom({on:'click'});}else
if(_mode=='toggle'){_t.zoom({on:'toggle'});}else{_t.zoom();}if(_id){jQuery('.zoom-more[data-for='+_id+']
a').bind("click",function(e){e.preventDefault();var
_href=jQuery(this).attr('href');if(_href!="#"){jQuery('.zoom-more[data-for='+_id+']
a').removeClass('active');jQuery(this).addClass('active');jQuery('figure#'+_id+'>.lightbox').attr('href',_href);jQuery('figure#'+_id+'>img').fadeOut(0,function(){jQuery('figure#'+_id+'>img').attr('src',_href);}).fadeIn(500);}});}});}});}}function
_autosuggest(){_container=jQuery('div.autosuggest');if(_container.length>0){loadScript(plugin_path+'typeahead.bundle.js',function(){if(jQuery().typeahead){_container.each(function(){var
_t=jQuery(this),_minLength=_t.attr('data-minLength')||1,_qryURL=_t.attr('data-queryURL'),_limit=_t.attr('data-limit')||10,_autoload=_t.attr('data-autoload');if(_autoload=="false"){return
false;}var _typeahead=new
Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace('value'),queryTokenizer:Bloodhound.tokenizers.whitespace,limit:_limit,remote:{url:_qryURL+'%QUERY',},});jQuery('.typeahead',_t).typeahead({limit:_limit,hint:_t.attr('data-hint')=="false"?false:true,highlight:_t.attr('data-highlight')=="false"?false:true,minLength:parseInt(_minLength),cache:false,},{name:'_typeahead',source:_typeahead});});}});}}function
_stepper(){var
_container=jQuery('input.stepper');if(_container.length>0){loadScript(plugin_path+'form.stepper/jquery.stepper.min.js',function(){if(jQuery().stepper){jQuery(_container).each(function(){var
_t=jQuery(this),_min=_t.attr('min')||null,_max=_t.attr('max')||null;_t.stepper({limit:[_min,_max],floatPrecission:_t.attr('data-floatPrecission')||2,wheel_step:_t.attr('data-wheelstep')||0.1,arrow_step:_t.attr('data-arrowstep')||0.2,allowWheel:_t.attr('data-mousescrool')=="false"?false:true,UI:_t.attr('data-UI')=="false"?false:true,type:_t.attr('data-type')||"float",preventWheelAcceleration:_t.attr('data-preventWheelAcceleration')=="false"?false:true,incrementButton:_t.attr('data-incrementButton')||"&blacktriangle;",decrementButton:_t.attr('data-decrementButton')||"&blacktriangledown;",onStep:null,onWheel:null,onArrow:null,onButton:null,onKeyUp:null});});}});}}function
_slimScroll(){var
_container=jQuery('.slimscroll');if(_container.length>0){loadScript(plugin_path+'slimscroll/jquery.slimscroll.min.js',function(){if(jQuery().slimScroll){jQuery('.slimscroll').each(function(){var
height;if(jQuery(this).attr("data-height")){height=jQuery(this).attr("data-height");}else{height=jQuery(this).height();}jQuery(this).slimScroll({size:jQuery(this).attr("data-size")||'5px',opacity:jQuery(this).attr("data-opacity")||.6,position:jQuery(this).attr("data-position")||'right',allowPageScroll:false,disableFadeOut:false,railVisible:true,railColor:jQuery(this).attr("data-railColor")||'#222',railOpacity:jQuery(this).attr("data-railOpacity")||0.05,alwaysVisible:(jQuery(this).attr("data-alwaysVisible")!="false"?true:false),railVisible:(jQuery(this).attr("data-railVisible")!="false"?true:false),color:jQuery(this).attr("data-color")||'#333',wrapperClass:jQuery(this).attr("data-wrapper-class")||'slimScrollDiv',railColor:jQuery(this).attr("data-railColor")||'#eaeaea',height:height});if(jQuery(this).attr('disable-body-scroll')=='true'){jQuery(this).bind('mousewheel
DOMMouseScroll',function(e){var
scrollTo=null;if(e.type=='mousewheel'){scrollTo=(e.originalEvent.wheelDelta*-1);}else
if(e.type=='DOMMouseScroll'){scrollTo=40*e.originalEvent.detail;}if(scrollTo){e.preventDefault();jQuery(this).scrollTop(scrollTo+jQuery(this).scrollTop());}});}});}});}}function
_modalAutoLoad(){if(jQuery("div.modal").length>0){jQuery("div.modal").each(function(){var
_t=jQuery(this),_id=_t.attr('id'),_autostart=_t.attr('data-autoload')||false;if(_id!=''){if(localStorage.getItem(_id)=='hidden'){_autostart='false';}}if(_autostart=='true'){jQuery(window).load(function(){var
_delay=_t.attr('data-autoload-delay')||1000;setTimeout(function(){_t.modal('toggle');},parseInt(_delay));});}jQuery("input.loadModalHide",this).bind("click",function(){var
_tt=jQuery(this);if(_tt.is(":checked")){localStorage.setItem(_id,'hidden');console.log('[Modal
Autoload #'+_id+'] Added to
localStorage');}else{localStorage.removeItem(_id);console.log('[Modal
Autoload #'+_id+'] Removed from localStorage');}});});}}function
_bgimage(){var
data_background=jQuery('body').attr('data-background')||'';if(data_background!=''){loadScript(plugin_path+'jquery.backstretch.min.js',function(){if(data_background){jQuery.backstretch(data_background);jQuery('body').addClass('transparent');}});}}function
_widget_flickr(){var
_container=jQuery('.widget-flickr');if(_container.length>0){loadScript(plugin_path+'widget.jflickr/jflickrfeed.min.js',function(){if(jQuery().jflickrfeed){if(jQuery('.widget-flickr')){_container.each(function(){var
_t=jQuery(this),_id=_t.attr('data-id'),_limit=_t.attr('data-limit')||14;_t.jflickrfeed({limit:parseInt(_limit),qstrings:{id:_id},itemTemplate:'<li>'+'<a
href="{{image}}" title="{{title}}">'+'<img src="{{image_s}}"
alt="{{title}}" width="63" height="63"
/>'+'</a>'+'</li>'},function(data){_lightbox();});});}}});}}function
_widget_twitter(){var
_container=jQuery(".widget-twitter");if(_container.length>0){loadScript(plugin_path+'widget.twittie/twittie.min.js',function(){if(jQuery().twittie){_container.each(function(){var
_t=jQuery(this),_php=_t.attr('data-php'),_usr=_t.attr('data-username'),_lmt=_t.attr('data-limit')||3,_url=_php+"?username="+_usr+"&limit="+_lmt;jQuery.getJSON(_url,function(tweets){_t.html(format_twitter(tweets));});});}});}}function
format_twitter(twitt){var statusHTML=[];for(var
i=0;i<twitt.length;i++){var username=twitt[i].user.screen_name;var
status=twitt[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(url){return'<a
href="'+url+'"
target="_blank">'+url+'</a>';}).replace(/\B@([_a-z0-9]+)/ig,function(reply){return
reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'"
target="_blank">'+reply.substring(1)+'</a>';});statusHTML.push('<li><i
class="fa fa-twitter"></i><span>'+status+'</span><small><a
href="http://twitter.com/'+username+'/statuses/'+twitt[i].id_str+'"
target="_blank">'+relative_time(twitt[i].created_at)+'</a></small></li>');}return
statusHTML.join('');}function relative_time(time_value){var
values=time_value.split("
"),parsed_date=Date.parse(time_value),relative_to=(arguments.length>1)?arguments[1]:new
Date(),delta=parseInt((relative_to.getTime()-parsed_date)/1000);time_value=values[1]+"
"+values[2]+", "+values[5]+"
"+values[3];delta=delta+(relative_to.getTimezoneOffset()*60);if(delta<60){return'less
than a minute ago';}else if(delta<120){return'about a minute ago';}else
if(delta<(60*60)){return(parseInt(delta/60)).toString()+' minutes
ago';}else if(delta<(120*60)){return'about an hour ago';}else
if(delta<(24*60*60)){return'about '+(parseInt(delta/3600)).toString()+'
hours ago';}else if(delta<(48*60*60)){return'1 day
ago';}else{return(parseInt(delta/86400)).toString()+' days
ago';}}function _widget_facebook(){var
_container_1=jQuery('div.fb-like');var
_container_2=jQuery('div.fb-share-button');if(_container_1.length>0||_container_2.length>0){jQuery('body').append('<div
id="fb-root"></div>');(function(d,s,id){var
js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));}}function
_widget_dribbble(){var
_container=jQuery(".widget-dribbble");if(_container.length>0){loadScript(plugin_path+'widget.dribbble/jribbble.min.js',function(){var
_token=_container.attr('data-token')||'f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4',_target=_container.attr('data-target')||'_blank',_shots=_container.attr('data-shots')||2046896;jQuery.jribbble.setToken(_token);jQuery.jribbble.shots(_shots).rebounds().then(function(res){var
html=[];res.forEach(function(shot){html.push('<li>');html.push('<a
href="'+shot.html_url+'" target="'+_target+'">');html.push('<img
class="img-responsive" src="'+shot.images.normal+'"
alt="image">');html.push('</a></li>');});_container.html(html.join(''));});});}}function
_widget_media(){var
_container=jQuery(".widget-media");if(_container.length>0){loadScript(plugin_path+'widget.mediaelementbuild/mediaelement-and-player.min.js',function(){});}}function
wheel(e){e.preventDefault();}function
disable_scroll(){if(window.addEventListener){window.addEventListener('DOMMouseScroll',wheel,false);}window.onmousewheel=document.onmousewheel=wheel;}function
enable_scroll(){if(window.removeEventListener){window.removeEventListener('DOMMouseScroll',wheel,false);}window.onmousewheel=document.onmousewheel=document.onkeydown=null;}function
enable_overlay(){jQuery("span.global-overlay").remove();jQuery('body').append('<span
class="global-overlay"></span>');}function
disable_overlay(){jQuery("span.global-overlay").remove();}(function($){$.fn.countTo=function(options){options=options||{};return
jQuery(this).each(function(){var
settings=jQuery.extend({},$.fn.countTo.defaults,{from:jQuery(this).data('from'),to:jQuery(this).data('to'),speed:jQuery(this).data('speed'),refreshInterval:jQuery(this).data('refresh-interval'),decimals:jQuery(this).data('decimals')},options);var
loops=Math.ceil(settings.speed/settings.refreshInterval),increment=(settings.to-settings.from)/loops;var
self=this,$self=jQuery(this),loopCount=0,value=settings.from,data=$self.data('countTo')||{};$self.data('countTo',data);if(data.interval){clearInterval(data.interval);}data.interval=setInterval(updateTimer,settings.refreshInterval);render(value);function
updateTimer(){value+=increment;loopCount++;render(value);if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(self,value);}if(loopCount>=loops){$self.removeData('countTo');clearInterval(data.interval);value=settings.to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(self,value);}}}function
render(value){var
formattedValue=settings.formatter.call(self,value,settings);$self.html(formattedValue);}});};$.fn.countTo.defaults={from:0,to:0,speed:1000,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};function
formatter(value,settings){return
value.toFixed(settings.decimals);}}(jQuery));(function($){$.extend({browserDetect:function(){var
u=navigator.userAgent,ua=u.toLowerCase(),is=function(t){return
ua.indexOf(t)>-1;},g='gecko',w='webkit',s='safari',o='opera',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie
ie'+parseFloat(navigator.appVersion.split("MSIE")[1])):is('firefox/2')?g+'
ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3')?g+'
ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?'
'+o+RegExp.jQuery1:(/opera(\s|\/)(\d+)/.test(ua)?'
'+o+RegExp.jQuery2:'')):is('konqueror')?'konqueror':is('chrome')?w+'
chrome':is('iron')?w+' iron':is('applewebkit/')?w+'
'+s+(/version\/(\d+)/.test(ua)?'
'+s+RegExp.jQuery1:''):is('mozilla/')?g:'',is('j2me')?'mobile':is('iphone')?'iphone':is('ipod')?'ipod':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win':is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js'];c=b.join('
');h.className+=' '+c;var
isIE11=!(window.ActiveXObject)&&"ActiveXObject"in
window;if(isIE11){jQuery('html').removeClass('gecko').addClass('ie
ie11');return;}}});})(jQuery);(function(a){a.fn.appear=function(d,b){var
c=a.extend({data:undefined,one:true,accX:0,accY:0},b);return
this.each(function(){var
g=a(this);g.appeared=false;if(!d){g.trigger("appear",c.data);return}var
f=a(window);var
e=function(){if(!g.is(":visible")){g.appeared=false;return}var
r=f.scrollLeft();var q=f.scrollTop();var l=g.offset();var s=l.left;var
p=l.top;var i=c.accX;var t=c.accY;var k=g.height();var j=f.height();var
n=g.width();var
m=f.width();if(p+k+t>=q&&p<=q+j+t&&s+n+i>=r&&s<=r+m+i){if(!g.appeared){g.trigger("appear",c.data)}}else{g.appeared=false}};var
h=function(){g.appeared=true;if(c.one){f.unbind("scroll",e);var
j=a.inArray(e,a.fn.appear.checks);if(j>=0){a.fn.appear.checks.splice(j,1)}}d.apply(this,arguments)};if(c.one){g.one("appear",c.data,h)}else{g.bind("appear",c.data,h)}f.scroll(e);a.fn.appear.checks.push(e);(e)()})};a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var
b=a.fn.appear.checks.length;if(b>0){while(b--){(a.fn.appear.checks[b])()}}},run:function(){if(a.fn.appear.timeout){clearTimeout(a.fn.appear.timeout)}a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}});a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(c,d){var
b=a.fn[d];if(b){a.fn[d]=function(){var
e=b.apply(this,arguments);a.fn.appear.run();return
e}}})})(jQuery);(function(a){var b=a(window);var
c=b.height();b.resize(function(){c=b.height()});a.fn.parallax=function(e,d,g){var
i=a(this);var j;var h;var f=0;function
k(){i.each(function(){h=i.offset().top});if(g){j=function(m){return
m.outerHeight(true)}}else{j=function(m){return
m.height()}}if(arguments.length<1||e===null){e="50%"}if(arguments.length<2||d===null){d=0.5}if(arguments.length<3||g===null){g=true}var
l=b.scrollTop();i.each(function(){var n=a(this);var o=n.offset().top;var
m=j(n);if(o+m<l||o>l+c){return}i.css("backgroundPosition",e+"
"+Math.round((h-l)*d)+"px")})}b.bind("scroll",k).resize(k);k()}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return
jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return
h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return
h/2*f*f+a}return-h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return
h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return
h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return
h/2*f*f*f+a}return
h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return
h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return-h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return
h/2*f*f*f*f+a}return-h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return
h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return
h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return
h/2*f*f*f*f*f+a}return
h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return-h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return
h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return-h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return
a}if(f==g){return a+h}if((f/=g/2)<1){return
h/2*Math.pow(2,10*(f-1))+a}return
h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return-h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return
h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return-h/2*(Math.sqrt(1-f*f)-1)+a}return
h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var
i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return
e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var
i=j/(2*Math.PI)*Math.asin(l/g)}return-(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var
i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return
e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var
i=j/(2*Math.PI)*Math.asin(l/g)}return
g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var
i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return
e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var
i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return-0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return
g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return
i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return
i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return
i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return
i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return
h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return
h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return
h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return
h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return
h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return
jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return
jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});(function(){var a,b,c,d,e,f=function(a,b){return
function(){return
a.apply(b,arguments)}},g=[].indexOf||function(a){for(var
b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return
b;return-1};b=function(){function a(){}return
a.prototype.extend=function(a,b){var c,d;for(c in
b)d=b[c],null==a[c]&&(a[c]=d);return
a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera
Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return
null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return
null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete
a[b]},a.prototype.innerHeight=function(){return"innerHeight"in
window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function
a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var
b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return
this.values[b]},a.prototype.set=function(a,b){var
c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return
void(this.values[c]=b);return
this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function
a(){"undefined"!=typeof
console&&null!==console&&console.warn("MutationObserver is not supported
by your browser."),"undefined"!=typeof
console&&null!==console&&console.warn("WOW.js cannot detect dom
mutations, please call .sync() after loading new content.")}return
a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return
this.getPropertyValue=function(b){var
c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return
b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void
0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function
e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new
c}return
e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var
a;return
this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var
b,c,d,e;if(this.stopped=!1,this.boxes=function(){var
a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return
e}.call(this),this.all=function(){var
a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return
e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return
this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new
a(function(a){return function(b){var
c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var
a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return
f}.call(a));return
g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void
0},e.prototype.stop=function(){return
this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void
0},e.prototype.sync=function(){return
a.notSupported?this.doSync(this.element):void
0},e.prototype.doSync=function(a){var
b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void
0);return f}},e.prototype.show=function(a){return
this.applyStyle(a),a.className=""+a.className+"
"+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void
0},e.prototype.applyStyle=function(a,b){var c,d,e;return
d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return
function(){return
f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in
window?function(a){return
window.requestAnimationFrame(a)}:function(a){return
a()}}(),e.prototype.resetStyle=function(){var
a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return
e},e.prototype.customStyle=function(a,b,c,d,e){return
b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var
c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var
b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return
h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var
c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return
c},e.prototype.animationName=function(a){var
b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return
this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return
this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return
this.scrolled=!0},e.prototype.scrollCallback=function(){var
a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var
b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return
e}.call(this),this.boxes.length||this.config.live)?void
0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void
0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return
b},e.prototype.isVisible=function(a){var b,c,d,e,f;return
c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return
null!=this._util?this._util:this._util=new
b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;window.Modernizr=function(a,b,c){function
A(a){j.cssText=a}function B(a,b){return
A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function
D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var
e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function
F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return
d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function
G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+"
")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+"
"+p.join(d+" ")+d).split(" "),F(e,b,c))}var
d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="
-webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split("
"),p=n.toLowerCase().split("
"),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var
f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return
f=["&#173;",'<style
id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(){function
d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return
f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var
a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return
d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return
y.call(a,b)}:z=function(a,b){return b in
a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var
c=this;if(typeof c!="function")throw new TypeError;var
d=u.call(arguments,1),e=function(){if(this instanceof e){var
a=function(){};a.prototype=c.prototype;var f=new
a,g=c.apply(f,d.concat(u.call(arguments)));return
Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return
e}),q.touch=function(){var c;return"ontouchstart"in
a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media
(",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var
a=!!G("perspective");return a&&"webkitPerspective"in g.style&&w("@media
(transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return
G("transition")},q.video=function(){var
a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new
Boolean(c),c.ogg=a.canPlayType('video/ogg;
codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4;
codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm;
codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H
in
q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return
e.addTest=function(a,b){if(typeof a=="object")for(var d in
a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return
e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+="
"+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function
l(a,b){var
c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return
c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function
m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function
n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function
o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var
g;return
d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function
p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var
d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return
d}function
q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return
s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return
function(){var
n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return
b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return
n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return
s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var
c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var
a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in
a,k=a.childNodes.length==1||function(){b.createElement("a");var
a=b.createDocumentFragment();return typeof
a.cloneNode=="undefined"||typeof
a.createDocumentFragment=="undefined"||typeof
a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var
s={elements:d.elements||"abbr article aside audio bdi canvas data
datalist details dialog figcaption figure footer header hgroup main mark
meter nav output progress section summary template time
video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.hasEvent=x,e.testProp=function(a){return
E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?"
js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function
d(a){return"[object Function]"==o.call(a)}function
e(a){return"string"==typeof a}function f(){}function
g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function
h(){var
a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function
i(a,c,d,e,f,i,j){function
k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var
d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var
j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function
j(a,b,c,d,f){return
q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function
k(){var a=B;return a.loader={load:j,i:0},a}var
l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in
l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object
Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object
Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return
b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var
a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return
c}function g(a,e,f,g,h){var
i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function
h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var
a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else
if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in
a)a.hasOwnProperty(c)&&b++;return
b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var
a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return
function(){var
b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var
h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var
i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else
if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else
Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var
k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in
d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var
e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j
in
d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
//material button animation $('.GF-btn').mousedown(function (e) { var
target = e.target; var rect = target.getBoundingClientRect(); var ripple
= target.querySelector('.ripple'); $(ripple).remove(); ripple =
document.createElement('span'); ripple.className = 'ripple';
ripple.style.height = ripple.style.width = Math.max(rect.width,
rect.height) + 'px'; target.appendChild(ripple); var top = e.pageY -
rect.top - ripple.offsetHeight / 2 - document.body.scrollTop; var left =
e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
ripple.style.top = top + 'px'; ripple.style.left = left + 'px'; return
false; }); //GF inputs $('.GF-input-text input').focusout(function(){
var text_val = $(this).val(); if(text_val == '') {
$(this).removeClass('has-value'); }else { $(this).addClass('has-value');
} }); /*!* jQuery mobileMenu v2.0.8 * @Copyright (C) 2012-2014 Chris
Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu) * you can
change the resolution with: mobileScreenWidth:"1920" **/
!function($){"use strict";$.fn.mobilemenu=function(e){var
n={mobileMenuTarget:jQuery(this),mobileMenuContainer:"body",mobileMenuClose:"X",mobileMenuCloseSize:"18px",mobileMenuOpen:"<span
/><span /><span
/>",mobileRevealPosition:"right",mobileRevealPositionDistance:"0",mobileRevealColour:"",mobileScreenWidth:"1920",mobileNavPush:"",mobileShowChildren:!0,mobileExpandableChildren:!0,mobileExpand:"+",mobileContract:"-",mobileRemoveAttrs:!1,onePage:!1,mobileDisplay:"block",removeElements:""};e=$.extend(n,e);var
a=window.innerWidth||document.documentElement.clientWidth;return
this.each(function(){var
n=e.mobileMenuTarget,t=e.mobileMenuContainer,r=e.mobileMenuClose,i=e.mobileMenuCloseSize,s=e.mobileMenuOpen,u=e.mobileRevealPosition,m=e.mobileRevealPositionDistance,l=e.mobileRevealColour,o=e.mobileScreenWidth,c=e.mobileNavPush,v=".mobilemenu-reveal",h=e.mobileShowChildren,d=e.mobileExpandableChildren,y=e.mobileExpand,j=e.mobileContract,Q=e.mobileRemoveAttrs,f=e.onePage,g=e.mobileDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows
Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE
8/i)||navigator.userAgent.match(/MSIE
7/i))&&jQuery("html").css("overflow-y","scroll");var
w="",x=function(){if("center"===u){var
e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".mobilemenu-reveal").animate({left:n}):jQuery(".mobilemenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var
M="",P=function(){M.html(jQuery(M).is(".mobilemenu-reveal.mobileclose")?r:s)},W=function(){jQuery(".mobile-bar,.mobile-push").remove(),jQuery(t).removeClass("mobile-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mobile-remove")},b=function(){var
e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mobile-remove"),E=!0,jQuery(t).addClass("mobile-container"),jQuery(".mobile-container").prepend('<div
class="mobile-bar"><a href="#nav" class="mobilemenu-reveal"
style="'+e+'">Show Navigation</a><nav
class="mobile-nav"></nav></div>');var
r=jQuery(n).html();jQuery(".mobile-nav").html(r),Q&&jQuery("nav.mobile-nav
ul, nav.mobile-nav ul
*").each(function(){jQuery(this).is(".mobile-remove")?jQuery(this).attr("class","mobile-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div
class="mobile-push"
/>'),jQuery(".mobile-push").css("margin-top",c),jQuery(n).hide(),jQuery(".mobilemenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mobile-nav
ul").hide(),h?d?(jQuery(".mobile-nav ul
ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a
class="mobile-expand" href="#" style="font-size:
'+i+'">'+y+"</a>")}),jQuery(".mobile-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mobile-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mobile-clicked")})):jQuery(".mobile-nav
ul ul").show():jQuery(".mobile-nav ul ul").hide(),jQuery(".mobile-nav ul
li").last().addClass("mobile-last"),M.removeClass("mobileclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mobile-nav
ul:first").slideDown(),A=!0):(jQuery(".mobile-nav
ul:first").slideUp(),A=!1),M.toggleClass("mobileclose"),P(),jQuery(p).addClass("mobile-remove")}),f&&jQuery(".mobile-nav
ul > li > a:first-child").on("click",function(){jQuery(".mobile-nav
ul:first").slideUp(),A=!1,jQuery(M).toggleClass("mobileclose").html(s)})}else
W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);
//REGULAR BUTTONS !function(){function
e(e,r){return[].slice.call((r||document).querySelectorAll(e))}if(window.addEventListener){var
r=window.StyleFix={link:function(e){try{if("stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(t){return}var
n,i=e.href||e.getAttribute("data-href"),a=i.replace(/[^\/]+$/,""),o=(/^[a-z]{3,10}:/.exec(a)||[""])[0],s=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(a)||[""])[0],l=/^([^?]*)\??/.exec(i)[1],u=e.parentNode,p=new
XMLHttpRequest;p.onreadystatechange=function(){4===p.readyState&&n()},n=function(){var
t=p.responseText;if(t&&e.parentNode&&(!p.status||p.status<400||p.status>600)){if(t=r.fix(t,!0,e),a){t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,r,t){return/^([a-z]{3,10}:|#)/i.test(t)?e:/^\/\//.test(t)?'url("'+o+t+'")':/^\//.test(t)?'url("'+s+t+'")':/^\?/.test(t)?'url("'+l+t+'")':'url("'+a+t+'")'});var
n=a.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1")}var
i=document.createElement("style");i.textContent=t,i.media=e.media,i.disabled=e.disabled,i.setAttribute("data-href",e.getAttribute("href")),u.insertBefore(i,e),u.removeChild(e),i.media=e.media}};try{p.open("GET",i),p.send(null)}catch(t){"undefined"!=typeof
XDomainRequest&&(p=new
XDomainRequest,p.onerror=p.onprogress=function(){},p.onload=n,p.open("GET",i),p.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var
t=e.disabled;e.textContent=r.fix(e.textContent,!0,e),e.disabled=t}},styleAttribute:function(e){var
t=e.getAttribute("style");t=r.fix(t,!1,e),e.setAttribute("style",t)},process:function(){e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,t){(r.fixers=r.fixers||[]).splice(void
0===t?r.fixers.length:t,0,e)},fix:function(e,t,n){for(var
i=0;i<r.fixers.length;i++)e=r.fixers[i](e,t,n)||e;return
e},camelCase:function(e){return
e.replace(/-([a-z])/g,function(e,r){return
r.toUpperCase()}).replace("-","")},deCamelCase:function(e){return
e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};!function(){setTimeout(function(){},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(e){function
r(e,r,n,i,a){if(e=t[e],e.length){var
o=RegExp(r+"("+e.join("|")+")"+n,"gi");a=a.replace(o,i)}return
a}if(window.StyleFix&&window.getComputedStyle){var
t=window.PrefixFree={prefixCSS:function(e,n){var
i=t.prefix;if(t.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,r,t,n){return
r+(t||"")+"linear-gradient("+(90-n)+"deg"})),e=r("functions","(\\s|:|,)","\\s*\\(","$1"+i+"$2(",e),e=r("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+i+"$2$3",e),e=r("properties","(^|\\{|\\s|;)","\\s*:","$1"+i+"$2:",e),t.properties.length){var
a=RegExp("\\b("+t.properties.join("|")+")(?!:)","gi");e=r("valueProperties","\\b",":(.+?);",function(e){return
e.replace(a,i+"$1")},e)}return
n&&(e=r("selectors","","\\b",t.prefixSelector,e),e=r("atrules","@","\\b","@"+i+"$1",e)),e=e.replace(RegExp("-"+i,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,t.prefix)},property:function(e){return(t.properties.indexOf(e)?t.prefix:"")+e},value:function(e){return
e=r("functions","(^|\\s|,)","\\s*\\(","$1"+t.prefix+"$2(",e),e=r("keywords","(^|\\s)","(\\s|$)","$1"+t.prefix+"$2$3",e)},prefixSelector:function(e){return
e.replace(/^:{1,2}/,function(e){return
e+t.prefix})},prefixProperty:function(e,r){var n=t.prefix+e;return
r?StyleFix.camelCase(n):n}};!function(){var
e={},r=[],n=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,a=function(t){if("-"===t.charAt(0)){r.push(t);var
n=t.split("-"),i=n[1];for(e[i]=++e[i]||1;n.length>3;){n.pop();var
a=n.join("-");o(a)&&-1===r.indexOf(a)&&r.push(a)}}},o=function(e){return
StyleFix.camelCase(e)in i};if(n.length>0)for(var
s=0;s<n.length;s++)a(n[s]);else for(var l in
n)a(StyleFix.deCamelCase(l));var u={uses:0};for(var p in e){var
f=e[p];u.uses<f&&(u={prefix:p,uses:f})}t.prefix="-"+u.prefix+"-",t.Prefix=StyleFix.camelCase(t.prefix),t.properties=[];for(var
s=0;s<r.length;s++){var l=r[s];if(0===l.indexOf(t.prefix)){var
c=l.slice(t.prefix.length);o(c)||t.properties.push(c)}}"Ms"!=t.Prefix||"transform"in
i||"MsTransform"in i||!("msTransform"in
i)||t.properties.push("transform","transform-origin"),t.properties.sort()}(),function(){function
e(e,r){return i[r]="",i[r]=e,!!i[r]}var
r={"linear-gradient":{property:"backgroundImage",params:"red,
teal"},calc:{property:"width",params:"1px +
5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png),
url(b.png),
50%"}};r["repeating-linear-gradient"]=r["repeating-radial-gradient"]=r["radial-gradient"]=r["linear-gradient"];var
n={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};t.functions=[],t.keywords=[];var
i=document.createElement("div").style;for(var a in r){var
o=r[a],s=o.property,l=a+"("+o.params+")";!e(l,s)&&e(t.prefix+l,s)&&t.functions.push(a)}for(var
u in n){var
s=n[u];!e(u,s)&&e(t.prefix+u,s)&&t.keywords.push(u)}}(),function(){function
r(e){return a.textContent=e+"{}",!!a.sheet.cssRules.length}var
n={":read-only":null,":read-write":null,":any-link":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};t.selectors=[],t.atrules=[];var
a=e.appendChild(document.createElement("style"));for(var o in n){var
s=o+(n[o]?"("+n[o]+")":"");!r(s)&&r(t.prefixSelector(s))&&t.selectors.push(o)}for(var
l in i){var s=l+"
"+(i[l]||"");!r("@"+s)&&r("@"+t.prefix+s)&&t.atrules.push(l)}e.removeChild(a)}(),t.valueProperties=["transition","transition-property"],e.className+="
"+t.prefix,StyleFix.register(t.prefixCSS)}}(document.documentElement);
/*! WOW - v1.1.2 - 2015-04-07 * Copyright (c) 2015 Matthieu Aussaguel;
Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return
function(){return
a.apply(b,arguments)}},g=[].indexOf||function(a){for(var
b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return
b;return-1};b=function(){function a(){}return
a.prototype.extend=function(a,b){var c,d;for(c in
b)d=b[c],null==a[c]&&(a[c]=d);return
a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera
Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return
null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return
null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b
in(null!=a)?a["on"+b]():void
0},a.prototype.addEvent=function(a,b,c){return
null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return
null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete
a[b]},a.prototype.innerHeight=function(){return"innerHeight"in
window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function
a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var
b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return
this.values[b]},a.prototype.set=function(a,b){var
c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return
void(this.values[c]=b);return
this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function
a(){"undefined"!=typeof
console&&null!==console&&console.warn("MutationObserver is not supported
by your browser."),"undefined"!=typeof
console&&null!==console&&console.warn("WOW.js cannot detect dom
mutations, please call .sync() after loading new content.")}return
a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return
this.getPropertyValue=function(b){var
c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return
b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void
0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function
e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new
c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return
e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var
a;return
this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var
b,c,d,e;if(this.stopped=!1,this.boxes=function(){var
a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return
e}.call(this),this.all=function(){var
a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return
e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return
this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new
a(function(a){return function(b){var
c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var
a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return
d}.call(a));return
g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void
0},e.prototype.stop=function(){return
this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void
0},e.prototype.sync=function(){return
a.notSupported?this.doSync(this.element):void
0},e.prototype.doSync=function(a){var
b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void
0);return f}},e.prototype.show=function(a){return
this.applyStyle(a),a.className=a.className+"
"+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var
c,d,e;return
d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return
function(){return
f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in
window?function(a){return
window.requestAnimationFrame(a)}:function(a){return
a()}}(),e.prototype.resetStyle=function(){var
a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return
e},e.prototype.resetAnimation=function(a){var b;return
a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void
0},e.prototype.customStyle=function(a,b,c,d,e){return
b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var
c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var
b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return
h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var
c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return
g},e.prototype.animationName=function(a){var
b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return
this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return
this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return
this.scrolled=!0},e.prototype.scrollCallback=function(){var
a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var
b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return
e}.call(this),this.boxes.length||this.config.live)?void
0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void
0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return
b},e.prototype.isVisible=function(a){var b,c,d,e,f;return
c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return
null!=this._util? //menu $( "#menu-pop" ).click(function() { $( this
).addClass( 'active' ); $('#overlay').addClass('open'); }); $(
"#overlay" ).click(function() { $( this ).removeClass( 'active' );
$('#overlay').removeClass('open'); }); //easing jQuery.extend(
jQuery.easing, { easeInQuad: function (x, t, b, c, d) { return
c*(t/=d)*t + b; }, easeOutQuad: function (x, t, b, c, d) { return -c
*(t/=d)*(t-2) + b; }, easeInOutQuad: function (x, t, b, c, d) { if
((t/=d/2) < 1) return c/2*t*t + b; return -c/2 * ((--t)*(t-2) - 1) + b;
}, easeInCubic: function (x, t, b, c, d) { return c*(t/=d)*t*t + b; },
easeOutCubic: function (x, t, b, c, d) { return c*((t=t/d-1)*t*t + 1) +
b; }, easeInOutCubic: function (x, t, b, c, d) { if ((t/=d/2) < 1)
return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b; }, easeInQuart:
function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }, easeOutQuart:
function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; },
easeInOutQuart: function (x, t, b, c, d) { if ((t/=d/2) < 1) return
c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b; }, easeInQuint:
function (x, t, b, c, d) { return c*(t/=d)*t*t*t*t + b; }, easeOutQuint:
function (x, t, b, c, d) { return c*((t=t/d-1)*t*t*t*t + 1) + b; },
easeInOutQuint: function (x, t, b, c, d) { if ((t/=d/2) < 1) return
c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b; }, easeInSine:
function (x, t, b, c, d) { return -c * Math.cos(t/d * (Math.PI/2)) + c +
b; }, easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t/d *
(Math.PI/2)) + b; }, easeInOutSine: function (x, t, b, c, d) { return
-c/2 * (Math.cos(Math.PI*t/d) - 1) + b; }, easeInExpo: function (x, t,
b, c, d) { return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b; },
easeOutExpo: function (x, t, b, c, d) { return (t==d) ? b+c : c *
(-Math.pow(2, -10 * t/d) + 1) + b; }, easeInOutExpo: function (x, t, b,
c, d) { if (t==0) return b; if (t==d) return b+c; if ((t/=d/2) < 1)
return c/2 * Math.pow(2, 10 * (t - 1)) + b; return c/2 * (-Math.pow(2,
-10 * --t) + 2) + b; }, easeInCirc: function (x, t, b, c, d) { return -c
* (Math.sqrt(1 - (t/=d)*t) - 1) + b; }, easeOutCirc: function (x, t, b,
c, d) { return c * Math.sqrt(1 - (t=t/d-1)*t) + b; }, easeInOutCirc:
function (x, t, b, c, d) { if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1
- t*t) - 1) + b; return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b; },
easeInElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c;
if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3; if (a <
Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin
(c/a); return -(a*Math.pow(2,10*(t-=1)) * Math.sin(
(t*d-s)*(2*Math.PI)/p )) + b; }, easeOutElastic: function (x, t, b, c,
d) { var s=1.70158;var p=0;var a=c; if (t==0) return b; if ((t/=d)==1)
return b+c; if (!p) p=d*.3; if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a); return a*Math.pow(2,-10*t)
* Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; }, easeInOutElastic:
function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c; if (t==0)
return b; if ((t/=d/2)==2) return b+c; if (!p) p=d*(.3*1.5); if (a <
Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin
(c/a); if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin(
(t*d-s)*(2*Math.PI)/p )) + b; return a*Math.pow(2,-10*(t-=1)) *
Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b; }, easeInBack: function
(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return
c*(t/=d)*t*((s+1)*t - s) + b; }, easeOutBack: function (x, t, b, c, d,
s) { if (s == undefined) s = 1.70158; return c*((t=t/d-1)*t*((s+1)*t +
s) + 1) + b; }, easeInOutBack: function (x, t, b, c, d, s) { if (s ==
undefined) s = 1.70158; if ((t/=d/2) < 1) return
c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; return
c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; }, easeInBounce:
function (x, t, b, c, d) { return c - jQuery.easing.easeOutBounce (x,
d-t, 0, c, d) + b; }, easeOutBounce: function (x, t, b, c, d) { if
((t/=d) < (1/2.75)) { return c*(7.5625*t*t) + b; } else if (t <
(2/2.75)) { return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b; } else if (t
< (2.5/2.75)) { return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b; } else
{ return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b; } },
easeInOutBounce: function (x, t, b, c, d) { if (t < d/2) return
jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b; return
jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b; } });
'use strict';

Vue.config.devtools = true;

Vue.component('card', {
  template: '\n    <div class="card-wrap"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="header"></slot>\n          <slot name="content"></slot>\n        </div>\n      </div>\n    </div>',
  mounted: function mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },

  props: ['dataImage'],
  data: function data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    };
  },
  computed: {
    mousePX: function mousePX() {
      return this.mouseX / this.width;
    },
    mousePY: function mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle: function cardStyle() {
      var rX = this.mousePX * 30;
      var rY = this.mousePY * -30;
      return {
        transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
      };
    },
    cardBgTransform: function cardBgTransform() {
      var tX = this.mousePX * -40;
      var tY = this.mousePY * -40;
      return {
        transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)'
      };
    },
    cardBgImage: function cardBgImage() {
      return {
        backgroundImage: 'url(' + this.dataImage + ')'
      };
    }
  },
  methods: {
    handleMouseMove: function handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter: function handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this = this;

      this.mouseLeaveDelay = setTimeout(function () {
        _this.mouseX = 0;
        _this.mouseY = 0;
      }, 1000);
    }
  }
});

var app = new Vue({
  el: '#app'
});
