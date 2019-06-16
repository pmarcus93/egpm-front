<template>
    <div class="background-banner">
        <div class="container-fluid">
            <section class="py-5 text-center">
                <h2 class="text-center"><span class="badge badge-pill badge-em-breve">Em breve!</span></h2>
                <img loading="lazy" class="logo-full img-fluid d-block mx-auto my-4" src="../../assets/images/full-logo.png"
                     alt="Logo do Terceiro Encontro Gamer de Pará de Minas">
                <div class="descricao"><p>O maior evento de videogames da região.<br>Feito por gamers,
                    para gamers.</p></div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss" scoped>

    .background-banner {
        background: $color-secondary-variant url("../../assets/images/banner-background.jpg") center/cover;
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

    .descricao {
        color: $color-primary;
        text-transform: uppercase;
        font-size: 2.7vh;
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
