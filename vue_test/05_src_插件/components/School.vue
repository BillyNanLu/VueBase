<template>
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2 @click="test">点我测试一个hello方法</h2>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: "Gench",
                address: "Shanghai"
            }
        },
        methods: {
            test() {
                this.hello()
            }
        }
    }
</script>