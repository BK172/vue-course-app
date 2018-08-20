<!-- Компонент таблицы с плагином DataTables -->

<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <button type="button" class="pull-right btn btn-xs btn-default btn-outline" @click="loadData">
        <i :class="['fa fa-fw fa-refresh', loading ? 'fa-spin' : '']"></i>
        Обновить таблицу
      </button>
      {{ title }} &ndash; {{ totalRows }}
    </div>
    <div class="panel-body">

      <div class="form-group">
        <div class="col-md-2">
          
        </div>
        <div class="col-md-4">
          <p class="form-control-static">
            Выбрано элементов на страницу {{ rowsPerPage }}
          </p>
        </div>
      </div>

      <table ref="table" class="table table-striped">
        <thead>

        </thead>
        <tbody>
          <tr v-for="item in filteredRows" :key="item.id">

          </tr>
        </tbody>
      </table>

      <div class="form-group">
        <strong>Выбрана страница {{ selectedPage }}</strong>
      </div>
    </div>
  </div>
</template>

<script>

</script>
