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

<style lang="scss" scoped>

    .banner {
        height: 100vh;
        background: url("../../assets/banner-background.jpg") center/cover;
    }

    .destaque {
        background: $color-primary;
        color: #545358;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        width: 170px;
    }

    .logo-full {
        width: 600px;
    }

    .logo-soon-group {
        margin-top: 100px;
    }

    .descricao {
        color: $color-primary;
        font-size: 25px;
        text-transform: uppercase;
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
