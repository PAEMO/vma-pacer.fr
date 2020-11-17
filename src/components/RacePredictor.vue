<template>
  <h2>Prédicteur de temps de course</h2>
  <table id="predictor-table">
    <thead>
      <tr>
        <td></td>
        <th>Marathon</th>
        <th>Semi</th>
        <th>10km</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Entre</th>
        <td class="as42">
          {{ lengthSpeedToTime(42.2, applyPercentageSpeed(vma, 75)) }}
        </td>
        <td class="as21">
          {{ lengthSpeedToTime(21.1, applyPercentageSpeed(vma, 80)) }}
        </td>
        <td class="as10">
          {{ lengthSpeedToTime(10, applyPercentageSpeed(vma, 85)) }}
        </td>
      </tr>
      <tr>
        <th>et</th>
        <td class="as42">
          {{ lengthSpeedToTime(42.2, applyPercentageSpeed(vma, 80)) }}
        </td>
        <td class="as21">
          {{ lengthSpeedToTime(21.1, applyPercentageSpeed(vma, 85)) }}
        </td>
        <td class="as10">
          {{ lengthSpeedToTime(10, applyPercentageSpeed(vma, 90)) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  applyPercentageSpeed,
  lengthSpeedToTime,
  speedToPace
} from "@/filter/conversion";

export default defineComponent({
  name: "RacePredictor",
  props: {
    vma: Number
  },
  methods: {
    speedToPace,
    applyPercentageSpeed,
    lengthSpeedToTime
  }
});
</script>

<style scoped>
#predictor-table {
  margin-left: auto;
  margin-right: auto;
}
</style>
