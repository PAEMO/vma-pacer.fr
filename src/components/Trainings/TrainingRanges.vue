<template>
  <h2>Zones d'entrainement</h2>
  <table>
    <thead>
      <tr>
        <th>Zone</th>
        <th>%VMA</th>
        <th>Vitesse (km/h)</th>
        <th>Allure (min/km)</th>
        <th>Temps</th>
      </tr>
    </thead>
    <tbody>
      <TrainingRange v-for="range in ranges" :key="range.id" :range="range" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Range } from "../Range";
import TrainingRange from "@/components/Trainings/TrainingRange.vue";

export default defineComponent({
  name: "TrainingRanges",
  components: {
    TrainingRange
  },
  props: {
    vma: Number
  },
  computed: {
    ranges(): Range[] {
      return [
        {
          vma: this.vma,
          name: "Échauffement / Récupération",
          id: "er",
          lowRange: 50,
          highRange: 60
        },
        {
          vma: this.vma,
          name: "Endurance Fondamentale",
          id: "ef",
          lowRange: 60,
          highRange: 70
        },
        {
          vma: this.vma,
          name: "Endurance Active",
          id: "ea",
          lowRange: 70,
          highRange: 75
        },
        {
          vma: this.vma,
          name: "Allure Marathon",
          id: "as42",
          length: 42.2,
          lowRange: 75,
          highRange: 80
        },
        {
          vma: this.vma,
          name: "Allure Semi-Marathon / Seuil",
          id: "as21",
          length: 21.1,
          lowRange: 80,
          highRange: 85
        },
        {
          vma: this.vma,
          name: "Allure 10km / Seuil+",
          id: "as10",
          length: 10,
          lowRange: 85,
          highRange: 90
        }
      ];
    }
  }
});
</script>

<style scoped lang="scss">
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
