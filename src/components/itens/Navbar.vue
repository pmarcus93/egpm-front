<template>
    <div class="fixed-top">
        <nav class="navbar navbar-light bg-light">

            <router-link class="navbar-brand" to='/inicio'>
                <img loading="lazy" src="../../assets/images/logoegpm3.png" width="150px"
                     class="d-inline-block align-top" alt="">
            </router-link>

            <router-link class="navbar-brand link" to='/inicio'>
                INÍCIO
            </router-link>

            <router-link class="navbar-brand link" to='/campeonatos'>
                CAMPEONATOS
            </router-link>

            <router-link class="navbar-brand link" to='/apoie'>
                QUERO SER APOIADOR
            </router-link>


            <div class="navbar-icons">
                <a v-if="social[0].st_link" :href="social[0].st_link" target="_blank" rel="noopener"
                   class="color-facebook social"><i
                        class="fab fa-facebook fa-2x ml-3"></i></a>
                <a v-if="social[1].st_link" :href="social[1].st_link" target="_blank" rel="noopener"
                   class="color-instagram social"><i
                        class="fab fa-instagram fa-2x ml-3"></i></a>

                <button class="burger" v-on:click="toggleMenu">
                    <i v-if="!menuAtivo" class=" fa fa-bars fa-2x ml-3"></i>
                    <i v-else class=" fa fa-times fa-2x ml-3 animatescale"></i>
                </button>

            </div>

        </nav>
        <div class="menu-mobile col-12 navbar bg-light animateslice" v-if="menuAtivo">

            <div class="col-12">
                <router-link class="navbar-brand" to='/inicio'>
                    <button class="btn btn btn-lg btn-link" v-on:click="toggleMenu">INÍCIO</button>
                </router-link>
            </div>

            <div class="col-12">
                <router-link class="navbar-brand" to='/campeonatos'>
                    <button class="btn btn-lg btn-link" v-on:click="toggleMenu">CAMPEONATOS</button>
                </router-link>
            </div>

            <div class="col-12">
                <router-link class="navbar-brand" to='/apoie'>
                    <button class="btn btn-lg btn-link" v-on:click="toggleMenu">APOIO</button>
                </router-link>
            </div>

            <div class="col-12">
                <div class="navbar-icons ">
                    <a v-if="social[0].st_link" :href="social[0].st_link" target="_blank" rel="noopener"
                    class="color-facebook "><i
                        class="fab fa-facebook fa-2x mx-3"></i></a>
                    <a v-if="social[1].st_link" :href="social[1].st_link" target="_blank" rel="noopener"
                    class="color-instagram "><i
                        class="fab fa-instagram fa-2x mx-3"></i></a>
                </div>
            </div>

        </div>
        <Rainbow></Rainbow>
    </div>
</template>

<script>
    import Rainbow from "./Rainbow";
    import SocialApi from "@/services/SocialApi";

    export default {
        name: 'Navbar',
        components: {Rainbow},
        methods: {
            toggleMenu: function () {
                this.menuAtivo = !this.menuAtivo;
            },
        },
        created() {
            SocialApi.getAll(result => {
                this.social = result.data;
            });
        },
        data: function () {
            return {
                menuAtivo: false,
                social: [
                    {
                        st_link: "https://www.facebook.com/FAPAM/"
                    },
                    {
                        st_link: "https://www.instagram.com/fapam_oficial/1"
                    }
                ]
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
        height: calc(75vh - 62px);

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
