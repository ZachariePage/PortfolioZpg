import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
/* empty css               */
const headerText = [
  {
    text1: {
      fr: "Intégrateur multimédia",
      eng: "Multimedia integrator"
    }
  },
  {
    text2: {
      fr: "Je suis une personne créative qui aime apprendre. Intéressé principalement en technologie et en jeux vidéo, mon rêve est de travailler sur la programmation de jeux ambitieux qui révolutionneront l’univers vidéo ludique. ",
      eng: "I am a creative person who loves to learn. Primarily interested in technology and video games, my dream is to work on the programming of ambitious games that will revolutionize the gaming universe."
    }
  }
];
const bodyText = [
  {
    text1: {
      fr: "En 2021, j'ai commencé mes études d'intégrations multimédia au ",
      eng: "In 2021, I began my multimedia integration studies at "
    }
  },
  {
    text2: {
      fr: ". Au travers de mes études j'ai pu apprendre plusieurs compétences fondamentales en programmation et j’ai aussi appris les bases des logiciels Adobe tel que Photoshop, Illustrator, Premiere et After Effects. ",
      eng: ". Through my studies, I acquired fundamental programming skills and learned the basics of Adobe software such as Photoshop, Illustrator, Premiere, and After Effects."
    }
  },
  {
    text3: {
      fr: "Aux travers des travaux réaliser j’ai pus m’épanouir en temps que *leader* d’équipe. En effet j’ai été la chargée de projet dans plusieurs travaux réalisés au cours de mon parcours scolaire et j’ai pu les mener à bon terme en des travaux dont je suis fier. J’ai appris la gestion d’équipe, le professionnalisme, l'environnement de travail Github mais aussi comment vendre un produit en travaillant en collaboration avec mes clients, en pratiquant l’analyse concurrentielle et en menant de profonde rétrospective par rapport à mon produit.",
      eng: "Through the completed projects, I thrived as a team leader. In fact, I served as the project manager in several works throughout my academic journey and successfully brought them to completion, projects of which I am proud. I gained experience in team management, professionalism, GitHub workflow, and also learned how to market a product by collaborating with clients, engaging in competitive analysis, and conducting thorough retrospectives on my work."
    }
  },
  {
    text4: {
      fr: "Quand je ne pratique pas ma programmation, j’aime me perdre dans ma passion des jeux vidéos en découvrant de nouveaux univers. Je suis aussi un joueur de ",
      eng: "When I'm not immersed in programming, I enjoy getting lost in my passion for video games, exploring new worlds. I am also a player of "
    }
  },
  {
    text5: {
      fr: "tennis de table",
      eng: "table tennis"
    }
  },
  {
    text6: {
      fr: ", sport dans lequel j’ai remporté de nombreuses médailles d'or au provincial et une médaille de bronze au championnat canadien junior en équipe.",
      eng: ", a sport in which I have won numerous gold medals at the provincial level and a bronze medal at the Canadian Junior Team Championship."
    }
  },
  {
    text7: {
      fr: "De 2019 à 2020, j’ai ",
      eng: "From 2019 to 2020, I "
    }
  },
  {
    text8: {
      fr: "étudié au japon",
      eng: "studied in japan"
    }
  },
  {
    text9: {
      fr: "tout en travaillant pour payer mes études. Durant ce parcours j’ai appris le japonais et plusieurs compétences de vie. J’ai aussi beaucoup appris de leurs culture de respect et de professionnalisme.",
      eng: "while working to finance my education. During this journey, I learned Japanese and acquired various life skills. I also gained valuable insights into their culture of respect and professionalism."
    }
  }
];
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  headerText.map((element) => element.text1?.fr);
  headerText.map((element) => element.text1?.eng);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<div class="pb-10"><h2 class="mt-3 text-lg font-medium tracking-tight sm:text-3xl text-yellow-700">${escape(lang == true ? headerText.map((element) => element.text1?.fr).join("") : headerText.map((element) => element.text1?.eng).join(""))}</h2> <p class="mt-5">${escape(lang == true ? headerText.map((element) => element.text2?.fr).join("") : headerText.map((element) => element.text2?.eng).join(""))}</p> <ul class="ml-1 mt-8 flex items-center" aria-label="social media" data-svelte-h="svelte-1ghrglc"><li class="mr-5 text-xs"><a href="meow" class="block hover:text-purple-300"><span class="sr-only"></span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg></a></li> <li class="mr-5 text-xs"><a href="meow" class="block hover:text-purple-300"><span class="sr-only"></span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li> <li class="mr-5 text-xs"><a href="meow" class="block hover:text-purple-300"><span class="sr-only"></span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li></ul> </div>`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  "use client";
  let path;
  return `<div class="relative w-full h-px mb-5"><div aria-hidden="true" aria-roledescription="mouse" class="relative z-10 h-10 w-full top-[-40px]" data-svelte-h="svelte-1761oqv"></div> <svg class="absolute w-full h-[100px] top-0 -translate-y-1/2"><path class="stroke-current text-yellow-50 stroke-[1px] fill-none"${add_attribute("this", path, 0)}></path></svg></div> `;
});
const Apropos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<div><h2 class="mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10 hidden sm:block">${escape(lang == true ? "À propos" : "About")}</h2> <div><div><p class="mb-4">${escape(lang == true ? bodyText.map((element) => element.text1?.fr).join("") : bodyText.map((element) => element.text1?.eng).join(""))}<a href="https://www.cmaisonneuve.qc.ca/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300" data-svelte-h="svelte-15vs9b1">collège Maisonneuve</a>${escape(lang == true ? bodyText.map((element) => element.text2?.fr).join("") : bodyText.map((element) => element.text2?.eng).join(""))}</p></div> <div><p class="mb-4">${escape(lang == true ? bodyText.map((element) => element.text3?.fr).join("") : bodyText.map((element) => element.text3?.eng).join(""))}</p></div> <div><p class="mb-4">${escape(lang == true ? bodyText.map((element) => element.text4?.fr).join("") : bodyText.map((element) => element.text4?.eng).join(""))}<a href="https://ttcanada.ca/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300">${escape(lang == true ? bodyText.map((element) => element.text5?.fr).join("") : bodyText.map((element) => element.text5?.eng).join(""))}</a>${escape(lang == true ? bodyText.map((element) => element.text6?.fr).join("") : bodyText.map((element) => element.text6?.eng).join(""))}</p></div> <div><p class="mb-4">${escape(lang == true ? bodyText.map((element) => element.text7?.fr).join("") : bodyText.map((element) => element.text7?.eng).join(""))}<a href="https://group.jp-sji.org/en/" class="font-medium text-yellow-700 hover:text-purple-300 focus-visible:text-purple-300">${escape(lang == true ? bodyText.map((element) => element.text8?.fr).join("") : bodyText.map((element) => element.text8?.eng).join(""))}</a>${escape(lang == true ? bodyText.map((element) => element.text9?.fr).join("") : bodyText.map((element) => element.text9?.eng).join(""))}</p></div></div></div>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { descriptionfr } = $$props;
  let { descriptioneng } = $$props;
  let { titre } = $$props;
  let { position } = $$props;
  let { programme } = $$props;
  let { marteau: marteau2 } = $$props;
  let { image } = $$props;
  let { url } = $$props;
  let { urlgit } = $$props;
  let { lang } = $$props;
  if ($$props.descriptionfr === void 0 && $$bindings.descriptionfr && descriptionfr !== void 0)
    $$bindings.descriptionfr(descriptionfr);
  if ($$props.descriptioneng === void 0 && $$bindings.descriptioneng && descriptioneng !== void 0)
    $$bindings.descriptioneng(descriptioneng);
  if ($$props.titre === void 0 && $$bindings.titre && titre !== void 0)
    $$bindings.titre(titre);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.programme === void 0 && $$bindings.programme && programme !== void 0)
    $$bindings.programme(programme);
  if ($$props.marteau === void 0 && $$bindings.marteau && marteau2 !== void 0)
    $$bindings.marteau(marteau2);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.urlgit === void 0 && $$bindings.urlgit && urlgit !== void 0)
    $$bindings.urlgit(urlgit);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<li class="mb-12"><div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 "><div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div> <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">Projet Multimedia 
                    <img${add_attribute("src", image, 0)} alt="" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"></header> <div class="z-10 sm:col-span-6"><h3 class="font-medium leading-snug "><div><a${add_attribute("href", urlgit, 0)} class="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-orange-300 focus-visible:text-orange-300 group/link text-base"><span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> <span class="text-yellow-700">${escape(titre)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></a></div></h3> ${each(Object.values(position), (value) => {
    return `<h3 class="font-medium leading-snug text-gray-200">${escape(value)}</h3>`;
  })} <p class="mt-2 text-sm leading-normal"><!-- HTML_TAG_START -->${lang == true ? descriptionfr : descriptioneng}<!-- HTML_TAG_END --></p> <ul class="mt-2 flex flex-wrap">${each(Object.values(programme), (value) => {
    return `<li class="mr-1.5 mt-2"><div class="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300">${escape(value)}</div> </li>`;
  })}</ul></div></div> <div class="pt-5 justify-end flex "><a${add_attribute("href", url, 0)} class="group/jou relative block hover:text-purple-300 hover:-translate-x-3 duration-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"><span class="sr-only"></span> <div data-svelte-h="svelte-1ob8pew">Regardez le projet!</div> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="absolute fill-current top-0 bottom-0 -right-2/4 invisible group-hover/jou:-right-2/3 duration-100 group-hover/jou:visible h-16 w-16" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path></svg></a></div></li>`;
});
const sections = [
  {
    titre: "Le bateau du peuple d'Alshin",
    descriptionfr: "Dans un pays diviser deux peuples autrefois unis se combattent. Le premier peuple est le peuple du feu qui vit dans un désert presque sans végétation. Les membres de ce peuple sont des barbares nomades qui vivent principalement de la chasse. Ils ont une tradition orale chanter, donc il transmette leurs savoir principalement par des chansons. La valeur qu'ils se transmette et qui est la plus importante est la force. Leur devise : « Forger le clan par le feu et la force » Les membres du clan possèdent des vêtements de teinte rouge car la seule plante qu'il est possible de trouver dans leur terre désertique est une plante qui leurs permettent de créer une teinture d'un rouge magnifique. Ce rouge représente en même temps le feu et leurs nature combattante. Leurs vêtements sont très pratiques. Ils n'ont pas fioriture ou d'important élément d'esthétique le peuple du feu ne voit pas d'intérêt à mettre des vêtements pour une autre raison que la protection.",
    descriptioneng: "In a divided country, two once-united peoples are in conflict. The first people are the people of fire who live in an almost vegetation-less desert. Members of this people are nomadic barbarians who primarily live off hunting. They have an oral tradition of singing, so they transmit their knowledge mainly through songs. The most important value they pass on is strength. Their motto: 'Forge the clan through fire and strength.' Members of the clan wear clothing tinted red because the only plant they can find in their desert land allows them to create a magnificent red dye. This red represents both fire and their combative nature. Their clothing is very practical, with no frills or significant aesthetic elements, as the people of fire see no reason to wear clothes for any purpose other than protection.",
    position: {
      value1: "Créateur"
    },
    programme: {
      value4: "Premiere",
      value7: "Maya"
    },
    image: "src/lib/images/bateau.jpg",
    urlgit: "https://youtu.be/2T89WSUMYU8",
    url: "https://youtu.be/2T89WSUMYU8"
  },
  {
    titre: "Signet",
    descriptionfr: "Application en ligne utilisant une base de donnée firebase pour afficher des aides mémoires. Application permettant d'ajoutez, modifier, enlevez des aides mémoires dinamyquement et facilement. La base de donnée est différente par utilisateur et permet de se connecter avec google.",
    descriptioneng: "Online application using a Firebase database to display memo aids. Application that allows adding, modifying, and removing memo aids dynamically and easily. The database is different for each user and allows connecting with Google.",
    position: {
      value1: "Créateur"
    },
    programme: {
      value4: "JavaScript",
      value7: "React",
      value5: "Css",
      value8: "Html",
      value9: "Firebase",
      value10: "JSON"
    },
    image: "src/lib/images/signet.png",
    urlgit: "https://github.com/ZachariePage/signet",
    url: "https://github.com/ZachariePage/signet"
  },
  {
    titre: "Mémo application web",
    descriptionfr: "Application web permettant d'afficher des tâches, d'ajoutez des tâches et de filtrer des tâches.Simple et facile à utilisée, cette application permet de se rapeller ses tâches pour la journée et de les faire à temps. Filtrage de tâche par si elle sont complétées ou non, ajout de tâche, éléments visuel pour différencier les tâches, heure à laquelle une tâche à été ajouter.",
    descriptioneng: "Web application for displaying tasks, adding tasks, and filtering tasks. Simple and easy to use, this application allows you to remember your tasks for the day and do them on time. Task filtering by whether they are completed or not, adding tasks, visual elements to differentiate tasks, time when a task was added.",
    position: {
      value1: "Créateur"
    },
    programme: {
      value4: "JavaScript",
      value7: "React",
      value5: "Css",
      value8: "Html",
      value10: "JSON"
    },
    image: "src/lib/images/memo.png",
    urlgit: "https://github.com/ZachariePage/memo",
    url: "https://github.com/ZachariePage/memo"
  },
  {
    titre: "Le marteau d'Alshin",
    descriptionfr: "Dans un pays diviser deux peuples autrefois unis se combattent. Le premier peuple est le peuple du feu qui vit dans un désert presque sans végétation. Les membres de ce peuple sont des barbares nomades qui vivent principalement de la chasse. Ils ont une tradition orale chanter, donc il transmette leurs savoir principalement par des chansons. La valeur qu'ils se transmette et qui est la plus importante est la force. Leur devise : « Forger le clan par le feu et la force » Les membres du clan possèdent des vêtements de teinte rouge car la seule plante qu'il est possible de trouver dans leur terre désertique est une plante qui leurs permettent de créer une teinture d'un rouge magnifique. Ce rouge représente en même temps le feu et leurs nature combattante. Leurs vêtements sont très pratiques. Ils n'ont pas fioriture ou d'important élément d'esthétique le peuple du feu ne voit pas d'intérêt à mettre des vêtements pour une autre raison que la protection.",
    descriptioneng: "In a divided country, two once-united peoples are in conflict. The first people are the people of fire who live in an almost vegetation-less desert. Members of this people are nomadic barbarians who primarily live off hunting. They have an oral tradition of singing, so they transmit their knowledge mainly through songs. The most important value they pass on is strength. Their motto: 'Forge the clan through fire and strength.' Members of the clan wear clothing tinted red because the only plant they can find in their desert land allows them to create a magnificent red dye. This red represents both fire and their combative nature. Their clothing is very practical, with no frills or significant aesthetic elements, as the people of fire see no reason to wear clothes for any purpose other than protection.",
    position: {
      value1: "Créateur"
    },
    programme: {
      value4: "Premiere",
      value7: "Maya"
    },
    image: "src/lib/images/marteau.jpg",
    urlgit: "https://youtu.be/X-ew7QGOPa0",
    url: "https://youtu.be/X-ew7QGOPa0"
  }
];
const marteau = "/_app/immutable/assets/marteau.UfHW56Cj.jpg";
const projetequipe = [
  {
    titre: "Le Royaumme d'Alcantara",
    descriptionfr: "Alcantara est un jeu low-poly médiéval de survie contre des vagues d'ennemies. Le joueur devra défendre le royaume d’Alcantara contre l’invasion des ravageurs en détruisant les portails qui les relient au royaume.",
    descriptioneng: "Alcantara is a low-poly medieval survival game against waves of enemies. The player must defend the kingdom of Alcantara against the invasion of marauders by destroying the portals that connect them to the kingdom.",
    position: {
      value1: "Directeur de projet",
      value2: "Directeur Technique"
    },
    programme: {
      value1: "C#",
      value2: "Unity",
      value3: "Illustrator",
      value4: "Premiere",
      value5: "After Effect",
      value6: "Github",
      value7: "Maya"
    },
    image: "src/lib/images/alcantarajeux.png",
    urlgit: "https://github.com/KevinKuch/Jeu-Royaume-Alcantara",
    url: "https://play.unity.com/mg/other/le-royaume-d-alcantara"
  },
  {
    titre: "Site web TIM Maisonneuve",
    descriptionfr: "Tur5o est un prototype de site web créer à la demande des professeurs du programme d'intégration multimédia du collège de Maisonneuve. Le site web a été créé avec wordpress et déployé sur Siteground.",
    descriptioneng: "Tur5o is a prototype website created at the request of professors from the multimedia integration program at Maisonneuve College. The website was created with WordPress and deployed on Siteground.",
    position: {
      value2: "Directeur Backend"
    },
    programme: {
      value1: "PHP",
      value2: "HTML",
      value7: "Wordpress",
      value83: "Siteground",
      value70: "SQL",
      value71: "XAMPP",
      value10: "SCSS",
      value12: "JavaScript",
      value3: "Illustrator",
      value4: "Premiere",
      value5: "After Effect",
      value6: "Github"
    },
    image: "src/lib/images/turo.png",
    urlgit: "https://github.com/SarahChemanedji/tur5o",
    url: "https://cidweb46.sg-host.com/"
  }
];
const Projetequipetest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { descriptionfr } = $$props;
  let { descriptioneng } = $$props;
  let { lang } = $$props;
  let { titre } = $$props;
  let { position } = $$props;
  let { programme } = $$props;
  let { marteau: marteau2 } = $$props;
  let { image } = $$props;
  let { url } = $$props;
  let { urlgit } = $$props;
  if ($$props.descriptionfr === void 0 && $$bindings.descriptionfr && descriptionfr !== void 0)
    $$bindings.descriptionfr(descriptionfr);
  if ($$props.descriptioneng === void 0 && $$bindings.descriptioneng && descriptioneng !== void 0)
    $$bindings.descriptioneng(descriptioneng);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.titre === void 0 && $$bindings.titre && titre !== void 0)
    $$bindings.titre(titre);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.programme === void 0 && $$bindings.programme && programme !== void 0)
    $$bindings.programme(programme);
  if ($$props.marteau === void 0 && $$bindings.marteau && marteau2 !== void 0)
    $$bindings.marteau(marteau2);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.urlgit === void 0 && $$bindings.urlgit && urlgit !== void 0)
    $$bindings.urlgit(urlgit);
  return `<li class="mb-12 lg:w-5/12 relative group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 "><div class="w-full flex flex-col"><h2 class="hidden sm:block mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text sm:block s-y_bCXRrkrYfP">${escape(titre)}</h2> <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">Projet Multimedia 
            <img${add_attribute("src", image, 0)} alt="" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:max-h-72 lg:min-h-72"></header></div> <div><a${add_attribute("href", urlgit, 0)} class="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-orange-300 focus-visible:text-orange-300 group/link text-base"><span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> <ul class="z-10 mt-4 text-xl"><h2 class="block sm:hidden mt-3 text-lg font-medium tracking-tight text-yellow-700 sm:text-2xl s-y_bCXRrkrYfP">${escape(titre)}</h2> ${each(Object.values(position), (value) => {
    return `<li><h3 class="font-medium leading-snug text-gray-200">${escape(value)}</h3></li>`;
  })}</ul></a> <p><!-- HTML_TAG_START -->${lang == true ? descriptionfr : descriptioneng}<!-- HTML_TAG_END --></p> <ul class="mt-2 flex flex-wrap">${each(Object.values(programme), (value) => {
    return `<li class="mr-1.5 mt-2"><div class="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300">${escape(value)}</div> </li>`;
  })}</ul></div> <div class="pt-5 justify-end flex "><a${add_attribute("href", url, 0)} class="group/jou relative block hover:text-purple-300 hover:-translate-x-3 duration-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"><span class="sr-only"></span> <div data-svelte-h="svelte-1ob8pew">Regardez le projet!</div> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="absolute fill-current top-0 bottom-0 -right-2/4 invisible group-hover/jou:-right-2/3 duration-100 group-hover/jou:visible h-16 w-16" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path></svg></a></div></li>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang = true;
  return `<div><main class="mx-auto min-h-screen max-w-screen-2xl pt-24 px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 "><div class="flex w-full"><h1 class="text-4xl font-bold tracking-tight sm:text-7xl text-yellow-700" data-svelte-h="svelte-14wywws">Zacharie Pagé-Guiot</h1> <div class="justify-end grow flex items-center"><button>${escape("fr")}</button></div></div> ${validate_component(Header, "HeaderPortfolio").$$render($$result, { lang }, {}, {})} ${validate_component(Line, "Line").$$render($$result, {}, {}, {})} ${validate_component(Apropos, "Apropos").$$render($$result, { lang }, {}, {})} ${validate_component(Line, "Line").$$render($$result, {}, {}, {})} <section id="experience" class="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience"><h2 class="mt-3 text-xl font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10 sm:block" data-svelte-h="svelte-g2peut">Projets</h2> <ol class="group/list">${each(sections, ({ descriptionfr, titre, descriptioneng, position, programme, image, url, urlgit }, index) => {
    return `${validate_component(Project, "Project").$$render(
      $$result,
      {
        descriptionfr,
        position,
        titre,
        descriptioneng,
        programme,
        marteau,
        image,
        url,
        urlgit,
        lang
      },
      {},
      {}
    )}`;
  })}</ol></section> ${validate_component(Line, "Line").$$render($$result, {}, {}, {})} <section class="mb-16 scroll-mt-16 lg:scroll-mt-24"><h2 class="mt-3 text-xl font-medium tracking-tight text-yellow-700 sm:text-3xl mb-10 sm:block" data-svelte-h="svelte-bdzvrf">Projets en équipe</h2> <ol class="group/list lg:flex flex-row lg:justify-around">${each(projetequipe, ({ descriptionfr, descriptioneng, titre, position, programme, image, url, urlgit }, index) => {
    return `${validate_component(Projetequipetest, "Projetequipetest").$$render(
      $$result,
      {
        descriptionfr,
        descriptioneng,
        lang,
        position,
        titre,
        programme,
        marteau,
        image,
        url,
        urlgit
      },
      {},
      {}
    )}`;
  })}</ol></section> <div data-svelte-h="svelte-1am6gkm">@Fait à Montréal</div> <div data-svelte-h="svelte-1jocvpn">Fait avec Svelte Tailwindcss</div></main> </div>`;
});
export {
  Page as default
};
