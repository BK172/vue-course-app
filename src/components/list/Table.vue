<!-- Страница со списком пользователей -->

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      Список пользователей
    </div>
    <div class="panel-body">

      <dashboard-grid title="Пользователей в базе" :url="url">
        <tr slot="header">
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
        </tr>
        <!-- props будет прибиндено в этот слот (слот с ограниченной областью видимости) -->
        <template slot="row" slot-scope="props">
          <td>
            <router-link :to="`/user/${props.id}`"># {{ props.id }}</router-link>
          </td>
          <td>{{ props.firstName }}</td>
          <td>{{ props.lastName }}</td>
          <td>{{ props.isActive }}</td>
          <td>{{ props.balance }}</td>
          <td>{{ props.email }}</td>
          <td>{{ props.phone }}</td>
          <td>{{ props.registered }}</td>
        </template>
      </dashboard-grid>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {
    DashboardGrid: () => import('@/components/common/DashboardGrid.vue')
  },
  data: () => ({
    // URL загрузки списка пользователей
    url: 'http://localhost:3004/users/'
  })
};
</script>
