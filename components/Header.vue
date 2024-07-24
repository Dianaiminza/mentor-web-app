<template>
  <header class="sticky top-0 z-20  bg-background/80 backdrop-blur-sm">
<div class="py-5">
<div class="container">
  <div class="flex justify-between items-center">
    <img src="/hertechquestlogo.jpg" alt="" class="h-12 w-12 object-contain"/>
    <Icon name="icomoon-free:menu" style="color: black; height: 30; width: 30;" class="md:hidden"/>
    <nav class="hidden md:flex gap-5 items-center text-black/100">
      <a> Community</a>
      <a> Discussions</a>
      <a> About us</a>
<button class="bg-black text-white px-5 py-2 rounded-sm font-mono inline-flex align-middle justify-center tracking-tighter">
  <NuxtLink to="/login">
    Get Started
  </NuxtLink>
  </button>
    </nav>
  </div>
 
</div>
</div>
</header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>