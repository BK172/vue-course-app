<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/" active-class="active" exact>
              <a>Главная</a>
            </router-link>
            <router-link tag="li" to="/users" active-class="active">
              <a>Список пользователей</a>
            </router-link>
<!--             <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li> -->
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="title">Общий заголовок</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'App'
};
</script>
