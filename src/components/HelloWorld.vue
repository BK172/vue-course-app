<template>
  <div class="hello">
    <!-- можно забиндить в router-link -->
    <router-link to="/users">
      Перейти в список пользователей
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
};
</script>
