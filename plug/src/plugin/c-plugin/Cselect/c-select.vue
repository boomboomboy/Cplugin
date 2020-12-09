<template>
  <div class="c-select-group" @click="toggleShowMenu">
    <c-input type="text" :disabled='disabled'  v-model="value" readonly :suffix_icon="suffix_icon" />
    
    <transition name="c-show-drop">
      <c-drop-down :dropData="selectData" v-show="showmenu" >
        <slot></slot>
      </c-drop-down>
    </transition>
    
  </div>
</template>

<script>
import bus from '../bus'
export default {
  name: "cSelect",
  props: {
    selectData: {
      type: Array,
      defalut: []
    },
    disabled:Boolean
  },
  data(){
    return {
      showmenu:false,
      suffix_icon:'iconfont iconxia',
      value:''
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
  },
  mounted(){
    bus.$on('select',val=>{
      this.value=val
    })
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