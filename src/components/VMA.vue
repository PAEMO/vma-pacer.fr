<template>
  <h2>Une seule donnée à saisir, ta VMA...</h2>
  <input type="number" placeholder="ex: 14,6" v-model="vma" @input="emitVma" />
  <h4 v-if="vma">
    Tu as une VMA de {{ vma }} km/h ({{ pace }} min/km) - soit une VO2Max de
    {{ vo2Max }} ml/mn/kg
  </h4>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { speedToPace, speedToVo2Max } from "@/filter/conversion";

export default defineComponent({
  data() {
    return {
      vma: null
    };
  },
  computed: {
    pace(): string {
      return speedToPace(parseFloat(this.vma));
    },
    vo2Max(): string {
      return speedToVo2Max(parseFloat(this.vma)).toFixed(1);
    }
  },
  emits: ["vma"],
  setup(props, context) {
    const emitVma = (event: any) =>
      context.emit("vma", parseFloat(event.target.value) || 0);

    return {
      emitVma
    };
  }
});
</script>
