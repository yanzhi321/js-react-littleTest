<template>
    <div class="container">
        <div class="search">
            <i class="el-icon-search search-icon" v-on:click="changeFocus"  ></i>
            <input type="text" placeholder="请输入..." class="search-input" ref="change" >
        </div>
        <ul class="fruit-list">
            <li v-for="(item, index) in lists"
                v-bind:key="index"
                :class="{ 'active' : ind === index }"
                v-on:click="changeBg(index)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'hello world',
                lists: ['苹果', '香蕉', '菠萝', '芒果'],
                ind: '',
            }
        },

        methods: {
            changeFocus: function() {
                this.$refs.change.focus()
            },
            changeBg: function(index) {
                this.ind = index
            }
        },

    }
</script>

<style scoped>
    .search {
        width: 90%;
        height: 40px;
        margin: 10px 5%;
        box-sizing: border-box;
        background: #eee;
        display: flex;
        border-radius: 5px;
    }
    .search-icon {
        float: left;
        width: 10%;
        margin-left: 5px;
        font-size: 25px;
        line-height: 40px;
        color: #D3D3D3;
        font-weight: 600;
    }
    .search-input {
        float: left;
        width: 90%;
        font-size: 16px;
        border: 0;
        background: #eee;
    }
    .active {
        background: plum
    }

    .fruit-list {
        font-size: 0.4rem;
    }
    
</style>
