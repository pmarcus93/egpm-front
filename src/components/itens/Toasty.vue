<template>
    <div>
        <img class="toasty" src="https://camo.githubusercontent.com/4679adc9c608c6cb860717347c87c5daf5154006/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f33316930777073757264396a7269722f746f617374792e706e673f7261773d31">
    </div>
</template>

<script>
    export default {
        name: "Toasty"
    }
</script>

<style lang="scss" scoped>
    .toasty {
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
    }
</style>