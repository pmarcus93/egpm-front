<template>
  <div class="sobre">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <Secao titulo="Sobre o #EGPM3"></Secao>
          <div class="container">
            <p class="text-justify">{{ secao.st_texto }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <BlocoIcons>
          </BlocoIcons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BlocoIcons from "./Showcase";
import Secao from "./Section";
import {sobreData} from "../../demodata/DemoData";

export default {
  name: 'SectionAbout',
  components: {BlocoIcons, Secao},
  data() {
    return {
      secao: sobreData
    }
  }
}

</script>

<style lang="scss" scoped>
.sobre {
  background: $bg-light;
  padding: 5% 0;
  color: #545457;
}

.whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $rainbow-green;
  border: 1px solid $rainbow-green;
  :hover {
    background: $rainbow-green;
    color: white;
  }
}

</style>
