<template>
  <div class="generate">
    <common-header></common-header>
    <div class="content">
      <!-- 融资产品信息 -->
      <div class="item">
        <div class="title">融资产品信息</div>
        <div class="info">
          <div>
            <b>
              <span>*</span>
              <span>产品名称：</span>
            </b>
            <span>{{ generate.productName }}</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>贷款期限：</span>
            </b>
            <span
              >{{ generate.loanTimeStart }}天 -
              {{ generate.loanTimeEnd }}天</span
            >
          </div>
          <div>
            <b>
              <span>*</span>
              <span>日利率：</span>
            </b>
            <span>{{ generate.loanApr }}.00%</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>保证金比例：</span>
            </b>
            <span>{{ generate.depositFinanceRate }}.00%</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>还款方式：</span>
            </b>
            <span>{{ generate.productName }}</span>
          </div>
        </div>
      </div>
      <!-- 货物信息 -->
      <div class="item creInformate">
        <div class="title">货物信息</div>
        <div class="info">
          <div>
            <b>
              <span>*</span>
              <span>供应商：</span>
            </b>
            <el-select
              v-model="companyVal"
              placeholder="-- 请选择 --"
              size="small"
              @change="supplierDateChange"
            >
              <el-option
                v-for="item in companyData"
                :key="item.supplierId"
                :label="item.SupplierName"
                :value="item.supplierId"
              ></el-option>
            </el-select>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>联系人：</span>
            </b>
            <span>{{ companyInfo.contactName }}</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>联系人电话：</span>
            </b>
            <span>{{ companyInfo.contactPhoneNumber }}</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>计划到货时间：</span>
            </b>
            <input class="borrowStart" type="date" v-model="planArrivalTime" />
          </div>
          <div class="purch">
            <b>
              <span style="color:#999;font-size:14px">采购清单：</span>
            </b>
            <el-table :data="purchaseData" stripe>
              <el-table-column label="商品编码" width="80">
                <template slot-scope="scope">
                  <!-- scope.row.commodityNo -->
                  <input type="text" v-model="scope.row.commodityNo" readonly />
                </template>
              </el-table-column>
              <el-table-column label="商品名称" width="110">
                <template slot-scope="scope">
                  <el-select
                    v-model="scope.row.commodityName"
                    placeholder="请选择"
                    size="mini"
                    @change="productNameChange(scope.$index)"
                  >
                    <el-option
                      v-for="item in productNameSelect"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="规格型号" width="80">
                <template slot-scope="scope">
                  <input
                    type="text"
                    v-model="scope.row.commoditySpec"
                    readonly
                  />
                </template>
              </el-table-column>
              <el-table-column label="单价（元）" width="110">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.price" readonly />
                </template>
              </el-table-column>
              <el-table-column label="融资单价（元）" width="128">
                <template slot-scope="scope">
                  <input
                    type="text"
                    v-model="scope.row.financePrice"
                    @input="priceAndWeightChange(scope.$index)"
                  />
                </template>
              </el-table-column>
              <el-table-column label="数量/重量" width="110">
                <template slot-scope="scope">
                  <input
                    type="text"
                    v-model="scope.row.weight"
                    v-on:input="priceAndWeightChange(scope.$index)"
                  />
                </template>
              </el-table-column>
              <el-table-column label="总价（元）" width="96">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.totalPrice" readonly />
                </template>
              </el-table-column>
              <el-table-column label="融资总价（元）" width="128">
                <template slot-scope="scope">
                  <input
                    type="text"
                    v-model="scope.row.financeTotalPrice"
                    readonly
                  />
                </template>
              </el-table-column>
              <el-table-column label="单位" width="49">
                <template slot-scope="scope">
                  <input
                    type="text"
                    v-model="scope.row.commodityUnit"
                    readonly
                  />
                </template>
              </el-table-column>
              <el-table-column label="提货方式" width="111">
                <template slot-scope="scope">
                  <el-select
                    v-model="scope.row.pickmethod"
                    placeholder="请选择"
                    size="mini"
                  >
                    <el-option
                      v-for="item in pickmethod"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="58">
                <template slot-scope="scope">
                  <div class="handle">
                    <span
                      class="delPurch"
                      ref="delPurchRef"
                      @click="delPurch(scope.$index)"
                      >删除</span
                    >
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <button class="addCredit" @click="addCredit">新增商品</button>
        </div>
      </div>
      <!-- 贷款信息 -->
      <div class="item">
        <div class="title">贷款信息</div>
        <div class="info">
          <div>
            <b>
              <span></span>
              <span>质押应收账款总额：</span>
            </b>
            <span>0.00元</span>
          </div>
          <div>
            <b>
              <span></span>
              <span>可融资额度：</span>
            </b>
            <span>133800元</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>借款开始日期：</span>
            </b>
            <input class="borrowStart" type="date" />
          </div>
          <div>
            <b>
              <span>*</span>
              <span>借款结束日期：</span>
            </b>
            <input class="borrowEnd" type="date" />
            <span>
              （借款期限
              <span style="color: #ff8500;">1</span>天-
              <span style="color: #ff8500;">100</span>天）
            </span>
          </div>
        </div>
      </div>
      <!-- 单据信息 -->
      <div class="bills">
        <div class="title">单据信息</div>
        <div class="upload">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <span class="limitSize">(请上传小于20M的图片)</span>
        </div>
      </div>
      <button class="submit">提交</button>
    </div>
  </div>
