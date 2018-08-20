<!-- Компонент "главной" страницы -->

<template>
  <div class="hello">

    <router-link to="/user/add">
      Добавить пользователя
    </router-link>
    <router-link to="/list">
      Открыть список пользователей
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Index'
};
</script>
