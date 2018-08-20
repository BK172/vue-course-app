<!-- Компонент добавления нового пользователя -->

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <span class="pull-right">
        Новый пользователь
      </span>

      Пользователь
    </div>
    <div class="panel-body">

      <!-- можно переписать на v-model -->
      <!-- <user-form :value="user"> -->
      <user-form v-model="user">
      </user-form>

    </div>
  </div>
</template>

<script>

</script>
