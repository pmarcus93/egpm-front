<template>
  <section>
    <div class="bg-img-container">
      <img v-bind:src="imagem">
      <div class="text text-center">
        <div class="container">
          <div class="col-12">
            <h1 class="titulo-secao content-title"><span>{{ titulo }}</span></h1>
            <p class="mt-3 content-description">{{ descricao }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderSubScreen",
  props: ['titulo', 'descricao', 'imagem']
}
</script>

<style lang="scss" scoped>

section {
  color: #ffffff;
}

.bg-img-container {
  height: 50vh;
  position: relative;
  width: 100%;
  background-color: black;

  img {
    filter: brightness(35%) grayscale(25%) blur(2px);
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

.text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.titulo-secao {
  font-family: $title-font;

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
