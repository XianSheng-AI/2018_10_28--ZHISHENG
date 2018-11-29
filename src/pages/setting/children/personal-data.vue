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
              <!--<span class="fRight set-com-svg">-->
              <!--<svg-icon iconClass="icon-xieyoujian1"></svg-icon>-->
              <!--</span>-->
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
              <!--<span class="fRight set-com-svg">-->
              <!--<svg-icon iconClass="icon-xieyoujian1"></svg-icon>-->
              <!--</span>-->
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">所在行业</span>
              <!--过渡-->
              <div class="fade-wrapper">
                <div class="set-fade-empty">
                  <!--<transition name="fade" mode="in-out">-->
                  <!--v-show="fadeObj.industry_bool"-->
                  <div class="set-empty-box"

                       v-if="fadeObj.industry_show_add_bool"
                       @click="setShowBox('industry')"
                  >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                    <span class="set-add-com">添加所在行业</span>
                  </div>
                  <!--选好行业选择后且有值出现的框-->
                  <div class="industry-suc" v-if="fadeObj.industry_show_suc_bool">
                    <span class="industry">{{formData.industry}}</span>
                  </div>
                  <!--</transition>-->
                  <!--<transition name="fade" mode="out-in">-->
                  <!--隐藏盒子-->
                  <div class="set-hide-box"
                       v-if="fadeObj.industry_show_input_bool"
                  >
                    <div class="set-hide-inp">
                      <!--<div class="field-sec-wrapper-empty set-hov"-->
                      <!--选择框组件通用-->
                      <div class="select-wrapper"
                           @click="controlSelectIndustry"
                      >
                        <div class="set--select">
                          <span ref="industryId" class="set-select--type">信息传媒</span>
                          <span class="set-com-choose-svg">
                                  <svg-icon iconClass="icon-ICON-"></svg-icon>
                                </span>
                        </div>
                      </div>
                      <select-box
                        ref="industryRef"
                        :selectBox_data="componentsObj.SelectBox_industry"
                        @reciveMe="industryMethod"
                      ></select-box>
                    </div>
                    <span class="set-hide-choose">
                        <choose-btn
                          :chooseData="componentsObj.ChooseBtn_industry"
                          @chooseMe="industryBtnMethod"
                        ></choose-btn>
                      </span>
                  </div>
                  <!--</transition>-->
                </div>
              </div>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">职业经历</span>
              <div class="fade-wrapper">
                <!---------------------------------------------------->
                <div class="set-fade-empty">
                  <!--<transition name="fade">-->
                  <div class="set-empty-box"
                       v-if="fadeObj.job_show_add_bool"
                       @click="setShowBox('job')"
                  >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                    <span class="set-add-com">添加职业经历</span>
                  </div>
                  <!--</transition>-->

                  <!--<transition name="fade">-->
                  <!--隐藏盒子-->
                  <div class="set-hide-box"
                       v-show="fadeObj.job_show_input_bool"
                  >
                        <span class="set-hide-inp">
                          <div>
                            <div class="set-com-inp-box set-com-sty">
                              <input autocomplete="off" role="combobox"
                                     aria-expanded="false" aria-autocomplete="list"
                                     aria-activedescendant="AutoComplete64-0"
                                     ria-haspopup="true" aria-owns="Popover63-content"
                                     class="set-com-input" placeholder="公司或组织名称"
                                     value=""
                                     v-model="formDataReady.job.company"
                                     ref="companyRef"
                                     @input="handelInput('company','companyRef')"

                              >
                            </div>
                            <!--set-com-space输入框之间的距离-->
                            <div class="set-com-inp-box set-com-sty set-com-space">
                              <input autocomplete="off" role="combobox"
                                     aria-expanded="false" aria-autocomplete="list"
                                     aria-activedescendant="AutoComplete64-0"
                                     ria-haspopup="true" aria-owns="Popover63-content"
                                     class="set-com-input" placeholder="所在职位（选填）"
                                     value=""
                                     v-model="formDataReady.job.work"
                                     ref="workRef"
                                     @input="handelInput('work','workRef')"
                              >
                            </div>
                          </div>
                        </span>
                    <span class="set-hide-choose">
                        <choose-btn
                          :chooseData="componentsObj.ChooseBtn_job"
                          @chooseMe="jobBtnMethod"
                        ></choose-btn>
                    </span>
                  </div>

                  <!--</transition>-->
                </div>
                <!--添加填写的职业信息-->
                <div class="set-hide-job" v-if="formData.job.length">
                  <!--循环个数-->
                  <div class="job-item" v-for="(item,index) of formData.job" :key="index">
                    <div class="job-empty">
                      <div class="set-com-job company-box">
                        <span class="company-svg">
                          <svg-icon iconClass="icon-gongsi4"></svg-icon>
                        </span>
                        <span class="company-name">{{item.company}}</span>
                      </div>
                      <span v-if="item.work">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                      <div class="set-com-job job-box" v-if="item.work">
                        <span class="job-svg">
                          <svg-icon iconClass="icon-zhiwei1"></svg-icon>
                        </span>
                        <span class="job-name">{{item.work}}</span>
                      </div>
                      <!--关闭图标-->
                      <div class="close-svg">
                        <svg-icon iconClass="icon-guanbi1"></svg-icon>
                      </div>
                    </div>
                  </div>
                </div>
                <!--END-->
              </div>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">教育经历</span>
              <div class="fade-wrapper">
                <div class="set-fade-empty edu-hei">
                  <!--<transition name="fade">-->
                  <div class="set-empty-box"
                       v-if="fadeObj.education_show_add_bool"
                       @click="setShowBox('edu')"
                  >
                      <span class="set-add-svg">
                        <svg-icon iconClass="icon-tianjia4"></svg-icon>
                      </span>
                    <span class="set-add-com">添加教育经历</span>
                  </div>
                  <!--</transition>-->
                  <!--<transition name="fade">-->
                  <!--隐藏盒子-->
                  <div class="set-hide-box"
                       v-if="fadeObj.education_show_input_bool"
                  >
                    <div class="field-content">
                      <div class="field-fir">
                        <!--1-->
                        <div class="field-fir-wrapper">
                          <div class="field-fir-wrapper-empty">
                            <input class="set-com-input"
                                   placeholder="学校或教育机构名" type="text" value=""
                                   ref="schoolRef"
                                   v-model="formDataReady.education.school"
                                   @input="handelInput('school','schoolRef')"

                            >
                          </div>
                        </div>
                        <!--2-->
                        <div class="field-fir-wrapper">
                          <div class="field-fir-wrapper-empty">
                            <input class="set-com-input" placeholder="专业方向（选填）" type="text"
                                   v-model="formDataReady.education.profession"
                                   ref="professionRef"
                                   @input="handelInput('profession','professionRef')"
                            >
                          </div>
                        </div>
                        <!--3-->
                        <div class="field-fir-wrapper">
                          <div class="field-fir-wrapper-empty set-hov"
                               @click="controlSelectLevel"
                          >
                            <div class="set-com-level">
                              <span class="set-com-level-type"
                                    ref="eduId"
                                    v-model="formDataReady.education.edu_back"

                              >本科</span>
                              <span class="set-com-choose-svg">
                                  <svg-icon iconClass="icon-ICON-"></svg-icon>
                                </span>
                            </div>
                          </div>
                          <!--隐藏select-->
                          <select-box
                            ref="eduRef"
                            :selectBox_data="componentsObj.SelectBox_edu"
                            @reciveMe="eduMethod"
                          ></select-box>

                        </div>
                      </div>
                      <div class="field-sec">
                        <!--sec-1-->
                        <div class="field-sec-wrapper">
                          <div class="field-sec-wrapper-empty set-hov"
                               @click="controlSelectGoSchool"
                          >
                            <div class="set-com-year">
                              <!--v-model="formDataReady.education.goSchoolTimer"-->
                              <span class="set-com--type"
                                    ref="goId"

                              >入学年份</span>
                              <span class="set-com-choose-svg">
                                  <svg-icon iconClass="icon-ICON-"></svg-icon>
                                </span>
                            </div>
                          </div>
                          <select-box
                            ref="goRef"
                            :selectBox_data="componentsObj.SelectBox_year"
                            @reciveMe="goMethod"
                          ></select-box>
                        </div>
                        <!--sec-2-->
                        <div class="field-sec-wrapper">
                          <div class="field-sec-wrapper-empty set-hov"
                               @click="controlSelectLeaveSchool"
                          >
                            <div class="set-com-year">
                              <!--v-model="formDataReady.education.leaveSchoolTimer"-->
                              <span class="set-com--type"
                                    ref="leaveId"
                              >毕业年份</span>
                              <span class="set-com-choose-svg">
                                  <svg-icon iconClass="icon-ICON-"></svg-icon>
                                </span>
                            </div>
                          </div>
                          <select-box
                            ref="leaveRef"
                            :selectBox_data="componentsObj.SelectBox_year"
                            @reciveMe="leaveMethod"
                          ></select-box>
                        </div>
                        <!--sec-3-btn-->
                        <div class="field-sec-wrapper">
                          <div class="preset-styl">
                            <choose-btn
                              :chooseData="componentsObj.ChooseBtn_edu"
                              @chooseMe="eduBtnMethod"
                            ></choose-btn>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--</transition>-->
                </div>
                <!--添加填写的教育经历-->
                <div class="show-edu-content">
                  <div class="set-show-empty">
                    <!--循环教育经历条数-->
                    <div class="set-show-item" v-for="(item,index) of formData.education">
                      <div>
                        <div class="set-item-picture">
                          <svg-icon iconClass="icon-beijingdaxue"></svg-icon>
                        </div>
                        <div class="set-item-meta">
                          <div class="edu-timer" v-if="item.goSchoolTimer">
                            <span>{{item.goSchoolTimer}}年</span>
                            -
                            <span v-if="item.leaveSchoolTimer">{{item.leaveSchoolTimer}}年</span>
                          </div>
                          <div class="edu-content">
                            <span>{{item.school}}</span>
                            <span v-if="item.profession">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                            <span v-if="item.profession">{{item.profession}}</span>
                            <span v-if="item.edu_back">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                            <span v-if="item.edu_back">{{item.edu_back}}</span>
                          </div>
                        </div>
                        <div class="set-item-close">
                          <span>
                            <svg-icon iconClass="icon-guanbi1"></svg-icon>
                          </span>
                        </div>
                        <!--关闭图标-->
                      </div>
                    </div>
                    <!--2-->
                    <!--<div class="set-show-item">-->
                      <!--<div>-->
                        <!--<div class="set-item-picture">-->
                          <!--<svg-icon iconClass="icon-beijingdaxue"></svg-icon>-->
                        <!--</div>-->
                        <!--<div class="set-item-meta">-->
                          <!--<div class="edu-timer">-->
                            <!--<span>2015年</span>-->
                            <!-- - -->
                            <!--<span>2019年</span>-->
                          <!--</div>-->
                          <!--<div class="edu-content">-->
                            <!--<span>湖南大学</span>-->
                            <!--&nbsp;&nbsp;·&nbsp;&nbsp;-->
                            <!--<span>软件工程</span>-->
                            <!--&nbsp;&nbsp;·&nbsp;&nbsp;-->
                            <!--<span>本科</span>-->
                          <!--</div>-->
                        <!--</div>-->
                        <!--<div class="set-item-close">-->
                          <!--<span>-->
                            <!--<svg-icon iconClass="icon-guanbi1"></svg-icon>-->
                          <!--</span>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="set-item">
            <div class="set-item-box">
              <span class="set-per-type">个人介绍</span>
              <div class="set-com-wrapper">
                <div class="comment-inp-box">
                  <div placeholder=""
                       contenteditable="true"
                       spellcheck="false"
                       class="comment-inp"
                       v-model="componentsObj.ChooseBtn_introduce.DATA.word"
                  ></div>
                  <!--按钮组-->
                  <div class="buttonGroup">
                    <span class="buttonGroupEmpty">
                      <choose-btn
                        :chooseData="componentsObj.ChooseBtn_introduce"
                        @chooseMe="personalBtnMethod"
                      ></choose-btn>
                    </span>
                  </div>
                </div>
              </div>
              <!--<span class="fRight set-com-svg">-->
              <!--<svg-icon iconClass="icon-xieyoujian1"></svg-icon>-->
              <!--</span>-->
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
  import SelectBox from '@/components/Select-Box/Select-Box.vue'
  import ChooseBtn from '@/components/Choose-Btn/Choose-Btn.vue'

  export default {
    name: "personal-data",
    data() {
      return {
        //输入框触发的值(各个方面的单条数据)
        handelInputData:{
          job:{
            company:'',
            work:''
          },
          edu:{
            school: '',
            profession: '',
            edu_back: '',
            goSchoolTimer: '',
            leaveSchoolTimer: ''
          }
        },
        //真正的值
        formData: {
          userName: '',
          sex: '',
          industry: '',
          job: [
            {
              company: '广东传媒有限公司',
              work: ' 技术总监'
            },
            {
              company: ' 360集团有限公司',
              work: ' 全栈工程师'
            },
            {
              company: ' 上海传媒股份集团',
              work: '项目经理'
            }
          ],
          education: [
            {
              school: '青海师范大学',
              profession: '软件工程',
              edu_back: '本科',
              goSchoolTimer: '1992',
              leaveSchoolTimer: '1996'
            }
          ],
          selfIntroduction: ''
        },
        //表单原来和准备的值
        formDataReady: {
          userName: '',
          sex: '',
          industry: '信息传媒',
          job:
            {
            company: '',
            work: ''
            },
          education:
            {
              school: '',
              profession: '',
              edu_back: '',
              goSchoolTimer: '',
              leaveSchoolTimer: ''
            },
          selfIntroduction: ''
        },
        disabledGroup: '男',
        fadeObj: {
          industry_show_add_bool: true,
          industry_show_suc_bool: false,
          industry_show_input_bool: false,
          job_show_add_bool: true,
          job_show_suc_bool: false,
          job_show_input_bool: false,
          education_show_add_bool: true,
          education_show_suc_bool: false,
          education_show_input_bool: false,
        },
        industryValue: '',
        //所有组件需要的值(_edu表示哪个区块需要组件，里面有8种数据类型数据)
        componentsObj: {
          //行业select下拉框
          SelectBox_industry: {
            // ARRAY_DATA:[
            //   {
            //     value: '高新科技',
            //     label: '高新科技'
            //   },
            //   {
            //     value: '互联网',
            //     label: '互联网'
            //   },
            //   {
            //     value: '电子商务',
            //     label: '电子商务'
            //   },
            //   {
            //     value: '电子游戏',
            //     label: '电子游戏'
            //   },
            //   {
            //     value: '计算机软件',
            //     label: '计算机硬件'
            //   },
            //   {
            //     value: '信息传媒',
            //     label: '信息传媒'
            //   },
            //   {
            //     value: '出版业',
            //     label: '出版业'
            //   },
            //   {
            //     value: '电影录音',
            //     label: '电影录音'
            //   },
            //   {
            //     value: '广播电视',
            //     label: '广播电视'
            //   },
            //   {
            //     value: '通信',
            //     label: '通信'
            //   },
            //   {
            //     value: '金融',
            //     label: '金融'
            //   },
            //   {
            //     value: '银行',
            //     label: '银行'
            //   },
            //   {
            //     value: '资本投资',
            //     label: '资本投资'
            //   },
            //   {
            //     value: '证券投资',
            //     label: '证券投资'
            //   },
            //   {
            //     value: '保险',
            //     label: '保险'
            //   },
            //   {
            //     value: '信贷',
            //     label: '信贷'
            //   },
            //   {
            //     value: '财务',
            //     label: '财务'
            //   },
            //   {
            //     value: '审计',
            //     label: '审计'
            //   },
            //   {
            //     value: '法律',
            //     label: '法律'
            //   },
            //   {
            //     value: '餐饮',
            //     label: '餐饮'
            //   },
            //   {
            //     value: '酒店',
            //     label: '酒店'
            //   },
            //   {
            //     value: '旅游',
            //     label: '旅游'
            //   },
            //   {
            //     value: '广告',
            //     label: '广告'
            //   },
            //   {
            //     value: '公关',
            //     label: '公关'
            //   },
            //   {
            //     value: '景观',
            //     label: '景观'
            //   },
            //   {
            //     value: '咨询分析',
            //     label: '咨询分析'
            //   },
            //   {
            //     value: '市场推广',
            //     label: '市场推广'
            //   },
            //   {
            //     value: '人力资源',
            //     label: '人力资源'
            //   },
            //   {
            //     value: '社工服务',
            //     label: '社工服务'
            //   },
            //   {
            //     value: '养老服务',
            //     label: '养老服务'
            //   },
            //   {
            //     value: '教育',
            //     label: '教育'
            //   },
            //   {
            //     value: '高等教育',
            //     label: '高等教育'
            //   },
            //   {
            //     value: '基础教育',
            //     label: '基础教育'
            //   },
            //   {
            //     value: '职业教育',
            //     label: '职业教育'
            //   },
            //   {
            //     value: '幼儿教育',
            //     label: '幼儿教育'
            //   },
            //   {
            //     value: '特殊教育',
            //     label: '特殊教育'
            //   },
            //   {
            //     value: '培训',
            //     label: '培训'
            //   },
            //   {
            //     value: '医疗服务',
            //     label: '医疗服务'
            //   },
            //   {
            //     value: '临床服务',
            //     label: '临床服务'
            //   },
            //   {
            //     value: '制药',
            //     label: '制药'
            //   },
            //   {
            //     value: '保健',
            //     label: '保健'
            //   },
            //   {
            //     value: '美容',
            //     label: '美容'
            //   },
            //   {
            //     value: '医疗器械',
            //     label: '医疗器械'
            //   },
            //   {
            //     value: '生物工程',
            //     label: '生物工程'
            //   },
            //   {
            //     value: '疗养服务',
            //     label: '疗养服务'
            //   },
            //   {
            //     value: '护理服务',
            //     label: '护理服务'
            //   },
            //   {
            //     value: '艺术娱乐',
            //     label: '艺术娱乐'
            //   },
            //   {
            //     value: '创意艺术',
            //     label: '创意艺术'
            //   },
            //   {
            //     value: '体育健身',
            //     label: '体育健身'
            //   },
            //   {
            //     value: '娱乐休闲',
            //     label: '娱乐休闲'
            //   },
            //   {
            //     value: '图书馆',
            //     label: '图书馆'
            //   },
            //   {
            //     value: '博物馆',
            //     label: '博物馆'
            //   },
            //   {
            //     value: '策展',
            //     label: '策展'
            //   },
            //   {
            //     value: '博彩',
            //     label: '博彩'
            //   },
            //   {
            //     value: '制造加工',
            //     label: '制造加工'
            //   },
            //   {
            //     value: '食品饮料业',
            //     label: '食品饮料业'
            //   },
            //   {
            //     value: '纺织皮革业',
            //     label: '纺织皮革业'
            //   },
            //   {
            //     value: '服务业',
            //     label: '服务业'
            //   },
            //   {
            //     value: '烟草业',
            //     label: '烟草业'
            //   },
            //   {
            //     value: '造纸业',
            //     label: '造纸业'
            //   },
            //   {
            //     value: '印刷业',
            //     label: '印刷业'
            //   },
            //   {
            //     value: '化工业',
            //     label: '化工业'
            //   },
            //   {
            //     value: '汽车',
            //     label: '汽车'
            //   },
            //   {
            //     value: '家具',
            //     label: '家具'
            //   },
            //   {
            //     value: '电子电器',
            //     label: '电子电器'
            //   },
            //   {
            //     value: '机械设备',
            //     label: '机械设备'
            //   },
            //   {
            //     value: '塑料工业',
            //     label: '塑料工业'
            //   },
            //   {
            //     value: '金属加工',
            //     label: '金属加工'
            //   },
            //   {
            //     value: '军火',
            //     label: '军火'
            //   },
            //   {
            //     value: '地产建筑',
            //     label: '地产建筑'
            //   },
            //   {
            //     value: '房地产',
            //     label: '房地产'
            //   },
            //   {
            //     value: '装饰装潢',
            //     label: '装饰装潢'
            //   },
            //   {
            //     value: '物业服务',
            //     label: '物业服务'
            //   },
            //   {
            //     value: '特殊建造',
            //     label: '特殊建造'
            //   },
            //   {
            //     value: '建筑设备',
            //     label: '建筑设备'
            //   },
            //   {
            //     value: '贸易临售',
            //     label: '贸易临售'
            //   },
            //   {
            //     value: '零售',
            //     label: '零售'
            //   },
            //   {
            //     value: '大宗交易',
            //     label: '大宗交易'
            //   },
            //   {
            //     value: '进出口贸易',
            //     label: '进出口贸易'
            //   },
            //   {
            //     value: '公共服务',
            //     label: '公共服务'
            //   },
            //   {
            //     value: '政府',
            //     label: '政府'
            //   },
            //   {
            //     value: '国防军事',
            //     label: '国防军事'
            //   },
            //   {
            //     value: '航天',
            //     label: '航天'
            //   },
            //   {
            //     value: '科研',
            //     label: '科研'
            //   },
            //   {
            //     value: '给排水',
            //     label: '给排水'
            //   },
            //   {
            //     value: '水利能源',
            //     label: '水利能源'
            //   },
            //   {
            //     value: '电力电网',
            //     label: '电力电网'
            //   },
            //   {
            //     value: '公共管理',
            //     label: '公共管理'
            //   },
            //   {
            //     value: '环境保护',
            //     label: '环境保护'
            //   },
            //   {
            //     value: '非营利组织',
            //     label: '非营利组织'
            //   },
            //   {
            //     value: '开采冶金',
            //     label: '开采冶金'
            //   },
            //   {
            //     value: '煤炭工业',
            //     label: '煤炭工业'
            //   },
            //   {
            //     value: '石油工业',
            //     label: '石油工业'
            //   },
            //   {
            //     value: '黑色金属',
            //     label: '黑色金属'
            //   },
            //   {
            //     value: '有色金属',
            //     label: '有色金属'
            //   },
            //   {
            //     value: '土砂石开采',
            //     label: '土砂石开采'
            //   },
            //   {
            //     value: '地热开采',
            //     label: '地热开采'
            //   },
            //   {
            //     value: '交通仓储',
            //     label: '交通仓储'
            //   },
            //   {
            //     value: '邮政',
            //     label: '邮政'
            //   },
            //   {
            //     value: '物流递送',
            //     label: '物流递送'
            //   },
            //   {
            //     value: '地面运输',
            //     label: '地面运输'
            //   },
            //   {
            //     value: '铁路运输',
            //     label: '铁路运输'
            //   },
            //   {
            //     value: '管线运输',
            //     label: '管线运输'
            //   },
            //   {
            //     value: '航运业',
            //     label: '航运业'
            //   },
            //   {
            //     value: '民用航空业',
            //     label: '民用航空业'
            //   },
            //   {
            //     value: '农林牧渔',
            //     label: '农林牧渔'
            //   },
            //   {
            //     value: '种植业',
            //     label: '种植业'
            //   },
            //   {
            //     value: '畜牧业',
            //     label: '畜牧业'
            //   },
            //   {
            //     value: '林业',
            //     label: '林业'
            //   },
            //   {
            //     value: '渔业',
            //     label: '渔业'
            //   }
            // ],
            ARRAY_DATA: ["高新科技", "互联网", "电子商务", "电子游戏", "计算机硬件", "信息传媒", "出版业", "电影录音", "广播电视", "通信", "金融", "银行", "资本投资", "证券投资", "保险", "信贷", "财务", "审计", "法律", "餐饮", "酒店", "旅游", "广告", "公关", "景观", "咨询分析", "市场推广", "人力资源", "社工服务", "养老服务", "教育", "高等教育", "基础教育", "职业教育", "幼儿教育", "特殊教育", "培训", "医疗服务", "临床服务", "制药", "保健", "美容", "医疗器械", "生物工程", "疗养服务", "护理服务", "艺术娱乐", "创意艺术", "体育健身", "娱乐休闲", "图书馆", "博物馆", "策展", "博彩", "制造加工", "食品饮料业", "纺织皮革业", "服务业", "烟草业", "造纸业", "印刷业", "化工业", "汽车", "家具", "电子电器", "机械设备", "塑料工业", "金属加工", "军火", "地产建筑", "房地产", "装饰装潢", "物业服务", "特殊建造", "建筑设备", "贸易临售", "零售", "大宗交易", "进出口贸易", "公共服务", "政府", "国防军事", "航天", "科研", "给排水", "水利能源", "电力电网", "公共管理", "环境保护", "非营利组织", "开采冶金", "煤炭工业", "石油工业", "黑色金属", "有色金属", "土砂石开采", "地热开采", "交通仓储", "邮政", "物流递送"],
            HEI: '13rem'
          },

          //行业按钮
          ChooseBtn_industry: {
            DATA: {
              word: 'true'
            },
            LEFT: '1rem',
          },
          //职业经历按钮
          ChooseBtn_job: {
            DATA: {
              word: ''
            },
            LEFT: '1rem',
          },
          //教育经历按钮
          ChooseBtn_edu: {
            DATA: {
              word: ''
            },
            LEFT: '1rem',

          },
          //个人介绍按钮
          ChooseBtn_introduce: {
            DATA: {
              word: 'true'
            },
            LEFT: '1rem',
          },
          SelectBox_edu: {
            ARRAY_DATA: ['高中及以下', '大专', '本科', '硕士', '博士及以上'],
            HEI: '13rem'
          },
          SelectBox_year: {
            ARRAY_DATA: ["至今","2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950"],
            HEI: '18rem'
          }

        },

      }
    },
    components: {
      Radio,
      RadioGroup,
      Select,
      Option,
      SelectBox,
      ChooseBtn
    },
    mounted() {
      // var b=[];
      // this.componentsObj.SelectBox_industry.ARRAY_DATA.forEach(function (item,index) {
      //   b.push(item.label);
      // })
      // console.log(b)
      // for (var i=0;i<this.componentsObj.SelectBox_industry.ARRAY_DATA.lenth;i++){
      //   b.push()
      // }
    },
    methods: {
      handelInput(who,ref){

        if(who==='company'){
          let va=this.$refs[ref].value;
          if(va){
            this.componentsObj.ChooseBtn_job.DATA.word=true;
            return;
          }
          this.componentsObj.ChooseBtn_job.DATA.word=false;

        }else if(who==='work'){
          let va=this.$refs[ref].value;
          if(va){
            console.log(va)
          }
        }else if(who==='school'){
          let va=this.$refs[ref].value;
          if(va){
            this.componentsObj.ChooseBtn_edu.DATA.word=true;
            return;
          }
          this.componentsObj.ChooseBtn_edu.DATA.word=false;
        }

      },
      //设置切换操作的内容（industry,job,edu）
      setShowBox(value) {
        //if 和 switch 在5个条件以下if快，以上的话switch快
        switch (value) {
          case 'industry':
            // this.$set(this.fadeObj,'industry_show_add_bool',false);
            // this.$set(this.fadeObj,'industry_show_input_bool',true);
            this.fadeObj.industry_show_add_bool = false;
            this.fadeObj.industry_show_input_bool = true;
            break;
          case 'job':
            this.fadeObj.job_show_add_bool = false;
            this.fadeObj.job_show_input_bool = true;
            break;
          case 'edu':
            this.fadeObj.education_show_add_bool = false;
            this.fadeObj.education_show_input_bool = true;
            break;
          default :
            break
        }
      },

      //选择行业
      controlSelectIndustry() {
        this.$refs.industryRef.repeatControl();
      },
      //学历
      controlSelectLevel() {
        this.$refs.eduRef.repeatControl();
      },
      //开学时间
      controlSelectGoSchool() {
        this.$refs.goRef.repeatControl();
      },
      //毕业时间
      controlSelectLeaveSchool() {
        this.$refs.leaveRef.repeatControl();
      },
      //行业选择select框接收方法
      industryMethod(value) {
        this.formDataReady.industry=value;
        this.$refs.industryId.innerText = value;
      },
      //学历选择select框接收方法
      eduMethod(value) {
        this.formDataReady.education.edu_back=value;
        this.$refs.eduId.innerText = value;
      },
      //上学时间选择select框接收方法
      goMethod(value) {
        this.formDataReady.education.goSchoolTimer=value;
        this.$refs.goId.innerText = value;
      },
      //毕业时间选择select框接收方法
      leaveMethod(value) {
        this.formDataReady.education.leaveSchoolTimer=value;
        this.$refs.leaveId.innerText = value;
      },
      //行业选择的保存或取消按钮
      industryBtnMethod(value) {

        // this.fadeObj.industry_show_input_bool = false;
        this.$set(this.fadeObj, 'industry_show_input_bool', false);
        //按了保存键
        if (value==='YES') {
          this.formData.industry=this.formDataReady.industry;

          this.fadeObj.industry_show_suc_bool = true;
        }else{
          //按了取消键
          if (this.formData.industry) {
            this.fadeObj.industry_show_suc_bool = true;
          }else{
            this.fadeObj.industry_show_add_bool = true;
          }
        }
      },
      //职业经历的保存或取消按钮
      jobBtnMethod(value) {
        this.$set(this.fadeObj, 'job_show_input_bool', false);
        this.fadeObj.job_show_add_bool = true;
        if(value==='YES'){
          //直接    this.formData.job.unshift(this.formDataReady.job);不行的，数据都会同时改变
          //原因是对象是引用类型，传递的是引用地址，所以你两个数组引用的是同一个对象，只要其中一个数组改变，就会导致对象改变，进而另一个引用的数组也会改。
          //解决办法就是将需要放入数组的对象先深拷贝一份，用拷贝的对象，这样就不存在引用关系了。(深拷贝)
          let data = Object.assign({}, JSON.parse(JSON.stringify(this.formDataReady.job)));
          if(data.company){
            this.formData.job.unshift(data);
          }
          this.$set(this.formDataReady,'job',{company:'',work:''})
          // this.formDataReady.job.company='';
          // this.formDataReady.job.work='';
          // alert('点了保存键')
        }else{
          // alert('点了取消键')
        }
      },
      //教育经历的保存或取消按钮
      eduBtnMethod(value) {
        this.$set(this.fadeObj, 'education_show_input_bool', false);
        this.fadeObj.education_show_add_bool=true;
        let data = Object.assign({}, JSON.parse(JSON.stringify(this.formDataReady.education)));
        if(value==='YES'){
          // alert('点了保存键')
          if(data.school){
            this.formData.education.unshift(data);
            this.formDataReady.education={
              school: '',
              profession: '',
              edu_back: '',
              goSchoolTimer: '',
              leaveSchoolTimer: ''
            };
            return;
          }
          return;
        }
        return;
        // alert('点了取消键')



      },
      //个人介绍的保存或取消按钮
      personalBtnMethod(value) {
        this.$set(this.fadeObj, 'industry_bool', !this.fadeObj.industry_bool)

      }
    }
  }
