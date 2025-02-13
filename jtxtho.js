const prompt = require("prompt-sync")()
let choice = ""
console.log("Vous etes devant une foret, deux chemin s'offre a vous : ");
choice = prompt("gauche (g), droite (d)")

if (choice == "g") {
    console.log("vous arrivez devant un chateau, ");
    choice = prompt('entrer, (e) , partir plus loin (l)')
    if (choice) {
        
    }
    
}else {
    console.log("vous etes dans la foret vous voyez un grand cerf qui s'appelle Sebastien");
    choice =prompt('attaquer sebastien (a), laisse (l)')
    
}


