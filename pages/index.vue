<template>
  <div class="page-home">
    <ContentDoc v-slot="{ doc }">
      <section class="hero container">
        <h1 class="hero-title reveal reveal-delay-2">{{ doc.title }}</h1>
        <p class="hero-subtitle reveal reveal-delay-3">{{ doc.subtitle }}</p>
        <div class="hero-content prose reveal reveal-delay-5">
          <ContentRenderer :value="doc" />
        </div>
      </section>

      <section class="features container">
        <div 
          v-for="(feature, index) in doc.features" 
          :key="index"
          class="feature-card reveal"
          :class="`reveal-delay-${6 + index}`"
        >
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </section>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background-color: var(--color-accent);
  }
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-lg);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.15rem;
  line-height: 1.8;
}

.features {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-alt);
  border-radius: 4px;
  transition: transform 0.3s var(--ease-out-expo), border-color 0.3s var(--ease-out-expo);
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-light);
  }
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-accent-light);
}

.feature-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
</style>
