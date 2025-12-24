<template>
  <div class="row mx-0 position-relative">
    <div class="col-12 banner-foto" :style="'background: url(' + imagem + ') center/cover' "></div>
    <div class="col-12 sobre-banner"></div>
    <div class="col-12">
      <div class="row">
        <div class="container">
          <div class="row info-game my-3">

            <div class="col-12">
              <h1 class="titulo">{{ titulo }}</h1>
            </div>

            <div class="col-sm-12 col-md-6 align-middle mx-auto my-4">
              <div class="container">
                <iframe v-if="video" width="100%" height="315"
                        loading="lazy"
                        title="Vídeo do Youtube"
                        :src="'https://www.youtube.com/embed/' + video + '?autoplay=1'"
                        :srcdoc="videoSrcdoc"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
            </div>

            <div class="col-md-6 col-sm-12 my-auto">
              <p class="text-justify texto-info container" v-if="descricao">
                {{ descricao }}
              </p>

              <div class="my-2 text-left texto-info container">
                <div v-if="estilo"><b>Categoria: </b>{{ estilo }}</div>
                <div v-if="quantidadejogadores"><b>Jogadores: </b>{{ quantidadejogadores }}</div>
                <div v-if="plataforma"><b>Plataformas: </b>{{ plataforma }}</div>
                <div v-if="classificacaoindicativa"><b>Classificação
                  indicativa: </b>{{ classificacaoindicativa }}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerJogo",
  props: [
    'titulo',
    'lancamento',
    'estilo',
    'video',
    'descricao',
    'imagem',
    'plataforma',
    'classificacaoindicativa',
    'quantidadejogadores'
  ],
  computed: {
    videoSrcdoc() {
      return `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href="https://www.youtube.com/embed/${this.video}?autoplay=1"><img src="https://img.youtube.com/vi/${this.video}/hqdefault.jpg" alt="${this.titulo}"><span>▶</span></a>`;
    }
  }
}
</script>

<style scoped lang="scss">

h1 {
  font-weight: bold;
  font-size: 2.2rem;
  @include sm {
    font-size: 2.5rem;
  }
}

.info-game {
  color: $light-text;
  margin-top: 30px !important; //TODO: verificar a possibilidade de remover !important.
  text-align: center;
}

.texto-info {
  font-size: 1.2em;
  font-weight: 300;
}

.sobre-banner {
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, .8);
  position: absolute;
  z-index: -1;
}

.banner-foto {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.titulo {
  margin: 1em 0;
}

</style>
