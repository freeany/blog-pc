const requireApi = require.context(
  // 当前目录是api目录, 需要批量获取的文件 相对于当前是目录是 '.'
  '.',
  // 是否查询子目录
  true,
  // 查询文件的后缀名
  /.vue$/
)
let module = []
requireApi.keys().forEach(item => {
  module.push(requireApi(item))
})
export default module