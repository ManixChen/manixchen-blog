<script setup>
import { storeToRefs } from "pinia";
import {useCommonStore} from "@/stores/common";
const commonstore = useCommonStore()
const { jobs } = storeToRefs(commonstore);
  

</script>
<template> 
    <!-- 工作经历 -->
    <el-col :sm="24" :md="12">
        <h1 class="title">Employment History</h1>
        <el-timeline>
          <el-timeline-item v-for="(company,key) in jobs" :key="key"
            center  :timestamp="company.timestamp" 
            placement="bottom"
            color="#0bbd87"
          >
            <el-card>
              <h3>{{company.name}}</h3>
              <h4>{{company.jobname}}</h4>
              <p v-for="(project,index) in company['projecs']" :key="index">{{project}}</p> 
            </el-card>
          </el-timeline-item>  
        </el-timeline>
      </el-col>
</template>