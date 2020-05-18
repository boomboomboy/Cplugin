<template>
  <div class="c-input-group">
    <input
      :type="type"
      :class="{'c-input':cinput,'cfocus':isfocus}"
      :value="value"
      :readonly="readonly"
    />
    <div class="prefix">
      <i :class="prefix_icon"></i>
    </div>
    <div class="suffix">
      <i :class="suffix_icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    suffix_icon: {
      type: String,
      default: ""
    },
    prefix_icon:{
        type: String,
        default: ""
    }
  },
  data() {
    return {
      cinput: true,
      isfocus: {
        type: Boolean,
        default: false
      }
    };
  },
  methods: {
    
  }
};
</script>

<style>
.c-input-group {
  position: relative;
  cursor: pointer;
}
.c-input {
    -webkit-appearance:none;
  -moz-appearance: none;
  width: 150px;
  height: 26px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 8px;
}
.c-input:focus {
    outline: 1px solid #cce8eb;
}
.c-select-group .c-input{
    cursor: pointer;
  }

.prefix,
.suffix {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
}
.suffix {
  right: 5px;
}
.prefix {
  left: 5px;
}
</style>