<template>
  <p class="sm:text-base text-sm font-poppins font-semibold text-center">Erm, we seem to have taken the wrong exit here.</p>
  <p class="sm:text-base text-sm font-poppins text-center">Perhaps we should go back&nbsp;
    <router-link :to="{ name: 'home' }">home</router-link>
    ?
  </p>
</template>