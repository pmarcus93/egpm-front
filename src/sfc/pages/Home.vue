<template>
  <div>
    <div>
      <Banner
          :button="btnticket"
      ></Banner>
      <SectionAbout></SectionAbout>
      <SectionTournament></SectionTournament>
      <SectionGameList></SectionGameList>
      <SectionQuizz></SectionQuizz>
      <SectionFreePlay></SectionFreePlay>
      <SectionPress></SectionPress>
      <FAQ></FAQ>
      <Locale></Locale>
      <ButtonTicket
          :button="btnticket"
          :is-fixed="true">
      </ButtonTicket>
    </div>
  </div>
</template>

<script>

import Banner from "../component/Banner";
import SectionAbout from "../component/SectionAbout";
import SectionPress from "../component/SectionPress";
import SectionQuizz from "../component/SectionQuizz";
import SectionTournament from "../component/SectionTournament";
import SectionFreePlay from "../component/SectionFreePlay";
import FAQ from "../component/FAQ";
import Locale from "../component/Locale";
import ButtonTicket from "../component/TicketButton";
import SectionGameList from "../component/SectionGameList";

export default {
  name: "Home",
  props: ["button"],
  data() {
    return {
      btnticket: {
        st_link: "",
        bl_ativo: 0
      }
    }
  },
  components: {
    SectionQuizz,
    SectionGameList,
    SectionAbout,
    SectionPress,
    SectionFreePlay,
    ButtonTicket,
    Locale,
    FAQ,
    SectionTournament,
    Banner,
  },
}
</script>

<style>

</style>
