<template>
  <div class="contract">
    <div class="title">
      <h4>合同管理</h4>
    </div>
    <div class="content">
      <div class="box">
        <div>
          <span>信贷合同号：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span>合同号：</span>
          <input type="text" class="contractInp" />
        </div>
        <div>
          <span>状态：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <button class="search">查询</button>
        </div>
      </div>
      <el-table :data="contractData" stripe style="width: 100%" class="table">
        <el-table-column label="序号" width="50" type="index"></el-table-column>
        <el-table-column prop="address" label="产品名称" width="180"></el-table-column>
        <el-table-column prop="address" label="信贷合同号" width="180"></el-table-column>
        <el-table-column prop="address" label="签约类型"></el-table-column>
        <el-table-column prop="address" label="签约方式"></el-table-column>
        <el-table-column prop="address" label="签章时间"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column prop="address" label="创建时间"></el-table-column>
        <el-table-column prop="address" label="合同名称"></el-table-column>
        <el-table-column label="签署">
          <template slot-scope>
            <span class="detail">查看</span>
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
      contractData: [
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
      pageSize: 30,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scope>
</style>
