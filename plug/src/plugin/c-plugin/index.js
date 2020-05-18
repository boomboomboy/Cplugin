import Cloading from './Cloading/c-loading.vue'
import Cmsg from './Cmessage/c-message.vue'
import ctable from './Ctable/c-table.vue'
import cinput from './Cinput/c-input.vue'
import cform from './Cform/c-form.vue'
import cinputitem from './CformItem/c-form-item.vue'
import cselect from './Cselect/c-select.vue'
import cdropdown from './Cdropdown/c-drop-down.vue'
// 存储组件列表
const components = [
    ctable,
    cinput,
    cform,
    cinputitem,
    cselect,
    cdropdown
  ]
  let $Cload;let $Cmsg;
export default {
    install:function(Vue){
        components.map(component => Vue.component(component.name,component));
     //   msg插件
        if(!$Cmsg){
           const Cmessage = Vue.extend(Cmsg)
           $Cmsg = new Cmessage({
               el:document.createElement('div')
           })
           document.body.appendChild($Cmsg.$el)
           
        }
        
        $Cmsg.show = false;
        $Cmsg.duration = 2000;
        function timer(){
           let times = setTimeout(()=>{
               $Cmsg.show = false;
               clearTimeout(times)
           },$Cmsg.duration)
        }
        let message = {
            success(text){
               $Cmsg.show = true;
               $Cmsg.text = text;
               $Cmsg.type = 'success';
               timer()
            },
            error(text){
               $Cmsg.show = true;
               $Cmsg.text = text;
               $Cmsg.type = 'error'
               timer()
            },
            warning(text){
               $Cmsg.show = true;
               $Cmsg.text = text
               $Cmsg.type = 'warning'
               timer()
            },
            
        }
        
        if(!Vue.$message){
           Vue.$message = message
        }
        Vue.mixin({
            created(){
               this.$message = Vue.$message
            }
        })
        // loading 插件
        if(!$Cload){
            const Cloadi = Vue.extend(Cloading)
            $Cload = new Cloadi({
                el:document.createElement('div')
            })
            document.body.appendChild($Cload.$el)
            
         }
         $Cload.show = false;

        let loading = {
            show(text){
                $Cload.show = true;
                $Cload.text = text;
            },
            hidden(){
                $Cload.show = false;
            }
        };
        if(!Vue.$Cloading){
            Vue.$Cloading = loading;
        }
        Vue.mixin({
            created(){
                this.$Cloading = Vue.$Cloading
            }
        })
     
    }
}