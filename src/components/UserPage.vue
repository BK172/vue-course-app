<template>
	<p class="title">Страница списка пользователей</p>
  <div class="alert alert-warning" v-if="!users.length">
    Загрузка...
  </div>
  <user-list v-else :users="users"></user-list>
</template>

<script>
import axios from 'axios';
//import UserList from '@/components/UserList.vue';

export default {
  name: 'UserPage',
  components: {
    // можно записывать 'user-list': UserList
    // можно UserList
    // можно динамический импорт, чтобы компонент был не сразу в бандле, а качались отдельно
    UserList: () => import('@/components/UserList.vue')
  },
  data() {
    return {
      users: []
    };
  },
  // можно и так
  // data: () => ({
  //   users: []
  // }),
  methods: {
    loadData() {
      axios.get('http://localhost:3004/users')
        .then(response => {
          this.users = response.data.users;
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>


<style scoped>
.title {
  color: red;
}
</style>
