<template>
  <div class="dropdowngroup">
    <ul class="c-drop-ul">
      <li
        v-for="(row,index) in dropData"
        :key="row.name"
        class="c-drop-li"
        @click="selectOption(row.value,index)"
        @mouseenter="hoveritem(index)"
        :class="hover[index]?'hover':''"
      >{{row.value}}</li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  name: "cDropDown",
  props: {
    dropData: {
      type: Array,
      defalut: []
    }
  },
  data() {
    return {
      isselect: false,
      hover: [],
      selectIndex: null
    };
  },
  methods: {
    selectOption(value) {
      // this.hoveritem(index);
      bus.$emit("select", value);
    },
    hoveritem(index) {
      this.dropData.forEach((ele, i) => {
        this.$set(this.hover, i, false);
      });
      this.hover[index] = true;
    }
  },
  mounted() {
    this.$set(this.hover, 0, true);
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
  padding: 0;
  max-height: 150px;
  transform: translateY(100%);
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
  padding: 0 10px;
  line-height: 30px;
  font-size: 14px;
  box-sizing: border-box;
  color: #606266;
  cursor: pointer;
}

.hover {
  background-color: rgba(0, 255, 255, 0.1);
}

.isselect {
  background-color: rgba(0, 255, 255, 0.1);
}

/* .c-drop-li:not(:last-child) {
  border-bottom: 1px solid #dcdfe6;
} */
.c-drop-ul::-webkit-scrollbar {
  width: 0px;
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