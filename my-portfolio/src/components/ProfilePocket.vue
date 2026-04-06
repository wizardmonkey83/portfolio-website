<script setup>
    import vueLogo from '../assets/vue.svg'

    const props = defineProps({
        name: String,
        title: String,
        description: String
    })
</script>

<template>
    <section class="profile">
        <section class="profile-left">
            <div class="profile-img-container">
                <img :src="vueLogo" class="profile-img"/>
            </div>
            <div class="profile-left-text">
                <h1 class="header name">{{  props.name }}</h1>
                <h1 class="header title">{{  props.title }}</h1>
            </div>
        </section>

        <section class="profile-right">

        </section>
    </section>
</template>


<style scoped>
.profile {
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.profile-left {
    display: flexbox;
    flex-direction: column;
}

.profile-left-text { 
    display: flexbox;
    justify-content: flex-start;
    align-items: flex-start;
}

.profile-img {
    border-radius: 50%;
}
</style>

