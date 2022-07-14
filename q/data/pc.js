function readAll() {    
	var cheight = $('.read-content').height();
	var firsth = Math.ceil($(window).height() * 1.2);
	var sheng = Math.ceil((cheight - $(window).height() * 1.2)/cheight *100);	
	var loadbut = $('<div class="read-box"><div class="read_mask"></div><div class="read_mod" id="read_mod"><a href="javascript:" class="read-button">展开剩余 <em>'+sheng+'</em> %<img src="//i.buyiju.com/img/icon_pcread.png" alt="展开按钮" data-bd-imgshare-binded="1"></a></div></div>');	
	$('.read-content').after(loadbut);	

	if(cheight <= $(window).height() * 1.2){
	    $('.read-box').css('display','none');
	    return;
	}else{	    
	    $('.read-content').height(firsth);
	}	

	$('.read-box').click(function(){
			$('.read-content').css('height','auto'); 
	    $(this).css('display','none');	   
	});
}

function setpFooter(){
	var P=$('#btn_top');
	$(document).scroll(function (){
		if($(this).scrollTop()>10) P.show();
		else P.hide();
	});
	P.click(function(){
		if (navigator.userAgent.indexOf('Firefox') >= 0) document.documentElement.scrollTop=0;
		else $('body').animate({scrollTop:0}, 'fast');
	});
}

function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};