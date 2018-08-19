<template>
  <div class="alert alert-warning" v-if="!users.length">
    Загрузка...
  </div>
  <user-list v-else :users="users"></user-list>
</template>

<script>
import axios from 'axios';
import UserList from '@/components/UserList.vue';

export default {
  name: 'UsersPage',
  components: {
    UserList
  },
  data() {
    return {
      users: []
    }
  },
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
}
</script>
