<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== '六龜基督長老教會'
      ? `${titleChunk} - 六龜基督長老教會`
      : '六龜基督長老教會'
  }
})
</script>
