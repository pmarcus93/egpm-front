<template>
  <div>
    <div class="container-fluid depoimentos py-5">
      <div class="container">
        <div class="row">
          <Secao
              titulo="O que estão falando do #EGPM?"
          ></Secao>
          <Depoimento v-for="(item) in comentarios"
                      v-bind:depoimento="item.st_comentario"
                      v-bind:autor="item.st_autor"
                      v-bind:imagens="item.imagens"
          >
          </Depoimento>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Secao from "./Section";
import Depoimento from "./Testimonial";
import {depoimentosData} from "../../demodata/DemoData";

export default {
  name: 'SectionPress',
  components: {Depoimento, Secao},
  data() {
    return {
      comentarios: depoimentosData,
      secao: {
        st_link: ""
      }
    }
  }
}
</script>

<style lang="scss">
.depoimentos {
  background: $bg-light;
}

.video {
  margin-top: 30px;
  border: none;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
}
</style>
