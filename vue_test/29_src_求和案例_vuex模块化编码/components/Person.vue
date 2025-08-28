<template>
    <div>
		<h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为：{{sum}}</h3>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
		<input type="text" placeholder="please input your name" v-model="name">
        <button @click="add">add</button>
        <button @click="addPersonMai">add a person of first name is Mai</button>
        <button @click="addPersonServer">add a person with random name</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'

    export default {
        name: 'Person',
        data() {
            return {
                name: '',
            }
        },
        computed: {
            sum() {
				return this.$store.state.personOptions.sum
            },
            personList() {
                return this.$store.state.personOptions.personList
            },
            firstPersonName() {
                return this.$store.getters['personOptions/firstPersonName']
            }
        },
        methods: {
            add() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.commit('personOptions/ADD_PERSON', personObj)
                this.name = ''
            },
            addPersonMai() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.dispatch('personOptions/addPersonMai', personObj)
                this.name = ''
            },
            addPersonServer() {
                this.$store.dispatch('personOptions/addPersonServer')
            },
        },
    }
</script>

<style>

</style>