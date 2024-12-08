<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';

  let activeSection: string | null = null;
  let activeSubSection: string | null = null;

  let isTourActive = false;
  let currentTourStep = 0;
  let tourInterval: ReturnType<typeof setInterval> | null = null;

  const tourDuration = 5000; // 5 seconds per section

  const tourDescriptions = {
    gettingStarted: "Start your journey with Voi! Learn how to set up your wallet, get tokens, and begin developing on the platform.",
    projects: "Discover the innovative projects building on Voi. From DeFi to NFTs, explore our thriving ecosystem.",
    community: "Connect with fellow Voi enthusiasts! Join our events, stay updated with news, and participate in community discussions.",
    governance: "Have your say in Voi's future. Engage with committees, council decisions, and vote on important proposals.",
    technical: "Dive into the technical side of Voi. Run a node, explore network statistics, and monitor blockchain analytics.",
    rewards: "Earn rewards through various ecosystem initiatives. Participate in competitions, token wars, and other incentivized activities."
  };

  const sections = {
    gettingStarted: {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Begin your Voi journey',
      subSections: {
        users: { title: 'For Users', description: 'Getting Setup' },
        developers: { title: 'For Developers', description: 'Start Building' }
      }
    },
    projects: {
      title: 'Projects',
      icon: '🔨',
      description: 'Explore the ecosystem',
      subSections: {
        directory: { title: 'Directory', description: 'Browse all projects' },
        featured: { title: 'Featured', description: 'Highlighted projects' }
      }
    },
    community: {
      title: 'Community',
      icon: '👥',
      description: 'Join the conversation',
      subSections: {
        events: { title: 'Events', description: 'Spaces & Meetings' },
        news: { title: 'News', description: 'Latest Updates' }
      }
    },
    governance: {
      title: 'Governance',
      icon: '⚖️',
      description: 'Shape the future',
      subSections: {
        committees: { title: 'Committees', description: 'Working Groups' },
        council: { title: 'Council', description: 'Leadership' },
        voting: { title: 'Voting', description: 'Active Proposals' }
      }
    },
    technical: {
      title: 'Technical',
      icon: '🔧',
      description: 'Infrastructure & Data',
      subSections: {
        nodes: { title: 'Nodes', description: 'Run a Node' },
        analytics: { title: 'Analytics', description: 'Network Stats' }
      }
    },
    rewards: {
      title: 'Rewards',
      icon: '🎁',
      description: 'Earn & Participate',
      subSections: {
        incentives: { title: 'Incentives', description: 'Earning Opportunities' },
        tokenWars: { title: 'Token Wars', description: 'Competitive Events' },
        competitions: { title: 'Competitions', description: 'Games & Challenges' },
      }
    }
  };

  const hubRadius = 32; // Half of the hub width (64/2)
  const spokeLength = 300; // Match the translateX value from the orbital sections

  let hoveredSection: string | null = null;

  let remainingTime = tourDuration / 1000;
  let countdownInterval: ReturnType<typeof setInterval> | null = null;

  function toggleSection(section: string) {
    if (activeSection === section) {
      activeSection = null;
      activeSubSection = null;
    } else {
      activeSection = section;
      activeSubSection = null;
    }
  }

  function toggleSubSection(subSection: string) {
    activeSubSection = activeSubSection === subSection ? null : subSection;
  }

  function calculateLineCoordinates(index: number) {
    const totalSections = Object.keys(sections).length;
    const angle = (index * (360 / totalSections)) * (Math.PI / 180);
    return {
      x1: Math.cos(angle) * hubRadius,
      y1: Math.sin(angle) * hubRadius,
      x2: Math.cos(angle) * spokeLength,
      y2: Math.sin(angle) * spokeLength
    };
  }

  function startTour() {
    isTourActive = true;
    currentTourStep = 0;
    activeSection = Object.keys(sections)[0];
    remainingTime = tourDuration / 1000;
    
    // Scroll to center of the page
    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: 'smooth'
    });
    
    // Start countdown timer
    countdownInterval = setInterval(() => {
      remainingTime -= 1;
    }, 1000);
    
    tourInterval = setInterval(() => {
      currentTourStep = (currentTourStep + 1) % Object.keys(sections).length;
      activeSection = Object.keys(sections)[currentTourStep];
      remainingTime = tourDuration / 1000; // Reset countdown
      if (currentTourStep === 0) endTour();
    }, tourDuration);
  }

  function endTour() {
    isTourActive = false;
    if (tourInterval) clearInterval(tourInterval);
    if (countdownInterval) clearInterval(countdownInterval);
    tourInterval = null;
    countdownInterval = null;
    activeSection = null;
  }

  onDestroy(() => {
    if (tourInterval) clearInterval(tourInterval);
    if (countdownInterval) clearInterval(countdownInterval);
  });

  // Add this function to handle click outside
  function handleClickOutside(event: MouseEvent) {
    if (activeSection && event.target instanceof Element) {
      const modal = document.querySelector('.expanded-content');
      if (modal && !modal.contains(event.target) && !event.target.closest('.section-button')) {
        activeSection = null;
        activeSubSection = null;
      }
    }
  }

  function handleSectionHover(key: string, isEntering: boolean) {
    hoveredSection = isEntering ? key : null;
    const line = document.querySelector(`line[data-section="${key}"]`);
    if (line) {
      if (isEntering) {
        line.classList.add('reverse-flow');
      } else {
        line.classList.remove('reverse-flow');
      }
    }
  }

  function navigateTour(direction: 'prev' | 'next') {
    const sectionKeys = Object.keys(sections);
    if (direction === 'next') {
      currentTourStep = (currentTourStep + 1) % sectionKeys.length;
    } else {
      currentTourStep = currentTourStep === 0 ? sectionKeys.length - 1 : currentTourStep - 1;
    }
    activeSection = sectionKeys[currentTourStep];
    remainingTime = tourDuration / 1000; // Reset countdown
    
    // Reset the timer when manually navigating
    if (tourInterval) {
      clearInterval(tourInterval);
      if (countdownInterval) clearInterval(countdownInterval);
      
      // Restart countdown
      countdownInterval = setInterval(() => {
        remainingTime -= 1;
      }, 1000);
      
      tourInterval = setInterval(() => {
        currentTourStep = (currentTourStep + 1) % sectionKeys.length;
        activeSection = sectionKeys[currentTourStep];
        remainingTime = tourDuration / 1000; // Reset countdown
        if (currentTourStep === 0) endTour();
      }, tourDuration);
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative"
     on:click={handleClickOutside}>
  <!-- Add the Start Tour button to the central hub -->
  {#if !activeSection && !isTourActive}
    <div class="absolute z-20 top-4 right-4">
      <button
        on:click={startTour}
        class="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full
               flex items-center space-x-2 transition-colors duration-200 shadow-lg"
      >
        <span>Take a Tour</span>
      </button>
    </div>
  {/if}

  <div 
    class="fixed inset-0 bg-purple-950 transition-all duration-300 z-20
           {isTourActive ? 'opacity-80' : 'opacity-0 pointer-events-none'}"
  />

  <div class="container mx-auto px-4 py-8">
    <div class="relative min-h-[90vh] flex items-center justify-center">
      <!-- Update SVG layer -->
      <svg 
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-400 -400 800 800"
      >
        {#each Object.entries(sections) as [key, _], i}
          {@const coords = calculateLineCoordinates(i)}
          <line
            x1={coords.x1}
            y1={coords.y1}
            x2={coords.x2}
            y2={coords.y2}
            class="connection-line {hoveredSection === key ? 'reverse-flow' : ''}"
            stroke="rgba(167, 139, 250, 0.3)"
            stroke-width={activeSection === key || hoveredSection === key ? "4" : "2"}
            data-section={key}
            marker-end={hoveredSection === key ? "url(#arrowhead)" : ""}
          />
        {/each}

        <!-- Add arrow marker definition -->
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="rgba(167, 139, 250, 0.8)"
            />
          </marker>
        </defs>
      </svg>

      <!-- Central Hub -->
      <div class="absolute {!activeSection ? 'z-10' : 'z-0'} w-64 h-64 bg-purple-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 border-4 border-purple-400 shadow-lg">
        <div class="text-center">
          <h1 class="text-3xl font-bold">Voi Hub</h1>
          <p class="text-sm text-purple-200 mt-2">Ecosystem Portal</p>
          {#if !activeSection && !isTourActive}
            <p class="text-xs text-purple-300 mt-4 max-w-[150px]">Click any section to explore</p>
          {/if}
        </div>
      </div>

      <!-- Update Orbital Sections -->
      {#each Object.entries(sections) as [key, section], i}
        <div
          class="absolute w-48 h-48 transition-all duration-500 section-button"
          style="
            transform: rotate({i * 60}deg) translateX(300px) rotate(-{i * 60}deg);
            z-index: {activeSection === key ? '40' : '25'};
          "
          on:mouseenter={() => handleSectionHover(key, true)}
          on:mouseleave={() => handleSectionHover(key, false)}
        >
          <button
            on:click={() => !isTourActive && toggleSection(key)}
            class="w-full h-full rounded-full bg-purple-600 hover:bg-purple-500 
                   flex flex-col items-center justify-center transform transition-all duration-300
                   {activeSection === key ? 'scale-[2]' : 'hover:scale-110'}
                   {isTourActive ? 
                     (activeSection === key ? 'ring-4 ring-yellow-400 scale-[2] brightness-100' : 'opacity-50') 
                     : 'border-2 border-purple-400'}
                   shadow-lg relative"
          >
            <span class="text-3xl mb-2">{section.icon}</span>
            <span class="font-bold">{section.title}</span>
            {#if !activeSection || activeSection === key}
              <span class="text-xs text-purple-200 mt-1">{section.description}</span>
            {/if}
          </button>

          <!-- Tour Description Overlay -->
          {#if isTourActive && activeSection === key}
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20
                     w-[500px] bg-yellow-400 text-purple-900 rounded-xl p-6 backdrop-blur-sm
                     shadow-xl z-[60] border-2 border-yellow-500"
              transition:fade
            >
              <div class="flex justify-between items-start mb-4">
                <p class="text-base font-medium leading-relaxed flex-1 mr-4">
                  {tourDescriptions[key]}
                </p>
                <button
                  on:click={endTour}
                  class="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                  title="End Tour"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div class="mt-4 flex justify-between items-center">
                <div class="text-sm font-medium">
                  Step {currentTourStep + 1} of {Object.keys(sections).length}
                </div>
                <div class="flex items-center gap-4">
                  <button
                    on:click={() => navigateTour('prev')}
                    class="p-2 hover:bg-yellow-500 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div class="text-sm font-medium">
                    {remainingTime}s
                  </div>
                  <button
                    on:click={() => navigateTour('next')}
                    class="p-2 hover:bg-yellow-500 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          {/if}

          <!-- Update Regular Expanded Content with higher contrast -->
          {#if activeSection === key && !isTourActive}
            <div
              class="expanded-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     w-[800px] bg-purple-900/95 rounded-xl p-8 backdrop-blur-md
                     border-2 border-purple-400 shadow-xl"
              transition:scale
              on:click|stopPropagation
            >
              <h2 class="text-2xl font-bold mb-6 text-white">{section.title}</h2>
              <div class="grid grid-cols-2 gap-6">
                {#each Object.entries(section.subSections) as [subKey, subSection]}
                  <button
                    on:click={() => toggleSubSection(subKey)}
                    class="bg-purple-800/80 rounded-lg p-6 text-left 
                           hover:bg-purple-700 transition-colors
                           border border-purple-500/50 hover:border-purple-400"
                  >
                    <h3 class="text-xl font-bold mb-2 text-white">{subSection.title}</h3>
                    <p class="text-sm text-purple-100">{subSection.description}</p>
                  </button>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .connection-line {
    stroke-dasharray: 10, 10;
    animation: flowForward 20s linear infinite;
    transition: all 0.3s ease;
  }

  .connection-line.reverse-flow {
    animation: flowBackward 20s linear infinite;
  }

  @keyframes flowForward {
    to {
      stroke-dashoffset: -200;
    }
  }

  @keyframes flowBackward {
    to {
      stroke-dashoffset: 200;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  :global(body) {
    overflow-x: hidden;
  }

  :global(.connection-line) {
    opacity: var(--line-opacity, 1);
  }

  :global(.tour-active .connection-line) {
    --line-opacity: 0.25;
  }

  :global(.tour-active .connection-line[data-section="{activeSection}"]) {
    --line-opacity: 1;
  }
</style>
