<template>
    <div class='c-form-item'>   
      <label  class="c-form-item__label">
        <slot name="label">{{label}}</slot>
      </label>
      <div class="c-form-item-content">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    name:'cFormItem',
    props:{
        label:{
            type:String,
            default:''
        }
    },
    inject:['cForm'],
    methods:{

    },
    mounted(){
        // console.log(this.cForm.disabled);
        console.log(this.$parent);
    }
}
</script>

<style>
.c-form-item {
    display: flex;
    width: 220px;
}
.c-form-item__label {
    width: 100px;
}
    .c-form-item-content {
        flex:1;
    }
</style>