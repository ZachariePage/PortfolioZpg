<script>
    export let lang;
    import {bodyText} from "$lib/data/localization.json"
</script>
<div>
    <h2 class="mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10 hidden sm:block">{lang == true ? "À propos" : "About"}</h2>
    <div>
        <div><p class="mb-4">{lang == true ? bodyText
            .map((element) => element.text1?.fr).join('') : bodyText
            .map((element) => element.text1?.eng).join('')}<a href="https://www.cmaisonneuve.qc.ca/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300">collège Maisonneuve</a>{lang == true ? bodyText
        .map((element) => element.text2?.fr).join('') : bodyText
        .map((element) => element.text2?.eng).join('')}</p></div>

        <div><p class="mb-4">{lang == true ? bodyText
            .map((element) => element.text3?.fr).join('') : bodyText
            .map((element) => element.text3?.eng).join('')}</p></div>
        
        <div><p class="mb-4">{lang == true ? bodyText
            .map((element) => element.text4?.fr).join('') : bodyText
            .map((element) => element.text4?.eng).join('')}<a href="https://ttcanada.ca/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300">{lang == true ? bodyText
        .map((element) => element.text5?.fr).join('') : bodyText
        .map((element) => element.text5?.eng).join('')}</a>{lang == true ? bodyText
        .map((element) => element.text6?.fr).join('') : bodyText
        .map((element) => element.text6?.eng).join('')}</p></div>
        
        <div><p class="mb-4">{lang == true ? bodyText
            .map((element) => element.text7?.fr).join('') : bodyText
            .map((element) => element.text7?.eng).join('')}<a href="https://group.jp-sji.org/en/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300">{lang == true ? bodyText
        .map((element) => element.text8?.fr).join('') : bodyText
        .map((element) => element.text8?.eng).join('')}</a>{lang == true ? bodyText
        .map((element) => element.text9?.fr).join('') : bodyText
        .map((element) => element.text9?.eng).join('')}</p> </div>
         </div>
</div>