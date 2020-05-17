<template>
    <div>
        <input :type="type" :class="{'.c-input':cinput,'.cfocus':isfocus}" @focus="cfocus()" :value="value" />
    </div>
</template>

<script>
export default {
    name:'c-input',
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String,
            default:''
        },
        vModel:{
            type:String,
            default:''
        }
        
    },
    data(){
        return {
            cinput:true,
            isfocus:{
            type:Boolean,
            default:false
        }
        }
    },
    methods:{
        cfocus(){
            this.isfocus = true
            
        }
    }
}
</script>

<style>
    .c-input {
        border: none;
        width: 120px;
        height: 26px;
        border: 1px solid #cce8eb;
        border-radius: 4px;
    }
    .cfocus {
        border: 2px solid #cce8eb;
    }
</style>