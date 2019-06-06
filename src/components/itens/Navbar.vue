<template>
    <div>
        <nav class="navbar navbar-light bg-light">

            <router-link class="navbar-brand" to='/inicio'>
                <img src="../../assets/logoegpm3.png" width="150px"
                     class="d-inline-block align-top" alt="">
            </router-link>

            <router-link class="navbar-brand link" to='/inicio'>
                INÍCIO
            </router-link>

            <router-link class="navbar-brand link" to='/campeonatos'>
                CAMPEONATOS
            </router-link>

            <router-link class="navbar-brand link" to='/duvidas'>
                DÚVIDAS
            </router-link>

            <router-link class="navbar-brand link" to='/apoie'>
                QUERO SER APOIADOR
            </router-link>


            <div class="navbar-icons ">
                <a href="https://www.facebook.com/FAPAM/" target="_blank" rel="noopener" class="color-facebook social"><i
                        class="fab fa-facebook fa-2x ml-3"></i></a>
                <a href="https://www.instagram.com/fapam_oficial/" target="_blank" rel="noopener" class="color-instagram social"><i
                        class="fab fa-instagram fa-2x ml-3"></i></a>
                <button class="burger" v-on:click="controlmenu">
                    <i v-if="!menuativo" class=" fa fa-bars fa-2x ml-3"></i>
                    <i v-else class=" fa fa-times fa-2x ml-3 animatescale"></i>
                </button>

            </div>

        </nav>
        <div class="menu-mobile col-12 navbar bg-light animateslice" v-if="menuativo">

            <div class="col-12">
                <router-link class="navbar-brand" to='/inicio'>
                    INÍCIO
                </router-link>
            </div>

            <div class="col-12">
                <router-link class="navbar-brand " to='/campeonatos'>
                    CAMPEONATOS
                </router-link>
            </div>

            <div class="col-12">
                <router-link class="navbar-brand " to='/duvidas'>
                    DÚVIDAS
                </router-link>
            </div>

            <div class="col-12">
                <router-link class="navbar-brand " to='/apoie'>
                    APOIO
                </router-link>
            </div>

            <div class="col-12">
                <div class="navbar-icons ">
                    <a href="https://www.facebook.com/FAPAM/" target="_blank" rel="noopener" class="color-facebook "><i
                            class="fab fa-facebook fa-2x mx-3"></i></a>
                    <a href="https://www.instagram.com/fapam_oficial/" target="_blank" rel="noopener" class="color-instagram "><i
                            class="fab fa-instagram fa-2x mx-3"></i></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            controlmenu: function () {
                if (this.menuativo) {
                    this.menuativo = false;
                    return;
                }
                this.menuativo = true;

            }
        },
        data: function () {
            return {
                menuativo: false
            }
        }
    }
</script>

<style lang="scss">

    .burger {
        background: none;
        border: none;
        display: inline;
        @include lg {
            display: none;
        }
    }

    .burger:focus {
        border-color: transparent !important;
        outline: 0;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }

    .color-facebook:hover {
        color: $facebook-color;
    }

    .color-instagram:hover {
        color: $instagram-color;
    }

    .link {
        font-weight: 600;
        transition: linear all 0.2s;
        display: none !important;
        @include lg {
            display: block !important;
        }
    }

    .link:hover {
        transform: scale(1.2);
    }

    .menu-mobile {
        display: inline;
        text-align: center;
        height: calc(100vh - 62px);

        @include lg {
            display: none !important;
        }
    }

    .navbar-icons a {
        color: #545457;
    }

    .navbar-icons a i {
        transition: linear all 0.2s;
    }

    .navbar-icons a i:hover {
        transform: scale(1.2);
    }

    .social {
        display: none;
        @include lg {
            display: inline;
        }
    }

</style>
