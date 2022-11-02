<template>
  <div class="pagina-duvidas">
    <HeaderSubScreen
        titulo="Nada por aqui..."
        descricao="Essa página não existe. Acesse o menu para navegar pelas opções!"
        :imagem="imgBanner"
    ></HeaderSubScreen>
  </div>
</template>

<script>
import SubscreenHeader from "@/sfc/component/SubscreenHeader";
const ImgBanner = () => import("../../assets/images/not-found-banner.jpeg");

export default {
  name: "Erro404",
  components: {SubscreenHeader},
  data() {
    return {
      imgBanner: ImgBanner,
    }
  }
}
</script>

<style scoped>

</style>
