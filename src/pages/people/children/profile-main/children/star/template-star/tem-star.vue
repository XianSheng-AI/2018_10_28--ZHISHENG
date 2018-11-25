<template>
  <div class="star-wapper">
    <ul class="star-ul">
      <li class="star-ul-li">
        <div class="star-user-info">
          <div class="star-user-img">
            <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
          </div>
          <div class="star-user-content">
            <h5 class="star-name">开心就好</h5>
            <div class="star-meta">
              <span class="sta star-desc">前端</span>
              <span class="sta star-time">12月18日&nbsp;19:58</span>
            </div>
          </div>
        </div>
        <div class="star-content">
          <span class="content">👉👉👉企鹅云羊毛继续开车啦：最低至6元每月，最多8元撸41个月，美滋滋。
            1.想直接买的人，上车地址https://0x7.me/d6Ha网页链...</span>
        </div>
        <div class="star-action">
          <ul class="star-action-ul">
            <li class="star-action-ul-li">
              <div class="lik star-like-box">
                <svg-icon iconClass="icon-dianzan28"></svg-icon>
                <span class="star-cou star-like">87</span>
              </div>
            </li>
            <li class="star-action-ul-li">
              <div class="lik star-comment-box">
                <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                <span class="star-cou star-like">66</span>
              </div>
            </li>
            <li class="star-action-ul-li">
              <div class="lik star-transmit-box">
                <svg-icon iconClass="icon-emizhifeiji1"></svg-icon>
                <span class="star-cou star-transmit">28</span>
              </div>
            </li>
          </ul>
        </div>
        <!--评论-->
        <div class="comment">
          <div class="comment-empty">
            <div class="comment-form">
              <div class="comment-form-box">
                <span class="comment-head-img">
                  <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
                </span>
                <div class="comment-inp-box">
                  <div placeholder="输入评论..."
                       contenteditable="true"
                       spellcheck="false"
                       class="comment-inp"
                       :class="{'empty':!!hasWord}"
                       v-model="hasWord"
                  ></div>
                </div>

              </div>
              <div class="comment-option">
                <div class="comment-option-left">
                  <span class="comment-same comment-face">
                    <div class="comment-face-svg">
                      <svg-icon iconClass="icon-biaoqing"></svg-icon>
                    </div>
                    <span class="comment-s">表情</span>
                  </span>
                  <span class="comment-same comment-img">
                    <div class="comment-face-svg">
                      <svg-icon iconClass="icon-tupian7"></svg-icon>
                    </div>
                    <span class="comment-s">图片</span>
                  </span>
                </div>
                <div class="comment-option-right">
                  <div></div>
                  <span class="comment-option-right-btn">评论</span>
                </div>
              </div>
            </div>
            <div class="comment-list">
              <div class="list-item">
                <div class="item">
                  <div class="user-img-box">
                    <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
                  </div>
                  <div class="content-box">
                    <div class="content-owner">
                      <div class="info-wrapper">
                        <a class="user-name" href="#">一米八的萝卜</a>
                      </div>
                      <div class="user-position">站长@掘金</div>
                    </div>
                    <div class="content-text">文章评论很多那种拼团的小广告，很影响阅读体验，希望能出一个举报功能或者有人能清除一下😳。</div>
                    <div class="content-time">
                      <time datetime="2018-11-05T02:51:24.940Z" title="Mon Nov 05 2018 10:51:24 GMT+0800 (中国标准时间)" class="time">44分钟前</time>
                      <div class="content-action-box">
                        <div class="action-like">
                          <svg-icon  iconClass="icon-dianzan28"></svg-icon>
                          <span class="action-sty action-like-count">546</span>
                        </div>
                        <div class="action-comment">
                          <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                          <span class="action-sty action-comment-count">66</span>
                        </div>
                      </div>
                    </div>
                    <div class="res-user-box">
                      <div class="res-item">
                        <div class="posi-flex">
                          <div class="user-img-box">
                            <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                          </div>
                          <div class="content-box">
                            <div class="content-owner">
                              <div class="info-wrapper">
                                <a class="user-name" href="#">一米八的萝卜</a>
                              </div>
                              <!--<div class="user-position">站长@掘金</div>-->
                            </div>
                            <div class="content-text">文章评论很多那种拼团的小广告，很影响阅读体验，希望能出一个举报功能或者有人能清除一下😳。</div>
                            <div class="content-time">
                              <time datetime="2018-11-05T02:51:24.940Z" title="Mon Nov 05 2018 10:51:24 GMT+0800 (中国标准时间)" class="time">44分钟前</time>
                              <div class="content-action-box">
                                <div class="action-like">
                                  <svg-icon  iconClass="icon-dianzan28"></svg-icon>
                                  <span class="action-sty action-like-count">546</span>
                                </div>
                                <div class="action-comment">
                                  <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                                  <span class="action-sty action-comment-count">66</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><div class="res-item">
                      <div class="posi-flex">
                        <div class="user-img-box">
                          <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
                        </div>
                        <div class="content-box">
                          <div class="content-owner">
                            <div class="info-wrapper">
                              <a class="user-name" href="#">一米八的萝卜</a>
                            </div>
                            <!--<div class="user-position">站长@掘金</div>-->
                          </div>
                          <div class="content-text">文章评论很多那种拼团的小广告，很影响阅读体验，希望能出一个举报功能或者有人能清除一下😳。</div>
                          <div class="content-time">
                            <time datetime="2018-11-05T02:51:24.940Z" title="Mon Nov 05 2018 10:51:24 GMT+0800 (中国标准时间)" class="time">44分钟前</time>
                            <div class="content-action-box">
                              <div class="action-like">
                                <svg-icon  iconClass="icon-dianzan28"></svg-icon>
                                <span class="action-sty action-like-count">546</span>
                              </div>
                              <div class="action-comment">
                                <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                                <span class="action-sty action-comment-count">66</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div class="res-item">
                        <div class="posi-flex">
                          <div class="user-img-box">
                            <svg-icon iconClass="icon-gugediqiu1"></svg-icon>
                          </div>
                          <div class="content-box">
                            <div class="content-owner">
                              <div class="info-wrapper">
                                <a class="user-name" href="#">一米八的萝卜</a>
                              </div>
                              <!--<div class="user-position">站长@掘金</div>-->
                            </div>
                            <div class="content-text">文章评论很多那种拼团的小广告，很影响阅读体验，希望能出一个举报功能或者有人能清除一下😳。</div>
                            <div class="content-time">
                              <time datetime="2018-11-05T02:51:24.940Z" title="Mon Nov 05 2018 10:51:24 GMT+0800 (中国标准时间)" class="time">44分钟前</time>
                              <div class="content-action-box">
                                <div class="action-like">
                                  <svg-icon  iconClass="icon-dianzan28"></svg-icon>
                                  <span class="action-sty action-like-count">546</span>
                                </div>
                                <div class="action-comment">
                                  <svg-icon iconClass="icon-wodepinglun"></svg-icon>
                                  <span class="action-sty action-comment-count">66</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--<div class="res-item"></div>-->
                      <!--<div class="res-item"></div>-->
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "star",
    data() {
      return {
        data:null,
        hasWord:''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /*@import "~@/common/stylus/mixins.styl"*/
  @import "~@/common/stylus/mixins.styl"
  .star-wapper
    width 100%
    /*height:20rem*/
    /*background: #555*/
    .star-ul
      width:100%

      .star-ul-li
        width:100%
        display flex
        flex-direction column
        align-items  center
        justify-content:center
        .star-user-info
          width: 100%
          /*height: 2.82rem*/
          /*background: aqua*/
          padding:.8rem 0 .4rem 0
          .star-user-img
            padding-right .8rem
            float left
            .svg-icon
              font-size 2.375rem
          .star-user-content
            float: left
            width:14rem
            .star-name
              width:100%
              font-size .9375rem
            .star-meta
              font-size .875rem
              width:100%
              .sta
                width: 100%
        .star-content
          /*background: violet*/
          width:83.5%

          /*height:12rem*/
          .content
            font-size .9375rem
            display: block
            padding:.1rem 0 .4rem 0
        .star-action
          height:2.6rem
          width:100%
          /*background: burlywood*/
          .star-action-ul
            display: flex
            justify-content:center
            border-bottom 2px #F4F5F5 solid
            .star-action-ul-li
              float: left
              padding: 0 .6rem/*width: 33.333333333333333%*/
              height: 100%

              /*background: #888*/
              margin:0 4rem

              .lik
                text-align center
                width:100%
                /*background aqua*/
                margin 0 auto
                line-height 2.6rem
                .svg-icon
                  fill: #8590a6
                  font-size .9375rem
                /*font-size .875rem*/
                .star-cou
                  font-size .9375rem
                  color #8590a6

        .comment
          width:100%
          display: none
          /*height:10rem*/
          /*background: burlywood*/
          clearFix()
          .comment-empty
            width: 100%
            height: 100%
            /*background: blue*/
            margin:0 auto
            clearFix()
            /*overflow: hidden*/
            .comment-form
              /*width:35rem*/
              /*width:35.5rem*/
              /*height:6rem*/
              background: #fafbfc
              margin:1rem auto
              padding: .8rem .8rem
              border-radius .3rem
              /*display: flex*/
              /*justify-content: center*/
              /*align-items center*/
              /*position: relative*/
              clearFix()

              .comment-form-box
                width:100%
                height:2rem
                /*float: left*/
                //clearFix()
                /*background: burlywood*/
                .comment-head-img
                  display: inline-block
                  padding:0 .2rem 0 0
                  /*background: violet*/
                  .icon-gugediqiu1
                    font-size 2rem
                .comment-inp-box
                  border 1px solid #007fff
                  float: right
                  border-radius .3rem
                  width:34.3rem
                  display: block
                  .comment-inp
                    //clearFix()
                    /*display: block*/
                    position: relative;
                    padding: .2rem 1rem;
                    /*font-size: 1.083rem;*/
                    line-height: 1.7;
                    color: #17181a;
                    outline: none;
                    min-height: 1.3em;
                    /*float: right*/
                    /*width: 91%*/
                    /*height: 100%*/
                    /*padding 0 0 .2rem .8rem*/
                    /*background: aquamarine*/
                    &:before
                      content: attr(placeholder);
                      position: absolute;
                      opacity: .4;
                      pointer-events: none;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                      user-select: none;
                      &:not(.empty):before
                        display: none

              .comment-option
                clear both
                float: right
                width:91.2%
                height:2.9rem
                clearFix()
                /*background: cadetblue*/
                .comment-option-left
                  /*width:8rem*/
                  ///*height: 44%*/
                  /*background: thistle*/
                  margin:.4rem 0
                  padding:.4rem
                  float left
                  /*cursor: pointer;*/

                  .comment-same
                    cursor: pointer;
                    display: inline-block
                    /*width:rem*/
                    /*height:2rem*/
                    /*background: goldenrod*/
                    padding:.4rem
                    .comment-face-svg
                      float: left;
                    .icon-biaoqing
                      fill #4c65fb
                      font-size 1.2rem
                    .comment-s
                      color: #4c65fb
                      display: inline-block
                      font-size .8rem
                    /*background: fuchsia*/
                    .icon-tupian7
                      fill #4c65fb
                      font-size 1.2rem
                .comment-option-right
                  float: right;
                  width:10rem
                  height:2.2rem
                  padding 0.8rem 0 0 0
                  /*background: greenyellow*/
                  .comment-option-right-btn
                    float: right
                    display: inline-block
                    padding:.4rem 1rem
                    border-radius .4rem
                    background: #027fff
                    color: #f4f5f5
                    cursor: pointer;
                    transition .3s
                    &:hover
                      background #0371df


            .comment-list
              width: 91.6%
              /*height:20rem*/
              /*background: #ccc*/
              margin: 0 1.666rem 0 3.5rem
              .list-item
                &:not(last-children)
                  margin-bottom 1.333333rem
                .item
                  /*height:10rem*/
                  /*background: aquamarine*/
                  display: flex
                  padding-bottom .6rem
                  .user-img-box
                    /*margin-right .rem*/
                    .icon-gugediqiu1
                      font-size 2rem
                  .content-box
                    /*clear: both*/
                    /*background: red*/
                    margin-left: .833rem;
                    -webkit-box-flex: 1;
                    -ms-flex: 1 1 auto;
                    flex: 1 1 auto;
                    /*width: 90%*/
                    height:100%
                    /*background: bisque*/
                    .content-owner
                      width:100%
                      /*background-color: #ccc*/
                      display: flex
                      .user-name
                        flex:1 1 auto
                        font-size .9rem
                      .user-position
                        color: #8a9aa9;
                        font-size: .9rem;
                        margin-left: 4px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        max-width: 16rem;
                    .content-text
                      margin-top: .4rem;
                      font-size: .9rem;
                      line-height: 1.4rem;
                      white-space: pre-wrap;
                      color: #505050;
                    .content-time
                      width:100%
                      padding-top .3rem
                      display: flex
                      .time
                        color: #8a9aa9
                        font-size .9rem
                      .content-action-box
                        /*width:6rem*/
                        /*background: aqua*/
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        margin-left: auto;
                        min-width: 8.8rem;
                        color: #8a93a0;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        .action-sty
                          color: #8a93a0
                          font-size .8rem

                  .res-user-box
                    margin: 1rem 0;
                    padding: 0 0 0 .8rem;
                    background-color: #fafbfc;
                    border-radius: 3px;
                    //clearFix()
                    clear: both
                    margin-top .6rem
                    /*height:10rem*/
                    /*background: wheat*/
                    .res-item
                      padding .8rem .8rem 0 0
                      /*background: darkturquoise*/
                      &:not(:last-child) .content-box
                        border-bottom: 1px solid #f1f1f1;
                      .posi-flex
                        display: flex
                        .content-box
                          padding-bottom 1rem

</style>
