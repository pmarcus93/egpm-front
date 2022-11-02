<template>
  <section>
    <HeaderSubScreen
        titulo="Games"
        descricao="Confira trailers, imagens, regras dos campeonatos e detalhes dos games presentes no evento."
        :imagem="imgBanner">
    </HeaderSubScreen>
    <SectionGameList></SectionGameList>
  </section>
</template>

<script>
import HeaderSubScreen from "../component/SubscreenHeader";
import SectionGameList from "../component/SectionGameList";
import ImgBanner from "../../assets/images/games-banner.jpeg";

export default {
  name: "CampeonatoTela",
  components: {SectionGameList, HeaderSubScreen},
  data() {
    return {
      imgBanner: ImgBanner,
    }
  }
}
</script>
