<template>
  <BlockItem>
    <template #heading>Prédicteur de temps de course</template>

    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="className"
    >
      <el-table-column prop="name" label="Distance" width="180"/>
      <el-table-column prop="min" label="Entre" width="180"/>
      <el-table-column prop="max" label="Et" width="180"/>
    </el-table>
  </BlockItem>

  <BlockItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>Zones d'entrainement</template>
    Pour une VMA de {{ vma }} km/h.
    <el-table
        :data="trainingZones"
        style="width: fit-content"
        table-layout="auto"
        align="center"
    >
      <el-table-column prop="zone" label="Zone" header-align="center" align="center"/>
      <el-table-column prop="percentVma" label="%VMA" header-align="center" align="center" width="70px">
        <template #default="{row, column}">
          {{ row[column.property][0] }}
        <el-divider/>
          {{row[column.property][1]}}
        </template>
      </el-table-column>
      <el-table-column prop="speed" label="Vitesse (km/h)" header-align="center" align="center" width="80px">
        <template #default="{row, column}">
          {{ row[column.property][0] }}
          <el-divider/>
          {{row[column.property][1]}}
        </template>
      </el-table-column>
      <el-table-column prop="pace" label="Allure (min/km)" header-align="center" align="center" width="90px">
        <template #default="{row, column}">
          {{ row[column.property][0] }}
          <el-divider/>
          {{row[column.property][1]}}
        </template>
      </el-table-column>
      <el-table-column prop="time" label="Temps" header-align="center" align="center">
        <template #default="{row, column}">
          {{ row[column.property][0] ?? '-' }}
          <el-divider/>
          {{row[column.property][1] ?? '-'}}
        </template>
      </el-table-column>
    </el-table>
  </BlockItem>

  <BlockItem>
    <template #icon>
      <HeartIcon/>
    </template>
    <template #heading>Séances VMA</template>
    TODO
  </BlockItem>

  <BlockItem>
    <template #icon>
      <EcosystemIcon/>
    </template>
    <template #heading>Séances piste détaillées</template>
    TODO
  </BlockItem>
</template>


<script setup lang="ts">
import BlockItem from './BlockItem.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import HeartIcon from './icons/IconHeart.vue'
import {inject} from 'vue'
import {vmaKey, VmaKey} from "@/keys";
import {applyPercentageSpeed, speedToPace} from "@/utils/conversion";

interface Prediction {
  name: string
  className: string
  min: string
  max: string
}

const {vma} = inject<VmaKey>(vmaKey)

interface TrainingZone {
  zone: string;
  percentVma: number[];
  speed: number[];
  pace: string[];
  time: string[];
}

const buildTrainingZone = (vma: number, coefLow: number, coefHigh: number): Omit<TrainingZone, 'zone'> => ({
  percentVma: [coefLow, coefHigh],
  speed: [applyPercentageSpeed(vma, coefLow), applyPercentageSpeed(vma, coefHigh)],
  pace: [speedToPace(applyPercentageSpeed(vma, coefLow)), speedToPace(applyPercentageSpeed(vma, coefHigh))],
  time: ["", ""]
})

const trainingZones: TrainingZone[] = [
  {
    zone: 'Échauffement / Récupération',
    ...buildTrainingZone(vma, 50, 60)
  },
  {
    zone: 'Échauffement / Récupération',
    percentVma: [50, 60],
    speed: [10, 12],
    pace: ['6:00', '5:00'],
    time: ['low', 'high'],
  }
]

const tableData: Prediction[] = [
  {
    name: '10km',
    className: '10km',
    min: '00:34:12',
    max: '00:36:58',
  },
  {
    name: 'Semi',
    className: 'semi',
    min: '01:24:12',
    max: '01:26:58',
  }
];

</script>

<style scoped>
.el-divider {
  margin: 4px 0
}
</style>