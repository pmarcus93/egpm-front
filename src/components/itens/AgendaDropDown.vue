<template>
    <div class="col-12 my-1 py-3 item-agenda">
        <div class="d-flex align-items-center pb-3 area-clicavel" v-on:click="isOpen = !isOpen">
            <div class="info-agenda-titulo">
                <span class="badge badge-secondary mx-2"><i class="fa fa-clock"></i> {{agenda.nu_horario}}</span>
                <span>{{agenda.st_assunto}}</span>
            </div>
            <i v-if="isOpen" class="fa fa-times ml-auto"></i>
            <i v-else class="fa fa-plus ml-auto"></i>
        </div>

        <div v-if="isOpen" class="detalhes-agenda">
            <span class="badge badge-secondary mr-1">DESCRIÇÃO</span>
            <p>Just Dance 2020 é a nova versão do game de dança mais vendido no mundo. Com músicas
                de Ariana Grande, Cardi B, BLACKPINK e Panic At The Disco, o game tem tudo para ser
                um dos melhores da série. Será que você tem o que é necessário para ser o melhor
                dançarino?</p>

            <span class="badge badge-secondary mr-1">OBSERVAÇÕES</span>
            <p>Atividade para participates com idade superior a 5 anos.</p>

            <span class="badge badge-secondary mr-1">LOCAL</span>
            <p>Hall de entrada do prédio verde.</p>

            <span class="badge badge-secondary mr-1">CAMPEONATO</span>
            <p>Para saber todas as informações deste campeonato <a href="">clique aqui.</a></p>

        </div>

    </div>

</template>

<script>
    export default {
        name: "AgendaDropDown",
        props: ["agenda"],
        data: function () {
            return {
                isOpen: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
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