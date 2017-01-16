<template>
	<!-- header -->
	<div id="header">
		<div class="top-bar">
			<div class="top-bar-lt">一粒麦子~</div>
			<div class="top-bar-rt">
				<!--<a href="#" class="icon-qq"></a>
				<a href="#" class="icon-wechat"></a>
				<a href="#" class="icon-sina-weibo"></a>-->
				<a href="https://github.com/Awheat" class="icon-github"></a>
			</div>
		</div>
		<nav class="nav">
			<a href="#" class="logo"><img src="../assets/images/photo.jpg" height="200" width="200" alt="中青公益logo"></a>
			<div class="nav-bar">
				<router-link to="/home">首页</router-link>
                <router-link to="/work">工作</router-link>
                <router-link to="/life">生活</router-link>
                <router-link to="/about">关于我</router-link>
			</div>
		</nav>
	</div>
</template>
<style scoped>
	#footer,#header,.wraper-main {
	width:940px;
	margin:0 auto
}
#header .top-bar {
	height:60px
}
#header .top-bar .top-bar-lt,#header .top-bar .top-bar-rt {
	width:50%;
	height:52px;
	line-height:52px;
	font-size:14px;
	border-bottom:3px solid #000
}
#header .top-bar .top-bar-lt {
	float:left
}
#header .top-bar .top-bar-rt {
	float:right;
	text-align:right
}
#header .top-bar .top-bar-rt a {
	color:#000;
	margin-left:10px
}
#header .nav {
	width:100%;
	height:140px;
	border-top:1px solid #e3e3e8;
	border-bottom:1px solid #e3e3e8
}
#header .nav .logo {
	display:block;
	width:70px;
	height:70px;
	float:left;
	margin:33px 88px 0 0;
	border-radius:50%;
	overflow:hidden
}
#header .nav .nav-bar {
	height:100%;
	float:left
}
#header .nav .nav-bar a {
	display:inline-block;
	height:140px;
	line-height:140px;
	padding:0 25px;
	color:#000;
	font-size:16px
}
#header .nav .nav-bar a.cur,#header .nav .nav-bar a:hover {
	color:red;
	border-bottom:3px solid #000
}
</style>