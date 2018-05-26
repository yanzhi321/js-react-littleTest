<template>
  <div class="color-list">
      <div 
          class="color-item" 
          v-for="(color, index) in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
          :key="color.text"
          
      >
        {{color.text}}
        <button class="color-btn" v-bind:key="index" v-on:click="deleteData(index)"></button>
      </div>
  </div>
</template>

<script>
export default {
  name: "DragOne",

  data() {
    return {
      colors: [
        {
          text: "Aquamarine"
        },
        {
          text: "Hotpink"
        },
        {
          text: "Gold"
        },
        {
          text: "Crimson"
        },
        {
          text: "Blueviolet"
        },
        {
          text: "Lightblue"
        },
        {
          text: "Cornflowerblue"
        },
        {
          text: "Skyblue"
        },
        {
          text: "Burlywood"
        }
      ]
    };
  },

  methods: {
    addClick: function() {
      console.log("wait for me");
    },

    randomColor: function() {
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      let str = "";
      for (let i = 0; i < 6; i++) {
        let n = Math.ceil(Math.random() * arr.length);
        str += arr[n];
      }
      return "#" + str;
    },

    randomBg: function() {
      let r = Math.ceil(Math.random() * 225);
      let g = Math.ceil(Math.random() * 225);
      let b = Math.ceil(Math.random() * 225);
      let a = Math.random() * 1 + 0.2;

      let str = `rgba(${r}, ${g}, ${b}, ${a})`;
      return str;
    },

    deleteData: function(index) {
        console.log(index)
        this.colors.splice(index, 1)
    }
  },

  mounted() {
    this.$dragging.$on("dragged", ({ value }) => {
      console.log(value.item);
      console.log(value.list);
      console.log(value.otherData);
    });
    this.$dragging.$on("dragend", () => {});
  }
};
</script>

<style>
    .color-list {
        width: 100%;
        height: 8rem;
        margin: 0.4rem 0;
        background: #eee;
        overflow-y: auto;
    }

    .color-item {
        width: 80%;
        height: 1rem;
        margin: 0.2rem auto;
        background: lightblue;
        font-size: 0.4rem;
        color: purple;
        text-align: center;
        line-height: 1rem;
        position: relative;
    }

    .color-btn{
        display: none;
        float: right;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.6rem;
        line-height: 0.8rem;
        margin: 0.1rem;
        color: #cc9a9a;
        transition: color 0.2s ease-out;
    }

    .color-btn:hover{
        color: #af5b5e;
    }

    .color-btn:after {
        content: '×';
    }
    .color-item:hover .color-btn {
        display: block;
    }
</style>

