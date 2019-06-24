<template>
    <div class="container duvida">
        <div class="row">
            <div class="col-12">
                <h1 class="mt-4 titulo-secao text-center">FAQ</h1>
                <h2 class="mt-2 subtitulo text-center">Respostas para as dúvidas mais frequentes</h2>
                <div class="row mb-5 mt-3">
                    <ItemDuvida v-for="(item) in duvidas"
                                v-bind:duvida="item.st_duvida"
                                v-bind:resposta="item.st_resposta"
                                v-bind:id_duvida="item.id_duvida"
                    ></ItemDuvida>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DuvidaApi from "@/services/DuvidaApi";
    import ItemDuvida from "../itens/ItemDuvida";

    export default {
        name: "Duvida",
        components: {ItemDuvida},
        data() {
            return {
                duvidas: []
            }
        },
        created() {
            DuvidaApi.getAllDuvidas(retorno => {
                this.duvidas = retorno.data;
            })
        },
    }
</script>

<style lang="scss" scoped>

    .duvida {
        color: $color-title;
    }

    .subtitulo {
        @include sm {
            text-align: center;
        }
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 3em;
        text-align: center;
    }

</style>
