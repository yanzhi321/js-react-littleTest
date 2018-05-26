<template>
    <div class="darg-con">
        <p>{{ msg }}</p>
        <div class="box" 
            v-on:mousedown="handleMounseDown($event)" 
            v-on:mousemove="handleMouseMove($event)" 
            v-on:mouseup="handleMouseUp" 

            v-on:touchstart="handleTouchStart($event)"
            v-on:touchmove="handleTouchMove($event)"
            v-on:touchend="handleTouchEnd"
            ref="box" 
            v-bind:style="{left: left+'px', top: top +'px'}" 
        >

        </div>
        <router-view/>
        
    </div>

</template>

<script>


    export default {
        name: 'DragBox',
        data () {
            return {
                msg: 'wait for me',
                left: 0,
                top: 0,
                disX:0,
                disY: 0,
                isDragging: false,
                touchX: 0,
                touchY: 0,
                isTouching: false
            }
        },
        methods: {
            handleMounseDown: function(e) {

                this.disX = e.clientX - this.$refs.box.offsetLeft
                this.disY = e.clientY - this.$refs.box.offsetTop
                console.log(this.disX, this.disY)
                this.isDragging = true
            },
            handleMouseMove: function(e) {
                e.preventDefault();
                
                if(this.isDragging) {

                    this.left = e.clientX - this.disX
                    this.top = e.clientY - this.disY

                    let leftMax = window.innerWidth - this.$refs.box.offsetWidth
                    let topMax = window.innerHeight - this.$refs.box.offsetHeight

                    if(this.left <= 0) {
                        this.left = 0
                    }else if(this.left >= leftMax){
                        this.left = leftMax
                    }

                    if(this.top <= 0) {
                        this.top = 0
                    }else if(this.top >= topMax){
                        this.top = topMax
                    }

                    console.log(this.left, this.top)
                }
            },

            handleMouseUp: function(e) {
                this.isDragging = false
            },

            handleTouchStart: function(e) {
                let box = this.$refs.box
                this.touchX = e.changedTouches[0].clientX - box.offsetLeft
                this.touchY = e.changedTouches[0].clientY - box.offsetTop
                this.isTouching = true
                
            },
            handleTouchMove: function(e) {
                let box = this.$refs.box
                let leftMax = window.innerWidth - box.offsetWidth
                let topMax = window.innerHeight - box.offsetHeight
                if(this.isTouching) {
                    this.left = e.changedTouches[0].clientX - this.touchX
                    this.top = e.changedTouches[0].clientY - this.touchY

                    if(this.left <= 0){
                        this.left = 0
                    }else if(this.left >= leftMax) {
                        this.left = leftMax
                    }

                    if(this.top <= 0) {
                        this.top = 0
                    }else if(this.top >= topMax) {
                        this.top = topMax
                    }
                }
            },
            handleTouchEnd: function() {
                this.isTouching = false
            }

        }
    }
</script>

<style scoped>

    .box {
        width: 1rem;
        height: 1rem;
        background: lightcoral;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }

</style>
