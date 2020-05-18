<template>
  <div class="dropdowngroup">
    <ul class="c-drop-ul">
      <li
        v-for="row in dropData"
        :key="row.name"
        class="c-drop-li"
        @click="selectOption(row.value)"
      >{{row.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cDropDown",
  props: {
    dropData: {
      type: Array,
      defalut: []
    }
  },
  methods: {
    selectOption(value) {
      this.$emit("select", value);
    }
  }
};
</script>

<style>
.dropdowngroup {
  width: 100%;
}
.c-drop-ul {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 150px;
  transform: translateY(100%);
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-top: 0;
  color: #606266;
}
.c-drop-li {
  width: 100%;
  list-style: none;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
}
.c-drop-li:not(:last-child) {
  border-bottom: 1px solid #dcdfe6;
}
.c-drop-ul::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.c-drop-ul::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.c-drop-ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>