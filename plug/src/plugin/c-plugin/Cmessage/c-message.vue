<template>
    <div >
        <div class="msg message" v-show="show" :class="type">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
     props:{
        show:{
            type:Boolean,
            default:false
        },
        text:{
            type:String,
            default:'成功...'
        },
        type:{
            type:String,
            default:'success'
        },
    },
}
</script>

<style scoped>
p {
    padding: 0;
    margin: 0;
}
    .msg {
        /* width: 150px; */
        height: 38px;
        padding: 0 25px;
        border: none;
        border-radius: 4px;
        position: fixed;
        top: 20px;
        left: 50%;
        line-height: 38px;
        transform: translateX(-50%);
        color: #fff;
        font-size: 18px;
    }
    .success {
        background-color:#88ddf5;
        opacity: .2;
    }
    .error {
        background-color: rgb(214, 91, 91);
    }
    .warning {
        background-color: yellow
    }

</style>