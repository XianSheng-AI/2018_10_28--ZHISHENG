<template>
  <!--评论区的-点赞/回复/踩/举报等行为组件-->
  
  <!--评论底部赞，查看回复-->
  <div class="action-part">
    <!--点赞-->
    <div class="action-like">
      <span class="svg">
        <svg-icon iconClass="icon-dianzan25"></svg-icon>
      </span>
      <span>123{{initData.likeCount}}</span>
    </div>
    <!--查看回复-->
    <div class="action-res" v-if="choicenessBool">
      <span class="svg">
        <svg-icon iconClass="icon-huifu1"></svg-icon>
        <span>查看回复</span>
      </span>
    </div>
    <!--鼠标移上去才会出现的《《《 回复/踩/举报 》》》-->
    <div class="many-res-wrapper">
      <!--回复-->
        <span class="res-com respose-comments">
          <svg-icon iconClass="icon-huifu9"></svg-icon>
          <span>回复</span>
        </span>
      <!--踩-->
        <span class="res-com respose-no-good">
            <svg-icon iconClass="icon-cai5"></svg-icon>
          <span>踩</span>

        </span>
      <!--举报-->
        <span class="res-com respose-inform">
            <svg-icon iconClass="icon-jubao4"></svg-icon>
          <span>举报</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  //必须是数字类型的 required: true
  props:{
    initData : {
      commentType:{
        type : Number
      },
      likeCount:{
        type: Number
      }
    }
  },
  name: "reactor-button-group",
  data() {
    return {
      // choicenessBool:false,
      // likeCount:''
    }
  },
  mounted(){
    //1为精选 0为评论
    console.log(this.initData)
    if(this.initData.commentType===1){
      this.choicenessBool=true
    }
  },

};
</script>

<style lang="stylus" scoped>
.action-part {
  clearFix();
  font-size: 0.875rem;
  /* background: navajowhite */
  padding-left: 2rem;
  margin: 0.4rem 0;
  color: #8590a6;

  .svg {
    .svg-icon {
      fill: #8590a6;
    }
  }

  .action-like {
    float: left;
    padding-right 1.6rem
  }

  .action-res {
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    color: #8590a6;
    float: left;
  }

  .many-res-wrapper {
    .res-com {
      display: inline-block;
      margin-right: 1.6rem;
    }
  }
}
</style>
