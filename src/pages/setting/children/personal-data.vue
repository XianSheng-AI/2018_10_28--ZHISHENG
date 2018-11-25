<template>
  <div class="personal-data">
    <div class="set-empty-head">
      <div class="">
        <span class="set-con-type">个人资料</span>
        <span class="fRight set-save">保存</span>
      </div>
    </div>
    <!--个人资料-->
    <div class="set-empty-content">
      <div class="set-list-wrapper">
        <ul class="set-list">
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">用户名</span>
              <div class="set-per-box">
                <div class="set-name">
                  <input class="set-inp" type="text" value="蔡先佳"/>
                </div>
              </div>
              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">性别</span>
              <div class="set-radio-box">
                <div class="set-com-hei">
                  <RadioGroup v-model="disabledGroup">
                    <Radio label="男"></Radio>
                    <Radio class="set-sex" label="女"></Radio>
                  </RadioGroup>
                </div>
              </div>
              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">所在行业</span>
              <!--过渡-->
              <div class="fade-wrapper">
                <div class="set-fade-empty">
                  <transition name="fade" mode="in-out">
                    <div class="set-empty-box"
                         v-show="fadeObj.industry_bool"
                         @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                    >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                      <span class="set-add-com">添加所在行业</span>
                    </div>
                  </transition>


                  <transition name="fade" mode="out-in">
                    <!--隐藏盒子-->
                    <div class="set-hide-box"
                         v-show="!fadeObj.industry_bool"
                    >
                    <span class="set-hide-inp">
                       <Select v-model="industryValue" size="large" style="width:100px">
                         <Option v-for="item in industryList" :value="item.value"
                                 :key="item.value">{{ item.label }}</Option>
                       </Select>
                    </span>
                      <span class="set-hide-choose">
                        <span class="set-com-btn set-make-sure"
                              @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                        >确定</span>
                        <span class="set-com-btn set-make-cancel"
                              @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                        >取消</span>
                      </span>
                    </div>
                  </transition>
                </div>
              </div>

              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">职业经历</span>
              <div class="fade-wrapper">
                <!---------------------------------------------------->
                <div class="set-fade-empty">
                  <transition name="fade">
                    <div class="set-empty-box"
                         v-if="fadeObj.job_bool"
                         @click="fadeObj.job_bool=!fadeObj.job_bool"
                    >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                      <span class="set-add-com">添加职业经历</span>
                    </div>
                  </transition>

                  <transition name="fade">
                    <!--隐藏盒子-->

                      <div class="set-hide-box"
                           v-show="!fadeObj.job_bool"
                      >
                        <span class="set-hide-inp">
                          <div>
                            <div class="set-com-inp-box set-com-sty">
                              <input autocomplete="off" role="combobox"
                                     aria-expanded="false" aria-autocomplete="list"
                                     aria-activedescendant="AutoComplete64-0"
                                     ria-haspopup="true" aria-owns="Popover63-content"
                                     class="set-com-input" placeholder="公司或组织名称" value="">
                            </div>
                            <!--set-com-space输入框之间的距离-->
                            <div class="set-com-inp-box set-com-sty set-com-space">
                              <input autocomplete="off" role="combobox"
                                     aria-expanded="false" aria-autocomplete="list"
                                     aria-activedescendant="AutoComplete64-0"
                                     ria-haspopup="true" aria-owns="Popover63-content"
                                     class="set-com-input" placeholder="所在职位（选填）" value="">
                            </div>
                          </div>
                        </span>
                        <span class="set-hide-choose">
                      <span class="set-com-btn set-make-sure"
                            @click="fadeObj.job_bool=!fadeObj.job_bool"
                      >确定</span>
                      <span class="set-com-btn set-make-cancel"
                            @click="fadeObj.job_bool=!fadeObj.job_bool"
                      >取消</span>
                    </span>
                      </div>

                  </transition>
                </div>
                <!--添加填写的行业信息-->
                <div class="set-hide-job">
                  <div class="set-hide-job-empty">
                    <span class="company-name">360集团有限公司</span>
                    &nbsp;·&nbsp;
                    <span class="job-name">技术总监</span>
                  </div>
                </div>
                <!--END-->
              </div>
              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">教育经历</span>
              <div class="fade-wrapper">
                <div class="set-fade-empty">
                  <transition name="fade">
                    <div class="set-empty-box"
                         v-if="fadeObj.industry_bool"
                         @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                    >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                      <span class="set-add-com">添加教育经历</span>
                    </div>
                  </transition>
                  <transition name="fade">
                    <!--隐藏盒子-->
                    <div class="set-hide-box"
                         v-if="!fadeObj.industry_bool"
                    >
                    <span class="set-hide-inp">
                       <Select v-model="industryValue" size="large" style="width:100px">
                         <Option v-for="item in industryList" :value="item.value"
                                 :key="item.value">{{ item.label }}</Option>
                       </Select>
                    </span>
                      <span class="set-hide-choose">
                      <span class="set-com-btn set-make-sure"
                            @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                      >确定</span>
                      <span class="set-com-btn set-make-cancel"
                            @click="fadeObj.industry_bool=!fadeObj.industry_bool"
                      >取消</span>
                    </span>
                    </div>
                  </transition>
                </div>
              </div>
              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">个人介绍</span>
              <div class="set-com-wrapper">
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
              <span class="fRight set-com-svg">
                <svg-icon iconClass="icon-xieyoujian1"></svg-icon>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!--注意---个别栏没有修改0 1 和最后一个-->
