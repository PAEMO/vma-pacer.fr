<script setup lang="ts">
import TrainingData from '../components/TrainingData.vue'
import {inject} from "vue";
import {vmaKey, VmaKey} from "@/keys";

const {vma} = inject<VmaKey>(vmaKey)
</script>

<template>
  <main v-if="vma">
    <TrainingData/>
  </main>
</template>
