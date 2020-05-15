<template>
  <div class="home">
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-container>
        <el-aside width="210px">
          <div class="user-info">
            <div class="user-avatar">
              <router-link to="/companyInfo">
                <img src="~assets/images/companyLogo.jpg" />
              </router-link>
            </div>
            <div class="user-name">
              <router-link to="/companyInfo">深圳市环宇科技技术有限公司</router-link>
            </div>
          </div>
          <el-menu :default-active="$route.path" text-color="#909399" unique-opened :router="true">
            <el-menu-item index="/enterprise">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>企业总览</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/corporate">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>企业融资</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/borrowing">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>借款管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/redeem">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>赎货管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/payment">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>还款管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/contract">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>合同管理</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
export default {
  components: {
    CommonHeader
  }
}
</script>

<style lang="less" scope>
.home {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  .el-header {
    // background: url('~assets/images/topTitle.png') no-repeat center center;
  }
  .el-container {
    height: 100%;
    .el-menu {
      background-color: transparent;
    }
  }
  .el-aside {
    background: url('~assets/images/leftBg.png') no-repeat left bottom;
    background-size: cover;
    border-right: 1px solid #d5d9e2;
    .el-menu-item.is-active {
      background-color: #1989fa !important;
      color: #fff;
    }
    .el-menu-item:hover {
      background-color: #1989fa !important;
      color: #fff !important;
      i {
        color: #fff !important;
      }
    }
    .el-menu-item {
      height: 42px;
      line-height: 42px;
    }
    .user-info {
      text-align: center;
      padding: 18px 0 0;
      .user-avatar {
        height: 100px;
        margin-top: 10px;
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
        }
      }
      .user-name {
        height: 24px;
        line-height: 24px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          color: #616266;
        }
      }
    }
  }
  .el-main {
    min-width: 1024px;
    height: 100%;
    position: relative;
    padding: 28px 20px 0;
    background: #e9e9f1;
    font-size: 14px;
    line-height: 1.5;
    z-index: 20;
    -moz-box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.04);
    -webkit-box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.04);
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.04);
  }
}
</style>
