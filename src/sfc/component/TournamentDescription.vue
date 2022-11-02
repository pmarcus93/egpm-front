<template>
  <div>
    <div v-if="{campeonato}" class="container-fluid conteudo p-0">
      <BannerJogo
          :titulo="campeonato.st_nome"
          :descricao="campeonato.st_descricao"
          :lancamento="campeonato.dt_lancamento"
          :estilo="campeonato.st_estilo"
          :video="campeonato.st_video"
          :imagem="campeonato.imagens.default.st_url"
          :plataforma="campeonato.st_plataforma"
          :classificacaoindicativa="campeonato.st_classificacaoindicativa"
          :quantidadejogadores="campeonato.nu_quantidadejogadores"
      />
    </div>

    <div v-if="campeonato.bl_campeonato === +1" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 my-4">
            <div class="row mt-3">
              <div v-if="campeonato.st_regra" class="col-md-8">
                <h2>Campeonato</h2>
                <h4>Regras</h4>
                <p class="text-justify"><span v-html="campeonato.st_regra"></span></p>
              </div>
              <div class="col-md-4 mx-auto">
                <p class="detalhes text-center">Detalhes do Campeonato</p>
                <ul class="list-group detalhes-campeonato">
                  <li v-if="campeonato.st_plataformacampeonato" class="list-group-item"><i
                      class="fas fa-gamepad"></i> {{ campeonato.st_plataformacampeonato }}
                  </li>
                  <li v-if="campeonato.nu_vaga" class="list-group-item"><i
                      class="fas fa-user-friends"></i> {{ campeonato.nu_vaga }} Vagas
                  </li>
                  <li v-for="item in campeonato.datahorario" :key="item.id_datahorario" class="list-group-item">
                    <i class="fas fa-calendar-alt"></i> {{ item.st_diasemana }}, {{ item.st_hora }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BannerJogo from "./GameBanner";
import {detalhesJogoData} from "@/demodata/DemoData";

export default {
  name: "DescricaoCampeonato",
  components: {
    BannerJogo
  },
  data() {
    return {
      campeonato: {},
    }
  },
  created() {
    this.campeonato = detalhesJogoData.find(jogo => jogo.id_jogo === +this.$route.params.jogo);
  }
}
</script>

<style lang="scss" scoped>

@keyframes animacao {
  from {
    top: -100px;
    opacity: 0
  }
  to {
    top: 0;
    opacity: 1
  }
}

.detalhes-campeonato {
  i {
    margin-right: 10px;
  }
}

.detalhes {
  //background-color: $color-primary;
  color: $color-secondary-variant;
  font-family: $title-font;
  text-transform: uppercase;
  font-weight: bold;
}


</style>
