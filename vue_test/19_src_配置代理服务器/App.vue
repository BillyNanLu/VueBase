<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'App',
        methods: {
            getStudents() {
                axios.get('http://localhost:8080/nanstudio_students/students').then(
                    Response => {
                        console.log('请求成功了', Response.data)
                    },
                    Error => {
                        console.log('请求失败了', Error.message)
                    }
                )
            },
            getCars() {
                axios.get('http://localhost:8080/nanstudio_cars/cars').then(
                    Response => {
                        console.log('请求成功了', Response.data)
                    },
                    Error => {
                        console.log('请求失败了', Error.message)
                    }
                )
            },
        }
    }
</script>