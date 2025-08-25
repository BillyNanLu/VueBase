<template>
    <div class="school">
        <h2>school name: {{name}}</h2>
        <h2>school address: {{address}}</h2>
        <button @click="sendSchoolName">give school name to App</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        props: ['getSchoolName'],
        data() {
            return {
                name: 'Gench',
                address: 'Shanghai',
            }
        },
        methods: {
            sendSchoolName() {

            }
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>