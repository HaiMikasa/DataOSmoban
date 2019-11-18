/** * 作者 ：zn * * 日期 ：2017/01/05 * * 描述 ：公共组件 - 弹窗 */
<template>
  <el-dialog :visible.sync="options.visible" custom-class="myDialog" :before-close="handleClose" :width="options.width"
     :close-on-click-modal="options.modalClose" :closeOnPressEscape="options.escClose"
     :show-close="options.buttonCloseShow" append-to-body>
    <div slot="title" class="dialogTitleBar">
      <i v-if="options.arrow" class="el-icon-arrow-left" @click="options.arrowBack" style="cursor: pointer;margin-left:-90px"></i> {{ options.title }}
    </div>
    <keep-alive>
      <slot v-if="options.keepAlive" name="dialogContent" ref="dialogContent"></slot>
    </keep-alive>
    <slot v-if="!options.keepAlive" name="dialogContent" ref="dialogContent"></slot>

    <!-- <slot slot="footer" ref="dialogFooter"></slot> -->
    <div slot="footer" ref="dialogFooter"></div>
  </el-dialog>
</template>

<script>
  export default {
    props: ['options'],
    name: 'Mdialog',
    components: {},
    data() {
      return {

      };
    },
     
    async mounted() {
      if(!this.options.modalClose){ //是否点击遮罩层关闭 设置默认为false
        this.options.modalClose = false
      }
      /* 拖动 */
      /*const $box = $('.el-dialog__header');

      $box.mousedown(function (event) {
        const old_left = event.pageX;
        const old_top = event.pageY;

        const old_position_left = $(this).parents('.myDialog').position().left;
        const old_position_top = $(this).parents('.myDialog').position().top;

        $(document).mousemove((event) => {
          const new_left = event.pageX;
          const new_top = event.pageY;

          const chang_x = new_left - old_left;
          const change_y = new_top - old_top;

          const new_position_left = old_position_left + chang_x;
          const new_position_top = old_position_top + change_y;
          $('.myDialog').css({
            left: `${new_position_left}px`,
            top: `${new_position_top}px`,
          });
        });
        $(document).mouseup(() => {
          $(document).off('mousemove');
        });
      });*/
    },
    methods: {
      getRefs(refName) {
        if (this.$refs[refName]) { return this.$refs[refName][0]; }
        throw new Error(`the control ${refName} is undefined !`);
      },
      handleClose(done) {
        if (this.options.closeDia) {
          this.$confirm('是否确认关闭,若确认关闭您所操作的内容将不会保存', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$emit('closeDia');
          }).catch(() => {});
        } else {
          console.info(this.options);
          done();
        }
      },
    },
  };
</script>

<style>
  .myDialog .dialogTitleBar {
    background-color: #d7dfe4;
    line-height: 36px;
    color: #666666;
    font-size: 1.6rem;
    text-align: center;
  }

  .myDialog .dialogTitleBar {
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    text-align: left;
    text-indent: 2em;
    font-weight: bold;
  }
  .el-dialog{
    width: 539px;
  }
  .bigDialog .el-dialog {
    width: 850px;
  }
  .myDialog .el-dialog__body {
    padding: 20px;
  }

  .myDialog .el-dialog__header {
    padding: 0;
    position: relative;
  }

  .myDialog .el-dialog__headerbtn {
    top: 14px;
    right: 26px;
    font-size: 25px;
    font-weight: bold;
  }

  .myDialog .el-dialog__headerbtn .el-dialog__close {
    color: #2e2d3b;
    font-weight: bold;
  }

  .myDialog .el-dialog__footer {
    padding: 0;
  }
  .myDialog /deep/ .dialog-footer{
    height: 32px;
    text-align: right;
  }
</style>
