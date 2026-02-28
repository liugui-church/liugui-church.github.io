<template>
  <div class="turtles-container" aria-hidden="true">
    <div class="turtle-wrapper turtle-1"><div class="turtle">🐢</div></div>
    <div class="turtle-wrapper turtle-2"><div class="turtle">🐢</div></div>
    <div class="turtle-wrapper turtle-3"><div class="turtle">🐢</div></div>
    <div class="turtle-wrapper turtle-4"><div class="turtle">🐢</div></div>
    <div class="turtle-wrapper turtle-5"><div class="turtle">🐢</div></div>
    <div class="turtle-wrapper turtle-6"><div class="turtle">🐢</div></div>
  </div>
</template>

<style lang="scss" scoped>
.turtles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.turtle-wrapper {
  position: absolute;
  opacity: 0;
  pointer-events: auto;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text y="20" font-size="20">🍃</text></svg>'), auto;
  animation: fade-in 2s ease-in-out forwards;
}

.turtle-wrapper:hover {
  opacity: 1;
  z-index: 10;
  transform: scale(1.1);
}

.turtle-wrapper:hover .turtle {
  animation-play-state: paused;
}

.turtle {
  display: inline-block;
  font-size: 2.5rem;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 0.8; }
}

@keyframes wander {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -20px) rotate(15deg); }
  50% { transform: translate(60px, 10px) rotate(45deg); }
  75% { transform: translate(20px, 30px) rotate(75deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes wander-reverse {
  0% { transform: translate(0, 0) rotate(0deg) scaleX(-1); }
  25% { transform: translate(-40px, 15px) rotate(-20deg) scaleX(-1); }
  50% { transform: translate(-20px, -30px) rotate(-40deg) scaleX(-1); }
  75% { transform: translate(10px, -10px) rotate(-15deg) scaleX(-1); }
  100% { transform: translate(0, 0) rotate(0deg) scaleX(-1); }
}

@keyframes wander-circle {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(40px, 20px) rotate(10deg); }
  50% { transform: translate(20px, 40px) rotate(-10deg); }
  75% { transform: translate(-20px, 20px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* Turtle Initial Placements & Speeds */
.turtle-1 { top: 5%; left: 8%; }
.turtle-1 .turtle { font-size: 2rem; animation: wander 20s ease-in-out infinite; }

.turtle-2 { top: 15%; right: 7%; left: auto; }
.turtle-2 .turtle { font-size: 3rem; opacity: 0.9; animation: wander-reverse 25s ease-in-out infinite; }

.turtle-3 { bottom: 20%; left: 6%; top: auto; }
.turtle-3 .turtle { font-size: 1.8rem; filter: brightness(0.9); animation: wander-circle 30s linear infinite; }

.turtle-4 { top: 30%; left: 5%; }
.turtle-4 .turtle { font-size: 2.2rem; animation: wander 22s ease-in-out infinite reverse; }

.turtle-5 { bottom: 10%; right: 5%; top: auto; left: auto; }
.turtle-5 .turtle { font-size: 1.5rem; filter: brightness(0.85); animation: wander-circle 28s ease-in-out infinite reverse; }

.turtle-6 { top: 50%; right: 8%; left: auto; }
.turtle-6 .turtle { font-size: 2.6rem; animation: wander-reverse 18s ease-in-out infinite; }
</style>
