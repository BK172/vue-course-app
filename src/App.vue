<!-- Компонент приложения / шаблона страниц -->

<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            {{ layoutTitle }}
          </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/list" active-class="active" exact>
              <a>
                Список пользователей
              </a>
            </router-link>
            <router-link tag="li" to="/user/add" active-class="active" exact>
              <a>
                Добавить пользователя
              </a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    // Заголовок страницы из хранилища Vuex
    // который будет на всех страницах
    layoutTitle () {
      return this.$store.state.navbarTitle
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
