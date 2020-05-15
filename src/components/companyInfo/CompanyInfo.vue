<template>
  <div class="companyInfo" v-if="Object.keys(companyObj).length !==0">
    <div class="item">
      <h4 class="com_title">基本信息</h4>
      <div class="com_info">
        <div class="info_item">
          <span>公司名称：</span>
          <span>{{companyObj.companyName}}</span>
        </div>
        <div class="info_item">
          <span>营业执照号码：</span>
          <span>{{companyObj.companyLicense}}</span>
        </div>
        <div class="info_item">
          <span>成立时间：</span>
          <span>{{companyObj.companyCreateTime}}</span>
        </div>
        <div class="info_item">
          <span>是否是上市公司：</span>
          <span>{{companyObj.isListedCompany}}</span>
        </div>
      </div>
    </div>
    <div class="item">
      <h4 class="com_title">联系人信息</h4>
      <div class="com_info">
        <div class="info_item">
          <span>联系人姓名：</span>
          <span>{{companyObj.contactName}}</span>
        </div>
        <div class="info_item">
          <span>联系人职位：</span>
          <span>{{companyObj.contactPositionDuty}}</span>
        </div>
        <div class="info_item">
          <span>联系人手机号码：</span>
          <span>{{companyObj.contactPhoneNumber}}</span>
        </div>
      </div>
    </div>
    <div class="item">
      <h4 class="com_title">经营场所信息</h4>
      <div class="com_info">
        <div class="info_item">
          <span>公司所在地：</span>
          <span>{{companyObj.companyWorkArea}}</span>
        </div>
        <div class="info_item">
          <span>公司地址：</span>
          <span>{{companyObj.companyWorkAddress}}</span>
        </div>
        <div class="info_item">
          <span>注册所在地：</span>
          <span>{{companyObj.companyRegisterArea}}</span>
        </div>
        <div class="info_item">
          <span>注册地址：</span>
          <span>{{companyObj.companyRegisterAddress}}</span>
        </div>
      </div>
    </div>
    <div class="item">
      <h4 class="com_title">法人代表信息</h4>
      <div class="com_info">
        <div class="info_item">
          <span>法人代表姓名：</span>
          <span>{{companyObj.legalName}}</span>
        </div>
        <div class="info_item">
          <span>法人性别：</span>
          <span>{{companyObj.legalSex}}</span>
        </div>
        <div class="info_item">
          <span>婚姻状况：</span>
          <span>{{companyObj.marriageState}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { companyDetails } from 'network/companyDetails'
export default {
  data() {
    return {
      companyObj: {}
    }
  },
  async mounted() {
    const res = await companyDetails()
    const { data, code } = res.data
    if (code == 0) {
      this.companyObj = data[0]
    }
  }
}
</script>

<style lang="less" scope>
</style>
