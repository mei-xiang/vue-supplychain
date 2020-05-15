<template>
  <div class="receivable">
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
            <span>{{receivable.productName}}</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>贷款期限：</span>
            </b>
            <span>{{receivable.loanTimeStart}}天 - {{receivable.loanTimeEnd}}天</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>年利率：</span>
            </b>
            <span>{{receivable.loanApr}}.00%</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>保证金比例：</span>
            </b>
            <span>{{receivable.depositFinanceRate}}.00%</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>还款方式：</span>
            </b>
            <span>{{receivable.productName}}</span>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>最高融资比例：</span>
            </b>
            <span>80%</span>
          </div>
        </div>
      </div>
      <!-- 凭证信息 -->
      <div class="item creInformate">
        <div class="title">凭证信息</div>
        <div class="info">
          <div>
            <b>
              <span>*</span>
              <span>核心企业：</span>
            </b>
            <el-select v-model="companyVal" placeholder="-- 请选择 --" size="small">
              <el-option
                v-for="item in companyData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            <b>
              <span>*</span>
              <span>凭证类型：</span>
            </b>
            <el-select v-model="documentVal" placeholder="-- 请选择 --" size="small">
              <el-option
                v-for="item in documentType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="purch">
            <b>
              <span style="color:#999;font-size:14px">采购清单：</span>
            </b>
            <el-table :data="purchaseData" stripe>
              <el-table-column label="凭证编号" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="商务合同号" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="账期" width="168">
                <template slot-scope="scope">
                  <input type="text" style="width:135px" v-model="scope.row.val" />
                  <span>&nbsp;天</span>
                </template>
              </el-table-column>
              <el-table-column label="宽限期" width="168">
                <template slot-scope="scope">
                  <input type="text" style="width:135px" v-model="scope.row.val" />
                  <span>&nbsp;天</span>
                </template>
              </el-table-column>
              <el-table-column label="起始日" width="168">
                <template slot-scope="scope">
                  <input type="date" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="到期日" width="168">
                <template slot-scope="scope">
                  <input type="date" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="最迟付款日" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="账面金额" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="有效金额" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="备注" width="168">
                <template slot-scope="scope">
                  <input type="text" v-model="scope.row.val" />
                </template>
              </el-table-column>
              <el-table-column label="操作" width="168">
                <template slot-scope="scope">
                  <!-- <label class="detail" for="uploadFile">上传文件</label>
                  <input type="file" name="" id="uploadFile" style="display:none">-->
                  <div class="handle">
                    <el-upload
                      action="http://jingruiit.f3322.net:10087/services/sys/ajax/file/compressionUpload"
                      :file-list="fileList"
                      :on-success="uploadSuccess"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <span class="delPurch" ref="delPurchRef" @click="delPurch(scope.$index)">删除</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <button class="addCredit" @click="addCredit">新增应收账款</button>
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
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
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
import { getProduct } from 'network/receivable'

import _lodash from 'lodash'

export default {
  data() {
    return {
      // 融资产品信息
      receivable: {},
      // 核心企业
      companyData: [
        {
          value: '选项1',
          label: '福建深辰科技有限公司'
        }
      ],
      companyVal: '',
      // 凭证类型
      documentType: [
        {
          value: 2,
          label: '合同订单'
        },

        {
          value: 1,
          label: '发票'
        },
        {
          value: 3,
          label: '虚拟发票'
        },
        {
          value: 4,
          label: '结算单'
        },
        {
          value: 5,
          label: '收货收据'
        },
        {
          value: 6,
          label: '出口退税池'
        },
        {
          value: 0,
          label: '其他'
        }
      ],
      documentVal: '',
      // 采购清单
      purchaseData: [{ val: 'aa' }],
      fileList: [] //
    }
  },
  created() {
    // 获取产品详细信息
    this._getProduct(this.$route.params.productId)
  },
  components: {
    CommonHeader
  },
  methods: {
    async _getProduct(productId) {
      const res = await getProduct(productId)
      const { data, code } = res.data
      if (code == 0) {
        console.log(data[0])
        this.receivable = data[0]
      }
    },
    // 判断采购清单文件是否上传成功
    uploadSuccess(res) {
      console.log(res)
    },
    // 添加应收账款
    addCredit() {
      // 对象深拷贝
      const purFirstItem = _lodash(this.purchaseData[0])
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="less" scope>
</style>
