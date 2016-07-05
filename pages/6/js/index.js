$(function(){
	
	/*
		项目备注：

		1.热门潮流和国际大牌之间切换有些问题 ，问题是火狐与其他浏览器的兼容问题 。
	
		2015-4-15日(晚上)

		2.现在好像没什么问题，在基本各个主要的浏览器上是一致的 ，但是总感觉那里有逻辑不对，有时间需要从新写一下 ，

		css .475行 

		2015-4-17日(早上)
	*/
	/*===================================================================================================================*/
	/*
		手机尚品和购物车的子菜单默认隐藏
	*/
	$(".wpr_bottom_cont1,.wpr_bottom_cont2").hide();
	/*
		延时加载
	*/
	var timeId = null;
	/*
		手机尚品
	*/
	$(".wpr_phone_sp").hover(function(){
		var _this = $(this);
		timeId = setTimeout(function(){
			_this.find('span').show();
		},100);
	},function(){
		clearTimeout(timeId);
		$(this).find('span').hide();
	});
	/*
		购物车
	*/
	$(".wpr_shop_tro").hover(function(){
		var _this = $(this);
		timeId = setTimeout(function(){
			_this.find('div').show();
		},100);
	},function(){
		clearTimeout(timeId);
		$(this).find('div').hide();
	});
	/*
		悬浮于下载尚品APP图标上显示二维码
	*/
	var obj = $(".wpr_show_erweima");
	$(".wpr_mb_download").hover(function(){
		obj.show();
	},function(){obj.hide();});

	/*
		导航菜单
	*/ 
	var time=null;
	$(".wpr_navbar_ul li:not('.col_red')").hover(function(){
		clearInterval(time);//先清除一下定时器
		var ind = $(this).index();
		if(ind>0 && ind<7){
			$(".wpr_nav_bar > div").eq(ind-1).show().siblings('div').hide();//显示导航子菜单商品第一张图片
			var aObj =  $(".wpr_nav_bar > div").eq(ind-1).find('.wpr_ima_list a');
			var img_num = aObj.length-1;
			var i = 1;
			time = setInterval(function test(){
				aObj.eq(i).show().prev().hide();//当前下标所对应的容器显示上一个容器隐藏
				i++;
				i==img_num?i=0:i;//如果是最后一张又从新从0开始
			},1000);
		}else{
			clearInterval(time);//离开时再清除一下定时器
			$(".wpr_nav_bar > div").hide();
		}
		$(this).children('a').addClass("this_select");
		$(this).siblings().children('a').removeClass("this_select");
	},function(){
		$(this).children('a').removeClass("this_select");
	});
	/*
		鼠标离开父元素时子元素隐藏
	*/
	$(".wpr_nav_bar").hover("",function(){
		clearInterval(time);//离开时再清除一下定时器
		$(".wpr_nav_bar > div").hide();
	});
	/*
		style添加红色的样式背景
	*/
	$("li.col_red").hover(function(){
		$(this).children('a').addClass("this_select1");
	},function(){
		$(this).children('a').removeClass("this_select1");
	});	

	/*
		栏目下的大标题
	*/
	$(".wpr_colt_left span").hover(function(){
		var ind = $(this).index();
		$(this).addClass("curr").siblings().removeClass("curr");
		ind==2?ind=1:ind;
		$(".wpr_col_bottom_list > div").eq(ind).show().siblings().hide();
	});

	/*
		Banner-weixin-erweima
	*/
	$(".wraper_column5").hover(function(){
		$(this).find(".erweima").show();
	},function(){
		$(this).find(".erweima").hide();
	});
	
	
	
	
	/*
		焦点图1
	*/
	$("#slider").nivoSlider({
		effect:'fade',
		slices:15,
		animSpeed:500,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:false,
		controlNavThumbs:true,
		pauseOnHover:true,
		//当发生切换前，回调函数(加上一个正在加载的效果)
		beforeChange:function(){
			$("#slider").append("<img src='images/index/load_img.gif' class='load_img'>");
		},
		//当发生切换后回调函数
		afterChange:function(){
			$("#slider > .load_img").remove();
		},
		//当加载完成时回调函数
		afterLoad:function(){
			$("#slider").append("<img src='images/index/load_img.gif' class='load_img'>");
		}
			 
	});
	/*
		焦点图2
	*/
	$("#silder1").nivoSlider({
		effect:'fade',
		slices:15,
		animSpeed:500,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:true,
		pauseOnHover:true
			 
	});
	$("#silder2").nivoSlider({
		effect:'fade',
		slices:15,
		animSpeed:500,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:true,
		pauseOnHover:true
			 
	});
	/*
		焦点图3
	*/
	$("#slider3").nivoSlider({
		effect:'fade',
		slices:15,
		animSpeed:500,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:false,
		pauseOnHover:true
	});


	/*
		品牌logo的自动滚动
	*/
	var timer=null;
	var pplogo_box = $(".wpr_pplogo_list");
	var PPlogo_ul = pplogo_box.find('ul');
	var pplogo_li = pplogo_box.find('li');
	var pplogo_box_width = pplogo_box.width();
	var len = 3;
	var ind = $(".li_curr").index();
	/*设置ul的宽度*/
	PPlogo_ul.css({
		width:len * pplogo_box_width
	});

	var autoLeft=function(){
		if(ind<len-1){
			ind++;
		}else{
			PPlogo_ul.animate({
				left:0
			},500);
			ind=0;
		}
		if(!PPlogo_ul.is(":animated")){
			PPlogo_ul.animate({
				left:-pplogo_box_width * ind
			},1000);
		}
	}
	timer = setInterval(autoLeft,3000);
	pplogo_box.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoLeft,3000);
	});
});