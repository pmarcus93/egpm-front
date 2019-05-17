<template>
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <section>
                        <div class="logo-soon-group">
                            <div class="destaque mx-auto"><p>EM BREVE!</p></div>
                            <img class="logo-full img-fluid d-block mx-auto my-5" src="../../assets/full-logo.png" alt="Logo do Terceiro Encontro Gamer de Pará de Minas">
                        </div>
                        <div class="descricao text-center"><p>O maior evento de videogames da cidade.<br>Feito por gamers, para gamers.</p></div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style scoped>

    .banner {
        height: calc(100vh - 51.6px);
        background: url("../../assets/banner-background.jpg") center/cover;
    }

    .destaque {
        width: 170px;
        background: #FCD347;
        color: #545358;
        font-size: 30px;
        text-align: center;
        font-weight: bold;

    }

    .logo-full {
        width: 600px;
    }

    .logo-soon-group {
        margin-top: 100px;
    }

    .descricao {
        color: #FCD347;
        text-transform: uppercase;
        font-size: 25px;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {

    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {

    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

    }

    /* Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }


</style>
