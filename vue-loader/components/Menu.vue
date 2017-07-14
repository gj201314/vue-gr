<template>
	<ul>
		<li v-for="val in list">{{val}}</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return {
				list:['溪乡雨','服用过','郭杰']
			}
		}
	}
</script>

<style>
</style>