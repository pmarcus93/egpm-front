<template>
    <div class="banner">
        <section>
            <h2><span class="badge badge-pill badge-em-breve">Em breve!</span></h2>
            <div class="logo-soon-group">
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
        margin-top: 30px;
        padding: 0 10px;
        align-items: center;
        background: url("../../assets/banner-background.jpg") center/cover;
        display: flex;
        height: 70vh;
        justify-content: center;
        @include sm {
            height: 80vh;
        }
    }

    .badge-em-breve {
        color: #000;
        background-color: $color-primary;
        text-transform: uppercase;
        font-size: 1rem;
        @include sm {
            font-size: 1.5rem;
        }

    }

    .destaque {
        background: $color-primary;
        color: $color-title;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        max-width: 125px;

        @include lg {
            font-size: 30px;
            max-width: 200px;
        }
    }

    .logo-full {
        width: 350px;
    }

    .logo-soon-group {
        margin-top: 100px;
    }

    .descricao {
        color: $color-primary;
        text-transform: uppercase;
        font-size: 1rem;
        @include sm {
            font-size: 1.5rem;
        }
    }

    .logo-full {
        width: 300px;

        @include sm {
            width: 400px;
        }

        @include md {
            width: 450px;
        }

        @include lg {
            width: 500px;
        }

        @include xl {
            width: 550px;
        }
    }

</style>
