<template>
  <div class="col-12 text-center py-4">
    <h1 class="py-3 titulo-secao"><span>{{ erro }}</span></h1>
    <h2 class="texto-secao">{{ subtitulo }}<br>
      {{ descricao }}</h2>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: [
    'erro',
    'subtitulo',
    'descricao'
  ]
}
</script>

<style scoped lang="scss">
.texto-secao {
  color: $color-primary;
  @include sm {
    font-size: 1.3rem;
  }
}

.titulo-secao {
  font-family: $title-font;
  font-size: 2rem;
  color: $color-primary;

  @include sm {
    font-size: 3rem;
  }

  span {
    position: relative;
    padding-bottom: 1px;
  }

  span::after {
    bottom: 0;
    border-bottom: 1px solid $color-primary;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }
}
</style>
