<template>
    <a class="ticket" target="_blank" rel="noopener" :href="btnticket.st_link">
        <i class="fa fa-ticket-alt fa-2x"></i>
    </a>
</template>

<script>
    import BotaoApi from "@/services/BotaoApi";
    export default {
        name: "ButtonTicket",
        created() {
            BotaoApi.getOne(1, result => {
                this.btnticket = result.data;
            });

        },
        data() {
            return {
                btnticket: {
                    id_botao: "",
                    st_cor: "",
                    st_icone: "",
                    st_link: "https://www.sympla.com.br/",
                    st_texto: ""
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .ticket {
        display: none;
        @include md {
            background: $rainbow-blue;
            bottom: 20px;
            border: none;
            border-radius: 50%;
            display: flex;
            height: 70px;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 30px;
            transition: all linear .2s;
            width: 70px;
            z-index: 5;
            color: $bg-light;
            text-decoration: none;
            :hover {
                transform: scale(1.1);
            }
        }

    }
</style>
