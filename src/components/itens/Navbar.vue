<template>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="../../assets/logoegpm3.png" width="150px"
                 class="d-inline-block align-top" alt="">
        </a>

        <div class="navbar-icons">
            <a href="https://www.facebook.com/FAPAM/" class="color-facebook"><i class="fab fa-facebook fa-2x ml-3"></i></a>
            <a href="https://www.instagram.com/fapam_oficial/" class="color-instagram"><i
                    class="fab fa-instagram fa-2x ml-3"></i></a>
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

</style>