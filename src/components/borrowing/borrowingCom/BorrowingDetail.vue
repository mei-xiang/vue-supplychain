<template>
  <div class="borrowingDetail">
    <common-header></common-header>
    <div class="content">
      <div class="title">
        <p>代采融资</p>
      </div>
      <div class="info">
        <p class="com_title">基本信息</p>
        <div class="com_info">
          <div class="info_item">
            <span>信贷合同号：</span>
            <span>agpur202003130014</span>
          </div>
          <div class="info_item">
            <span>获贷金额：</span>
            <span>9,600.00元</span>
          </div>
          <div class="info_item">
            <span>贷款状态：</span>
            <span>赎货还款完成</span>
          </div>
          <div class="info_item">
            <span>获贷日期：</span>
            <span>2020-03-13</span>
          </div>
          <div class="info_item">
            <span>到期日期：</span>
            <span>2020-03-31</span>
          </div>
          <div class="info_item">
            <span>保证金比例：</span>
            <span>5.00%</span>
          </div>
          <div class="info_item">
            <span>年利率：</span>
            <span>360.00%</span>
          </div>
        </div>
      </div>
      <div class="info">
        <p class="com_title">协议记录</p>
        <div class="com_info">
          <el-table :data="planData" stripe style="width: 100%" class="planTable">
            <el-table-column prop="address" label="协议名称"></el-table-column>
            <el-table-column prop="address" label="签署节点"></el-table-column>
            <el-table-column prop="address" label="签署状态"></el-table-column>
            <el-table-column prop="address" label="签署时间"></el-table-column>
            <el-table-column prop="address" label="操作"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope>
                <button class="refund">查看</button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="info">
        <p class="com_title">采购清单</p>
        <div class="com_info">
          <el-table :data="planData" stripe style="width: 100%" class="planTable">
            <el-table-column prop="address" label="商品名称"></el-table-column>
            <el-table-column prop="address" label="规格型号"></el-table-column>
            <el-table-column prop="address" label="单价（元）"></el-table-column>
            <el-table-column prop="address" label="融资价（元）"></el-table-column>
            <el-table-column prop="address" label="数量/重量"></el-table-column>
            <el-table-column prop="address" label="总价（元）"></el-table-column>
            <el-table-column prop="address" label="融资总价（元）"></el-table-column>
            <el-table-column prop="address" label="单位"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope>
                <button class="refund">查看</button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="info">
        <p class="com_title">费用</p>
        <div class="com_info">
          <el-table :data="planData" stripe style="width: 100%" class="planTable">
            <el-table-column prop="address" label="费用名称"></el-table-column>
            <el-table-column prop="address" label="计费方式"></el-table-column>
            <el-table-column prop="address" label="收费节点"></el-table-column>
            <el-table-column prop="address" label="金额"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="info">
        <p class="com_title">放款信息</p>
        <div class="com_info">
          <div class="info_item">
            <span>请款金额：</span>
            <span>9,600.00元</span>
          </div>
          <div class="info_item">
            <span>收款企业名称：</span>
            <span>供应商</span>
          </div>
          <div class="info_item">
            <span>开户行：</span>
            <span>供应商</span>
          </div>
          <div class="info_item">
            <span>收款账号：</span>
            <span>深圳市环宇科技技术有限公司</span>
          </div>
        </div>
      </div>
      <div class="info">
        <p class="com_title">还款信息</p>
        <div class="com_info">
          <div class="info_item">
            <span>借款总额：</span>
            <span>9,600.00元</span>
          </div>
          <div class="info_item">
            <span>借款开始日期：</span>
            <span>2020-03-13</span>
          </div>
          <div class="info_item">
            <span>借款结束日期：</span>
            <span>2020-03-31</span>
          </div>
          <div class="info_item">
            <span>已还本金：</span>
            <span>9,600.00元</span>
          </div>
          <div class="info_item">
            <span>未还本金：</span>
            <span>0.00元</span>
          </div>
        </div>
      </div>
      <div class="info">
        <p class="com_title">业务进度</p>
        <div class="com_info">
          <el-table :data="planData" stripe style="width: 100%" class="planTable">
            <el-table-column prop="address" label="任务名称"></el-table-column>
            <el-table-column prop="address" label="结果"></el-table-column>
            <el-table-column prop="address" label="备注"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="footer-user">
      <p class="copyright">© 2015JINGRUIIT精锐纵横. All Right Reserved. 粤ICP备15027124号</p>
    </div>
  </div>
</template>

<script>
import CommonHeader from 'components/common/CommonHeader'
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
      ]
    }
  },
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scope>
.borrowingDetail {
  background-color: #f6f6f6;
  .content {
    width: 1198px;
    margin: 30px auto;
    padding-top: 24px;
    padding-bottom: 24px;
    border: 1px solid #ececec;
    border-top-width: 5px;
    background: #fff;
    border-radius: 0;
    .title {
      height: 34px;
      line-height: 34px;
      padding-left: 20px;
      padding-right: 20px;
      background: #f4fafd;
      position: relative;
      p {
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        color: #666;
      }
      p::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 34px;
        background: #05266d;
        overflow: hidden;
      }
    }
    .info {
      padding: 20px;
      > div {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .com_title {
        line-height: 24px;
        margin-bottom: 8px;
        color: #2b3541;
        font-weight: bold;
        font-size: 16px;
      }
      .com_info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 20px;
        .info_item {
          width: 33%;
          margin-bottom: 15px;
          span {
            display: inline-block;
            line-height: 36px;
          }
          span:first-of-type {
            width: 120px;
            text-align: right;
            color: #999;
          }
          span:last-of-type {
            color: #333;
          }
        }
        .refund {
          display: inline-block;
          margin: 0 5px;
          color: #329acd;
          cursor: pointer;
        }
      }
    }
  }
  .footer-user {
    width: 100%;
    height: 70px;
    background: #05266d;
    text-align: center;
    min-width: 1200px;
    .copyright {
      line-height: 70px;
      color: #e2e2e2;
      font-size: 12px;
    }
  }
}
</style>
