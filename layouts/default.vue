<template>
  <div class="layout">
    <div class="bg-glow"></div>
    <header class="header reveal reveal-delay-1">
      <div class="header-inner container">
        <NuxtLink to="/" class="logo">六龜教會</NuxtLink>
        <nav class="nav">
          <NuxtLink to="/">首頁</NuxtLink>
          <NuxtLink to="/about">認識我們</NuxtLink>
          <NuxtLink to="/schedule">聚會時間</NuxtLink>
          <NuxtLink to="https://www.facebook.com/groups/1085879859521083/?locale=zh_TW" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="Facebook 社群">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 15.04H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
          </NuxtLink>
        </nav>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer reveal reveal-delay-10">
      <div class="container footer-inner">
        <div class="footer-info">
          <h2>六龜教會</h2>
          <p>高雄市六龜區義寶里光復路154-9號</p>
          <p>07-6894173</p>
          <p>lak.ku.kau.hue@gmail.com</p>
          <p class="mt-2">
            <a href="https://www.facebook.com/groups/1085879859521083/?locale=zh_TW" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 15.04H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              <span>Facebook 社群</span>
            </a>
          </p>
        </div>
        <div class="footer-copy">
          <p>&copy; {{ new Date().getFullYear() }} 六龜教會 Liugui Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(to bottom, var(--color-bg) 50%, transparent);
  backdrop-filter: blur(10px);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.05em;
  white-space: nowrap;
  
  &:hover {
    color: var(--color-accent);
  }
}

.nav {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 600px) {
    gap: var(--spacing-sm);
    justify-content: center;
    width: 100%;
  }
  
  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-muted);
    position: relative;
    display: flex;
    align-items: center;
    
    &.router-link-active:not(.nav-icon-link) {
      color: var(--color-accent);
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--color-accent);
      }
    }

    &.nav-icon-link {
      color: var(--color-text-muted);
      
      &:hover {
        color: var(--color-accent);
      }
    }
  }
}

.main {
  flex: 1;
}

.footer {
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-alt);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-info h2 {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-accent-light);
}

.footer-info p {
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.mt-2 {
  margin-top: var(--spacing-sm);
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-accent);
  font-weight: 500;
  
  &:hover {
    color: var(--color-accent-light);
  }
}

.footer-copy p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
