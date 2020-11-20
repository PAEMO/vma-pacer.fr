<template>
  <Vma @vma="onVmaChanged" />
  <RacePredictor v-if="vma" :vma="vma" />
  <TrainingRanges v-if="vma" :vma="vma"></TrainingRanges>
  <VmaTrainings v-if="vma" :vma="vma" />
  <TrackTrainings v-if="vma" :vma="vma" />
</template>

<script lang="ts">
import Vma from "@/components/Vma/Vma.vue";
import { defineComponent } from "vue";
import TrainingRanges from "@/components/Trainings/TrainingRanges.vue";
import RacePredictor from "@/components/RacePredictor.vue";
import VmaTrainings from "@/components/Trainings/VmaTrainings/VmaTrainings.vue";
import TrackTrainings from "@/components/Trainings/TrackTrainings/TrackTrainings.vue";

export default defineComponent({
  name: "App",
  components: {
    Vma,
    RacePredictor,
    TrainingRanges,
    VmaTrainings,
    TrackTrainings
  },
  data() {
    const vma: number = null;
    return {
      vma
    };
  },
  methods: {
    onVmaChanged(event: number) {
      this.vma = event;
    }
  }
});
</script>

<style lang="scss">
html {
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: honeydew;
  margin-top: 30px;

  table {
    color: #2c3e50;

    th {
      background-color: #1b2d40;
      color: honeydew;
    }
  }

  td,
  th {
    padding: 10px;
  }

  .er {
    background-color: darkgrey;
  }

  .ef {
    background-color: #a7f583;
  }

  .ea {
    background-color: #84c7f5;
  }

  .as42 {
    background-color: #f5e082;
  }

  .as21,
  .vma95,
  .vma90 {
    background-color: #f5b174;
  }

  .as10,
  .vma105,
  .vma100 {
    background-color: #f56666;
  }
}
</style>
