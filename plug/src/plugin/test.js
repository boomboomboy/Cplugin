let test = {}
test.install = function(Vue,option){
    Vue.prototype.$message = 'csj 的第一个插件'
}
export default test