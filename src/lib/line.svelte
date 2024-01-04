<script>
  'use client'
	import { onMount } from 'svelte';

  
  let path
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let value = 10;
  let x = 0.5;
  let pp;
  

  onMount(() => {
		setPath(progress);
	})
  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.setAttributeNS(null, "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50`)

  }
  const lerp = (x, y, a) => x * (1 - a) + y * a
  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }
  const manageMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const { movementY, clientX } = e;
    const pathBound =  rect;
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }
  const manageMouseLeave = () => {
    animateOut();
  }
  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }
  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

</script>
<div class="relative w-full h-px mb-5">
  <div
  aria-hidden="true"
    aria-roledescription="mouse"
    on:mouseenter={manageMouseEnter}
    on:mousemove={manageMouseMove}
    on:mouseleave={manageMouseLeave}
    class="relative z-10 h-10 w-full top-[-40px]"
  >
  
  </div>
  
  <svg class="absolute w-full h-[100px] top-0 -translate-y-1/2">
    
    <path
      bind:this={path} 
      
      class="stroke-current text-yellow-50 stroke-[1px] fill-none">
    </path>
  </svg>
</div>

    

<!-- <div class="relative my-5">
  <div role="region" class="relative z-10 h-10 w-full -translate-y-1/2"></div> 
  <svg class="absolute w-full h-[100px] top-0 -translate-y-1/2">
    <path class="stroke-current text-white stroke-[1px] fill-none" d="M0 50 Q1033 50.51343131313187, 1344 50"></path>
  </svg>
</div> -->


<style lang="postcss">
    
  </style>