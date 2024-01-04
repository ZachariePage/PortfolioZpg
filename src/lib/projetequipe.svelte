<script>
    export let descriptionfr;
    export let titre;
    export let position;
    export let programme;
    export let marteau;
    export let image;
 
</script>

    
    
        <li class="mb-12">
            <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
                <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
                    Projet Multimedia 
                    <img src="{image}" alt="" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
                </header>
                <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug ">
                        <div>
                            <a href="https://github.com/KevinKuch/Jeu-Royaume-Alcantara" class="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-orange-300 focus-visible:text-orange-300 group/link text-base">
                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span class="text-yellow-700">{titre}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span>
                            </a>
                        </div>
                    </h3>
                    {#each Object.values(position) as value}
                    <h3 class="font-medium leading-snug text-gray-200">{value}</h3>
                    {/each}
                    <p class="mt-2 text-sm leading-normal">{descriptionfr}
                        
                    </p>
                    
                    <ul class="mt-2 flex flex-wrap">
                        
                            
                            {#each Object.values(programme) as value}
                            <li class="mr-1.5 mt-2">
                                <div class="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300">{value}</div>
                            </li>
                            {/each}
                        
                    </ul>
                   
                </div>
                
                
            </div>
            <div class=" pt-5 justify-end flex ">
                <a href="https://play.unity.com/mg/other/le-royaume-d-alcantara" class=" group/jou relative block hover:text-purple-300 hover:-translate-x-3 duration-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <span class="sr-only"></span>
                    <div>Jouez au jeux!</div>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class=" absolute  fill-current top-0 bottom-0 -right-2/4 invisible group-hover/jou:-right-2/3 duration-100 group-hover/jou:visible  h-16 w-16" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                  </a>
                
            </div>
        </li>

