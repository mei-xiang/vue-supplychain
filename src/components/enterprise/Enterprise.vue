<template>
  <div class="enterprise">
    <el-row :gutter="20" class="money" v-if="Object.keys(creditLimitData).length !==0">
      <el-col :span="16">
        <el-row :gutter="20" class="left">
          <el-col>
            <div class="item limit">
              <p>账户可用额度</p>
              <p>{{creditLimitData[0].usableLimit}}</p>
            </div>
          </el-col>
          <el-col>
            <div class="item capital">
              <p>当前待还本金</p>
              <p>{{creditLimitData[0].waitRepay}}</p>
            </div>
          </el-col>
          <el-col>
            <div class="item freeze">
              <p>当前冻结金额</p>
              <p>{{creditLimitData[0].frozenLimit}}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="right">
        <div class="creditItem">
          <div class="title">授信额度</div>
          <div class="creditItemBox">
            <div class="creditItem_l">
              <span>{{creditLimitData[1][0].fundName}}:</span>
              <span>{{creditLimitData[1][0].usableLimit}}元</span>
            </div>
            <div class="creditItem_r">
              <span>{{creditLimitData[1][1].fundName}}:</span>
              <span>{{creditLimitData[1][1].usableLimit}}元</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="plan">
      <div class="title">
        <h4>最近还款计划</h4>
      </div>
      <div class="content">
        <el-table :data="planData" stripe style="width: 100%" class="planTable">
          <el-table-column prop="address" label="业务类型"></el-table-column>
          <el-table-column prop="address" label="借款合同号"></el-table-column>
          <el-table-column prop="address" label="授信金额(元)"></el-table-column>
          <el-table-column prop="address" label="获贷日期"></el-table-column>
          <el-table-column prop="address" label="应还款日期"></el-table-column>
          <el-table-column prop="address" label="逾期天数"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope>
              <button class="refund">申请还款</button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="recommend">
      <div class="title">
        <h4>推荐业务</h4>
      </div>
      <div class="content">
        <div class="product">
          <div class="item">
            <p class="title">代采融资</p>
            <div class="rateBox">
              <p>日利率最低</p>
              <p class="percent">1.00%</p>
            </div>
            <div class="rateBox">
              <p>还款方式</p>
              <p class="content">随时还款</p>
            </div>
            <button class="applyBtn">立即申请</button>
          </div>
          <div class="item">
            <p class="title">代采融资</p>
            <div class="rateBox">
              <p>日利率最低</p>
              <p class="percent">1.00%</p>
            </div>
            <div class="rateBox">
              <p>还款方式</p>
              <p class="content">随时还款</p>
            </div>
            <button class="applyBtn">立即申请</button>
          </div>
          <div class="item">
            <p class="title">代采融资</p>
            <div class="rateBox">
              <p>日利率最低</p>
              <p class="percent">1.00%</p>
            </div>
            <div class="rateBox">
              <p>还款方式</p>
              <p class="content">随时还款</p>
            </div>
            <button class="applyBtn">立即申请</button>
          </div>
          <div class="item">
            <p class="title">代采融资</p>
            <div class="rateBox">
              <p>日利率最低</p>
              <p class="percent">1.00%</p>
            </div>
            <div class="rateBox">
              <p>还款方式</p>
              <p class="content">随时还款</p>
            </div>
            <button class="applyBtn">立即申请</button>
          </div>
          <div class="item">
            <p class="title">代采融资</p>
            <div class="rateBox">
              <p>日利率最低</p>
              <p class="percent">1.00%</p>
            </div>
            <div class="rateBox">
              <p>还款方式</p>
              <p class="content">随时还款</p>
            </div>
            <button class="applyBtn">立即申请</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllCreditLimit } from 'network/enterprise'
export default {
  data() {
    return {
      planData: [
        {
          address: 'aaa'
        },
        {
          address: 'aaa'
        },
        {
          address: 'aaa'
        },
        {
          address: 'aaa'
        }
      ],
      creditLimitData: {} // 企业授信数据
    }
  },
  mounted() {
    this._getAllCreditLimit()
  },
  methods: {
    async _getAllCreditLimit() {
      const res = await getAllCreditLimit()
      const { data, code } = res.data
      if (code == 0) {
        this.creditLimitData = data
      }
    }
  }
}
</script>

<style lang="less" scope>
</style>
