<template>
  <div>
    <table class="table">
        <thead >
            <th v-for="th in thList" :key="th.id">
                {{th.value}}
            </th>
        </thead>
      <tr v-for="(row) in tableData" :key="row.key" class="c-tr">
        <td v-for="(value,name) in row" :key="name">
          <span class="c-td">{{value}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'ctable',
    props:{
        tableData:{
            type:Array,
            defalut:[]
        },
        thList:{
            type:Array,
            defalut:[]
        },
        
    }
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
.table td,
.table th ,.c-td {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
  text-align: center;
  font-size: 14px;
  color: rgba(3, 0, 6, 0.8);
}
.table thead th {
    text-align: center;
  background-color: #cce8eb;
  width: 100px;
}
.table tr:nth-child(odd) {
  background: #fff;
}
.table tr:nth-child(even) {
  background: #f5fafa;
}



</style>