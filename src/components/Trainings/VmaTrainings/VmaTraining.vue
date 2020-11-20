<template>
  <tr :class="training.id">
    <td>{{ training.percentage }}</td>
    <td>{{ training.speed.toFixed(1) }}</td>
    <td>{{ training.pace }}</td>
    <td>
      <ul v-if="training.examples">
        <li v-for="example in training.examples" :key="example">
          {{ example }}
        </li>
      </ul>
    </td>
  </tr>
  <tr :class="training.id"></tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Training } from "@/components/Trainings/Training";

export default defineComponent({
  name: "VmaTraining",
  props: {
    training: Training
  }
});
</script>

<style scoped lang="scss"></style>
