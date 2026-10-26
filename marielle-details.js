/* Marielle V2.2: original sample service and journal pages. Locked homepage source remains unchanged. */
(function(){
"use strict";
function url(key){return key?"?page="+key:"./";}
var images={};
var serviceKeys=["brand-strategy","website-design","creative-direction"];
var articleKeys=["clarity-first","beautiful-digital-home","new-chapter"];
var data={
"brand-strategy":{type:"service",tag:"BRAND STRATEGY",title:"Brand strategy",lead:"A thoughtful foundation for a brand with a distinctive point of view.",img:"Creative stationery and styling",sections:[
["Begin with clarity","A memorable identity begins by understanding what a business believes, who it wants to reach and why the people it serves should care. Before thinking about logos and colours, begin with the message behind the work."],
["A process that feels intentional","Our fictional studio process begins with discovery: understanding a brand’s audience, voice and aspirations. From there, the creative direction becomes a practical guide for headlines, imagery and everyday decisions. It is about making the brand recognisable without making every page identical."],
["An illustrative service journey","Discovery and research → brand positioning → tone of voice → creative direction → practical brand guidance. Replace these steps with your actual service deliverables and timings before publishing."],
["Make the details belong together","When brand strategy is clear, the right design choices begin to feel natural. Consistent photography, considered typography and generous white space can communicate an idea long before a visitor reads the final sentence."]
]},
"website-design":{type:"service",tag:"WEB DESIGN",title:"Website design",lead:"Editorial websites designed to welcome, communicate and connect.",img:"Sunlit design studio with architectural details",sections:[
["A welcoming place online","A beautiful website should also be easy to understand. Visitors need to know what you offer, why it matters and how to get in touch. We start by thinking about those questions and planning a calm, purposeful journey."],
["Every page has a role","An inviting homepage gives the overview. An About page builds familiarity. Service pages explain what is available, while journal entries and a portfolio give people a reason to explore. Thoughtful links connect those pieces together."],
["An illustrative design journey","Planning → page structure → typography and imagery → responsive layouts → content handover. In a real business website, each stage should be adapted to your actual process and level of support."],
["The small things count","Good buttons take visitors somewhere useful. On mobile, type remains readable, the menu is easy to open and photographs are cropped with care. The most elegant website is one that works for the person viewing it."]
]},
"creative-direction":{type:"service",tag:"CREATIVE DIRECTION",title:"Creative direction",lead:"Photography, visual rhythm and storytelling that feel like one cohesive world.",img:"Creative studio styled product photograph",sections:[
["Create a distinctive atmosphere","Imagery is more than decoration. The right selection of portraits, spaces and everyday details can tell visitors something meaningful about a business. A considered crop or an intentional pause between sections changes how a story feels."],
["A connected visual language","Moodboards, styling references and a small vocabulary of brand characteristics help keep each page consistent. Thoughtful creative direction brings photographs, headlines, colour and motion into one story."],
["An illustrative creative process","Gather inspiration → refine the mood → select photographs → arrange content → review cohesion across screens. This example is provided to demonstrate the editable service-page layout."],
["Room for personality","The aim is not perfect uniformity. A brand can be calm and expressive at once. The strongest creative work has a recognisable sensibility and enough flexibility to evolve."]
]},
"clarity-first":{type:"journal",tag:"BRAND THINKING",title:"Clarity first: making a brand that feels like you",lead:"Why the strongest visual identities often begin before the design work starts.",img:"Creative stationery and styling",sections:[
["Begin with one clear sentence","Before selecting a colour palette or visual style, try describing your business without jargon. Who do you help, what do you create and what matters about your approach? A simple answer gives every later decision a useful direction."],
["Choose a vocabulary","Write five words you would love a client to use after visiting your website. They might be welcoming, confident, curious, considered and modern. Then decide which words definitely do not fit. These contrasts are helpful when writing copy or selecting imagery."],
["Use your words to guide the visuals","Once your message feels clear, it becomes easier to choose photographs that support it. A soft editorial portrait may suit a thoughtful personal brand, while stronger shapes and bolder typography can reflect a different point of view."],
["Consistency does not mean repetition","Your pages do not need to look identical. They need familiar cues in colour, type, voice and spacing so visitors understand they are still within the same brand. Leave room for each part of the story to have its own rhythm."],
["Give visitors a next step","A beautiful brand is most useful when it communicates. End each page with an invitation that makes sense, whether that means reading another article, exploring a service or making contact."]
]},
"beautiful-digital-home":{type:"journal",tag:"THE CREATIVE EDIT",title:"How to create a beautiful digital home",lead:"A slower, more intentional approach to organising a website people enjoy exploring.",img:"Sunlit design studio with architectural details",sections:[
["Start with the visitor","Imagine someone finding your website for the first time. They want to understand what you do, whether you are a good fit and where to go next. Let these questions guide your navigation and page structure."],
["Balance photography and breathing room","A beautiful photograph deserves space. Pair immersive images with calmer text sections and avoid making every part of the page equally busy. Alternating rhythms help the eye settle and keep long pages readable."],
["Write headings that help","A heading should offer meaning, not just a decorative label. Tell visitors what they can expect in a service, describe the purpose of a portfolio project and make buttons lead to the page they promise."],
["Design thoughtfully for mobile","Review the layout on a small screen, not only a laptop. Check title length, line breaks, button sizes, image crops and spacing. A mobile website benefits from the same editorial attention as a desktop experience."],
["Finish the journey","A welcoming digital home has a clear way forward. Add relevant links between pages, an approachable contact section and meaningful writing that helps visitors decide what to explore next."]
]},
"new-chapter":{type:"journal",tag:"STUDIO NOTES",title:"A new chapter starts with one clear idea",lead:"A few thoughts on beginning again and making meaningful creative progress.",img:"Portrait of a creative founder",sections:[
["Let the beginning be simple","When a new project starts, ideas can arrive faster than decisions. It helps to choose one important question before trying to answer everything. What should a visitor remember about this business?"],
["Build in layers","Start with the essential pages and a useful navigation. Add a visual language through typography, photographs and colour. Then revisit the details: links, mobile layouts and the small moments that make a website feel polished."],
["Make space for revision","Creative work benefits from careful refinement. Remove sections that do not serve the story, simplify language that feels too complicated and make every call to action easy to understand."],
["Celebrate considered progress","A good website is not measured by how many effects it contains. It succeeds when visitors feel that they understand the people, ideas and purpose behind it."],
["Keep evolving","Let your website develop alongside the business. The best design foundations are flexible enough to accommodate new stories, new services and a changing point of view."]
]}
};
function pic(name){return images[name]||"";}
function strip(text){return String(text).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]});}
function hero(title,tag,lead){return '<section class="mar-detail-hero"><div class="mar-detail-wrap"><span class="mar-detail-eyebrow">'+tag+'</span><h1>'+title+'</h1><p class="mar-detail-lead">'+lead+'</p></div><span class="mar-detail-label" aria-hidden="true">MARIELLE</span></section>';}
function band(title,where,label){return '<section class="mar-detail-section-band"><h2>'+title+'</h2><a class="mar-detail-action" href="'+url(where)+'">'+label+' ↗</a></section>';}
function card(key){var d=data[key];return '<a class="mar-detail-card" href="'+url(key)+'"><img loading="lazy" alt="'+strip(d.img)+'" src="'+pic(d.img)+'"><div class="mar-detail-card-inner"><span class="mar-detail-eyebrow">'+d.tag+'</span><h3>'+d.title+'</h3><p>'+d.lead+'</p><span>READ MORE ↗</span></div></a>';}
function single(key){var d=data[key],keys=d.type==="service"?serviceKeys:articleKeys,index=keys.indexOf(key),back=d.type==="service"?"services":"journal";
return hero(d.title,d.type==="service"?"SERVICE / "+d.tag:"JOURNAL / "+d.tag,d.lead)+
'<div class="mar-detail-banner"><img alt="'+strip(d.img)+'" src="'+pic(d.img)+'"></div><article class="mar-detail-body"><a class="mar-detail-back" href="'+url(back)+'">← ALL '+back.toUpperCase()+'</a><div class="mar-detail-meta"><span>MARIELLE STUDIO</span><span>DEMONSTRATION CONTENT</span></div>'+
d.sections.map(function(s){return '<h2>'+s[0]+'</h2><p>'+s[1]+'</p>';}).join('')+
'<div class="mar-detail-note">This is editable sample copy for the Marielle WordPress theme demo. Replace the text and images with your own business content before publishing.</div>'+
'<div class="mar-detail-adjacent"><a href="'+url(keys[(index+keys.length-1)%keys.length])+'">← PREVIOUS</a><a href="'+url(keys[(index+1)%keys.length])+'">NEXT →</a></div></article>'+
band(d.type==="service"?"Your next chapter deserves a thoughtful beginning.":"More ideas for a considered digital life.",d.type==="service"?"contact":"journal",d.type==="service"?"LET'S CONNECT":"MORE JOURNAL STORIES");}
function listing(kind){var services=kind==="services",keys=services?serviceKeys:articleKeys;return hero(services?"The services":"From the journal",services?"WHAT WE DO":"FRESH PERSPECTIVES",services?"Creative services explained with clarity, detail and care.":"Editorial notes on design, brands and building a digital home.")+
'<section class="mar-detail-index"><div class="mar-detail-wrap"><span class="mar-detail-eyebrow">'+(services?"EXPLORE SERVICES":"LATEST STORIES")+'</span><h2>'+(services?"Thoughtfully considered, from start to finish.":"Stories worth spending time with.")+'</h2><div class="mar-detail-cards">'+keys.map(card).join('')+'</div></div></section>'+
band("Have something in mind?","contact","START A CONVERSATION");}
function about(){return hero("Meet Marielle.","ABOUT THE STUDIO","An independent creative perspective for considered brands and ambitious people.")+
'<div class="mar-detail-banner"><img alt="Creative portrait" src="'+pic("Creative studio founder in a sunlit interior")+'"></div>'+
'<article class="mar-detail-body"><a class="mar-detail-back" href="./">← BACK TO HOME</a><h2>Design with intention.</h2><p>Marielle is a fictional creative studio created to showcase an editorial WordPress theme. Its design language pairs warm photography, generous spacing and thoughtful typography with a clear narrative.</p><p>This space demonstrates how a founder can share her story, introduce a philosophy and welcome visitors into her work without overwhelming them with information.</p><h2>The values behind the approach.</h2><p>Clarity, curiosity and connection inform every aspect of this sample studio. We believe that meaningful design brings words, images and interactions together so that they feel part of a single story.</p><p>Make this page your own by including your real background, values, photograph and reasons for doing the work you do.</p><div class="mar-detail-note">Marielle is a demonstration brand; this example biography does not describe a real founder.</div></article>'+band("Let's make room for your story.","contact","GET IN TOUCH");}
function portfolio(){var ds=[["Warmth & Form","A gentle architectural direction for an imagined interiors studio.","Sunlit design studio with architectural details"],["The Creative Edit","An expressive identity that balances structure and personality.","Creative stationery and styling"],["Studio Notes","A considered digital presence for a fictional solo founder.","Portrait of a creative founder"]];
return hero("Selected work.","THE PORTFOLIO","A collection of illustrative creative projects, ready to replace with your work.")+
'<section class="mar-detail-index"><div class="mar-detail-wrap"><div class="mar-detail-cards">'+ds.map(function(d){return '<article class="mar-detail-card"><img src="'+pic(d[2])+'" alt="'+d[2]+'"><div class="mar-detail-card-inner"><span class="mar-detail-eyebrow">SAMPLE PROJECT</span><h3>'+d[0]+'</h3><p>'+d[1]+'</p><span>ILLUSTRATIVE EXAMPLE</span></div></article>';}).join('')+'</div><div class="mar-detail-note">These projects are fictional examples and do not represent actual clients or commercial results.</div></div></section>'+band("Give your own work a place to shine.","contact","GET IN TOUCH");}
function contact(){return hero("Let's connect.","CONTACT","Beautiful work begins with a clear conversation.")+'<section class="mar-detail-index"><div class="mar-detail-wrap"><div class="mar-detail-grid-2"><img alt="Creative interior" src="'+pic("Natural light and sculptural furniture in a warm studio")+'"><div class="mar-detail-bodycopy"><span class="mar-detail-eyebrow">CONTACT THE STUDIO</span><h2 style="font:400 48px/1.12 Georgia,serif;margin:20px 0">Tell your story.</h2><p>Introduce your business, your idea and the kind of website or creative experience you would love to create.</p><p><strong>Email:</strong> [add your email address]<br><strong>Instagram:</strong> [add your profile link]</p><p>This is sample contact copy. Connect your own working WordPress form before publishing.</p><a class="mar-detail-action" href="'+url("services")+'">EXPLORE SERVICES ↗</a></div></div></div></section>';}
function updateNavigation(){
var targets={"Home":url(""),"About":url("about"),"Services":url("services"),"Portfolio":url("portfolio"),"Journal":url("journal"),"Contact":url("contact"),"MARIELLE":url(""),"THE JOURNAL":url("journal"),"LET'S CONNECT":url("contact"),"ENQUIRE":url("contact"),"START A PROJECT":url("contact")};
document.querySelectorAll(".mar-header a,.mar-footer a,.mar-mobile-nav a").forEach(function(a){var label=a.textContent.replace(/↗/g,"").trim();if(targets[label])a.href=targets[label];});
}
function homepageLinks(){
var targets={"DISCOVER THE STUDIO":url("about"),"MEET MARIELLE":url("about"),"READ OUR STORY":url("about"),"ALL STORIES":url("journal"),"LET'S TALK":url("contact")};
document.querySelectorAll("main a").forEach(function(a){var label=a.textContent.replace(/↗/g,"").trim();if(targets[label])a.href=targets[label];});
document.querySelectorAll(".mar-service-card a").forEach(function(a,i){if(serviceKeys[i])a.href=url(serviceKeys[i]);});
document.querySelectorAll(".mar-journal-item>a").forEach(function(a,i){if(articleKeys[i])a.href=url(articleKeys[i]);});
var gallery=document.querySelector(".mar-gallery");if(gallery&&!document.querySelector(".mar-portfolio-link")){var node=document.createElement("div");node.className="mar-portfolio-link";node.style.cssText="text-align:center;padding:26px 20px 58px;background:#f6f5f1";node.innerHTML='<a class="mar-pill" href="'+url("portfolio")+'">VIEW PORTFOLIO ↗</a>';gallery.insertAdjacentElement("afterend",node);}
}
function start(){
document.querySelectorAll("img[alt]").forEach(function(el){images[el.alt]=el.src;});
updateNavigation();
var key=new URLSearchParams(location.search).get("page");
if(!key){homepageLinks();return;}
var result=data[key]?single(key):key==="services"||key==="journal"?listing(key):key==="about"?about():key==="portfolio"?portfolio():key==="contact"?contact():null;
if(!result)return;
var main=document.querySelector("main");if(!main)return;
main.className="mar-detail-view";main.innerHTML=result;
document.title=(data[key]?data[key].title:key.charAt(0).toUpperCase()+key.slice(1))+" | MARIELLE";
document.querySelectorAll(".mar-motion-strip").forEach(function(el){el.remove();});
scrollTo(0,0);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();