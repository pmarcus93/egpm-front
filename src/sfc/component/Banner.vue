<template>
  <div class="banner">
    <picture class="my-5">
      <source media="(min-width: 576px)" srcset="../../assets/images/backgrounds/banner/banner-background-sm.jpg">
      <source media="(min-width: 768px)" srcset="../../assets/images/backgrounds/banner/banner-background-md.jpg">
      <img class="img-background" srcset="../../assets/images/backgrounds/banner/banner-background-default.jpg"
           alt="Foto de fundo, mostrando o auditório da FAPAM cheio.">
    </picture>
    <section class="content py-5 text-center">
      <h2 class="text-center"><span class="badge badge-pill badge-em-breve">01 e 02 de fevereiro</span></h2>
      <picture class="my-5">
        <source media="(min-width: 576px)" srcset="../../assets/images/full-logo/full-logo.webp">
        <img class="d-block mx-auto my-4 logo-full" srcset="../../assets/images/full-logo/full-logo.webp"
             alt="Logo do Terceiro Encontro Gamer de Pará de Minas">
      </picture>
      <p class="content-description-banner">O maior evento de games da região.<br>Feito por gamers, para gamers.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>

.banner {
  min-height: 350px;
  height: 50vh;
  position: relative;
  background-color: black;

  .img-background {
    filter: blur(2px);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}


.badge-em-breve {
  color: #000;
  background-color: $color-primary;
  text-transform: uppercase;
  font-size: 0.9rem;
  @include sm {
    font-size: 1rem;
  }
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.content-description-banner {
  text-transform: uppercase;
  color: $color-primary;
}

.logo-full {
  height: 115px;
  width: auto;
  @include sm() {
    width: 378px;
    height: 157px;
  }
}

</style>
