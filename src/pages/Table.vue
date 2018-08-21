<!-- Страница со списком пользователей -->

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      Список пользователей
    </div>
    <div class="panel-body">

      <dashboard-grid title="Пользователей в базе" :url="url">
        
      </dashboard-grid>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {
    DashboardGrid: () => import('@/components/DashboardGrid.vue')
  },
  data: () => ({
    // URL загрузки списка пользователей
    url: 'http://localhost:3004/users/'
  })
};
</script>
