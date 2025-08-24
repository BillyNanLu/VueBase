<template>
    <div>
        <student name="GeJingyi" :age="18"/>
    </div>
</template>

<script>
    import Student from './Student.vue'

    export default {
        name: 'App',
        components: {
            Student
        }
    }
</script>