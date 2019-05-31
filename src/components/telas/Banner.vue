<template>
    <div class="banner">
        <section>
            <div class="logo-soon-group">
                <p class="destaque mx-auto">EM BREVE!</p>
                <img class="logo-full img-fluid d-block mx-auto my-5" src="../../assets/full-logo.png"
                     alt="Logo do Terceiro Encontro Gamer de Pará de Minas">
            </div>
            <div class="descricao text-center"><p>O maior evento de videogames da cidade.<br>Feito por gamers,
                para gamers.</p></div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss" scoped>

    .banner {
        align-items: center;
        background: url("../../assets/banner-background.jpg") center/cover;
        display: flex;
        height: 100vh;
        justify-content: center;
    }

    .destaque {
        background: $color-primary;
        color: $color-title;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        max-width: 125px;
    }

    .logo-full {
        width: 350px;
    }

    .logo-soon-group {
        margin-top: 100px;
    }

    .descricao {
        color: $color-primary;
        font-size: 17px;
        text-transform: uppercase;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .descricao {
            font-size: 20px;
        }

        .logo-full {
            width: 450px;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {

    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        .descricao {
            font-size: 25px;
        }

        .destaque {
            font-size: 30px;
            max-width: 200px;
        }

        .logo-full {
            width: 600px;
        }
    }

    /* Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }

</style>
