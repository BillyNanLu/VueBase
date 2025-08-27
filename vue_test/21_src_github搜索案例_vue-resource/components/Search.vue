<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input
                type="text"
                placeholder="enter the name you search"
                v-model="keyWord"
            />
            &nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                keyWord: '',
            }
        },
        methods: {
            searchUsers() {
				// 请求前更新List的数据
                this.$bus.$emit('updateListData', {isLoading:true, errMsg:'', users:[], isFirst:false})
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    Response => {
                        console.log('success', Response.data.items)
						// 请求成功后更新List的数据
						this.$bus.$emit('updateListData',{isLoading:false, errMsg:'', users:Response.data.items})
                    },
                    Error => {
						// 请求失败后更新List的数据
                        console.log('fail', Error.message)
						this.$bus.$emit('updateListData',{isLoading:false, errMsg:Error.message, users:[]})
                    }
                )
            },
        },
    }
</script>

<style>

</style>