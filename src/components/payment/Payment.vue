<template>
  <div class="payment">
    <div class="title">
      <h4>还款管理</h4>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="还款计划" name="first"></el-tab-pane>
        <el-tab-pane label="还款审批中" name="second"></el-tab-pane>
        <el-tab-pane label="还款记录" name="third"></el-tab-pane>
      </el-tabs>
      <el-table :data="paymentData" stripe style="width: 100%" class="table">
        <el-table-column prop="address" label="产品名称" width="180"></el-table-column>
        <el-table-column prop="address" label="借款合同号" width="180"></el-table-column>
        <el-table-column prop="address" label="借贷金额(元)"></el-table-column>
        <el-table-column prop="address" label="获贷日期"></el-table-column>
        <el-table-column prop="address" label="应还款日期"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope>
            <span class="detail">申请还款</span>
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
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      paymentData: [
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
      currentPage: 1,
      pageSize: 30
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleClick() {}
  }
}
</script>

<style lang="less" scope>
</style>
