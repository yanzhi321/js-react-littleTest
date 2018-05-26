<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="bot-list">
        <ul class="list-con">
            <li><router-link to='/'>hello</router-link></li>
            <li><router-link to="/upload">upload</router-link></li>
            <li><router-link to="/drag">drag</router-link></li>
            <li><router-link to="/todo">todo</router-link></li>

            <!-- <li><a class="page-link" href="#/">Hello</a></li>
            <li><a class="page-link" href="#/upload">upload</a></li>
            <li><a class="page-link" href="#/drag">drag</a></li>
            <li><a class="page-link" href="#/todo">todo</a></li> -->
        </ul>
    </div>
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
body,
ul {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}

#app {
  font-family: "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei",
    Tahoma, Simsun, sans-serif;
  color: #2c3e50;
  width: 100%;
}

.bot-list {
  width: 100%;
}

.list-con {
  width: 100%;
  height: 1rem;
  padding: 2% 5%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: absolute;
  bottom: 0.1rem;
}
.list-con li {
  width: 25%;
  padding: 0 5px;
  float: left;
  box-sizing: border-box;
  font-size: 0.4rem;
  text-align: center;
}

.list-con li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: lightblue;
}

.router-link-exact-active {
  color: palevioletred;
}
</style>
