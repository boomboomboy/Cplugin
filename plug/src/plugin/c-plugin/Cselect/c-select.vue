<template>
  <div class="c-select-group" @click="toggleShowMenu">
    <c-input type="text"  v-model="value" readonly :suffix_icon="suffix_icon" />
    <slot name="option"></slot>
    <transition name="c-show-drop">
      <c-drop-down :dropData="selectData" v-if="showmenu" @select="setVal"></c-drop-down>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "cSelect",
  props: {
    value: {
      type: String,
      default: ""
      
    },
    selectData: {
      type: Array,
      defalut: []
    }
  },
  data(){
    return {
      showmenu:false,
      suffix_icon:'iconfont iconxia'
    }
  },
  methods:{
    toggleShowMenu(){
      this.showmenu = !this.showmenu
      if(this.showmenu){
        this.suffix_icon = 'iconfont iconGroup-'
      }else{
        this.suffix_icon = 'iconfont iconxia'
      }
    },
    setVal(val){
      this.value =val
    }
  }
};
</script>

<style scoped>
  .c-select-group {
    position: relative;
  }
  .c-show-drop-enter-active, .c-show-drop-leave-active {
  transition: opacity .2s;
}
.c-show-drop-enter, .c-show-drop-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>