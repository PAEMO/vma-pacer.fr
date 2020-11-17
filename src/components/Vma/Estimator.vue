<template>
  <div id="estimator">
    <div>
      <a @click="estimatorVisible = !estimatorVisible"
        >Estimer ma VMA à partir d'un temps de course</a
      >
    </div>
    <div v-show="estimatorVisible">
      <input type="radio" id="estim10" value="10" v-model="length" />
      <label for="estim10">10km</label>
      <input type="radio" id="estim21" value="21.1" v-model="length" />
      <label for="estim21">Semi-Marathon</label>
      <input type="radio" id="estim42" value="42.2" v-model="length" />
      <label for="estim42">Marathon</label>
      <br />
      <input type="time" v-model="time" step="1" />

      <div>
        <div v-if="time !== '00:00:00'">
          Soit {{ length }} km parcourus à
          {{ lengthTimeToSpeed(length, time).toFixed(1) }} km/h ({{
            speedToPace(lengthTimeToSpeed(length, time))
          }}
          min/km)
          <br />
          <button
            v-on:click="
              estimatorVisible = !estimatorVisible;
              emitVma(
                lengthSpeedToVma(length, lengthTimeToSpeed(length, time))
              );
            "
          >
            Choisir cette VMA estimée à
            {{
              lengthSpeedToVma(length, lengthTimeToSpeed(length, time)).toFixed(
                1
              )
            }}
            km/h
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  lengthTimeToSpeed,
  speedToPace,
  lengthSpeedToVma
} from "@/filter/conversion";

export default defineComponent({
  name: "Estimator",
  data() {
    return {
      vma: null,
      estimatorVisible: false,
      length: 10,
      time: "00:00:00"
    };
  },
  methods: {
    lengthTimeToSpeed,
    speedToPace,
    lengthSpeedToVma
  },
  emits: ["vma"],
  setup(props, context) {
    const emitVma = (estimatedVma: number) => {
      context.emit("vma", estimatedVma || 0);
    };

    return {
      emitVma
    };
  }
});
</script>

<style scoped lang="scss">
#estimator {
  background-color: #1b2d40;
  padding: 10px;
  margin-top: 20px;
}

a,
input,
label,
button {
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
}

a {
  font-weight: bold;
}
</style>
