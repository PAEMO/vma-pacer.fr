<template>
  <div class="greetings">
    <el-row align="middle" justify="center">
      <h1 class="green">Une seule donnée à saisir, ta VMA...</h1>
    </el-row>

    <!-- VMA INPUT -->
    <el-row align="middle" justify="center">
      <el-input-number :model-value="vma" @update:modelValue="updateVma" placeholder="14,2km/h" :min=1
                       :max=30></el-input-number>
    </el-row>


    <!-- ESTIMATEUR -->
    <el-row align="middle" justify="center">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="Estimer ma VMA à partir d'un temps de course">
          <el-row align="middle" justify="center">
            <el-radio-group v-model="distanceChoice">
              <el-radio :label="10">10km</el-radio>
              <el-radio :label="21.1">Semi-marathon</el-radio>
              <el-radio :label="42.2">Marathon</el-radio>
            </el-radio-group>
          </el-row>
          <el-row align="middle" justify="center">
            <el-time-picker v-model="time" :arrow-control="true" placeholder="Temps de course"/>
          </el-row>
          <el-row align="middle" justify="center">
            <el-button type="success" round @click="updateVma(estimatedVma)">Choisir cette VMA estimée de
              {{ estimatedVma }} km/h
            </el-button>
          </el-row>
        </el-collapse-item>
      </el-collapse>


    </el-row>

    <template v-if="vma">


      <el-row align="middle" justify="center">
        Tu as une VMA de {{ vma }} km/h ( {{ speedToPace(vma) }} min/km) - soit une VO2 max de
        {{ speedToVo2Max(vma).toFixed(1) }} ml/mn/kg
      </el-row>

      <el-row align="middle" justify="center">
        <el-descriptions title="Prédicteur de temps de course" :column="1" border>
          <el-descriptions-item
              label="10km"
              label-align="right"
              align="center"
              label-class-name="red"
              class-name="my-content">
            {{ lengthSpeedToTime(10, applyPercentageSpeed(vma, 85)) }}
            -{{ lengthSpeedToTime(10, applyPercentageSpeed(vma, 90)) }}
          </el-descriptions-item>

          <el-descriptions-item
              label="Semi-marathon"
              label-align="right"
              align="center"
              label-class-name="orange"
              class-name="my-content">
            {{ lengthSpeedToTime(21.1, applyPercentageSpeed(vma, 80)) }}
            -{{ lengthSpeedToTime(21.1, applyPercentageSpeed(vma, 85)) }}
          </el-descriptions-item>

          <el-descriptions-item
              label="Marathon"
              label-align="right"
              align="center"
              label-class-name="yellow"
              class-name="my-content">
            {{ lengthSpeedToTime(42.2, applyPercentageSpeed(vma, 75)) }}
            -{{ lengthSpeedToTime(42.2, applyPercentageSpeed(vma, 80)) }}
          </el-descriptions-item>
        </el-descriptions>
      </el-row>
    </template>
  </div>
</template>

<script setup lang="ts">
import {inject, ref, watch} from 'vue'
import {vmaKey, VmaKey} from "@/keys";
import {
  applyPercentageSpeed,
  lengthSpeedToTime,
  lengthSpeedToVma,
  lengthTimeToSpeed,
  speedToPace,
  speedToVo2Max
} from "@/utils/conversion";

type Distance = 10 |21.1 | 42.2;

const MEDIAN_TIME: Record<Distance, Date> = {
  10: new Date(0, 0, 0, 0, 48, 30),
  21.1: new Date(0, 0, 0, 1, 52, 30),
  42.2: new Date(0, 0, 0, 3, 58, 30),
}

const {vma, updateVma} = inject<VmaKey>(vmaKey);
const time = ref<Date>();
const distanceChoice = ref<Distance>(10);
const estimatedVma = ref<number>();

watch(distanceChoice, distance => {
  time.value = MEDIAN_TIME[distance];
}, {immediate: true});

watch(time, (t: Date) => {
  estimatedVma.value = lengthSpeedToVma(distanceChoice.value, lengthTimeToSpeed(distanceChoice.value, `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`)).toFixed(2)
}, {immediate: true})

</script>

<style scoped>
.el-row {
  margin-top: 16px;
}

.el-collapse {
  --el-collapse-border-color: grey;
  --el-collapse-content-bg-color: none;
  --el-collapse-header-bg-color: none;
  --el-collapse-header-text-color: none;
}

.el-collapse-item__header {
  background-color: unset;
}

.el-descriptions {
  width: fit-content;
  align-items: center;
  justify-items: center;
}

.el-descriptions__cell {
  border: 1px solid red !important;
}

:deep(.red) {
  background: var(--el-color-error-light-3) !important;
}

:deep(.orange) {
  background: var(--el-color-warning) !important;
}

:deep(.yellow) {
  background: var(--el-color-warning-light-5) !important;
}
</style>
