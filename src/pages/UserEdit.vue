<!-- Компонент редактирования пользователя -->

<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      <i class="fa fa-refresh fa-spin"></i>
      Загрузка
    </div>
    <div v-else class="panel panel-primary">
      <div class="panel-heading">
        <span class="pull-right">
          {{ user.id }}
        </span>

        {{ title }}
      </div>
      <div class="panel-body">

        <!-- можно переписать на v-model -->
        <!-- <user-form :value="user"> -->
        <user-form v-model="user">
          <div slot="buttons">
            <button type="button" class="btn btn-success" @click="save">
              Сохранить изменения
            </button>

            <button type="button" class="btn btn-danger" @click="remove">
              Удалить пользователя
            </button>
          </div>
        </user-form>

      </div>
    </div>
  </div>
</template>

<script>

</script>
