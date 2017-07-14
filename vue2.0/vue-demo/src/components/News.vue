<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul>
			<li v-for="(val,index) in news">{{val}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'news',
		data(){
			return {
				news: [11111111,22222222,3333333333333,5555555555]
			}
		}
	}
</script>

<style>
</style>