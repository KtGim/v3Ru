import { App, defineComponent } from 'vue';
import './index.less';

const Demo = defineComponent({
  name: 'Demo',
  setup() {
    return () => <div class="demo">
      Demo
    </div>
  }
})

Demo.install = function (Vue: any) {
    Vue.component(Demo.name, Demo);
};

export default Demo;