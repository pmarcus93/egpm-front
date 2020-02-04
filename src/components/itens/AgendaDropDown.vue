<template>
    <div class="col-12 my-1 py-3 item-agenda">
        <div class="d-flex align-items-center area-clicavel" v-on:click="isOpen = !isOpen">
            <div class="info-agenda-titulo">
                <span class="badge badge-dark mr-2"><i class="fa fa-clock"></i> {{getHoratioSemMinutos(agenda.nu_horario)}}</span>
                <span>{{agenda.st_nome}}</span>
            </div>

            <i v-if="isOpen && expand" class="fa fa-times ml-auto"></i>
            <i v-else-if="expand" class="fa fa-plus ml-auto"></i>
        </div>

        <div class="detalhes-agenda"
             :class="isOpen && expand ? 'detalhes-agenda-active' : 'detalhes-agenda-unactive'">
            <div class="mt-3"></div>
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
        props: ["agenda", "expand"],
        methods: {
            goToCampeonato: function (id) {
                this.$router.push({path: 'games/' + id});
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
        overflow: hidden;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .detalhes-agenda-unactive {
        animation: height-animate-reverse ease-in 0s forwards;
    }

    .detalhes-agenda-active {
        animation: height-animate ease-in 0s forwards;
    }

    @keyframes height-animate {
        to {
            height: auto;
        }

        from {
            height: 0;
        }
    }

    @keyframes height-animate-reverse {
        to {
            height: 0;
        }

        from {
            height: auto;
        }
    }

    .info-agenda-titulo {
        font-size: 1.2em;
        font-weight: 600;
    }

    .item-agenda {
        border-radius: 5px;
        background: $color-primary;
    }

    .area-clicavel {
        cursor: pointer;
    }
</style>
