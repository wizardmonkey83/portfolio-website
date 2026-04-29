<script setup>
    import trailWallet from '../assets/trail-wallet.svg'
</script>

<template>
    <section class="wallet-container">
        <div class="text-box hover">
            <p>Open Me!</p>
        </div>
        
        <div class="img-container">
            <img :src="trailWallet" class="trail-wallet"/>
        </div>
    </section>
</template>

<style scoped>
    .wallet-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text-box.hover {
        padding: .5rem;
        background-color: rgb(211, 210, 210);
        font-size: .75rem;
        border-radius: 10%;
        animation: MoveUpDown 2s linear infinite;
        position: fixed;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 0;
        }
        50% {
            bottom: 5px;
        }
    }

    

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 800px;
        cursor: pointer;
    }

    .trail-wallet {
        max-width: 100px;
        margin-left: 3rem;
        /* drop-shadow hugs the lines of the svg */
        filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
    }
</style>