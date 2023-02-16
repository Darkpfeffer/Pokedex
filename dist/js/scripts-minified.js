let pokemonRepository=function(){let s=[];function e(e){s.push(e)}function t(){return s}function i(s){a(s).then(function(){modalIIFE.showModal(s)})}function a(s){return fetch(s.detailsUrl).then(function(s){return s.json()}).then(function(e){s.imageUrl=e.sprites.front_default,s.height=e.height,s.types=e.types}).catch(function(s){console.error(s)})}function l(s){return fetch(s.detailsUrl).then(function(s){return s.json()}).then(function(e){s.types=e.types}).catch(function(s){console.error(s)})}return{add:e,getAll:t,addListItem:function s(e){let t=document.querySelector(".pokemon-list"),a=document.createElement("li"),n=document.createElement("button");n.innerText=e.name,document.querySelector(".pokemon-list"),t.appendChild(a),a.classList.add("list-group-item"),t.lastElementChild.appendChild(n);let o=t.lastElementChild.querySelector("button");o.classList.add("btn-block"),o.classList.add("btn-primary"),o.setAttribute("data-toggle","modal"),o.setAttribute("data-target","#exampleModal"),o.parentElement.classList.add("col-xl-3"),o.parentElement.classList.add("col-lg-4"),o.parentElement.classList.add("col-md-6"),l(e).then(function(){e.types.forEach(function(s){let e=s.type.name;o.classList.add(e),o.classList.contains("grass")&&o.classList.contains("poison")?(o.classList.remove("grass"),o.classList.remove("poison"),o.classList.add("grassPoison")):o.classList.contains("bug")&&o.classList.contains("poison")?(o.classList.remove("bug"),o.classList.remove("poison"),o.classList.add("bugPoison")):o.classList.contains("ground")&&o.classList.contains("poison")?(o.classList.remove("ground"),o.classList.remove("poison"),o.classList.add("poisonGround")):o.classList.contains("normal")&&o.classList.contains("fairy")?(o.classList.remove("normal"),o.classList.remove("fairy"),o.classList.add("normalFairy")):o.classList.contains("bug")&&o.classList.contains("grass")?(o.classList.remove("bug"),o.classList.remove("grass"),o.classList.add("grassBug")):o.classList.contains("water")&&o.classList.contains("poison")?(o.classList.remove("water"),o.classList.remove("poison"),o.classList.add("poisonWater")):o.classList.contains("rock")&&o.classList.contains("ground")?(o.classList.remove("rock"),o.classList.remove("ground"),o.classList.add("groundRock")):o.classList.contains("water")&&o.classList.contains("psychic")?(o.classList.remove("water"),o.classList.remove("psychic"),o.classList.add("psychicWater")):o.classList.contains("electric")&&o.classList.contains("steel")?(o.classList.remove("electric"),o.classList.remove("steel"),o.classList.add("electricSteel")):o.classList.contains("water")&&o.classList.contains("ice")?(o.classList.remove("water"),o.classList.remove("ice"),o.classList.add("iceWater")):o.classList.contains("ghost")&&o.classList.contains("poison")?(o.classList.remove("ghost"),o.classList.remove("poison"),o.classList.add("poisonGhost")):o.classList.contains("grass")&&o.classList.contains("psychic")?(o.classList.remove("grass"),o.classList.remove("psychic"),o.classList.add("psychicGrass")):o.classList.contains("psychic")&&o.classList.contains("fairy")?(o.classList.remove("psychic"),o.classList.remove("fairy"),o.classList.add("psychicFairy")):o.classList.contains("ice")&&o.classList.contains("psychic")?(o.classList.remove("ice"),o.classList.remove("psychic"),o.classList.add("psychicIce")):o.classList.contains("rock")&&o.classList.contains("water")?(o.classList.remove("rock"),o.classList.remove("water"),o.classList.add("rockWater")):o.classList.contains("flying")?o.classList.remove("flying"):console.log("classification complete")})}),o.addEventListener("click",function(){o.parentElement.classList.add("modal-container"),i(e)})},showDetails:i,loadList:function s(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(s){return s.json()}).then(function(s){s.results.forEach(function(s){e({name:s.name,detailsUrl:s.url})})}).catch(function(s){console.error(s)})},loadDetails:a,loadTypes:l,searchPokemon:function s(){let e=document.querySelector(".search-input"),t=document.querySelector(".pokemon-list").getElementsByTagName("li");for(let i=0;i<t.length;i++)t[i].classList.remove("hide");for(let a=0;a<t.length;a++)""===e.value||t[a].innerText.indexOf(e.value)&&t[a].classList.add("hide")}}}(),modalIIFE=function(){function s(){let s=document.querySelector(".modal-container");document.querySelector(".is-visible").classList.remove("is-visible");document.getElementById("exampleModal").removeAttribute("id"),s.classList.remove("modal-container")}return{showModal:function e(t){let i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("img"),c=document.createElement("p"),r=document.createElement("button"),d=document.querySelector(".modal-container");if(d.lastElementChild.classList.contains("modal")){let m=d.querySelector(".modal");m.setAttribute("id","exampleModal");let L=d.querySelector(".btn-block");m.classList.contains("is-visible")||(L.click(),m.classList.add("is-visible"))}else{d.appendChild(i),d.lastElementChild.classList.add("modal");let u=d.querySelector(".modal");u.setAttribute("tabindex","-1"),u.setAttribute("role","dialog"),u.setAttribute("id","exampleModal"),u.appendChild(a),u.lastElementChild.classList.add("modal-dialog");let p=u.querySelector(".modal-dialog");p.setAttribute("role","document"),p.appendChild(l),p.lastElementChild.classList.add("modal-content");let h=p.querySelector(".modal-content");h.appendChild(r),h.lastElementChild.setAttribute("type","button"),h.lastElementChild.classList.add("close"),h.lastElementChild.setAttribute("data-dismiss","modal"),h.lastElementChild.setAttribute("aria-label","Close"),h.lastElementChild.innerHTML='<span aria-hidden="true">&times;</span>',h.lastElementChild.innerText="Close",h.lastElementChild.addEventListener("click",s),h.appendChild(n),n.classList.add("modal-title"),h.lastElementChild.innerText="Name: "+t.name,h.appendChild(c),c.classList.add("modal-content"),h.lastElementChild.innerText="Height: "+t.height,o.src=t.imageUrl,h.appendChild(o),o.classList.add("modal-content"),o.setAttribute("id","my-image"),u.classList.add("is-visible");let y=document.querySelector(".is-visible");y.addEventListener("click",e=>{e.target===y&&s()});d.querySelector(".btn-block").click()}},hideModal:s}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(s){pokemonRepository.addListItem(s)})}),window.addEventListener("keydown",s=>{"Escape"===s.key&&document.querySelector(".is-visible")&&modalIIFE.hideModal()});let searchButton=document.querySelector(".submit-button");searchButton.addEventListener("click",s=>{s.preventDefault(),pokemonRepository.searchPokemon()}),searchButton.addEventListener("keydown",s=>{"Enter"===document.querySelector(".search-input").key&&(s.preventDefault(),pokemonRepository.searchPokemon())});