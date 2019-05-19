<template>
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
            APOIO
        </router-link>


        <div class="navbar-icons ">
            <a href="https://www.facebook.com/FAPAM/" class="color-facebook social"><i class="fab fa-facebook fa-2x ml-3"></i></a>
            <a href="https://www.instagram.com/fapam_oficial/" class="color-instagram social"><i
                    class="fab fa-instagram fa-2x ml-3"></i></a>
            <button class="burguer"><i class="fa fa-bars fa-2x ml-3"></i></button>

        </div>

    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>
    .navbar-icons a {
        color: #545457;
    }

    .navbar-icons a i {
        transition: linear all 0.2s;
    }

    .navbar-icons a i:hover {
        transform: scale(1.2);
    }

    .color-facebook:hover {
        color: #3A5895;
    }

    .color-instagram:hover {
        color: #D10869;
    }

    .burguer {
        background: none;
        border: none;
    }

    .burguer:focus {
        border-color: none !important;
        outline: 0;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }


    .link:hover {
        transform: scale(1.2);
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 992px) {
        .link {
            font-weight: 600;
            transition: linear all 0.2s;
            display: none !important;
        }

        .burguer {
            display: inline;
        }

        .social {
            display: none;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 992px) {
        .link {
            font-weight: 600;
            transition: linear all 0.2s;
            display: block;
        }

        .burguer {
            display: none;
        }

        .social {
            display: inline;
        }
    }



</style>