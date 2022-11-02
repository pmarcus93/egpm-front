<template>
  <section>
    <SubscreenHeader
        titulo="Games"
        descricao="Confira trailers, imagens, regras dos campeonatos e detalhes dos games presentes no evento."
        :imagem="imgBanner">
    </SubscreenHeader>
    <SectionGameList></SectionGameList>
  </section>
</template>

<script>
import SubscreenHeader from "../component/SubscreenHeader";
import SectionGameList from "../component/SectionGameList";
import ImgBanner from "../../assets/images/games-banner.jpeg";

export default {
  name: "CampeonatoTela",
  components: {SectionGameList, SubscreenHeader},
  data() {
    return {
      imgBanner: ImgBanner,
    }
  }
}
</script>
