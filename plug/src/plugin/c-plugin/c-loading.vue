<template>
    <div>
        <div class="mask" v-show="show" @click="toggleShow">
            <div class="loading-content">
            <div class="animate">
            </div>
            <div class="text">{{text}}</div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        show:Boolean,
        text:{
            type:String,
            default:'加载中...'
        }
    },
    methods:{
        toggleShow(){
            this.show = false
        }
    }
}
</script>

<style scoped>
    .mask {
        width: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 2;
    }
    .loading-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 100px;
    }
    .text {
        font-size: 18px;
        color: aqua;
    }
</style>