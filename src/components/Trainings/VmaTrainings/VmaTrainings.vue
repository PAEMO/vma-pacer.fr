<template>
  <h2>Séances VMA</h2>
  <table id="vma-trainings-table">
    <thead>
      <tr>
        <th>%VMA</th>
        <th>Vitesse (km/h)</th>
        <th>Allure (min/km)</th>
        <th>Exemple d'entraînement</th>
      </tr>
    </thead>
    <tbody>
      <VmaTraining
        v-for="training in trainings"
        :key="training.id"
        :training="training"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Training } from "@/components/Trainings/Training";
import { applyPercentageSpeed, speedToPace } from "@/filter/conversion";
import VmaTraining from "@/components/Trainings/VmaTrainings/VmaTraining.vue";

export default defineComponent({
  name: "VmaTrainings",
  components: {
    VmaTraining
  },
  props: {
    vma: Number
  },
  computed: {
    trainings(): Training[] {
      return [
        new Training(
          "vma105",
          105,
          applyPercentageSpeed(this.vma, 105),
          speedToPace(applyPercentageSpeed(this.vma, 105)),
          ['2x 8x(30"/30") - 3\'R', '2x 10x(45"/30") - 3\'R', '15x(45"/30")']
        ),
        new Training(
          "vma100",
          100,
          applyPercentageSpeed(this.vma, 100),
          speedToPace(applyPercentageSpeed(this.vma, 100)),
          [
            "8x(1'30/50\")",
            "10x 400m - " +
              (this.vma > 16 ? "1'" : this.vma > 14 ? "1'10" : "1'20") +
              "R"
          ]
        ),
        new Training(
          "vma95",
          95,
          applyPercentageSpeed(this.vma, 95),
          speedToPace(applyPercentageSpeed(this.vma, 95)),
          ["8x(1'30/50\")", "6x(3'/1'30)"]
        ),
        new Training(
          "vma90",
          90,
          applyPercentageSpeed(this.vma, 90),
          speedToPace(applyPercentageSpeed(this.vma, 90)),
          ["6x(3'/1'30)", "5x(4'/2')"]
        )
      ];
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#vma-trainings-table {
  margin-left: auto;
  margin-right: auto;
}
</style>
