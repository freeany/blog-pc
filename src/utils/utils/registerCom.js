import tag from '@/components/common/tag/index'
import bgCard from '@/components/common/card/index'
import breadcrumb from '@/components/common/breadcrumb/index'
const components = {
  tag,
  bgCard,
  breadcrumb
}
const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}
export default install