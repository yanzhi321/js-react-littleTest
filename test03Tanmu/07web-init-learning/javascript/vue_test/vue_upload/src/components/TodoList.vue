<template>
    <div class="todo-con">
        <p>{{ msg }}</p>
        <div class="con-list">
            <ul class="todo-list">
                <li v-for="(item, index) in todos" v-bind:key="index">
                    <div class="item-con"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data () {
            return {
                msg: 'this is TodoList',
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
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

    .todo-con {
        width: 100%;
    }
    .con-list {
        width: 100%
    }
    .todo-list {
        width: 80%;
        margin: 5%;
        height: 6rem;
        overflow: auto;
        border: 1px solid #ccc;
    }
    .todo-list li{
        width: 80%;
        height: 1rem;
        margin: 0 auto;
        border: 1px solid purple;
        font-size: 0.4rem;
        margin: 0.2rem;
    }

</style>
