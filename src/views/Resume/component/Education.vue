<script setup>
import { storeToRefs } from "pinia";
import {useEducationStore} from "@/stores/education";

const educationStore = useEducationStore()
const {experiences}= storeToRefs(educationStore)


</script>

<template>
    <el-row   justify="center">
    <el-col :sm="24">
        <h1 class="title">Education </h1>
    </el-col> 
      <el-col :md="24" :lg="16">
        <el-collapse>
          <el-collapse-item v-for="(school,key) in experiences" :key="key"
          :title="school.name"  :name="key" accordion> 
            <p><strong>{{school.education}}</strong>{{school.department}} <span class="positon-right">{{school.timestamp}}</span></p>
            <p v-for="(exper ,index) in school.experience" :key="index">
                {{index+1}}、 {{exper}}  <br> 
            </p>
          </el-collapse-item>
        </el-collapse>
        
      </el-col>
    </el-row>
    
</template>