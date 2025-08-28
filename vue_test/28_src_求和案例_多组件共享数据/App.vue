<template>
    <div>
        <Count/>
        <hr>
        <Person/>
        <hr>
    </div>
</template>

<script>
	import Count from './components/Count'
    import Person from './components/Person.vue'

    export default {
        name: 'App',
        components: {Count, Person},
    }
</script>

<style>
    * {
        list-style: none;
    }
</style>