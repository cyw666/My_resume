//轮播动画
$(function() {
    $(".flexslider").flexslider({
		slideshowSpeed: 4000, //展示时间间隔ms
		animationSpeed: 400, //滚动时间ms
		touch: true //是否支持触屏滑动
	});
});	

// 点击放大
$('.hover-bg').click(function(event){
	event.preventDefault();
	// $('div.pp_overlay').css('display','block');
	$('div.pp_overlay').fadeIn('slow');
	$('div.pp_pic_holder').fadeIn('slow');
	var top=($(window).height()-$('div.pp_pic_holder').height())/2;
	var left=($(window).width()-$('div.pp_pic_holder').width())/2;
	var scrollTop=$(document).scrollTop();
	//console.log($(window).height());
	$('div.pp_pic_holder').css({
		'top':top+scrollTop,
		'left':left
	});
	//$('dipage-scrollv.pp_pic_holder').css('display','block');
	var a=$(this).children()[0];
	var sr=$(a).attr('href');
	var rel=$(a).attr('rel');
	$('#pp_full_res img').attr('src',sr);
	
	var txt=$(this).find('h4').html();
	//console.log(txt);
	$('div.ppt').html(txt);
	//获取作品URL
	$('#pp_full_res a').attr('href',rel);
});
//点击关闭放大图片
$('div.pp_default .pp_close').click(function(event){
	event.preventDefault();
	$('div.pp_overlay').fadeOut('slow');
	$('div.pp_pic_holder').fadeOut('slow');
});
//鼠标滚动，放大作品图片居中显示
$(window).scroll( function() {
	var top=($(window).height()-$('div.pp_pic_holder').height())/2;
	var left=($(window).width()-$('div.pp_pic_holder').width())/2;
	var scrollTop=$(document).scrollTop();
	$('div.pp_pic_holder').css({
		'top':top+scrollTop,
		'left':left
	});
} );
//作品集隐藏显示
$('#portfolio .cat a').click(function(e){
	e.preventDefault();
	$('#portfolio .cat a').removeClass('active');
	$(this).addClass('active');
	var content=$(this).html();
	//console.log(content);
	if(content=='All'){
		$('#portfolio .portfolio-items>div').fadeIn('slow');
	}else if(content=='Web Design'){
		$('#portfolio .portfolio-items>div:not(.web)').fadeOut('slow');
		$('#portfolio .portfolio-items>div.web').fadeIn('slow');
	}else if(content=='Games'){
		$('#portfolio .portfolio-items>div:not(.game)').fadeOut('slow');
		$('#portfolio .portfolio-items>div.game').fadeIn('slow');
	}else if(content=='Web app'){
		$('#portfolio .portfolio-items>div:not(.app)').fadeOut('slow');
		$('#portfolio .portfolio-items>div.app').fadeIn('slow');
	}
});
//导航滑动动画
$('a.page-scroll').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash); //锚点除了#的部分
	 // console.log(this.hash.slice(1));
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top - 40 //offset() 方法返回或设置匹配元素相对于文档的偏移
	    }, 900);
	    return false;
	  }
	}
});
//HTML5绘图
$(function() {
    $('.chart').easyPieChart({
        animate:1000,
        lineWidth:10,
        barColor:'#2C3E50',
        trackColor:'#fff',
        scaleColor:false,
        lineCap:'butt',
        size:152
    });
});
/************扫一扫***********************/
$(function(){
	$('#footer .icon .icon1').click('mouseover',function(){
		$('#footer .icon li').eq(2).slideToggle();
	});
	$('#footer .icon .icon2').click('mouseover',function(){
		$('#footer .icon li').eq(3).slideToggle();
	});
});