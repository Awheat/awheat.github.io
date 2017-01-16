<template>
	<div class="tab-chat">
		<a v-for="item in life" :href="item.url">{{item.title}}</a>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				life:[
				    {
				      "title":"同桌的你们",
				      "url":"www.baidu.com/1.html"
				    },
				    {
				      "title":"愛情呼叫轉移",
				      "url":"www.baidu.com/2.html"
				    },
				    {
				      "title":"十年",
				      "url":"www.baidu.com/3.html"
				    },
				    {
				      "title":"時間都去哪了",
				      "url":"www.baidu.com/4.html"
				    },
				    {
				      "title":"时间煮雨",
				      "url":"www.baidu.com/5.html"
				    },
				    {
				      "title":"青花瓷",
				      "url":"www.baidu.com/6.html"
				    },
				    {
				      "title":"同桌的你们",
				      "url":"www.baidu.com/7.html"
				    },
				    {
				      "title":"说好的幸福",
				      "url":"www.baidu.com/8.html"
				    }
  				]
			}
		}
	}
</script>
<style scoped>
.tab-chat a {
	display:inline-block;
	padding:10px 20px;
	color:#666;
	font-size:14px;
	border:1px solid #ccc;
	border-radius:20px;
	margin-right:30px;
	margin-bottom:20px;
	margin-left:20px;
	cursor: pointer;
	-webkit-transition:all .5s linear;
	transition:all .5s linear
}
.tab-chat a:hover {
	color:#fff;
	background:#333
}
</style>