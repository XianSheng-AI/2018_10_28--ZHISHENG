<template>
  <div class="technologyLabel">
    <!--背景-->
    <!--<div class="bg-part"></div>-->
    <!--内容区-->
    <div class="container">
      <div>
        <h1 class="com-reg title">选择你感兴趣的标签</h1>
        <h6 class="com-reg handLine">知声会为你生成更精准的信息流</h6>
      </div>

      <!--标签盒子-->
      <div class="containerBody">
        <ul class="tag-list">
          <li class="tag-item"
              v-for="(item,index) of tagData"
              :key="item.id"
              :class="{'checked_bg':item.checked}"
          >
            <div>
              <!--标签图片-->
              <div class="tag-img">
                <img :src="item.tagLogoUrl" alt="">
              </div>
              <!--技术类种-->
              <h3 class="tag-name">{{item.tagType}}</h3>
              <div class="add-button" :class="{'checked':item.checked}"  @click="handleFocus(item)">{{showText(item.checked)}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--底部下一步-->
    <div class="foodter">
      <!--<div class="nextBtn">下一步</div>-->
      <div class="svg-wrapper finish">
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect id="shape" height="40" width="150" />
          <div id="text">
            <a href="javascript:;"><span class="spot"></span>完成注册</a>
          </div>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/common/button.css'
  export default {
    name: "technologyLabel",
    data() {
      return {
        secChange:{
          noFocus:'关注',
          yesFocus:'已关注'
        },
        tagData: [
          {
            tagLogoUrl: '../../../static/images/tag-list/android.svg',
            tagType: '安卓',
            checked:false,
            id: 0
          }, {
            tagLogoUrl: '../../../static/images/tag-list/angularjs.svg',
            tagType: 'Angular',
            checked:false,
            id: 1
          }, {
            tagLogoUrl: '../../../static/images/tag-list/aws.svg',
            tagType: '亚马逊',
            checked:false,
            id: 2
          }, {
            tagLogoUrl: '../../../static/images/tag-list/bootstrap.svg',
            tagType: 'bootstrap',
            checked:false,
            id: 3
          }, {
            tagLogoUrl: '../../../static/images/tag-list/c++.svg',
            tagType: 'C++',
            checked:false,
            id: 4
          }, {
            tagLogoUrl: '../../../static/images/tag-list/C.svg',
            tagType: 'C语言',
            checked:false,
            id: 5
          }, {
            tagLogoUrl: '../../../static/images/tag-list/django.svg',
            tagType: 'django',
            checked:false,
            id: 6
          }, {
            tagLogoUrl: '../../../static/images/tag-list/Docker.svg',
            tagType: 'Docker',
            checked:false,
            id: 7
          }, {
            tagLogoUrl: '../../../static/images/tag-list/go.svg',
            tagType: 'GO',
            checked:false,
            id: 8
          }, {
            tagLogoUrl: '../../../static/images/tag-list/hbase.svg',
            tagType: 'hbase',
            checked:false,
            id: 9
          }, {
            tagLogoUrl: '../../../static/images/tag-list/html.svg',
            tagType: 'Html',
            checked:false,
            id: 10
          }, {
            tagLogoUrl: '../../../static/images/tag-list/icon-copy.svg',
            tagType: 'hadoop',
            checked:false,
            id: 11
          }, {
            tagLogoUrl: '../../../static/images/tag-list/icon-spring-boot.svg',
            tagType: 'Spring Boot',
            checked:false,
            id: 12
          }, {
            tagLogoUrl: '../../../static/images/tag-list/ios.svg',
            tagType: 'iOS',
            checked:false,
            id: 13
          }, {
            tagLogoUrl: '../../../static/images/tag-list/java.svg',
            tagType: 'java',
            checked:false,
            id: 14
          }, {
            tagLogoUrl: '../../../static/images/tag-list/jQuery.svg',
            tagType: 'jQuery',
            checked:false,
            id: 15
          }, {
            tagLogoUrl: '../../../static/images/tag-list/kubernetes.svg',
            tagType: 'kubernetes',
            checked:false,
            id: 16
          }, {
            tagLogoUrl: '../../../static/images/tag-list/linux.svg',
            tagType: 'linux',
            checked:false,
            id: 17
          }, {
            tagLogoUrl: '../../../static/images/tag-list/logodjango42234b631760.svg',
            tagType: 'logodjango',
            checked:false,
            id: 18
          }, {
            tagLogoUrl: '../../../static/images/tag-list/mongodb.svg',
            tagType: 'MongoDB',
            checked:false,
            id: 19
          }, {
            tagLogoUrl: '../../../static/images/tag-list/MySQL.svg',
            tagType: 'MySQL',
            checked:false,
            id: 20
          }, {
            tagLogoUrl: '../../../static/images/tag-list/node-js.svg',
            tagType: 'node',
            checked:false,
            id: 21
          }, {
            tagLogoUrl: '../../../static/images/tag-list/nosql.svg',
            tagType: 'nosql',
            checked:false,
            id: 22
          }, {
            tagLogoUrl: '../../../static/images/tag-list/php.svg',
            tagType: 'php',
            checked:false,
            id: 23
          }, {
            tagLogoUrl: '../../../static/images/tag-list/pts.svg',
            tagType: 'pts',
            checked:false,
            id: 24
          }, {
            tagLogoUrl: '../../../static/images/tag-list/python.svg',
            tagType: 'python',
            checked:false,
            id: 25
          }, {
            tagLogoUrl: '../../../static/images/tag-list/react.svg',
            tagType: 'react',
            checked:false,
            id: 27
          }, {
            tagLogoUrl: '../../../static/images/tag-list/redis.svg',
            tagType: 'redis',
            checked:false,
            id: 28
          }, {
            tagLogoUrl: '../../../static/images/tag-list/redis-copy.svg',
            tagType: '指纹码',
            checked:false,
            id: 29
          }, {
            tagLogoUrl: '../../../static/images/tag-list/Ruby.svg',
            tagType: 'RedisCopy',
            checked:false,
            id: 30
          }, {
            tagLogoUrl: '../../../static/images/tag-list/Sass.svg',
            tagType: 'Sass',
            checked:false,
            id: 31
          }, {
            tagLogoUrl: '../../../static/images/tag-list/social-javascript.svg',
            tagType: 'javascript',
            checked:false,
            id: 32
          }, {
            tagLogoUrl: '../../../static/images/tag-list/spark1-copy-copy.svg',
            tagType: 'spark',
            checked:false,
            id: 33
          }, {
            tagLogoUrl: '../../../static/images/tag-list/Tornado.svg',
            tagType: 'Tornado',
            checked:false,
            id: 34
          }, {
            tagLogoUrl: '../../../static/images/tag-list/tornado_o.svg',
            tagType: '指纹码',
            checked:false,
            id: 35
          }, {
            tagLogoUrl: '../../../static/images/tag-list/Vue.js_Logo.svg',
            tagType: 'Vue',
            checked:false,
            id: 36
          }, {
            tagLogoUrl: '../../../static/images/tag-list/webApp.svg',
            tagType: 'webApp',
            checked:false,
            id: 37
          }, {
            tagLogoUrl: '../../../static/images/tag-list/weex.svg',
            tagType: 'weex',
            checked:false,
            id: 38
          }, {
            tagLogoUrl: '../../../static/images/tag-list/安全测试.svg',
            tagType: '安全测试',
            checked:false,
            id: 39
          }, {
            tagLogoUrl: '../../../static/images/tag-list/测试.svg',
            tagType: '测试',
            checked:false,
            id: 40
          }, {
            tagLogoUrl: '../../../static/images/tag-list/大数据.svg',
            tagType: '大数据',
            checked:false,
            id: 41
          }, {
            tagLogoUrl: '../../../static/images/tag-list/功能测试.svg',
            tagType: '功能测试',
            checked:false,
            id: 42
          }, {
            tagLogoUrl: '../../../static/images/tag-list/接口测试.svg',
            tagType: '接口测试',
            checked:false,
            id: 43
          }, {
            tagLogoUrl: '../../../static/images/tag-list/爬虫.svg',
            tagType: '爬虫',
            checked:false,
            id: 44
          }, {
            tagLogoUrl: '../../../static/images/tag-list/数据库oracle.svg',
            tagType: 'oracle',
            checked:false,
            id: 45
          }, {
            tagLogoUrl: '../../../static/images/tag-list/小程序.svg',
            tagType: '小程序',
            checked:false,
            id: 46
          }, {
            tagLogoUrl: '../../../static/images/tag-list/云计算.svg',
            tagType: '云计算',
            checked:false,
            id: 47
          }, {
            tagLogoUrl: '../../../static/images/tag-list/运维.svg',
            tagType: '运维',
            checked:false,
            id: 48
          }, {
            tagLogoUrl: '../../../static/images/tag-list/运维服务.svg',
            tagType: '运维服务',
            checked:false,
            id: 49
          }, {
            tagLogoUrl: '../../../static/images/tag-list/运维工具.svg',
            tagType: '运维工具',
            checked:false,
            id: 50
          }, {
            tagLogoUrl: '../../../static/images/tag-list/自动化.svg',
            tagType: '自动化',
            checked:false,
            id: 51
          }
        ],
        focusData: [
          {
            tagLogoUrl: String,   //图片路径
            tagType: String,    //标签名字
            id: Number        // id
          }
        ]
      }
    },
    computed: {
      showText(){
        return function (val) {
          if(val){
            return this.secChange.yesFocus
          }
          return this.secChange.noFocus
        }
      }
    },
    mounted(){

      // 检测浏览器是否支持svg
      console.log(this.isSupportSVG())
    },
    methods: {
      //这个方法须优化
      handleFocus(item) {
        if(item.checked){
          item.checked=!item.checked

        }else{
          item.checked=!item.checked
        }
      },
      // 检测浏览器是否支持svg
       isSupportSVG() {
        let SVG_NS = 'http://www.w3.org/2000/svg';
        return !!document.createElementNS &&!!document.createElementNS(SVG_NS, 'svg').createSVGRect;
       }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  .technologyLabel
    position: absolute
    margin 0 auto
    z-index: 324
    width: 100%
    background: #39acff
    padding-bottom 4.4rem
    /*height:48rem*/
    /*overflow-y scroll*/

    .container
      margin 2rem auto
      width: 600px
      /*height:20rem*/
      /*background: #ccc*/

      .com-reg
        text-align center
        color #ffffff

        &.title
          margin-bottom 1rem
          font-size 2rem

        &.handLine
          font-size 1rem

      .containerBody
        margin-top 2rem
        width: 100%
        /*height:20rem*/
        background: red

        .tag-list
          .tag-item
            margin 10px
            float: left
            border-radius .3rem
            box-sizing border-box
            width 130px
            padding: 1rem 0
            background: #ffffff
            transition .2s
            /*overflow: hidden*/
            &.checked_bg
              background #a8d8fa
            .tag-img
              margin 0 auto
              /*background: olive*/
              text-align center

              img
                height: 40px

            .tag-name
              margin 0rem 0 .4rem
              text-align center
              font-weight normal
            .add-button
              /*box-sizing border-box*/
              cursor: pointer;
              color #39acff
              /*width 40px*/
              border 1px solid #39acff
              border-radius 1.2rem
              text-align center
              width: 80%
              padding .2rem 0
              margin 0 auto
              background: #ffffff
              -webkit-transition: .2s
              -moz-transition: .2s
              -ms-transition: .2s
              -o-transition: .2s
              transition: all .2s
              &:hover
                background: #39acff
                color #ffffff
              &.checked
                background #39acff
                color #ffffff
    .foodter
      width: 100%
      height: 60px
      background: #ffffff
      position: fixed
      bottom: 0
      overflow: hidden
      border-top: 1px solid #ebebeb;
      box-shadow: 0 5px 20px rgba(26, 26, 26, .1);

      .nextBtn
        text-align center
        color #ffffff
        line-height 34px
        margin 14px auto
        width 140px
        height: 34px
        border-radius 1rem
        background: #39acff
        cursor: pointer;
        -webkit-transition: .2s
        -moz-transition: .2s
        -ms-transition: .2s
        -o-transition: .2s
        transition: .2s

        &:hover
          background #3091d3
</style>
