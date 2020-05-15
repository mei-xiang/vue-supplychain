<template>
  <div class="redeem">
    <div class="title">
      <h4>赎货管理</h4>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="代采清单" name="first"></el-tab-pane>
        <el-tab-pane label="赎货管理" name="second"></el-tab-pane>
        <el-tab-pane label="赎货管理" name="third"></el-tab-pane>
      </el-tabs>
      <div class="search">
        <span>信贷合同号：</span>
        <input type="text" />
        <button>查询</button>
      </div>
      <el-table :data="redeemData" stripe style="width: 100%" class="table">
        <el-table-column prop="address" label="信贷合同号" width="180"></el-table-column>
        <el-table-column prop="address" label="商品编码" width="180"></el-table-column>
        <el-table-column prop="address" label="商品名称"></el-table-column>
        <el-table-column prop="address" label="数量/重量"></el-table-column>
        <el-table-column prop="address" label="单位"></el-table-column>
        <el-table-column prop="address" label="供应商"></el-table-column>
        <el-table-column prop="address" label="合同生效日"></el-table-column>
        <el-table-column prop="address" label="合同到期日"></el-table-column>
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
      redeemData: [
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
