<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
    html,
    body {
        width: 100%;
    }
    html {
        font-size: 50px;
    }
    body {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style:none
    }

    #app {
        font-family: "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei",
            Tahoma, Simsun, sans-serif;
        color: #2c3e50;
        width: 100%;
    }
</style>
