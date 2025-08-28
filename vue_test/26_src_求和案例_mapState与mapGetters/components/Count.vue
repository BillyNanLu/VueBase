<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我在{{company}}，学习{{position}}</h3>
        <select v-model.number="n" name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">wait to plus when sum is odd</button>
        <button @click="incrementWait">wait to plus</button>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {
                n: 1,   // 用户选择的数字
            }
        },
        computed: {
            // 靠程序员自己亲自去写计算属性
            /* sum() {
                return $store.state.sum
            },
            company(){
                return this.$store.state.company
			},
			position(){
                return this.$store.state.position
			}, */

            // 借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({sum: 'sum', company: 'company', posistion: 'position'}),

			//借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState(['sum', 'company', 'position']),

			/* ******************************************************************** */

            /* bigSum() {
                return $store.getters.bigSum
            }, */

			// 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum: 'bigSum'}),

			// 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])
        },
        methods: {
            increment() {
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                this.$store.commit('JIAN', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait',this.n)
            }
        }
    }
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>