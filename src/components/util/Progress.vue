<template>
  <div
    class="w-full bg-gray-300 h-4 relative overflow-hidden"
    :class="[{ 'rounded-full': rounded }, { indeterminate: indeterminate }]"
  >
    <div
      class="h-full progressbar"
      :class="[
        `bg-${color}`,
        { 'absolute top-0': indeterminate },
        { 'rounded-full': rounded }
      ]"
      role="progressbar"
      :style="{ width: `${percentage}%` }"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span class="flex items-center h-full">
        <span class="text-xs mt-1 w-full flex justify-start pr-2" :class="{'text-white' : percentage > 0 ,'text-gray-600' : percentage == 0}"
          >{{ percentage }}%</span
        >
      </span>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    color: {
      default: "gray-600"
    },
    percentage: {
      type: Number,
      default: 0
    },
    rounded: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean
  }
};
</script>
<style scoped>
@keyframes progress-indeterminate {
  0% {
    width: 30%;
    left: -40%;
  }
  60% {
    left: 100%;
    width: 100%;
  }
  to {
    left: 100%;
    width: 0;
  }
}
.progressbar {
  transition: width 0.25s ease;
}
.indeterminate .progressbar {
  animation: progress-indeterminate 1.4s ease infinite;
}
</style>
