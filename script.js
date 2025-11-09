// Tarif verileri (30+ örnek)
const recipes = [
  {title:"Mercimek Köftesi", type:"vegan", calories:420, servings:4, img:"images/mercimek-koftesi-2.jpg", ingredients:["Kırmızı mercimek","Bulgur","Soğan","Zeytinyağı","Baharatlar"], steps:"Mercimeği haşla, bulguru ekle, yoğur ve şekil ver."},
  {title:"Sebzeli Omlet", type:"vege", calories:320, servings:1, img:"images/sebzeliomlet.jpeg", ingredients:["Yumurta","Ispanak","Biber","Tuz"], steps:"Sebzeleri sotele, yumurtayı çırp, karıştır ve pişir."},
  {title:"Nohutlu Salata", type:"vegan", calories:280, servings:2, img:"images/nohutlusalata.jpeg", ingredients:["Nohut","Domates","Salatalık","Zeytinyağı","Limon"], steps:"Malzemeleri karıştır, sosla tatlandır."},
  {title:"Kabak Spagetti", type:"vegan", calories:190, servings:1, img:"images/kabakspagetti.jpeg", ingredients:["Kabak","Domates sosu","Sarımsak"], steps:"Kabaktan spagetti yap, sosla karıştır."},
  {title:"Zeytinyağlı Enginar", type:"vegan", calories:220, servings:2, img:"images/zeytinyağlıenginar.jpeg", ingredients:["Enginar","Zeytinyağı","Havuç","Bezelye"], steps:"Sebzeleri haşla, enginarla pişir."},
  {title:"Kinoa Tabule", type:"vegan", calories:250, servings:2, img:"images/KinoaTabule.jpeg", ingredients:["Kinoa","Maydanoz","Domates","Limon"], steps:"Tüm malzemeleri karıştır, soğuk servis et."},
  {title:"Mantarlı Risotto", type:"vege", calories:550, servings:2, img:"images/MantarlıRisotto.jpeg", ingredients:["Pirinç","Mantar","Tereyağı","Parmesan"], steps:"Pirinci kavur, su ekle, mantar ve peynirle pişir."},
  {title:"Avokadolu Tost", type:"vegan", calories:310, servings:1, img:"images/Avokadolu Tost.jpeg", ingredients:["Tam buğday ekmeği","Avokado","Limon","Tuz"], steps:"Ekmeği kızart, avokadoyu ez, sür ve servis et."},
  {title:"Sebzeli Makarna", type:"vege", calories:430, servings:2, img:"images/Sebzeli Makarna.jpeg", ingredients:["Makarna","Brokoli","Havuç","Zeytinyağı"], steps:"Makarnayı haşla, sebzelerle karıştır."},
  {title:"Yeşil Smoothie", type:"vegan", calories:180, servings:1, img:"images/Yeşil Smoothie.jpeg", ingredients:["Ispanak","Muz","Badem sütü"], steps:"Tüm malzemeleri blenderda karıştır."},
  // 20+ ekstra tarif
  {title:"Sebzeli Pilav", type:"vege", calories:300, servings:2, img:"images/Sebzeli Pilav.jpeg", ingredients:["Pirinç","Bezelye","Havuç","Tereyağı"], steps:"Sebzeleri kavur, pirinçle pişir."},
  {title:"Falafel", type:"vegan", calories:400, servings:4, img:"images/Falafel.jpeg", ingredients:["Nohut","Maydanoz","Sarımsak"], steps:"Karışımı yoğur, kızart."},
  {title:"Tahinli Salata", type:"vegan", calories:270, servings:2, img:"images/Tahinli Salata.jpeg", ingredients:["Marul","Tahin","Limon"], steps:"Sosu hazırla, salataya ekle."},
  {title:"Karnabahar Kızartması", type:"vege", calories:390, servings:3, img:"images/Karnabahar Kızartması.jpg", ingredients:["Karnabahar","Yumurta","Un"], steps:"Haşla, pane yap, kızart."},
  {title:"Fırında Sebze", type:"vegan", calories:260, servings:3, img:"images/Fırında Sebze.jpeg", ingredients:["Patlıcan","Kabak","Domates","Zeytinyağı"], steps:"Fırına ver, yumuşayana kadar pişir."},
  {title:"Smoothie Bowl", type:"vegan", calories:290, servings:1, img:"images/Smoothie Bowl.jpeg", ingredients:["Muz","Yulaf","Badem sütü"], steps:"Blenderda karıştır, kasede sun."},
  {title:"Mantar Sote", type:"vege", calories:310, servings:2, img:"images/Mantar Sote.jpeg", ingredients:["Mantar","Tereyağı","Soğan"], steps:"Kavur, tuzla tatlandır."},
  {title:"Ispanaklı Börek", type:"vege", calories:500, servings:4, img:"images/Ispanaklı Börek.jpeg", ingredients:["Yufka","Ispanak","Peynir"], steps:"İç harcı hazırla, sar ve pişir."},
  {title:"Pancake (vegan)", type:"vegan", calories:340, servings:2, img:"images/Pancake (vegan).jpeg", ingredients:["Un","Bitkisel süt","Kabartma tozu"], steps:"Hamuru yap, tavada pişir."},
  {title:"Sebzeli Pizza", type:"vege", calories:620, servings:2, img:"images/Sebzeli Pizza.jpeg", ingredients:["Hamur","Sebze","Mozzarella"], steps:"Üzerine malzeme koy, fırında pişir."}
];

const recipesEl = document.getElementById("recipes");
const searchEl = document.getElementById("search");
const filterEl = document.getElementById("filter");
const sortEl = document.getElementById("sort");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Listeleme
function render() {
  const q = searchEl.value.toLowerCase();
  const f = filterEl.value;
  let list = recipes.filter(r => 
    (f === "all" || r.type === f) && 
    (r.title.toLowerCase().includes(q) || r.ingredients.join(",").toLowerCase().includes(q))
  );

  if (sortEl.value === "cal-asc") list.sort((a,b)=>a.calories-b.calories);
  else if (sortEl.value === "cal-desc") list.sort((a,b)=>b.calories-a.calories);

  recipesEl.innerHTML = "";
  list.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "recipe";
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}" />
      <h3>${r.title}</h3>
      <div class="meta">${r.type === 'vegan' ? '🌱 Vegan' : '🥚 Vejetaryen'} • ${r.calories} kcal</div>`;
    card.onclick = () => openModal(r);
    recipesEl.appendChild(card);
  });
}

function openModal(r) {
  modal.style.display = "block";
  document.getElementById("modalImg").src = r.img;
  document.getElementById("modalTitle").textContent = r.title;
  document.getElementById("modalType").textContent = r.type === "vegan" ? "🌱 Vegan" : "🥚 Vejetaryen";
  document.getElementById("modalCalories").textContent = `Kalori: ${r.calories} kcal | Porsiyon: ${r.servings}`;
  const ingList = document.getElementById("modalIngredients");
  ingList.innerHTML = "";
  r.ingredients.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ingList.appendChild(li);
  });
  document.getElementById("modalSteps").textContent = r.steps;
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }

[searchEl, filterEl, sortEl].forEach(el => el.addEventListener("input", render));
render();

