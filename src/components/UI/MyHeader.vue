<template>
    <router-link :to="{ name: 'home' }">
        <header class="bg-mf-pumpkin my-6">
            <h1 class="font-poppins sm:text-2xl text-base font-semibold uppercase text-center p-4"><slot></slot></h1>
        </header>
    </router-link>
</template>