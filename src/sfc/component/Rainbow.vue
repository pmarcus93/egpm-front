<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 border-rainbow rainbow-green"></div>
      <div class="col-2 border-rainbow rainbow-red"></div>
      <div class="col-1 border-rainbow rainbow-yellow"></div>
      <div class="col-5 border-rainbow rainbow-blue"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rainbow"
}
</script>

<style scoped lang="scss">
.border-rainbow {
  height: 4px;
}

.rainbow-blue {
  background: $rainbow-blue;
}

.rainbow-green {
  background: $rainbow-green;
}

.rainbow-red {
  background: $rainbow-red;
}

.rainbow-yellow {
  background: $rainbow-yellow;
}

</style>
