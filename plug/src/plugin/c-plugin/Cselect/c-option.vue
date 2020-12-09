<template>
  <div>
    <li  class="c-option" :class="{'isselect':isselect,'hover':hover}" @click="selected" @mouseenter="hoveritem">
      <slot>{{currentValue}}</slot>
    </li>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  name: "cOption",
  props: {
    label: [String, Number],
    value: {
      require: true
    }
  },
  data() {
    return {
      isselect: false,
      hover:false
    };
  },
  methods: {
    selected() {
      this.hoveritem()
      bus.$emit('select',this.label)
    },
    hoveritem(){
        this.$parent.$children.forEach(element => {
            element.hover = false
        });
        this.hover = true;
    }
  },
  computed: {
    currentValue() {
      return this.label || this.value;
      
    }
  },
  mounted(){
      if(this.$parent.$children[0].hover){
          return false;
      }
      this.$parent.$children[0].hover = true

  }
};
</script>

<style>
.c-option {
  width: 100%;
  list-style: none;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
}
/* .c-option:not(:last-child) {
  border-bottom: 1px solid #dcdfe6;
} */
.c-option:hover,
.isselect {
  background-color: rgba(0, 255, 255, 0.2);
}
.hover {
  background-color: rgba(0, 255, 255, 0.2);
}
</style>