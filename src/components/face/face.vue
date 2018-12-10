<template>
    <span class="face-svg">
      <span @click="isShow()">
        <svg-icon :class="{'change':showBool}" iconClass="icon-biaoqing14"></svg-icon>
      </span>

      <!--表情盒子-->
      <div class="face-show" v-show="showBool">
        <div class="face-all">
          <div class="face-all-wrapper">
            <ul>
              <!--<vue-scroll>-->
              <li class="face-item" v-for="(item,index) of faceImgData">
                <div class="face-empty">
                  <img class="face-gif" :src="item.url" alt="" @click="isShow(item.url)">
                </div>
                <h6 class="face-type">{{item.title}}</h6>
              </li>
              <!--</vue-scroll>-->
             </ul>
          </div>
          <!--小三角-->
          <span class="Popover-arrow Popover-arrow--bottom" style="left: 15px; top:22px"></span>
        </div>
      </div>
      <!--选中表情后盒子-->
      <div class="chooseAfter" v-if="cgooseShowBool">

        <div class="showFace">
          <h2>
            <span @click="closeShow">
              <svg-icon iconClass="icon-guanbi4"></svg-icon>
            </span>
          </h2>
          <img class="faceGif" :src="chooseUrl" alt="">
        </div>
        <!--小三角-->
        <span class="small-triangle small-triangle--bottom" style="left: 75px; top:168px"></span>
      </div>
    </span>
</template>

<script>
  import {apiFaceGif} from '@/request/api.js'
    export default {
        name: "face",
        data() {
            return {
              faceImgData:null, //评论表情数据
              showBool:false,
              chooseUrl:'',
              cgooseShowBool:false
            }
        },
      mounted() {
          this.initFace();
      },
      methods:{
        initFace(){
          apiFaceGif().then(res=>{
            this.faceImgData=res;
          })
        },
        isShow(url){
          if(url){
            this.chooseUrl=url;
            if(!this.cgooseShowBool){
              this.cgooseShowBool=true;
            }
          }
          this.showBool=!this.showBool;
        },
        closeShow(){
          this.cgooseShowBool=!this.cgooseShowBool;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .face-svg
    position: absolute
    bottom 7px
    right 15.8%
    cursor: pointer;
    .svg-icon
      fill #646f83
      font-size 1.5rem
      &.change
        fill #2894f8

    .face-show
      position: relative
      .face-all
        .Popover-arrow
          z-index 1000000000
          position: absolute;
          overflow: hidden;
          pointer-events: none;
          &:after
            content: "";
            position: absolute;
            box-sizing: border-box;
            width: 24px;
            height: 24px;
            margin: 11px 0 0 0;
            border: 1px solid #ebebeb;
            background: #ffffff;
            transform: rotate(45deg);
            pointer-events: auto;
          &.Popover-arrow--bottom
            width: 32px;
            height: 16px;
            margin-top: -2px;
            transform: translate(-50%,-100%);
        .face-all-wrapper
          border: 1px solid #ebebeb;
          border-radius: 4px;
          box-shadow: 0 5px 20px rgba(26,26,26,.1);
          z-index: 1000000;
          background: #ffffff
          overflow-y scroll
          position: relative
          position: absolute
          top 1.2rem
          right -11.7rem
          width 408px
          cursor: default;
          height 208px
          .face-item

            width 48px
            padding 8px
            text-align center
            float: left
            .face-empty
              .face-gif
                width: 48px;
                height: 48px;
                padding-bottom: 4px;
                display: block
            .face-type
              width: 48px;
              line-height: 18px;
              font-size: 12px;
              color: #a9a9a9;

    .chooseAfter
      position: absolute
      top -175px
      left -60px
      width:140px
      height:150px
      background: #ffffff
      border: 1px solid #ebebeb;
      border-radius: 4px;
      box-shadow: 0 5px 20px rgba(26,26,26,.1);
      .showFace
        cursor: default;
        .faceGif
          width 100px
          height: 100px
          display: block
          /*background: #000*/
          padding:10px 20px 0
        h2
          padding:8px 8px 0
          .svg-icon
            fill #333333
            float: right
            font-size .7rem
      .small-triangle
        z-index 1000000000
        position: absolute;
        overflow: hidden;
        pointer-events: none;
        &:after
          content: "";
          position: absolute;
          box-sizing: border-box;
          width: 24px;
          height: 24px;
          margin: -19px 0 0 0;
          border: 1px solid #ebebeb;
          background: #ffffff;
          transform: rotate(45deg);
          pointer-events: auto;
        &.small-triangle--bottom
          width: 32px;
          height: 16px;
          margin-top: -2px;
          transform: translate(-50%,-100%);
</style>
