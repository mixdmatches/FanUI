export interface AvatarConfigType {
  name?: string // 头像内显示的名字
  gender?: 'male' | 'female' // 根据性别头像背景色会有所不同
  width?: number // 头像宽度
  height?: number // 头像高度
  isRound?: boolean // 是否是圆形头像
  imgSrc?: string // 头像显示图片，imgSrc 优先级比 name 高
  displayName?: string // 头像旁显示的名字，该属性仅当头像位于气泡上方时生效，如果希望当头像位于侧边时生效，我们推荐你通过 top 插槽来放置相关信息
}
