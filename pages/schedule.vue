<template>
  <div class="page-schedule container">
    <ContentDoc path="/schedule">
      <template #default="{ doc }">
        <div v-if="doc">
          <header class="page-header text-center reveal reveal-delay-2">
            <h1 class="page-title">{{ doc.title }}</h1>
            <p class="page-subtitle">{{ doc.subtitle }}</p>
          </header>
          
          <div class="schedule-grid">
            <main class="page-content prose reveal reveal-delay-4">
              <ContentRenderer :value="doc" />
            </main>
            
            <aside class="schedule-sidebar reveal reveal-delay-6">
              <div class="contact-card">
                <h3>聯絡資訊</h3>
                <div class="contact-item">
                  <span class="label">地址</span>
                  <p>{{ doc.location?.address }}</p>
                </div>
                <div class="contact-item">
                  <span class="label">電話</span>
                  <p>{{ doc.location?.phone }}</p>
                </div>
                <div class="contact-item">
                  <span class="label">Email</span>
                  <p>{{ doc.location?.email }}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </template>
      <template #not-found>
        <div class="container text-center" style="padding: 100px 0;">
          <h2>找不到內容 (Content not found)</h2>
          <p>請檢查 content/schedule.md 檔案是否存在。</p>
        </div>
      </template>
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

.schedule-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
}

.contact-card {
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  padding: var(--spacing-md);
  border-radius: 4px;
  position: sticky;
  top: 100px;
  
  h3 {
    font-size: 1.4rem;
    color: var(--color-accent-light);
    margin-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--spacing-xs);
  }
}

.contact-item {
  margin-bottom: var(--spacing-sm);
  
  .label {
    display: block;
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin-bottom: 4px;
  }
  
  p {
    color: var(--color-text);
    font-size: 1.05rem;
    margin: 0;
  }
}
</style>
