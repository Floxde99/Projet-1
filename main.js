const prompt = require("prompt-sync")()
console.log("L'Ombre du Passé");
console.log("Contexte : Une Affaire Non Résolue");
console.log("New York, 2028. La ville ne dort jamais, mais certaines ombres sont plus inquiétantes que d’autres. Le Spectre, un tueur en série insaisissable, a terrorisé la ville il y a dix ans avant de disparaître dans un final sanglant. L’enquête avait pris fin brutalement lorsqu’une intervention du NYPD s’était soldée par l’incendie d’un entrepôt où il se cachait. Son corps n’a jamais été retrouvé, mais les preuves de son décès étaient suffisantes pour clore l’affaire.");
console.log("Pour Eliot Carter, détective chevronné, cette enquête a laissé des cicatrices profondes. C’était son premier grand dossier, celui qui lui a valu une réputation… mais aussi des cauchemars. Dix ans plus tard, il pensait en avoir fini. Jusqu’à aujourd’hui.")
console.log("Un nouveau meurtre vient de secouer la ville. Le mode opératoire est presque identique à celui du Spectre. Trop identique. Quelqu’un joue avec vous. Quelqu’un connaît cette affaire aussi bien que vous. Mais pourquoi maintenant ? Pourquoi laisser ce message, écrit en lettres de sang sur le mur de la scène de crime ? ")
console.log("Reprends l’enquête, Eliot.")
console.log(" La ville est en alerte. Le NYPD veut une conclusion rapide. Mais vous savez que la vérité est rarement aussi simple. Ce meurtre n’est pas qu’une simple copie. Quelqu’un veut que vous vous plongiez à nouveau dans cette affaire. Quelqu’un vous manipule.")
console.log("Votre enquête commence.");
console.log("🔹 ACTE I - L’Enquête Commence");
let resultats = []
const titre = [
    "ÉTAPE 1 : La Première Scène de Crime",
    "ÉTAPE 2 : Le Passé Refait Surface",
    "ÉTAPE 3 : La Poursuite",
    "ÉTAPE 4 : Un Indice Troublant",
    "ÉTAPE 5 : Un Flic Suspect",
    "ÉTAPE 6 : Un Rendez-Vous Mystérieux",
    "ÉTAPE 7 : L’ADN Parle",
    "ÉTAPE 8 : Nouveaux Doutes",
    "ÉTAPE 9 : Le Journaliste et la Vérité",
    "ÉTAPE 10 : Le Dossier Secret",
    "ACTE II - La Confrontation Finale - ÉTAPE 11 : Piège et Manipulation",
    "ÉTAPE 12A : La Confrontation avec Mason",
    "ÉTAPE 12B : L’Affrontement Final",
    "ÉTAPE 13A : La Vérité Révélée",
    "ÉTAPE 13B : La Dernière Poursuite"]
const txt = [
    "Une femme est retrouvée morte dans un hôtel du Bronx. Son corps porte une inscription en sang : 'Reprends l’enquête, Eliot.'",
    "Votre ancien partenaire Jack Reynolds vous contacte : il veut vous aider, mais semble cacher quelque chose.",
    "Vous poursuivez un suspect aperçu près de l’hôtel.",
    "Vous découvrez que la dernière victime n’aurait pas dû être ciblée par le Spectre.",
    "Le capitaine Mason, un policier lié à l’affaire d’il y a dix ans, semble en savoir plus qu’il ne le dit.",
    "Mason rencontre une personne encapuchonnée et lui remet un dossier.",
    "L’analyse ADN révèle un lien avec un ancien détenu disparu en 2018.",
    "L’enquête vous mène à des pistes de plus en plus confuses. Le Spectre semble avoir laissé de fausses traces.",
    "Vous découvrez que Mason pourrait être impliqué dans une vaste manipulation.",
    "Vous confrontez Mason à propos de ses liens avec les meurtres, mais il refuse de parler.",
    "Vous suivez discrètement Mason et découvrez qu’il rencontre des individus liés à des événements passés.",
    "L’ADN retrouvé sur la scène du crime est lié à un ancien détenu disparu, ce qui soulève de nouvelles questions sur la victime.",
    "La confrontation avec Mason révèle des incohérences, mais il refuse d’admettre toute culpabilité.",
    "Vous découvrez que Mason et Jack ont joué un rôle dans les événements, et vous devez décider de la suite.",
    "L’issue de l’enquête dépend des preuves que vous avez recueillies et des choix effectués tout au long du parcours."]
const prop1 = [
    "1- Analyser la scène en détail",
    "1- Travailler avec Jack",
    "1- Poursuivre le suspect à pied",
    "1- Explorer une nouvelle piste",
    "1- Confronter Mason directement",
    "1- Intervenir immédiatement lors du rendez-vous",
    "1- Enquêter sur l’ancien détenu",
    "1- Explorer la nouvelle piste",
    "1- Confronter Mason à propos de ses liens avec les meurtres",
    "1- Suivre Mason discrètement",
    "1- Analyser les preuves ADN",
    "1- Confronter Mason avec les preuves",
    "1- Suivre Mason jusqu’à sa cachette",
    "1- Découvrir la vérité sur Mason et Jack",
    "1- Prendre une décision finale sur l’enquête"]
const prop2 = [
    "2- Interroger les témoins",
    "2- Refuser l'aide de Jack",
    "2- Tirer pour arrêter le suspect",
    "2- Rester sur la piste du Spectre original",
    "2- Le suivre discrètement",
    "2- Les suivre discrètement",
    "2- Garder l’info pour plus tard",
    "2- Ignorer cette piste et continuer l’enquête classique",
    "2- Attendre d’avoir plus de preuves avant de confronter Mason",
    "2- Le confronter publiquement",
    "2- Ignorer cette analyse et avancer dans l’enquête",
    "2- Rassembler plus de preuves avant d’agir",
    "2- Laisser Mason partir pour le piéger plus tard",
    "2- Dissimuler certaines vérités pour protéger Jack",
    "2- Clôturer l’enquête en l’état, malgré les zones d’ombre"]
