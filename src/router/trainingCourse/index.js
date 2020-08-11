const courseClassify = r => require.ensure([], () => r(require('@/views/trainingCourse/courseClassify/index.vue')), 'courseClassify')
const courseManage = r => require.ensure([], () => r(require('@/views/trainingCourse/courseManage/index.vue')), 'courseManage')

export default [
  {
    path: '/courseClassify',
    name: 'courseClassify',
    component: courseClassify
  },
  {
    path: '/courseManage',
    name: 'courseManage',
    component: courseManage
  }
]
