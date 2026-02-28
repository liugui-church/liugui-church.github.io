<template>
  <div class="page-about container">
    <ContentDoc v-slot="{ doc }">
      <header class="page-header text-center reveal reveal-delay-2">
        <h1 class="page-title">{{ doc.title }}</h1>
        <p class="page-subtitle">{{ doc.subtitle }}</p>
      </header>
      
      <main class="page-content prose reveal reveal-delay-4">
        <ContentRenderer :value="doc" />
      </main>
    </ContentDoc>
  </div>
</template>

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
