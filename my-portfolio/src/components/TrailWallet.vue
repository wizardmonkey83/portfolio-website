<script setup>
    import trailWallet from '../assets/trail-wallet.svg'
</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
    <section class="wallet-container">
        
        <div class="img-container">
            <div class="text-box hover">
                <p>Open Me!</p>
            </div>

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
        padding: 7px 7px;
        background-color: rgb(211, 210, 210, 0.5);
        backdrop-filter: blur(10px);
        font-size: .75rem;
        border-radius: 10%;
        position: absolute;
        top: 265px;
        left: 42%;
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 800px;
        cursor: pointer;
        position: relative;
    }

    .trail-wallet {
        max-width: 100px;
        margin-left: 3rem;
        /* drop-shadow hugs the lines of the svg */
        filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
    }
</style>