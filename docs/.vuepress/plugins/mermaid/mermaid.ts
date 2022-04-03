import { defineComponent, h, onMounted, onUpdated } from "vue";
import Mermaid from "mermaid";
import { isDarkTheme, watchThemeChange } from "./theme";

export default defineComponent({
  name: 'mermaid',
  props: {
    code: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(props) {
    // 保留容器的虚拟节点
    const vnode = h('div', { class: 'mermaid-svg-wrapper' });

    const initializeMermaid = (isDark: boolean) => {
      Mermaid.mermaidAPI.initialize({
        startOnLoad: false,
        // @ts-ignore
        theme: isDark ? 'dark' : 'default'
      });
    };

    // 渲染mermaid内容
    // 1. 删除容器子内容
    // 2. 创建新的DIV持有mermaid
    // 3. 对新的mermaid渲染
    const render = async (isDark: boolean = null) => {
      if (isDark === null) isDark = isDarkTheme();
      initializeMermaid(isDark);
      const node = vnode.el as HTMLDivElement;
      let mermaidHost = document.createElement('div');
      mermaidHost.innerHTML = props.code;
      node.innerHTML = '';
      node.appendChild(mermaidHost);
      Mermaid.init(mermaidHost);
    };

    onMounted(render);

    watchThemeChange(isDark => {
      render(isDark);
    });

    // dev develop
    // @ts-ignore
    if (__VUEPRESS_DEV__) onUpdated(render)

    return () => h('div', { class: 'mermaid-wrapper' }, [vnode]);
  }
});