<template>
    <a v-if="button.bl_ativo"
       class="ticket"
       target="_blank"
       rel="noopener"
       :href="button.st_link">
        <i class="fa fa-ticket-alt fa-2x"></i>
    </a>
</template>

<script>
    export default {
        name: "ButtonTicket",
        props: ["button"],
    }
</script>

<style scoped lang="scss">
    .ticket {
        display: none;
        @include md {
            background: $rainbow-blue;
            bottom: 20px;
            border: none;
            border-radius: 50%;
            display: flex;
            height: 70px;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 30px;
            transition: all linear .2s;
            width: 70px;
            z-index: 5;
            color: $bg-light;
            text-decoration: none;
        }
    }

    .ticket :hover {
        transition: all linear .2s;
        transform: scale(1.1);
    }

</style>
