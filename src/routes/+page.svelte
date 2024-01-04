<script lang="ts">
    import HeaderPortfolio from "../lib/header.svelte";
    import Line from "$lib/line.svelte";
    import Apropos from "$lib/apropos.svelte";
    import Project from "$lib/project.svelte";
    import Projectdata from "$lib/data/projectdata.json";
    import sections from "$lib/data/projectdata.json";
    import alcantara from "$lib/images/alcantarajeux.png"
    import bateau from "$lib/images/bateau.jpg"
    import memo from "$lib/images/memo.png"
    import signet from "$lib/images/signet.png"
    import marteau from "$lib/images/marteau.jpg"
    import projetequipe from "$lib/data/projetequipe.json"
    import Projetequipetest from "$lib/projetequipetest.svelte";
    import '../app.css';
	  import Projetequipe from "$lib/projetequipe.svelte";
    import { onMount } from 'svelte';


    let lang = true
    
    
    function manageLanguage(){
      
      lang = !lang
    }
</script>
<div>

    <main class="mx-auto min-h-screen max-w-screen-2xl pt-24 px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 ">
      <div class="flex w-full">
        <h1 class="text-4xl font-bold tracking-tight sm:text-7xl text-yellow-700">Zacharie Pagé-Guiot</h1>
        <div class=" justify-end grow flex items-center">
          <button on:click={manageLanguage}>{lang == true ? "fr" : "eng"}</button>
        </div>
      </div>
      {#key lang}
        <HeaderPortfolio {lang}/>
      {/key}
        <Line />
        <Apropos {lang}/>
        <Line />
        <section id="experience" class="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience">

          <h2 class="mt-3  text-xl font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10  sm:block">Projets</h2>
          <ol class="group/list">
            {#key lang}
          {#each sections as {descriptionfr, titre, descriptioneng, position, programme, image,url, urlgit}, index}
                <Project {descriptionfr}{position}{titre}{descriptioneng}{programme}{marteau}{image}{url}{urlgit}{lang}/>
          {/each}
          {/key}
          </ol>
        </section>
        <Line />
        <section class="mb-16 scroll-mt-16 lg:scroll-mt-24">
          <h2 class="mt-3  text-xl font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10  sm:block">Projets en équipe</h2>
          <ol class="group/list lg:flex flex-row  lg:justify-around">
            {#key lang}
             {#each projetequipe as {descriptionfr, descriptioneng,titre, position, programme, image, url, urlgit}, index}
            <Projetequipetest {descriptionfr} {descriptioneng} {lang} {position}{titre}{programme}{marteau}{image} {url}{urlgit}/>
            {/each}
            {/key}
          </ol>
        </section>
        <div>@Fait à Montréal</div>
        <div>Fait avec Svelte Tailwindcss</div>
        
    </main>
</div>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.white);
    }
  </style>