</script>
<!--z注意写方法计算1950到2018的年数用谷歌测试版，内存不溢出（打印完整）let ii=i+'';-->
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

  .fLeft
    float: left

  /*-----*/
  .personal-data
    position: relative
    font-size .9735rem
    /*box-sizing border-box*/
    clearFix()

  .set-empty-head
    width: 100%
    /*box-sizing border-box*/
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
        box-sizing content-box
        //clearFix()
        .set-item-box
          box-sizing content-box
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
              .ivu-radio-wrapper
                font-size .9375rem
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
            min-width: 34rem
            max-width: 42rem
            /*height: inherit*/
            box-sizing content-box
            /*---------------------------------------*/
            .set-fade-empty
              position: relative
              height: inherit
              /*height: 4.4rem*/
              /*background: #000*/
              &.edu-hei
                /*height: 9rem*/
                /*background: #ccc*/
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
              .industry-suc
                margin-top 1.54rem
                /*background: #ccc*/
                .industry
                  display: inline-block
              /*所在行业隐藏盒子*/
              .set-hide-box
                /*float: right*/
                padding: 1.2rem 0
                display: inline-block
                /*position: absolute*/
                /*top: 0*/
                /*left: 0*/
                .set-hide-inp
                  float: left
                  position: relative
                  /*设置中心的select框组件*/
                  .select-wrapper
                    .set--select
                      padding: 0.315rem 0.8rem;
                      border: 1px solid #ebebeb;
                      border-radius: 0.3rem;
                      cursor: pointer;
                      .set-select--type
                        display: inline-block
                        width: 129px
                      /*background: #ccc*/
                      .set-com-choose-svg
                        display: inline-block
                        .svg-icon
                          font-size 1.2rem
                  .set-com-inp-box
                    width: 11.25rem
                    display: inline-block
                    &.set-com-sty
                      padding: .315rem .8rem
                      border 1px solid #ebebeb
                      border-radius .3rem
                      .set-com-input
                        display: inline-block
                        /*height: 1.5rem*/
                        font-size .875rem
                      &.set-com-space
                        margin-left .6rem
                .field-content
                  font-size .9375rem
                  color: #8590a6
                  .field-fir
                    clearFix()
                    .field-fir-wrapper
                      position: relative
                      float: left
                      &:not(:first-child)
                        margin-left 1.1rem
                      .field-fir-wrapper-empty
                        padding: .34rem .8rem
                        border 1px solid #ebebeb
                        border-radius .2rem
                        &.set-hov
                          cursor: pointer;
                        .set-com-input
                          display: block
                          width: 142px
                        .set-com-level
                          border-radius .2rem
                          display: inline-block
                          .set-com-level-type
                            display: inline-block
                            width: 118px
                          .set-com-choose-svg
                            display: inline-block
                            .svg-icon
                              font-size 1.2rem
                              fill #8590a6
                  .field-sec
                    margin-top 1.6rem
                    clearFix()
                    .field-sec-wrapper
                      position: relative
                      float: left
                      .preset-styl
                        clearFix()
                        margin-left .86rem
                      &:not(:first-child)
                        margin-left 1.2rem
                      .field-sec-wrapper-empty
                        padding: .34rem .8rem
                        border 1px solid #ebebeb
                        border-radius .2rem
                        &.set-hov
                          cursor: pointer;
                        .set-com-year
                          border-radius .2rem
                          display: inline-block
                          .set-com--type
                            display: inline-block
                            width: 118px
                          .set-com-choose-svg
                            display: inline-block
                            .svg-icon
                              font-size 1.2rem
                              fill #8590a6

                .set-hide-choose
                  display: inline-block
                  overflow: hidden
                  font-size .875rem
                  margin-left 1.4rem

            .show-edu-content
              position: relative
              width: 100%
              margin:.3rem 0 2rem

              box-sizing content-box
              clearFix()
              .set-show-empty
                box-sizing content-box
                /*padding-bottom .3rem*/
                .set-show-item
                  position: relative
                  box-sizing content-box
                  border-radius .3rem
                  /*margin-bottom .2rem*/
                  /*background: antiquewhite*/
                  clearFix()
                  /*background: #000*/
                  padding:.7rem 1rem
                  &:hover
                    background: #f6f6f6
                  &:hover .set-item-close
                    display: block
                    background: #f6f6f6
                  .set-item-picture
                    box-sizing content-box
                    font-size .9375rem
                    margin:0 .8rem 0 0
                    float: left;
                    /*background: #ccc*/
                    /*border-radius 50%*/
                    /*background: #000*/
                    /*padding:.1rem*/
                    /*background: #ffffff*/
                    .svg-icon
                      font-size 1.8rem
                      display: block

                  .set-item-meta
                    /*margin-left 3rem*/
                    float: left
                    .edu-timer
                      margin-bottom .2rem
                    .edu-content
                      color: #1a1a1a
                      padding .2rem 0
                  .set-item-close
                    float: right
                    /*margin:.8rem 0*/
                    /*background: #000*/
                    cursor: pointer;
                    display: none
                    &:hover .svg-icon
                      fill #290008

                    .svg-icon
                      fill #4e4e4e
                      font-size 1rem


          .set-com-wrapper
            width: 27rem
            float: left
            clearFix()
            .comment-inp-box
              margin 1.7rem 0
              position: relative
              .buttonGroup
                /*width:9rem*/
                /*height:5rem*/
                /*background: #7bb7fa*/
                margin-top: 1.2rem
                .buttonGroupEmpty
                  float: right
                clearFix()
              .comment-inp
                border-radius .2rem
                /*添加重要的-取消box-sizing border-box */
                border: 1px solid #ebebeb
                box-sizing content-box
                min-height: 4.6rem
                max-height 6rem
                padding: .2rem .6rem
                color: #17181a;
                outline: none;
                height: inherit
                transition .2s
                background: #f6f6f6
                &:hover
                  background: #ffffff
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
            width: 32rem
            padding-bottom .8rem
            clearFix()
            .job-item
              border-radius .2rem
              /*background: aqua*/
              margin-bottom .8rem
              padding: .5rem 0
              cursor: pointer
              &:hover
                background: #cee6ff
              .job-empty
                color: #1a1a1a
                font-size .9375rem
                .set-com-job
                  display: inline-block
                  .company-svg
                    display: inline-block
                    padding: 0 .6rem
                    .svg-icon
                      fill #6266ff
                  .job-svg
                    display: inline-block
                    padding-right .4rem
                    .svg-icon
                      fill #42474c
                .close-svg
                  display: none
                  float: right
                  padding-right .6rem
                  .svg-icon
                    font-size .8rem
                    fill #42474c
                    transition .2s
                    &:hover
                      fill #6266ff
              &:hover .close-svg
                display: inline-block
        .set-com-svg
          display: inline-block
          padding 1.58rem 0


</style>
