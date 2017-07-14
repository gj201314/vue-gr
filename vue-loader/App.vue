<template>
	<div id="app">
		<h1>欢迎来到 vue</h1>
		<h2>vue-loader和vue-router</h2>
		<ul>
			<li><a v-link="{path:'/home'}">主页</a></li>
			<li><a v-link="{path:'/news'}">新闻页</a></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	
</script>

<style>
	body {
		background: #ccc;
	}
</style>