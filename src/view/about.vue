<template>
	<div>
		<header-bar></header-bar>
		<!-- main -->
		<div class="wraper-main about-page clearfix">
			<!-- 自我介绍 -->
			<div class="about-text-intrd">
				<h3 class="about-title">关于我</h3>
				<p class="about-desc">
					Hi,您好！我的名字叫(吴忘成),生于湖北,年龄20出头,人生轨迹在2012年以后彻底发生改变,曾经在工厂流水线上摸爬滚打了近两年,如今在北京的一家互联网那个公司担任WEB前端一职,我喜欢这份工作,能够为用户带去更好的视觉体验是我的追求和幸福,我会一直朝着这个目标全力以赴的走下去,不忘初心,方得始终！
				</p>
			</div>
			<!-- 时间轴 -->
			<div class="about-time-axis">
				<h3 class="about-title">成长之路</h3>
				<div class="time-wraper">
					<div class="lines"></div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">1995-02</div>
						<div class="items-text">出生于湖北省</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2011-01 至 2012-10</div>
						<div class="items-text">福建双源鞋业有限公司,技术工种拉帮,主要做迪卡龙(decathlon),锐步(Reebok)</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2012-10 至 2014-08</div>
						<div class="items-text">北大青鸟学习软件开发(ACCP-Java)</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2014-09  至 2016-02</div>
						<div class="items-text">北京中青华云新媒体科技有限公司-WEB前端</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2015-03 至 2019-07</div>
						<div class="items-text">北京师范大学-计算机科学与技术(成人)</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2016-03  至 2016-04</div>
						<div class="items-text">微思时代科技（北京）有限公司</div>
					</div>
					<div class="items clearfix">
						<div class="sign"></div>
						<div class="items-date">2016-05  至 2016-07</div>
						<div class="items-text">北京中青华云新媒体科技有限公司-WEB前端</div>
					</div>
				</div>
			</div>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import HeaderBar from '../components/header.vue'
	import FooterBar from '../components/footer.vue'
	export default {
		data(){
			return {

			}
		},
		components:{
			HeaderBar,
			FooterBar
		}
	}
</script>
<style scoped>
.wraper-main{
	width:940px;
	margin:0 auto;
	padding:20px 0;
	box-sizing:border-box;
	-webkit-box-sizing: border-box
}
.about-page .about-title {
	position:relative;
	height:30px;
	font-size:16px;
	text-indent:10px
}
.about-page .about-title:after {
	position:absolute;
	top:4px;
	left:0;
	width:3px;
	height:15px;
	background:#000
}
.about-page .about-desc {
	line-height:25px;
	color:#4c4c4c;
	font-size:14px;
	text-indent:20px
}
.about-time-axis {
	margin-top:20px
}
.time-wraper {
	position:relative;
	width:510px;
	padding:20px 0 50px;
	margin:50px auto
}
.time-wraper .lines {
	position:absolute;
	top:0;
	left:160px;
	z-index:10;
	width:1px;
	height:100%;
	background:#000
}
.time-wraper .lines:after {
	position:absolute;
	top:-11px;
	left:-5px;
	width:10px;
	height:10px;
	border:1px solid #000;
	border-radius:100%;
	background:#000
}
.time-wraper .items {
	position:relative;
	margin-bottom:20px;
	cursor:pointer;
	overflow:hidden
}
.time-wraper .items .sign {
	position:absolute;
	top:-50px;
	left:156px;
	z-index:11;
	width:9px;
	height:9px;
	border:1px solid #000;
	background:#000;
	-webkit-transform:rotate(45deg);
	transform:rotate(45deg);
	-webkit-animation:sliderDown 1s linear .2s forwards;
	animation:sliderDown 1s linear .2s forwards;
	-webkit-transition:transform 1s linear;
	-webkit-transition:-webkit-transform 1s linear;
	transition:-webkit-transform 1s linear;
	transition:transform 1s linear;
	transition:transform 1s linear,-webkit-transform 1s linear
}
@keyframes sliderDown {
	from {
	top:-50px
}
to {
	top:8px
}
}@-webkit-keyframes sliderDown {
	from {
	top:-50px
}
to {
	top:8px
}
}.time-wraper .items .items-date {
	width:150px;
	height:20px;
	line-height:25px;
	float:left;
	color:#4c4c4c;
	font-size:14px;
	text-align:right;
	margin-right:10px;
	transform:translateX(-200px);
	-webkit-transform:translateX(-200px);
	-webkit-animation:sliderRight .8s linear .2s forwards;
	animation:sliderRight .8s linear .2s forwards;
	-webkit-transition:transform 1s linear;
	-webkit-transition:-webkit-transform 1s linear;
	transition:-webkit-transform 1s linear;
	transition:transform 1s linear;
	transition:transform 1s linear,-webkit-transform 1s linear
}
.time-wraper .items .items-text {
	position:relative;
	width:300px;
	float:left;
	margin-left:20px;
	padding:10px;
	color:#4c4c4c;
	font-size:14px;
	border:1px solid #6c6c6c;
	border-radius:3px;
	transform:translateX(350px);
	-webkit-transform:translateX(350px);
	-webkit-animation:sliderLeft .5s linear .2s forwards;
	animation:sliderLeft .5s linear .2s forwards;
	-webkit-transition:transform 1s linear;
	-webkit-transition:-webkit-transform 1s linear;
	transition:-webkit-transform 1s linear;
	transition:transform 1s linear;
	transition:transform 1s linear,-webkit-transform 1s linear
}
@keyframes sliderRight {
	from {
	-webkit-transform:translateX(-200px);
	transform:translateX(-200px)
}
to {
	-webkit-transform:translateX(0);
	transform:translateX(0)
}
}@-webkit-keyframes sliderRight {
	from {
	-webkit-transform:translateX(-200px);
	transform:translateX(-200px)
}
to {
	-webkit-transform:translateX(0);
	transform:translateX(0)
}
}@keyframes sliderLeft {
	from {
	-webkit-transform:translateX(350px);
	transform:translateX(350px)
}
to {
	-webkit-transform:translateX(0);
	transform:translateX(0)
}
}@-webkit-keyframes sliderLeft {
	from {
	-webkit-transform:translateX(350px);
	transform:translateX(350px)
}
to {
	-webkit-transform:translateX(0);
	transform:translateX(0)
}
}.time-wraper .items .items-text:before {
	position:absolute;
	top:7px;
	left:-11px;
	border:5px solid transparent;
	border-right-color:#000
}
.time-wraper .items .items-text:after {
	position:absolute;
	top:7px;
	left:-10px;
	border:5px solid transparent;
	border-right-color:#fff
}

</style>