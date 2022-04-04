import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import ElementPlus from 'element-plus'
import VPApp, { globals } from '../vitepress'

export default {
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}