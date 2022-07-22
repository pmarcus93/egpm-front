<template>
  <div class="campeonatos">
    <div class="container-fluid">

      <div v-if="campeonatos" class="row">
        <Game v-for="(campeonato) in campeonatos"
              :titulo="campeonato.st_nome"
              :rota="campeonato.id_jogo"
              :imagens="campeonato.imagens"
              :iscampeonato="campeonato.bl_campeonato"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Game from "./Game";
import {listaJogosData} from "../../demodata/DemoData";

export default {
  name: "Campeonatos",
  components: {Game},
  data: function () {
    return {
      campeonatos: listaJogosData,
    }
  }
}
</script>

<style scoped>
.campeonatos {
  background: #000000;
}
</style>
