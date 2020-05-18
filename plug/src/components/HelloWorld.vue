<template>
  <div class="hello">
    <!-- <msg></msg> -->
    <button class="btn_loading" @click="showCloading">loading切换</button>
    <button class="btn_loading" @click="showMsg">message</button>
    <ctable :thList='thList' :tableData='tableData'></ctable>
    <!-- <c-input v-model="msg" /> -->
    <c-form>
      <c-form-item >
        <template #label>
          耦合
        </template>
        <c-input v-model="msg"  />
      </c-form-item>
      <c-form-item label='select'>
        
        <c-select :selectData='selectData'></c-select>
      </c-form-item>
    </c-form>
    
  </div>
</template>

<script>
export default {
  name: "Cplugin",
  data() {
    return {
      msg: "csj的第一个插件",
      msg2: "csj的第二个插件",
      tableData:[
        {name:'csj',id:1,age:18}
      ],
      thList:[
        {value:'名称',id:100},
        {value:'id',id:99},
        {value:'年龄',id:98},
      ],
      selectData:[{
        name:1,
        value:'hero'
      },
      {
        name:2,
        value:'jack'
      },{
        name:3,
        value:'jack'
      },{
        name:4,
        value:'jack'
      },
      {
        name:5,
        value:'jack'
      },
      {
        name:6,
        value:'jack'
      },
      {
        name:7,
        value:'jack'
      }]
    };
  },
  methods: {
    showCloading() {
      this.$Cloading.show(this.msg);
    },
    showMsg(){
      this.$message.error(this.msg2)
    }
  },
  components: {

  },
};
</script>


<style scoped>
.hello {
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
}
.btn_loading {
  width: 120px;
  height: 30px;
  border: none !important;
  font-size: 18px;
  color: #fff;
  border-radius: 4px;
  background-color: rgb(0, 0, 0);
  z-index: 5;
  vertical-align: middle;
  margin-left:20px;
}
</style>
