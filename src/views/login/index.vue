<template>
  <div class="login-container">
    <el-form
      ref='ruleFormRef'
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"

    >
      <div class="title-container">
        <h3>用户登录</h3>
        <div class="svg-title">
          <el-tooltip
            class="box-item"
            content="切换语言"
            effect="light"
            placement="bottom"
          >
            <svg-icon icon="language"></svg-icon>
          </el-tooltip>

        </div>
      </div>
      <el-form-item prop="username">
 <span class="svg-container">
        <svg-icon icon="user"></svg-icon>
        </span>
        <el-input v-model="ruleForm.username"/>
      </el-form-item>
      <el-form-item prop="password">
         <span class="svg-container">
          <el-icon>
          <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="ruleForm.password" :type="toggleInputType?'text':'password'">
          <template #suffix>
            <el-icon v-if="!toggleInputType" class="el-input__icon" @click="toggleInputType=!toggleInputType">
              <svg-icon icon="eye"></svg-icon>
            </el-icon>
            <el-icon v-if="toggleInputType" class="el-input__icon" @click="toggleInputType=!toggleInputType">
              <svg-icon icon="eye-open"></svg-icon>
            </el-icon>

          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loginLoading" class="login-button" type="primary" @click="submitForm()">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import util from '@/utils/util';
import { validatorPwd } from '@/views/login/rules'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon'

const toggleInputType = ref(false)
const loginLoading = ref(false)
const store = useStore()
const router = useRouter()
const ruleForm = reactive({
  username: 'admin',
  password: '123456'
})
onMounted(() => {
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      submitForm()
    }
  })
})
const rules = reactive({
  username: [{
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    trigger: 'blur',
    validator: validatorPwd
  }]
})
const ruleFormRef = ref(null)
const submitForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        loginLoading.value = true
        // 获取并storagetoken
        const newRuleForm = util.DeepCopy(ruleForm)
        await store.dispatch('user/login', newRuleForm)
        await router.push({ name: 'HomeLayout' })
      } catch (error) {
      }
      loginLoading.value = false
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  height: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;

  .el-form {
    width: 520px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);

    .el-form-item {
      width: 520px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      display: flex;

      ::v-deep .el-input {
        width: 92% !important;

      }

      ::v-deep .el-input__inner {
        color: #fff !important;
      }

      ::v-deep .el-input__wrapper {
        box-shadow: none !important;
        background-color: transparent !important;
      }

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
        flex: 1;
      }
    }
  }

  .login-button {
    width: 100%;
  }

  .title-container {
    position: relative;

    h3 {
      text-align: center;
      color: $light_gray;
      margin-bottom: 45px;
      font-size: 26px;
    }

    .svg-title {
      position: absolute;
      right: 0;
      padding: 5px;
      border-radius: 3px;
      background-color: $cursor;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
      font-size: 20px;
      color: $light_gray;

      .svg-icon {
        color: $light_gray;
      }
    }

  }

}

</style>
