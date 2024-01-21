let Waynehtml = document.getElementById("Wayne")

let carollhtml = document.getElementById("caroll")

let Gordonhtml = document.getElementById("Gordon")

let Lopezhtml = document.getElementById("Lopez")

let Estradahtml = document.getElementById("Estrada")

let Ramoshtml = document.getElementById("Ramos")

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
let info = [
    {
        nome : "Wayne Barnett",
        ruolo :"Founder & CEO", 
        foto :"./assets/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome :"Angela Caroll",
        ruolo :"Chief Editor", 
        foto :"./assets/angela-caroll-chief-editor.jpg"
    },

    {
        nome :" Walter Gordon",
        ruolo :"Office Manager", 
        foto :"./assets/walter-gordon-office-manager.jpg"
    },

    {
        nome :"Angela Lopez",
        ruolo :"Social Media Manager", 
        foto :"./assets/angela-lopez-social-media-manager.jpg"    	 
    },

    {
        nome :"Scott Estrada",
        ruolo :"Developer", 
        foto :"./assets/scott-estrada-developer.jpg" 	 	 
    },

    {
        nome :"Barbara Ramos	",
        ruolo :"Graphic Designer", 
        foto :"./assets/barbara-ramos-graphic-designer.jpg" 	 	
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(info)


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
Waynehtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[0].foto}" class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[0].nome}</h5">
       <p class="card-text">${info[0].ruolo}</p>
    </div>
</div>`;

carollhtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[1].foto} "class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[1].nome}</h5">
       <p class="card-text">${info[1].ruolo}</p>
    </div>
</div>`;

Gordonhtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[2].foto}" class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[2].nome}"</h5">
       <p class="card-text">${info[2].ruolo}</p>
    </div>
</div>`;

Lopezhtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[3].foto}" class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[3].nome}</h5">
       <p class="card-text">${info[3].ruolo}</p>
    </div>
</div>`;

Estradahtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[4].foto}" class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[4].nome}</h5">
       <p class="card-text">${info[4].ruolo}</p>
    </div>
</div>`;

Ramoshtml.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src="${info[5].foto}"class="card-img-top" alt="..."">
    <div class="card-body">
        <h5 class="card-title">${info[5].nome}</h5">
       <p class="card-text">${info[5].ruolo}</p>
    </div>
</div>`