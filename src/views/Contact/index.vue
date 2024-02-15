<script setup>
import { reactive, ref ,onMounted} from "vue";  
import { Location, Iphone, Promotion } from "@element-plus/icons-vue";
import { ElNotification } from 'element-plus'

import SecondTitle from "../Layout/component/SecondTitle.vue";

onMounted(() => {
    
  // 在你的 setup 方法中
  // const { appContext } = getCurrentInstance()!
  // ElNotification({}, appContext)

})
const  contactFormRef =ref();
const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});
const rules = reactive({
  name: [
    // required是否必填,message不符合此规则时的提示信息,
    // trigger触发此条规则校验的时机，有两个值, blur 或 change,默认就是blur和change都会进行校验
    // min此字段的最小长度，max此字段的最大长度
    // pattern 正则表达式
    { required: true, message: "账户不能为空", trigger: "blur" },
    { min: 6, max: 14, message: "用户长度不要超过14位，最短6位" },
  ],
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  message: [
    {
      required: true,
      message: "Message can not be null",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formCotact) => {
  if (!formCotact){ return false
  }
  await formCotact.validate((valid, fields) => {
    if (valid) { 
      ElNotification({
        title: 'submit!',
        message: "提交成功",
        type: 'success',
      })
    } else { 
      ElNotification({
        title: 'error submit!',
        message: fields,
        type: 'error',
      })
    }
  })
}

const resetForm = (formCotact) => {
  if (!formCotact) return
  formCotact.resetFields()
}

</script>


<template>
  <div class="container-box">
    <SecondTitle :title="`Contact Me`" />
    <el-row>
      <!-- 左侧联系方式 -->
      <el-col :sm="24" :md="8">
        <div class="icon-info-box bg-pink">
          <div class="left-icon purple">
            <el-icon><Iphone /></el-icon>
          </div>
          <div class="right-text">
            <h2>Phone :</h2>
            <div>17822437524</div>
            <div>186++++++++</div>
          </div>
        </div>
        <div class="icon-info-box bg-pink">
          <div class="left-icon purple">
            <el-icon><Promotion /></el-icon>
          </div>
          <div class="right-text">
            <h2>Email :</h2>
            <div>manixchensunshine@163.com</div>
            <div>1183108660@qq.com</div>
          </div>
        </div>
        <div class="icon-info-box bg-pink">
          <div class="left-icon purple">
            <el-icon><Location /></el-icon>
          </div>
          <div class="right-text">
            <h2>Address :</h2>
            <div>Wuhan hubei</div>
          </div>
        </div>
      </el-col>

      <!-- 右侧邮件 -->
      <el-col :sm="23" :md="15" :offset="1">
        <div class="contact-form">
          <el-text class="large-text" tag="b" size="large">
            I'm Always Open To Discussing Produuct design work or
            partnerships.</el-text
          >
          <br /><br />
          <el-form
            ref="contactFormRef"
            :rules="rules"
            :model="contactForm"
            label-position="top"
            labelSuffix=""
            requireAsteriskPosition="right"
            label-width="200px"
          >
            <el-form-item prop="name" label="Name">
              <el-input v-model="contactForm.name" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="contactForm.email" />
            </el-form-item>
            <el-form-item label="Message" prop="message">
              <el-input v-model="contactForm.message" />
            </el-form-item>
            <el-form-item>
              <el-button type="default" @click="submitForm(contactFormRef)">
                Create
              </el-button>
              <el-button  type="default" @click="resetForm(contactFormRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.dager-color {
  color: $danger;
}
.icon-info-box {
  width: auto;
  margin-bottom: 15px;
  display: flex;
  .left-icon {
    margin: 30px 30px 0 20px;
    color: #303030;
    background: transparent;
    border: 1px solid transparent;
    i {
      font-size: 3rem;
      vertical-align: top;
      color: $purple;
    }
  }
  .right-text {
    h2 {
      margin-bottom: 5px;
    }
    padding-bottom: 25px;
  }
}
.contact-form {
  form {
    .el-input {
      box-shadow: none;
      outline: none;
      .el-input__wrapper,
      .el-input__wrapper.is-focus {
        border: none;
        box-shadow: none;
        outline: none;
        input,
        input:hover {
          display: block;
          width: 100%;
          height: 40px;
          outline: none;
          border: none;
          border: 1px solid transparent;
          border-bottom: 1px solid #b5b5b5;
          outline: none;
          box-shadow: none;
          background: transparent;
          transition: 0.3s;
          transform-origin: top;
          font-size: 14px;
          &.focus {
            border-bottom: 1px solid rgb(254, 120, 120);
          }
        }
      }
    }
  }
}
</style>