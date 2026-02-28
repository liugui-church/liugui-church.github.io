<template>
  <div class="page-about container" v-if="doc">
    <header class="page-header text-center reveal reveal-delay-2">
      <h1 class="page-title">{{ doc.title }}</h1>
      <p class="page-subtitle">{{ doc.subtitle }}</p>
    </header>
    
    <main class="page-content prose reveal reveal-delay-4">
      <ContentRenderer :value="doc" />
    </main>
  </div>
  <div class="container text-center" style="padding: 100px 0;" v-else>
    <h2>找不到內容 (Content not found)</h2>
    <p>請檢查 content/about.md 檔案是否存在。</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<style lang="scss" scoped>
.page-header {
  padding-top: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.page-title {
  font-size: 2.8rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--color-accent);
  font-family: var(--font-heading);
  letter-spacing: 0.05em;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
