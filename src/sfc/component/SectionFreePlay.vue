<template>
  <SecaoTextoDireita
      titulo="FREE PLAY"
      classimage="bgfreeplay"
      :descricao="secao.st_texto"
      colorborder="#EA2A3A"
      type="static"
  ></SecaoTextoDireita>
</template>

<script>
import SecaoTextoDireita from "./SectionRightText";
import {freePlayData} from "../../demodata/DemoData";

export default {
  name: "SectionFreePlay",
  components: {SecaoTextoDireita},
  data() {
    return {
      secao: freePlayData
    }
  }
}
</script>

<style scoped>

</style>
