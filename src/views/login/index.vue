<template>
<el-container className="app-login">
  <el-main>
    <el-form>
      <h5>登录窗口</h5>
      <el-form-item label="用户名或邮箱" prop="username">
        <el-input type="text" vModel_trim = "form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" vModel="form.password" />
      </el-form-item>
    </el-form>
  </el-main>
</el-container>
</template>
<script type="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
  }
}) 
</script>
<style lang="scss" scoped>
.app-login {}
</style>