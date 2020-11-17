<template>
  <tr :class="range.id">
    <td rowspan="2">{{ range.name }}</td>
    <td>{{ range.lowRange }}</td>
    <td>{{ applyPercentageSpeed(range.vma, range.lowRange).toFixed(1) }}</td>
    <td>{{ speedToPace(applyPercentageSpeed(range.vma, range.lowRange)) }}</td>
    <td v-if="range.length">
      {{
        lengthSpeedToTime(
          range.length,
          applyPercentageSpeed(range.vma, range.lowRange)
        )
      }}
    </td>
  </tr>
  <tr :class="range.id">
    <td>{{ range.highRange }}</td>
    <td>{{ applyPercentageSpeed(range.vma, range.highRange).toFixed(1) }}</td>
    <td>{{ speedToPace(applyPercentageSpeed(range.vma, range.highRange)) }}</td>
    <td v-if="range.length">
      {{
        lengthSpeedToTime(
          range.length,
          applyPercentageSpeed(range.vma, range.highRange)
        )
      }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Range } from "../Range";
import {
  applyPercentageSpeed,
  lengthSpeedToTime,
  speedToPace
} from "@/filter/conversion";

export default defineComponent({
  name: "TrainingRange",
  props: {
    range: Range
  },
  methods: {
    applyPercentageSpeed,
    speedToPace,
    lengthSpeedToTime
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
