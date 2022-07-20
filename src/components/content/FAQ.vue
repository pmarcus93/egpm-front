<template>
    <div class="pt-4 container duvida">
        <div class="row">
            <div class="col-12">
                <Secao
                        titulo="FAQ"
                        descricao="Respostas para as dúvidas mais frequentes"
                ></Secao>
                <div class="row mb-5 mt-3">
                    <Question v-for="(item) in duvidas"
                                v-bind:duvida="item.st_duvida"
                                v-bind:resposta="item.st_resposta"
                                v-bind:id_duvida="item.id_duvida"
                    ></Question>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from "../itens/Question";
    import Secao from "../itens/Section";
    import {duvidasData} from "../../demodata/DemoData";

    export default {
        name: "FAQ",
        components: {Secao, Question},
        data() {
          return {
            duvidas: duvidasData
          }
        },
    }
</script>

<style lang="scss" scoped>

    .duvida {
        color: $color-title;
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 3em;
        text-align: center;
    }

</style>
