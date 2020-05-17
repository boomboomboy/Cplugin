<template>
  <div>
      <form class="cform">
          <slot></slot>
      </form>
  </div>
</template>

<script>
export default {
    name:'cForm',
    props:{
        model:Object,
        disabled:{
            type:Boolean,
            default:false
        }
    },
    provide() {
      return {
        cForm: this
      };
    },
    data(){
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .cform {
        display: flex;
    }
</style>