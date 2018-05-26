<template>
    <div class="container">
        <div class="upload">
            <ul class="show-list">
                <li v-for="(item, index) in mmm" v-bind:key="index" >
                    <img v-if="item.data != ''" v-bind:src=" item.data || index " alt="" class="add-img" v-show="isHide">
                    <video v-if="item.data != ''" v-bind:src="item.data || index " alt="" width="200" height="50" controls="controls" autoplay="autoplay" loop="loop" class="add-video" v-show="isShow"></video>
                    <div class="icon-add">
                        <i class="el-icon-circle-plus-outline add-el"></i>
                        <input type="file" :id="item.name" @change="pushImg($event, index)"  class="file-input">
                    </div>
                    
                    <span v-if="item.data != ''" ></span>
                </li>
            </ul>
        </div>
        <div class="tips" v-if="flag.change">success</div>
        <button v-on:click="toggle">{{ msg }}</button>
    </div>
</template>

<script>
    export default {
        name: 'UploadImg',
        data () {
            return {
                msg: 'show',
                isShow: false,
                isHide: true,
                flag: {
                    change: false
                },
                mmm: [
                    {
                        name: 'AAAAA',
                        data: ''
                    },
                    {
                        name: 'AAAAB',
                        data: ''
                    },
                    {
                        name: 'AAAAC',
                        data: ''
                    },
                    {
                        name: 'AAAAD',
                        data: ''
                    },
                    {
                        name: 'AAAAE',
                        data: ''
                    }
                ]
                
            }
        },
        methods: {
            pushImg: function(e, i) {
                let mm = this.mmm, flag = this.flag, file = e.target, reader = new FileReader();
                reader.readAsDataURL(file.files[0])
                console.log(file.files[0])
                reader.onload = function() {
                    mm[i].data = this.result

                    flag.change = true
                    setTimeout( () => {
                        flag.change = false
                    }, 1000)
                }
            },
            
            toggle: function() {
                // this.msg = 'show' ? 'hide' : 'show'
                if(this.msg == 'show') {
                    this.msg = 'hide'
                } else if(this.msg = 'hide') {
                    this.msg = 'show'
                }
                
                this.isShow = !this.isShow
                this.isHide = !this.isHide
            }
        }
    }
</script>

<style scoped>
    html {
        font-size: 50px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    html, body {
        width:100%
    }
    .container {
        width: 100%;
    }
    .upload {
        width: 100%;
    }
    .show-list {
        width: 100%;
        height: 100px;
        border: 1px solid #ccc;
        box-sizing:border-box;
        overflow: hidden;
    }
    .show-list li{
        width: 20%;
        height: 100%;
        float:left;
        border: 1px solid purple;
        box-sizing: border-box;
        position: relative;
    }
    .icon-add {
        width: 0.6rem;
        height: 0.6rem;
        border: 1px solid #ccc;
        position: absolute;
        right:0;
        bottom: 0;
    }
    .add-el {
        font-size: 0.6rem;
        color: purple;
        position: absolute;
        top: 0;
        left: 0;
    }
    .add-img {
        width: 1rem;
        height: 1rem;
    }
    .add-video {
        width: 1rem;
        height: 1rem;
    }
    .file-input {
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        top: 0;
        left:0;
        opacity: 0;
    }

</style>
