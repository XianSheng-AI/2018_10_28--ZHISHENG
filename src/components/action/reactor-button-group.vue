<template>
  <!--评论区的-点赞/回复/踩/举报等行为组件-->
  
  <!--评论底部赞，查看回复-->
  <div class="action-part" @click.stop="handleClick('zan')">
    <!--点赞-->
    <div class="action-like">
      <span class="svg">
        <svg-icon iconClass="icon-dianzan25"></svg-icon>
      </span>
      <span>{{initData.likeCount}}</span>
    </div>
    <!--查看回复-->
    <div class="action-like" v-if="initData.isGood" @click.stop="handleClick('cha')">
      <span class="svg">
        <svg-icon iconClass="icon-huifu1"></svg-icon>
      </span>
      <span>查看回复</span>
    </div>
      <!--回复-->
    <div class="action-like" @click.stop="handleClick('hui')">
      <span class="svg">
        <svg-icon iconClass="icon-huifu9"></svg-icon>
      </span>
      <span>回复</span>
    </div>
      <!--踩-->
    <div class="action-like" @click.stop="handleClick('cai')">
      <span class="svg">
        <svg-icon iconClass="icon-cai5"></svg-icon>
      </span>
      <span>{{staticData.cai}}</span>
    </div>
      <!--举报-->
    <div class="action-like" @click.stop="handleClick('ju')">
      <span class="svg">
        <svg-icon iconClass="icon-jubao4"></svg-icon>
      </span>
      <span>举报</span>
    </div>
  </div>
</template>

<script>
export default {
  //必须是数字类型的 required: true
  props:{

    initData : {
      likeCount:{
        type : Number,
        require:true
      },
      isGood:{
        type : Boolean,
      }
    }
  },
  name: "reactor-button-group",
  data() {
    return {
      staticData:{
        //赞
        zan:'赞',
        zanBool:true,
        //踩
        cai:'踩',
        caiBool:true
      },
    }
  },
  mounted(){

  },
  methods:{
    handleClick(val){
      if(val==='zan'){
        console.log(val)
        if(this.staticData.zanBool){

          this.$set(this.initData,'likeCount',++this.initData.likeCount)
          console.log(this.initData.likeCount)
        }else{

          this.$set(this.initData,'likeCount',--this.initData.likeCount)
          console.log(this.initData.likeCount)
        }
        this.staticData.zanBool=!this.staticData.zanBool;
      }else if(val==='cai'){
        if(this.staticData.caiBool){
          this.$set(this.staticData,'cai','取消踩')
        }else{
          this.$set(this.staticData,'cai','踩')
        }
        this.staticData.caiBool=!this.staticData.caiBool
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
.action-part {
  clearFix();
  font-size: 0.875rem;
  margin: 0.4rem 0 0 2rem;
  color: #8590a6;

  .svg {
    .svg-icon {
      fill: #8590a6;
    }
  }
  .action-like {
    float: left;
    margin-right 1.6rem
    cursor: pointer;
    &:hover{
      color: #717e97
    }
    &:hover .svg-icon{
      fill: #717e97
    }
  }
}
</style>
