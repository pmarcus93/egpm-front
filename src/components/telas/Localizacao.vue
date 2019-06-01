<template>
    <div class="localizacao">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 my-auto conteudo-texto">
                    <h1 class="mb-4 titulo-secao">EGMP3</h1>
                    <h2>LOCAL</h2>
                    <p>
                        FAPAM - Faculdade de Pará de Minas <br>
                        R. Ricardo Marinho, 110 - São Geraldo, Pará de Minas - MG, <br>
                        35660-398
                    </p>

                    <h2>DATAS & HORÁRIOS</h2>
                    <p>
                        01/01/20 Sábado - 10h às 20h <br>
                        02/02/20 Domingo - 10h às 20h <br>
                    </p>

                </div>
                <div class="col-sm-12 col-md-6 mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8677220905865!2d-44.61226498529925!3d-19.845549140813137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73c0a76f18ba9%3A0x18a18e6f43c7f071!2sFaculdade+de+Par%C3%A1+de+Minas+-+FAPAM!5e0!3m2!1spt-BR!2sbr!4v1557353297848!5m2!1spt-BR!2sbr"
                            width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Localizacao",
    }
</script>

<style scoped>
    .localizacao {
        background: whitesmoke;
        padding-top: 5%;
        padding-bottom: 5%;
        color: #545457;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 2.5em;
        }

        .conteudo-texto {
            text-align: center;
        }

        .mapa {
            margin-top: 30px;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 3em;
        }
    }


</style>