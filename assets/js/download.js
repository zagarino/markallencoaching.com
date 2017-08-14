/* Author: Javier Basualdo - javierbasualdo.com - helpformyweb.com 
   javierbasualdocom@gmail.com
   http://codecanyon.net/user/jbasuald
*/

/***************************************************/
/* Special for tactil display or mouse ***********/

var ua = navigator.userAgent,
event = (ua.match(/(iPhone|iPod|iPad|Android|BlackBerry)/i)) ? "touchstart" : "click";

/* SP */
var Da,Dobj,Dpro,Dcod,Dtmp,Dform,Dlospuntos,OrdPos,Descargando = '';
var OrdenDescarga = [];

//Initialize TMP id buttons
//var objButtons = $('.divfile');
var nf = '';
objButtons.each(function() {
    nf = new Date().getTime();
	
	$.ajax({
		url:'download.php?acc=tmp&nf='+nf,
		success: function(data){
			objButtons.attr('itmp',$.trim(data));
			//console.log('tmp: '+$.trim(data));
		}
	});
	$.ajaxSetup({ cache: false });
});

//Initialize iframe
$('body').append('<iframe id="ifi" style="display:none;"></iframe>');

//Run download
$('.descarga').bind(event,function(){
	OrdenDescarga.push($(this).index('.descarga'));
	if($.browser.msie && ($.browser.version=='6.0' || $.browser.version=='7.0' || $.browser.version=='8.0')) {
		var INDEX = $(this).index('.descarga');
		OrdPos = $.inArray(INDEX,OrdenDescarga); //OrdenDescarga.indexOf(INDEX);
	} else {
		OrdPos = OrdenDescarga.indexOf($(this).index('.descarga'));
	}
	//console.log(OrdenDescarga);
	
	if(Descargando=='') {
		Descargando = 1;
		
		//If exists more buttons, run the next.
		siguienteDown($(this).index('.descarga'));
	
	} else {
		//If click on one while other button is run, this button display a wait message
		//$(this).parent().css({'background-color':'#cccccc'});
		$(this).parent().addClass('btnProgress').removeClass('btnStat');
		$(this).css({'display':'none'});
		$(this).next().css({'display':''}).html('Please, Wait ('+OrdPos+')');
	}
})

//Initialize download
function bajalo(Dcod,Dtmp){
	Dform = $('<form/>').attr({method:'post',action:'download.php?acc=download&n='+Dcod+'&tmp='+Dtmp,target:'ifi',name:'descargalo'});
	//document.forms['descargalo'].submit();
	Dform.appendTo($('body')).submit();
}

//Next download
function siguienteDown(key){
	//console.log('key:'+key);
	
	var Da2 = $('.descarga:eq('+key+')');
	var Dobj2 = $('.descarga:eq('+key+')').parent();
	var Dpro2 = $('.descarga:eq('+key+')').next();
	var Dcod2 = $('.descarga:eq('+key+')').parent().attr('iFile');
	var Dtmp2 = $('.descarga:eq('+key+')').parent().attr('itmp');
	
	bajalo(Dcod2,Dtmp2);
	chekea(Dcod2,Dtmp2,Dpro2,Dobj2,Da2,0);
}

//Check the file download progress
function chekea(cod,Dtmp,Dpro,Dobj,Da,OrdPos){
	
	$.ajax({
		url:folderProgress+Dtmp+'.html',
		success: function(data){
			for(var f=0; f<OrdenDescarga.length; f++){
				var num = f;
				$('.descarga:eq('+OrdenDescarga[f]+')').next().html('Please, Wait ('+num+')');
			}
		
			//If has been finished or canceled the file download
			if(data=='Done!' || data=='Canceled' ){
				clearTimeout(Dtim);
				//console.log('detenido');
				
				Dpro.html(data).effect('pulsate',{times: 2},1000,function(){
					$(this).html('').css({'display':'none'});
					Dobj.removeClass('btnProgress').addClass('btnStat');//css({'background-color':'#b6e026'});
					Da.css({'display':''});
					
					OrdenDescarga.splice(OrdPos,1);
					//console.log(OrdenDescarga);
					//console.log(data);
					
					if(OrdenDescarga.length>0){
						siguienteDown(OrdenDescarga[0]);
					} else {
						Descargando = '';
					}
					
				});
				
				
			} else {
				if(/HTTP/.test(data)){
					console.log('evadido');
				} else {
				//alert(data);
				//console.log('bajando');
				//console.log(data);
				//Dobj.css({'background-color':'#cccccc'});
				Dobj.addClass('btnProgress').removeClass('btnStat');
				Da.css({'display':'none'});
				Dpro.css({'display':''}).html(data);
				
				}
			}
		}
		
	});
	
	var Dtim = setTimeout(function(){chekea(cod,Dtmp,Dpro,Dobj,Da,OrdPos)},900);
	$.ajaxSetup({ cache: false });
}