</template>

<script>
import CommonHeader from 'components/common/CommonHeader'
import {
  getProduct,
  getListSupplier,
  getSupplier,
  getListCommodity,
  getCommodity
} from 'network/generate'

import _lodash from 'lodash'

export default {
  data() {
    return {
      // 融资产品信息
      generate: {},
      // 供应商列表
      companyData: [],
      // 供应商信息
      companyInfo: {},
      companyVal: '', // 供应商
      planArrivalTime: '', // 计划到货时间
      // 采购清单
      purchaseData: [
        {
          commodityNo: '',
          commodityName: '',
          commoditySpec: '',
          price: '',
          financePrice: '',
          weight: '',
          totalPrice: '',
          financeTotalPrice: '',
          commodityUnit: '',
          pickmethod: ''
        }
      ],
      // 商品名称列表
      productNameSelect: [],
      // 提货方式列表
      pickmethod: [
        { label: '自提', value: '自提' },
        { label: '供应商送货', value: '供应商送货' },
        { label: '第三方物流提货', value: '第三方物流提货' }
      ],
      fileList: [] // 文件数据
    }
  },
  created() {
    // 获取产品详细信息
    this._getProduct(this.$route.params.productId)
    // 获取供应商列表
    this._getListSupplier()
  },
  components: {
    CommonHeader
  },
  methods: {
    // 获取产品详细信息
    async _getProduct(productId) {
      const res = await getProduct(productId)
      const { data, code } = res.data
      if (code == 0) {
        this.generate = data[0]
      }
    },
    // 获取供应商列表
    async _getListSupplier() {
      const res = await getListSupplier()
      const { data, code } = res.data
      if (code == 0) {
        this.companyData = data[0]
      }
    },
    // 添加应收账款
    addCredit() {
      const purFirstItem = _lodash.cloneDeep(this.purchaseData[0])
      for (let key in purFirstItem) {
        purFirstItem[key] = ''
      }
      this.purchaseData.push(purFirstItem)
    },
    // 删除应收账款
    delPurch(currentIndex) {
      const index = this.purchaseData.findIndex((item, index) => {
        return index == currentIndex
      })
      this.purchaseData.splice(index, 1)
    },
    // 根据供应商id获取供应商信息
    async _getSupplier(companyVal) {
      const res = await getSupplier(companyVal)
      const { data, code } = res.data
      if (code == 0) {
        this.companyInfo = data[0]
      }
    },
    // 根据供应商id获取商品列表
    async _getListCommodity(supplierId) {
      const res = await getListCommodity(supplierId)
      const { data, code } = res.data
      if (code == 0) {
        this.productNameSelect = data[0]
      }
    },
    // 供应商列表改变。根据供应商id获取供应商信息，商品列表
    async supplierDateChange() {
      this._getSupplier(this.companyVal)
      this._getListCommodity(this.companyVal)
    },
    // 商品名称改变
    productNameChange(index) {
      // 获取点击商品列表对应的索引，查找对应的商品数据
      const productItem = this.purchaseData[index]
      this._getCommodity(productItem.commodityName, index)
    },
    // 根据商品id获取商品信息
    async _getCommodity(commodityId, index) {
      const res = await getCommodity(commodityId, index)
      const { data, code } = res.data
      if (code == 0) {
        this.purchaseData[index].commodityNo = data[0].commodityNo
        this.purchaseData[index].commodityName = data[0].commodityName
        this.purchaseData[index].commoditySpec = data[0].commoditySpec
        this.purchaseData[index].price = data[0].price
        this.purchaseData[index].commodityUnit = data[0].commodityUnit
      }
    },
    // 价格改变，动态获取总价
    priceAndWeightChange(index) {
      console.log(index)
      const item = this.purchaseData[index]
      item.totalPrice = item.price * item.weight
      item.financeTotalPrice = item.financePrice * item.weight
    }
  }
}
</script>

<style lang="less" scope></style>
