<template>
  <div class="borrowing">
    <div class="box">
      <div class="item">
        <div class="title">当前借款金额</div>
        <div>
          <span class="cur">￥</span>
          <span>{{reapyManageData.loanMoney}}</span>
        </div>
      </div>
      <div class="item">
        <div class="title">累计借款金额</div>
        <div>
          <span class="cur">￥</span>
          <span>{{reapyManageData.allMoney}}</span>
        </div>
      </div>
      <div class="item">
        <div class="title">申请中借款</div>
        <div>
          <span>{{reapyManageData.loanCount}}</span>
          <span class="cur">笔</span>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="title">
        <h4>推荐业务</h4>
      </div>
      <div class="content">
        <div class="box">
          <div class="type">
            <span>按贷种：</span>
            <a href="javascript:;" class="active">所有业务</a>
            <a href="javascript:;">B2B平台类</a>
            <a href="javascript:;">代采融资</a>
            <a href="javascript:;">应收账款类</a>
          </div>
          <div class="time">
            <span>按时间：</span>
            <a href="javascript:;" class="active">全部</a>
            <a href="javascript:;">近一个月</a>
            <a href="javascript:;">近三个月</a>
            <a href="javascript:;">近一年</a>
          </div>
          <div class="data">
            <span>日期：</span>
            <input type="date" />
            -
            <input type="date" />
            <button>查询</button>
          </div>
        </div>
        <el-table :data="borrowData" stripe style="width: 100%" class="table">
          <el-table-column prop="address" label="业务名称" width="180"></el-table-column>
          <el-table-column prop="address" label="信贷合同号" width="180"></el-table-column>
          <el-table-column prop="address" label="申请金额（元）"></el-table-column>
          <el-table-column prop="address" label="申请时间"></el-table-column>
          <el-table-column prop="address" label="状态"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope>
              <span class="detail" @click="jump">详情</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="paginator">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReapyManage } from 'network/borrowing'
export default {
  data() {
    return {
      borrowData: [
        {
          address: 'aaaa'
        },
        {
          address: 'aaaa'
        },
        {
          address: 'aaaa'
        }
      ],
      currentPage: 1,
      pageSize: 30,
      reapyManageData: {} // 借款金额数据
    }
  },
  created() {
    this._getReapyManage()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    async _getReapyManage() {
      const res = await getReapyManage()
      const { data, code } = res.data
      if (code == 0) {
        this.reapyManageData = data[0]
      }
    },
    jump() {
      this.$router.push('/borrowingDetail')
    }
  }
}
</script>

<style lang="less" scope>
</style>
