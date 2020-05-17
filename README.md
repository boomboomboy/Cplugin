# Cplugin 插件库
本插件目前仅支持vue

### npm 下载
		npm i vue-cplugin


### 提示消息message  可传显示文本参数

 		message共有3个方法 为全局注册的插件，可通过this.$message调用 或Vue.$message
 		this.message.success()
 		this.message.warning()
 		this.message.error()

        
### 加载  可传显示文本参数
		this.$Cloading(text)
### c-table 表格 
		props:{
		 tableData:[],//表格数据
		 thList:[] //表头，按序加载
		}
### c-form 表单
		props:[] //空  前面未做配置
### c-form-item
		props:{
		  label:'',
		}
		label通过slot实现  name为'label' 可通过插槽自定义
### c-input
		props:{
		  type:'',
		}
		ssinput的值可通过v-model绑定 type接受原生input类型 暂未二次封装
