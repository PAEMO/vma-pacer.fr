<template>
  <tr :class="training.id">
    <td>{{ training.percentage }}</td>
    <td>{{ training.speed }}</td>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
