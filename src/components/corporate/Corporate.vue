<template>
  <div class="corporate">
    <div class="recommend">
      <div class="title">
        <h4>推荐业务</h4>
      </div>
    </div>
    <div class="recommend_box">
      <div class="credit" v-for="(item,index) in BusinessType" :key="index">
        <div class="title" @click="toggle(item.index)">
          <i :class="{active: !isShowCredit}"></i>
          <!-- <pre>{{BusinessType}}</pre> -->
          <span>{{item.name}}({{BusinessType[index].listProduct?BusinessType[index].listProduct.length:0}})</span>
          <div class="line"></div>
        </div>
        <template v-if="isShowCredit">
          <div class="content">
            <div class="product">
              <div class="item" v-for="(listItem,listIndex) in item.listProduct" :key="listIndex">
                <p class="title">{{listItem.name}}</p>
                <div class="rateBox">
                  <p>日利率最低</p>
                  <p class="percent">{{listItem.loanApr}}.00%</p>
                </div>
                <div class="rateBox">
                  <p>还款方式</p>
                  <p class="content">{{listItem.repayTypeName}}</p>
                </div>
                <button class="applyBtn" @click="apply(listItem.id,listItem.name)">立即申请</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getBusinessType, getListProduct } from 'network/corporate'
export default {
  data() {
    return {
      isShowCredit: true,
      isShowFinance: true,
      BusinessType: [] // 产品业务类型列表 [{[{}]},{[{},{}]}]
    }
  },
  mounted() {
    this._getBusinessType()
  },
  methods: {
    // 展开收缩
    toggle(index) {
      if (index === 1) {
        this.isShowCredit = !this.isShowCredit
      }
      if (index === 2) {
        this.isShowFinance = !this.isShowFinance
      }
    },
    // 获取产品业务类型列表
    async _getBusinessType() {
      const res = await getBusinessType()
      const { data, code } = res.data
      if (code == 0) {
        this.BusinessType = data[0]
        // 根据id获取产品列表
        if (this.BusinessType.length > 0) {
          this.BusinessType.forEach((item, index) => {
            this.BusinessType.push(index)
            this._getListProduct(item.id, item)
          })
          this.BusinessType = []
        }
      }
    },
    // 根据产品类型id，获取产品列表
    _getListProduct(businessTypeId, item) {
      const res = getListProduct(businessTypeId).then(res => {
        const { data, code } = res.data
        if (code == 0) {
          item.listProduct = data[0]
          this.BusinessType.push(item)
        }
      })
    },
    apply(productId, productName) {
      if (productName === '应收账款') {
        this.$router.push(`/receivable/${productId}`)
      }
      if (productName.indexOf('代采融资') != -1) {
        this.$router.push(`/generate/${productId}`)
      }
    }
  }
}
</script>

<style lang="less" scope>
</style>
