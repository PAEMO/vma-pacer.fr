<template>
  <h2>Une seule donnée à saisir, ta VMA...</h2>
  <input type="number" placeholder="ex: 14,6" v-model="vma" @input="emitVma" />
  <Estimator @vma="onEstimatedVma"></Estimator>
  <h4 v-if="vma">
    Tu as une VMA de {{ vma }} km/h ({{ pace }} min/km) - soit une VO2Max de
    {{ vo2Max }} ml/mn/kg
  </h4>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { speedToPace, speedToVo2Max } from "@/filter/conversion";
import Estimator from "@/components/Vma/Estimator.vue";

export default defineComponent({
  name: "Vma",
  components: {
    Estimator
  },
  data() {
    return {
      vma: null,
      estimatorVisible: false,
      length: null,
      time: null
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
  methods: {
    onEstimatedVma(estimatedVma: number) {
      this.vma = estimatedVma.toFixed(1);
      this.$emit("vma", parseFloat(this.vma));
    }
  },
  emits: ["vma"],
  setup(props, context) {
    const emitVma = (event: any): void =>
      context.emit("vma", parseFloat(event.target.value) || 0);

    return {
      emitVma
    };
  }
});
</script>

<style scoped lang="scss">
input {
  font-size: larger;
  text-align: center;
  width: 100px;
}
</style>
