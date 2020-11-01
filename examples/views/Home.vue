<template>
  <div class="Home">
    <navbar></navbar>
    <div class="content">
      <h1>Zeal-UI</h1>
      <p>一款基于 Vue 的轻量级 UI 组件库</p>
      <ul>
        <li><router-link to="">Gitee</router-link></li>
        <li><router-link to="">Github</router-link></li>
        <li><router-link to="/Doc">Get Start</router-link></li>
      </ul>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.Home {
  height: 100vh;
  background: linear-gradient(
    to left bottom,
    hsl(182, 100%, 85%) 0%,
    hsl(85, 100%, 85%) 100%
  );
}
.content {
  padding: 10em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: rgb(0,116,217);
  }
  p {
    margin: 1em 0 ;
    font-size: 1.5em;
    font-weight: 600;
  }
  ul {
    display: flex;
    li {
      margin: 1em;
      background-color: rgb(0,116,217);
      border-radius: 5px;
      a {
        text-decoration: none;
        display: inline-block;
        padding: 0.7em 1em;
        color: white;
        &:active {
          color: white;
        }
      }
    }
  }
}
</style>