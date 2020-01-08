<template>
    <div class="col-12 my-1 py-3 item-agenda">
        <div class="d-flex align-items-center pb-3 area-clicavel" v-on:click="isOpen = !isOpen">
            <div class="info-agenda-titulo">
                <span class="badge badge-secondary mx-2"><i class="fa fa-clock"></i> {{getHoratioSemMinutos(agenda.nu_horario)}}</span>
                <span>{{agenda.st_nome}}</span>
            </div>
            <i v-if="isOpen" class="fa fa-times ml-auto"></i>
            <i v-else class="fa fa-plus ml-auto"></i>
        </div>

        <div v-if="isOpen" class="detalhes-agenda">
            <div v-if="agenda.st_descricao">
                <span class="badge badge-secondary mr-1">DESCRIÇÃO</span>
                <p>{{agenda.st_descricao}}</p>
            </div>
            <div v-if="agenda.st_observacao">
                <span class="badge badge-secondary mr-1">OBSERVAÇÕES</span>
                <p>{{agenda.st_observacao}}</p>
            </div>

            <div v-if="agenda.st_local">
                <span class="badge badge-secondary mr-1">LOCAL</span>
                <p>{{agenda.st_local}}</p>
            </div>

            <div v-if="agenda.bl_jogo">
                <span class="badge badge-secondary mr-1">CAMPEONATO</span>
                <p>Para saber todas as informações deste campeonato <a href=""
                                                                       v-on:click.prevent="() => goToCampeonato(agenda.id_jogo)">clique
                    aqui.</a></p>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "AgendaDropDown",
        props: ["agenda"],
        methods: {
            goToCampeonato: function (id) {
                this.$router.push({path: 'campeonatos/' + id});
            },
            getHoratioSemMinutos: function (horario) {
                return horario.slice(0, 5);
            },
        },

        data: function () {
            return {
                isOpen: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

    .detalhes-agenda {
        animation: height-animate ease-in .2s forwards;
        overflow: hidden;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @keyframes height-animate {
        to {
            max-height: 500px;
        }

        from {
            max-height: 0;
        }
    }

    .info-agenda-titulo {
        font-size: 1.6em;
        font-weight: 600;
    }

    .item-agenda {
        border-radius: 5px;
        background: $light-text;
    }

    .area-clicavel {
        cursor: pointer;
    }
</style>
