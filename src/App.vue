<template>
  <div>

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
            Vue.js course app
          </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" active-class="active" to="/" exact>
              <a>
                Главная
              </a>
            </router-link>
            <router-link tag="li" active-class="active" to="/list" exact>
              <a>
                Список пользователей
              </a>
            </router-link>
            <router-link tag="li" active-class="active" to="/user/add" exact>
              <a>
                Добавление пользователя
              </a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div id="app" class="container">

      <router-view/>

    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'app'
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
