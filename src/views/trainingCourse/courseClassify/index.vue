<template>
  <div class="course-classify">
    <div class="header">
      <span class="split"></span>
      <span>课程分类</span>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="less" scoped>
.course-classify {
  height: 100%;
  .header {
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .split {
      width: 10px;
      height: 30px;
      background-color: #1890ff;
      display: inline-block;
      margin-right: 20px;
    }
  }
  .content {
    background-color: #ffffff;
    min-height: calc(~'100% - 50px');
    width: 100%;
  }
}
</style>
