<template>
  <tr :class="training.id">
    <td>{{ training.length * 1000 }}</td>
    <td>{{ training.percentage }}</td>
    <td>{{ lengthSpeedToTime(training.length, training.speed) }}</td>
    <td>{{ training.speed.toFixed(1) }}</td>
    <td>{{ training.pace }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Training } from "@/components/Trainings/Training";
import { lengthSpeedToTime } from "@/filter/conversion";

export default defineComponent({
  name: "TrackTraining",
  props: {
    training: Training
  },
  methods: {
    lengthSpeedToTime
  }
});
</script>

<style scoped lang="scss">
.track-less100 {
  background-color: #f5e082;
}

.track100 {
  background-color: #f5b174;
}

.track110 {
  background-color: #f56666;
}
</style>
