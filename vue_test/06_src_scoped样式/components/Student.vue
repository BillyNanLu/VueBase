<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2 class="gender">学生性别：{{gender}}</h2>
    </div>
</template>

<script>
    export default{
        name: "Studendt",
        data() {
            return {
                name: 'GeJingyi',
                gender: 'Female'
            }
        }
    }
</script>

<style lang="css" scoped>
    .demo{
		background-color: blueviolet;
	}
    .gender{
		font-size: 40px;
	}
</style>