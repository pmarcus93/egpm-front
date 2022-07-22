<template>
  <section>
    <HeaderSubScreen
        titulo="Agenda"
        descricao="Programe-se e aproveite ao máximo o #EGPM3!"
        :imagem="imgBanner"
    />
    <div class="container-fluid">
      <div class="container py-5">
        <div v-if="agendamentos.length === 0" class="row pb-4">
          <div class="col-12 my-1 py-3 item-agenda">
            <div class="info-agenda-titulo text-center">
              A agenda será disponibilizada em breve, fique ligado!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
const HeaderSubScreen = () => import("../component/HeaderSubScreen");
const AgendaDropDown = () => import("../component/AgendaDropDown");
import ImgBanner from "../../assets/images/agenda-banner.jpg";

export default {
  name: "Agenda",
  components: {AgendaDropDown, HeaderSubScreen},
  data() {
    return {
      imgBanner: ImgBanner,
      agendamentos: [],
    }
  },
}
</script>

<style scoped lang="scss">
.titulo {
  color: $color-title;
}

.info-agenda-titulo {
  font-size: 1.2em;
  font-weight: 600;
}

.item-agenda {
  border-radius: 5px;
  background: $color-primary;
}
</style>