<script>
  import {Radio, RadioGroup, Select, Option} from 'iview'

  export default {
    name: "personal-data",
    data() {
      return {
        disabledGroup: '爪哇犀牛',
        fadeObj: {
          // industry_id:0,
          // job_id:1,
          // education_id:2
          industry_bool: true,
          job_bool: true,
          education_bool: true
        },
        industryList: [
          {
            value: '高新科技',
            label: '高新科技'
          },
          {
            value: '互联网',
            label: '互联网'
          },
          {
            value: '电子商务',
            label: '电子商务'
          },
          {
            value: '电子游戏',
            label: '电子游戏'
          },
          {
            value: '计算机软件',
            label: '计算机硬件'
          },
          {
            value: '信息传媒',
            label: '信息传媒'
          },
          {
            value: '出版业',
            label: '出版业'
          },
          {
            value: '电影录音',
            label: '电影录音'
          },
          {
            value: '广播电视',
            label: '广播电视'
          },
          {
            value: '通信',
            label: '通信'
          },
          {
            value: '金融',
            label: '金融'
          },
          {
            value: '银行',
            label: '银行'
          },
          {
            value: '资本投资',
            label: '资本投资'
          },
          {
            value: '证券投资',
            label: '证券投资'
          },
          {
            value: '保险',
            label: '保险'
          },
          {
            value: '信贷',
            label: '信贷'
          },
          {
            value: '财务',
            label: '财务'
          },
          {
            value: '审计',
            label: '审计'
          },
          {
            value: '服务业',
            label: '服务业'
          },
          {
            value: '法律',
            label: '法律'
          },
          {
            value: '餐饮',
            label: '餐饮'
          },
          {
            value: '酒店',
            label: '酒店'
          },
          {
            value: '旅游',
            label: '旅游'
          },
          {
            value: '广告',
            label: '广告'
          },
          {
            value: '公关',
            label: '公关'
          },
          {
            value: '景观',
            label: '景观'
          },
          {
            value: '咨询分析',
            label: '咨询分析'
          },
          {
            value: '市场推广',
            label: '市场推广'
          },
          {
            value: '人力资源',
            label: '人力资源'
          },
          {
            value: '社工服务',
            label: '社工服务'
          },
          {
            value: '养老服务',
            label: '养老服务'
          },
          {
            value: '教育',
            label: '教育'
          },
          {
            value: '高等教育',
            label: '高等教育'
          },
          {
            value: '基础教育',
            label: '基础教育'
          },
          {
            value: '职业教育',
            label: '职业教育'
          },
          {
            value: '幼儿教育',
            label: '幼儿教育'
          },
          {
            value: '特殊教育',
            label: '特殊教育'
          },
          {
            value: '培训',
            label: '培训'
          },
          {
            value: '医疗服务',
            label: '医疗服务'
          },
          {
            value: '临床服务',
            label: '临床服务'
          },
          {
            value: '制药',
            label: '制药'
          },
          {
            value: '保健',
            label: '保健'
          },
          {
            value: '美容',
            label: '美容'
          },
          {
            value: '医疗器械',
            label: '医疗器械'
          },
          {
            value: '生物工程',
            label: '生物工程'
          },
          {
            value: '疗养服务',
            label: '疗养服务'
          },
          {
            value: '护理服务',
            label: '护理服务'
          },
          {
            value: '艺术娱乐',
            label: '艺术娱乐'
          },
          {
            value: '创意艺术',
            label: '创意艺术'
          },
          {
            value: '体育健身',
            label: '体育健身'
          },
          {
            value: '娱乐休闲',
            label: '娱乐休闲'
          },
          {
            value: '图书馆',
            label: '图书馆'
          },
          {
            value: '博物馆',
            label: '博物馆'
          },
          {
            value: '策展',
            label: '策展'
          },
          {
            value: '博彩',
            label: '博彩'
          },
          {
            value: '制造加工',
            label: '制造加工'
          },
          {
            value: '食品饮料业',
            label: '食品饮料业'
          },
          {
            value: '纺织皮革业',
            label: '纺织皮革业'
          },
          {
            value: '服务业',
            label: '服务业'
          },
          {
            value: '烟草业',
            label: '烟草业'
          },
          {
            value: '造纸业',
            label: '造纸业'
          },
          {
            value: '印刷业',
            label: '印刷业'
          },
          {
            value: '化工业',
            label: '化工业'
          },
          {
            value: '汽车',
            label: '汽车'
          },
          {
            value: '家具',
            label: '家具'
          },
          {
            value: '电子电器',
            label: '电子电器'
          },
          {
            value: '机械设备',
            label: '机械设备'
          },
          {
            value: '塑料工业',
            label: '塑料工业'
          },
          {
            value: '金属加工',
            label: '金属加工'
          },
          {
            value: '军火',
            label: '军火'
          },
          {
            value: '地产建筑',
            label: '地产建筑'
          },
          {
            value: '房地产',
            label: '房地产'
          },
          {
            value: '装饰装潢',
            label: '装饰装潢'
          },
          {
            value: '物业服务',
            label: '物业服务'
          },
          {
            value: '特殊建造',
            label: '特殊建造'
          },
          {
            value: '建筑设备',
            label: '建筑设备'
          },
          {
            value: '贸易临售',
            label: '贸易临售'
          },
          {
            value: '零售',
            label: '零售'
          },
          {
            value: '大宗交易',
            label: '大宗交易'
          },
          {
            value: '进出口贸易',
            label: '进出口贸易'
          },
          {
            value: '公共服务',
            label: '公共服务'
          },
          {
            value: '政府',
            label: '政府'
          },
          {
            value: '国防军事',
            label: '国防军事'
          },
          {
            value: '航天',
            label: '航天'
          },
          {
            value: '科研',
            label: '科研'
          },
          {
            value: '给排水',
            label: '给排水'
          },
          {
            value: '水利能源',
            label: '水利能源'
          },
          {
            value: '电力电网',
            label: '电力电网'
          },
          {
            value: '公共管理',
            label: '公共管理'
          },
          {
            value: '环境保护',
            label: '环境保护'
          },
          {
            value: '非营利组织',
            label: '非营利组织'
          },
          {
            value: '开采冶金',
            label: '开采冶金'
          },
          {
            value: '煤炭工业',
            label: '煤炭工业'
          },
          {
            value: '石油工业',
            label: '石油工业'
          },
          {
            value: '黑色金属',
            label: '黑色金属'
          },
          {
            value: '有色金属',
            label: '有色金属'
          },
          {
            value: '土砂石开采',
            label: '土砂石开采'
          },
          {
            value: '地热开采',
            label: '地热开采'
          },
          {
            value: '交通仓储',
            label: '交通仓储'
          },
          {
            value: '邮政',
            label: '邮政'
          },
          {
            value: '物流递送',
            label: '物流递送'
          },
          {
            value: '地面运输',
            label: '地面运输'
          },
          {
            value: '铁路运输',
            label: '铁路运输'
          },
          {
            value: '管线运输',
            label: '管线运输'
          },
          {
            value: '航运业',
            label: '航运业'
          },
          {
            value: '民用航空业',
            label: '民用航空业'
          },
          {
            value: '农林牧渔',
            label: '农林牧渔'
          },
          {
            value: '种植业',
            label: '种植业'
          },
          {
            value: '畜牧业',
            label: '畜牧业'
          },
          {
            value: '林业',
            label: '林业'
          },
          {
            value: '渔业',
            label: '渔业'
          }
        ],
        industryValue: ''
      }
    },
    components: {
      Radio,
      RadioGroup,
      Select,
      Option
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixins.styl'
  /*--通用--*/
  *
    padding: 0
    margin: 0
    border: none

  .fade-enter-active {
    transition: all .2s ease;
  }

  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }

  /*----------*/

  .fRight
    float: right

  /*-----*/
  .personal-data
    position: relative
    font-size .9735rem
    box-sizing border-box
    clearFix()

  .set-empty-head
    width: 100%
    box-sizing border-box
    padding: 1.4rem 2rem
    border-bottom 1px solid #ebebeb
    .set-con-type
      display: inline-block
      color: #1a1a1a
      font-weight 600

  .set-empty-content
    width: 100%
    padding: 0 2rem
    .set-list-wrapper
      .set-item
        -webkit-transition: .5s
        -moz-transition: .5s
        -ms-transition: .5s
        -o-transition: .5s
        transition: .5s
        color: #8590a6
        border-bottom 1px solid #ebebeb
        .set-item-box
          /*padding: 1.8rem 0*/
          clearFix()
          .set-per-box
            height: 4.4rem
            display: inline-block
            .set-name
              padding: 1.58rem 0
              border-radius .2rem
              .set-inp
                width 12rem
                display: block
          .set-radio-box
            display: inline-block
            height: 4.4rem
            width: 12rem
            .set-com-hei
              padding: 1.58rem 0
              .set-sex
                padding-left 3rem
          .set-per-type
            display: inline-block
            padding: 1.58rem 0
            width: 9rem
            float: left
          .fade-wrapper
            position: relative
            display: inline-block
            width: 32rem
            /*background: #ccc*/
            /*height 4.2rem*/
            box-sizing border-box
            /*---------------------------------------*/
            .set-fade-empty
              position: relative
              height:4.4rem
              /*background: #000*/
              .set-empty-box
                /*padding 1.58rem 0*/
                line-height 4.4rem
                display: inline-block
                border-radius .2rem
                cursor: pointer;
                &:hover .set-add-com
                  color: #5b6aff
                &:hover .svg-icon
                  fill: #5b6aff
              .set-add-svg
                display: inline-block
                .svg-icon
                  fill #0084ff
                  font-size 1rem
              .set-add-com
                display: inline-block
                color: #175199

              /*所在行业隐藏盒子*/
              .set-hide-box
                float: right
                padding: 1.2rem 0
                display: inline-block
                position: absolute
                top: 0
                left:0
                .set-hide-inp
                  display: inline-block
                  overflow: hidden
                  .set-com-inp-box
                    width:11.25rem
                    display: inline-block
                    &.set-com-sty
                      padding:.3rem .8rem
                      border 1px solid #ebebeb
                      border-radius .3rem
                      .set-com-input
                        display: inline-block
                        height:1.5rem
                        font-size .875rem
                      &.set-com-space
                        margin-left .6rem
                .set-hide-choose
                  display: inline-block
                  overflow: hidden
                  font-size .875rem
                  .set-com-btn
                    display: inline-block
                    padding:.36rem .6rem
                    background: #ccc
                    border-radius .2rem
                    margin-left .6rem
                    cursor: pointer;
                    &.set-make-sure
                      background: #0084ff
                      border 1px solid #0084ff
                      color: #ffffff
                    &.set-make-cancel
                      color: #8590a6
                      background: #ffffff
                      border 1px solid #8590a6


            .set-com-wrapper
              /*border 1px solid #007fff*/
              border-radius .3rem
              height: 4.4rem
              width: 26rem
              box-sizing border-box
              display: inline-block
              .comment-inp
                position: relative;
                /*padding: .2rem 1rem;*/
                color: #17181a;
                outline: none;
                /*min-height: 1.3em;*/
                padding: 1.58rem 0
                &:before
                  content: attr(placeholder);
                  position: absolute;
                  opacity: .4;
                  pointer-events: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
            .set-hide-job
              /*padding-top 4.6rem*/
              width:32rem
              height:8rem
              background: #ccc
              clearFix()
              .set-hide-job-empty
                color: #1a1a1a
                font-size .9375rem
        .set-com-svg
          display: inline-block
          padding 1.58rem 0


</style>
