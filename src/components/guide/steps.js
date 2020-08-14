export default () => [
  {
    element: '#handler-sidebar',
    popover: {
      title: '侧边栏操作',
      description: '打开或者关闭侧边栏',
      position: 'bottom',
    },
  },
  {
    element: '#handler-breadcrumb',
    popover: {
      title: '面包屑',
      description: '指示当前页位置',
      position: 'bottom',
    },
  },
  {
    element: '#handler-screenfull',
    popover: {
      title: '全屏',
      description: '将页面设置为全屏（部分浏览器可能不支持）',
      position: 'left',
    },
  },
  {
    element: '#handler-personal-center',
    popover: {
      title: '个人中心',
      description: '可以进行设置、个人信息编辑、退出等操作',
      position: 'left',
    },
    padding: 0,
  },
  {
    element: '#handler-tags-view',
    popover: {
      title: '视图标记',
      description: '您访问的页面的历史记录',
      position: 'bottom',
    },
    padding: 0,
  },
];