const res1 = [
    "Vous trouvez un indice troublant : le mode opératoire du Spectre a légèrement changé.",
    "Il vous donne accès à des archives confidentielles.",
    "Vous le perdez, mais trouvez une trace ADN.",
    "Vous commencez à douter que ce soit vraiment le Spectre.",
    "Il devient hostile et refuse de parler.",
    "Vous arrêtez l’inconnu, qui prétend être un journaliste.",
    "Vous trouvez un lien avec Mason.",
    "Une incohérence apparaît dans le mode opératoire du tueur.",
    "Mason nie tout en bloc, mais son comportement est suspect.",
    "Il rencontre quelqu’un dans une ruelle.",
    "L’ADN correspond à un suspect lié aux affaires de 2018.",
    "Mason est acculé par les preuves, il tente de se défendre.",
    "Vous découvrez un lieu clé où Mason pourrait se cacher.",
    "Jack finit par vous donner un nom : Capitaine Mason.",
    "Vous rassemblez les preuves nécessaires pour accuser Mason."]
const res2 = ["Un témoin affirme avoir vu une silhouette fuir l’hôtel.",
    "Il semble vexé… mais pourrait revenir plus tard.",
    "Vous le blessez, mais il meurt sans révéler ce qu’il sait.",
    "Vous ignorez l’incohérence.",
    "Il rencontre quelqu’un dans une ruelle.",
    "Vous découvrez qu’ils travaillent ensemble.",
    "Vous manquez une piste importante.",
    "Vous continuez l’enquête sans explorer cette nouvelle piste.",
    "Vous attendez d’avoir plus de preuves avant d’agir.",
    "Il devient méfiant et change son comportement.",
    "Vous passez à l’étape suivante sans approfondir cette piste.",
    "Vous rassemblez des preuves et piégez Mason dans ses mensonges.",
    "Mason disparaît temporairement, mais vous le suivez de loin.",
    "Vous choisissez de dissimuler certaines vérités pour protéger Jack.",
    "L’enquête est officiellement terminée, mais des doutes subsistent."]
for (let index = 0; index < 15; index++) {
    if (index != 2 && index != 6 && index != 7 && index != 11 && index != 12 && index != 13 && index != 14) {
        console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));

    } else if (index == 2) {
        if (resultats[0] == 2) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    } else if (index == 6) {
        if (resultats[0] == 1) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    } else if (index == 7) {
        if (resultats[3] == 1) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    } else if (index == 11) {
        if (resultats[8] == 1) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    }else if (index == 12) {
        if (resultats[8] == 2) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }

    } else if (index == 13) {
        if (resultats[11] == 1) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    } else {
        if (resultats[12] == 1) {
            console.log(Etape(titre[index], txt[index], prop1[index], prop2[index], res1[index], res2[index], resultats[index]));
        }
    }


}
if (resultats[8] == 2 && resultats[10]==1) {
    console.log("Mason était le second tueur, mais sans preuve suffisante, il disparaît.");
    console.log("Eliot est suspendu et l'affaire est classée sans suite.");

} else if (resultats[8] == 1 && resultats[12]==1) {
    console.log("Les preuves accumulées permettent d’inculper Mason.");
    console.log("Mais Eliot sent que tout n’est pas encore résolu…");

} else if (resultats[3] == 1 && resultats[11] == 1 ) {
    console.log("Une lettre de menace prouve que quelqu’un d’autre tire les ficelles.");
    console.log("L’affaire n’est pas finie…");

} else if (resultats[9]==2 && resultats[14]==2){
    console.log("Jack était complice de Mason depuis le début");
    console.log("Il fait accuser Eliot pour protéger son secret.");

}else if (resultats[12]==2) {
    console.log("Eliot n’a pas assez d’éléments pour prouver quoi que ce soit");
    console.log("Le NYPD clôt l’enquête, et le tueur disparaît dans la nature.");
    
} else {
    console.log("Vous êtes seul dans avec lui se sentant coincé, il sort son fusil");
    console.log("et vous tue.");
    console.log("Votre corps n'as j'amais été retrouvé, tout le monde se demande où vous êtes car vous n'aviez prevenu personne.");
    console.log("Votre famille est détruite votre fils promet à sa meère qu'un jour il vous retrouvera..");
    console.log("A suivre.");
    
    
    
    
    
}
console.log("The End");
console.log("Thanks for playing");
console.log("If you enjoy the game and you want more on the this . Tell us and we will working onnn... ");
console.log("🎭 L'Ombre du Passé II");
console.log("© Flo & Chat-GPT4");




function Etape(titre, txt, prop1, prop2, res1, res2) {
    let title = ""
    let text = ""
    let proposition1 = ""
    let proposition2 = ""
    let result = ""
    title = titre
    console.log(title);
    text = txt
    console.log(text);
    proposition1 = prop1
    console.log(proposition1);
    proposition2 = prop2
    console.log(proposition2);

    let choice = Number(prompt(" Quel choix fais tu chef ? : "))
    while (choice != 1 && choice != 2) {
        choice = Number(prompt("Chef ce n'est pas bon il faut faut choisir l ou 2 : "))
    }
    resultats.push(choice)
    if (choice == 1) {
        result = res1
        return result


    } else {
        result = res2
        return result
    }
}
