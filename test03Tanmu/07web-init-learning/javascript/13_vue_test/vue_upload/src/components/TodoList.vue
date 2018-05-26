<template>
    <div class="todo-con">
        <p class="msg">{{ msg }}</p>
        <div class="con-list">
            <div class="todo-action">
                <input type="text" class="action-input"  v-bind:value="empty" placeholder="please input" v-on:keyup.enter="enterValue($event)" v-on:change="inputChange($event)" ref="input">
                <button type="button" class="action-add" v-on:click="addValue($event)">add+</button>
                <button type="button" class="action-remove" v-on:click="removeData">remove</button>
            </div>
            <ul class="todo-list">
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <div class="item-con">
                        <span class="item-con-key">{{ item.key }}---</span> 
                        <span class="item-con-text">{{ item.data.text }}</span>
                        <button class="item-con-btn" v-bind:key="index" v-on:click="deleteData(index)"></button>
                    </div>
                </li>
            </ul>
        </div>

        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data () {
            return {
                msg: 'this is TodoList',
                message: '',
                todos: [
                    // key is creation date
                    {key: 't1', data: {text: 'Board the plane', isDone: false}},
                    {key: 't2', data: {text: 'Sleep', isDone: false}},
                    {key: 't3', data: {text: 'Try to finish conference slides', isDone: false}},
                    {key: 't4', data: {text: 'Eat cheese and drink wine', isDone: false}},
                    {key: 't5', data: {text: 'Go around in Uber', isDone: false}},
                    {key: 't6', data: {text: 'Talk with conf attendees', isDone: false}},
                    {key: 't7', data: {text: 'Show Demo 1', isDone: false}},
                    {key: 't8', data: {text: 'Show Demo 2', isDone: false}},
                    {key: 't9', data: {text: 'Lament about the state of animation', isDone: false}},
                    {key: 't10', data: {text: 'Show Secret Demo', isDone: false}},
                    {key: 't11', data: {text: 'Go home', isDone: false}},
                ],
                value: '',
                empty: ''
            }
        },
        methods: {
            inputChange: function(e) {
                this.value = e.target.value
            },

            enterValue: function(e) {
                this.value = e.target.value
                let oneItem = {
                    key: Date.now(),
                    data: {
                        text: this.value,
                        isDone: false
                    }
                }
                this.todos.unshift(oneItem)

                

                // let blankInput = this.$refs.input
                // blankInput.value = ''
                this.empty = ''
            },

            addValue: function(e) {
            
                const newItem = {
                    key: Date.now(),
                    data: {
                        text: this.value,
                        isDone: false
                    }
                }

                this.todos.push(newItem)
                this.empty = ''
            },

            deleteData: function(index) {
                let delItem = this.todos.splice(index, 1)
            },

            removeData: function() {
                this.todos = []
            }

        }
    }
</script>

<style scoped>

    ul {
        margin: 0;
        padding: 0;
    }

   .todo-con {
       font-size: 0.4rem;
   }
   .msg {
       max-width: 4rem;
       margin: 0.2rem auto;
       text-align: center
   }

    .todo-action {
        width: 100%;
        margin: 0.3rem auto;
        text-align: center;
        border: 1px solid #ccc;
        box-sizing: border-box
    }

    .action-input {
        width: 50%;
        height: 0.5rem;
        border: 1px solid lightblue;
        border-radius: 0.1rem;
        font-size: 0.3rem;
    }
    .action-input::-webkit-input-placeholder {
        color: #999
    }

    .todo-list {
        overflow-y: auto;
        height: 6rem;
        border: 1px solid pink;
    }

    .todo-list li {
        width: 90%;
        height: 1rem;
        margin: 0.2rem auto;
        border: 1px solid #ccc;
        padding: 0.2rem; 
        box-sizing: border-box;
    }

    .item-con {
        width: 100%;
        height: 1rem;
    }

    .item-con span {
        display: block;
        float: left;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center
    }
    .item-con .item-con-key {
        width: 20%;
    }
    .item-con .item-con-text {
        width: 60%;
        height: 0.6rem;
        background: lightcyan;
    }
    
    .item-con-btn{
        display: none;
        float: right;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.6rem;
        line-height: 0.8rem;
        margin: -0.1rem;
        color: #cc9a9a;
        transition: color 0.2s ease-out;
    }

    .item-con-btn:hover{
        color: #af5b5e;
    }

    .item-con-btn:after {
        content: '×';
    }
    .item-con:hover .item-con-btn {
        display: block;
    }


</style>
