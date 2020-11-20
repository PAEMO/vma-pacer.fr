<template>
  <h2>Séances piste détaillées</h2>
  <table>
    <thead>
      <tr>
        <th>Distance (m)</th>
        <th>%VMA</th>
        <th>Temps</th>
        <th>Vitesse (km/h)</th>
        <th>Allure (min/km)</th>
      </tr>
    </thead>
    <tbody>
      <TrackTraining
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
import TrackTraining from "@/components/Trainings/TrackTrainings/TrackTraining.vue";

export default defineComponent({
  name: "TrackTrainings",
  components: {
    TrackTraining
  },
  props: {
    vma: Number
  },
  computed: {
    trainings(): Training[] {
      return [
        new Training(
          "track110",
          110,
          applyPercentageSpeed(this.vma, 110),
          speedToPace(applyPercentageSpeed(this.vma, 110)),
          null,
          0.2
        ),
        new Training(
          "track100",
          100,
          this.vma,
          speedToPace(this.vma),
          null,
          0.25
        ),
        new Training(
          "track100",
          100,
          this.vma,
          speedToPace(this.vma),
          null,
          0.3
        ),
        new Training(
          "track-less100",
          99,
          applyPercentageSpeed(this.vma, 99),
          speedToPace(applyPercentageSpeed(this.vma, 99)),
          null,
          0.35
        ),
        new Training(
          "track-less100",
          98,
          applyPercentageSpeed(this.vma, 98),
          speedToPace(applyPercentageSpeed(this.vma, 98)),
          null,
          0.4
        ),
        new Training(
          "track-less100",
          96,
          applyPercentageSpeed(this.vma, 96),
          speedToPace(applyPercentageSpeed(this.vma, 96)),
          null,
          0.5
        ),
        new Training(
          "track-less100",
          95,
          applyPercentageSpeed(this.vma, 95),
          speedToPace(applyPercentageSpeed(this.vma, 95)),
          null,
          0.6
        ),
        new Training(
          "track-less100",
          94,
          applyPercentageSpeed(this.vma, 94),
          speedToPace(applyPercentageSpeed(this.vma, 94)),
          null,
          0.7
        ),
        new Training(
          "track-less100",
          93,
          applyPercentageSpeed(this.vma, 93),
          speedToPace(applyPercentageSpeed(this.vma, 93)),
          null,
          0.8
        ),
        new Training(
          "track-less100",
          90,
          applyPercentageSpeed(this.vma, 90),
          speedToPace(applyPercentageSpeed(this.vma, 90)),
          null,
          1
        )
      ];
    }
  }
});
</script>

<style scoped lang="scss">
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
