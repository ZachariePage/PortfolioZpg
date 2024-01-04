<script>
    export let descriptionfr;
    export let descriptioneng;
    export let lang;
    export let titre;
    export let position;
    export let programme;
    export let marteau;
    export let image;
    export let url;
    export let urlgit;
 
</script>

    
  <li class="mb-12 lg:w-5/12 relative group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
    <div class=" w-full flex flex-col">
        <h2 class=" hidden sm:block mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text  sm:block s-y_bCXRrkrYfP">{titre}</h2>
        <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
            Projet Multimedia 
            <img src="{image}" alt="" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:max-h-72 lg:min-h-72">
        </header>
    </div>
    <div>
        <a href="{urlgit}" class="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-orange-300 focus-visible:text-orange-300 group/link text-base">
            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
        <ul class=" z-10 mt-4 text-xl">
            <h2 class=" block sm:hidden mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text-2xl  s-y_bCXRrkrYfP">{titre}</h2>
            {#each Object.values(position) as value}
            <li><h3 class="font-medium leading-snug text-gray-200">{value}</h3></li>
            {/each}
        </ul>
        </a>
        <p>
            {@html lang == true ? descriptionfr : descriptioneng}
        </p>
        <ul class="mt-2 flex flex-wrap">
            {#each Object.values(programme) as value}
            <li class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300">{value}</div>
            </li>
            {/each}
            
        </ul>
    </div>
    <div class=" pt-5 justify-end flex ">
        <a href="{url}" class=" group/jou relative block hover:text-purple-300 hover:-translate-x-3 duration-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <span class="sr-only"></span>
            <div>Regardez le projet!</div>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class=" absolute  fill-current top-0 bottom-0 -right-2/4 invisible group-hover/jou:-right-2/3 duration-100 group-hover/jou:visible  h-16 w-16" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
          </a>
        
    </div>
  </li>
