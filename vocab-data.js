// ═══════════════════════════════════════════════════════════════
//  WÖRTER — Fichier de données vocabulaire
//  Modifie ce fichier pour ajouter des thèmes ou des mots.
// ═══════════════════════════════════════════════════════════════
//
//  STRUCTURE D'UN THÈME :
//  {
//    id:    'identifiant_unique',   ← sans espace, en minuscules
//    name:  'Nom affiché',
//    emoji: '🌿',
//    words: [
//      { fr: 'le mot français', de: 'das deutsche Wort', hint: 'nom neutre' },
//    ]
//  }
//
//  STRUCTURE D'UN MOT :
//  {
//    fr:   'le mot en français (avec article)',
//    de:   'das Wort auf Deutsch (mit Artikel)',  ← inclure der/die/das
//    hint: 'indication grammaticale (ex: nom masculin, verbe, pluriel…)'
//  }
//
//  ℹ️  Le quiz "saisie libre" compare la réponse au champ `de`.
//      L'élève doit écrire par ex : "der Baum", "die Blume", "das Meer"
//      La comparaison ignore les majuscules/minuscules et les espaces.
// ═══════════════════════════════════════════════════════════════

const THEMES = [

    // ─────────────────────────────────────────
    //  THÈME 1 — La Nature
    // ─────────────────────────────────────────
    {
        id: 'nature',
        name: 'La Nature',
        emoji: '🌿',
        words: [
            { fr: "l'arbre", de: 'der Baum', hint: 'nom masculin' },
            { fr: 'la forêt', de: 'der Wald', hint: 'nom masculin' },
            { fr: 'la fleur', de: 'die Blume', hint: 'nom féminin' },
            { fr: 'la montagne', de: 'der Berg', hint: 'nom masculin' },
            { fr: 'la rivière', de: 'der Fluss', hint: 'nom masculin' },
            { fr: 'la mer', de: 'das Meer', hint: 'nom neutre' },
            { fr: 'le lac', de: 'der See', hint: 'nom masculin' },
            { fr: "l'herbe", de: 'das Gras', hint: 'nom neutre' },
            { fr: 'la feuille', de: 'das Blatt', hint: 'nom neutre' },
            { fr: 'la pierre', de: 'der Stein', hint: 'nom masculin' },
            { fr: "l'oiseau", de: 'der Vogel', hint: 'nom masculin' },
            { fr: 'le papillon', de: 'der Schmetterling', hint: 'nom masculin' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 2 — La Météo
    // ─────────────────────────────────────────
    {
        id: 'meteo',
        name: 'La Météo',
        emoji: '🌤️',
        words: [
            { fr: 'le soleil', de: 'die Sonne', hint: 'nom féminin' },
            { fr: 'la pluie', de: 'der Regen', hint: 'nom masculin' },
            { fr: 'la neige', de: 'der Schnee', hint: 'nom masculin' },
            { fr: 'le vent', de: 'der Wind', hint: 'nom masculin' },
            { fr: 'le nuage', de: 'die Wolke', hint: 'nom féminin' },
            { fr: "l'orage", de: 'das Gewitter', hint: 'nom neutre' },
            { fr: 'la tempête', de: 'der Sturm', hint: 'nom masculin' },
            { fr: 'le brouillard', de: 'der Nebel', hint: 'nom masculin' },
            { fr: 'la chaleur', de: 'die Hitze', hint: 'nom féminin' },
            { fr: 'le froid', de: 'die Kälte', hint: 'nom féminin' },
            { fr: "l'arc-en-ciel", de: 'der Regenbogen', hint: 'nom masculin' },
            { fr: 'la glace', de: 'das Eis', hint: 'nom neutre' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 3 — Technologie
    // ─────────────────────────────────────────
    {
        id: 'technologie',
        name: 'Technologie',
        emoji: '💻',
        words: [
            { fr: "l'ordinateur", de: 'der Computer', hint: 'nom masculin' },
            { fr: 'le téléphone', de: 'das Telefon', hint: 'nom neutre' },
            { fr: "l'écran", de: 'der Bildschirm', hint: 'nom masculin' },
            { fr: 'le clavier', de: 'die Tastatur', hint: 'nom féminin' },
            { fr: 'la souris', de: 'die Maus', hint: 'nom féminin' },
            { fr: 'internet', de: 'das Internet', hint: 'nom neutre' },
            { fr: 'le logiciel', de: 'die Software', hint: 'nom féminin' },
            { fr: "l'application", de: 'die App', hint: 'nom féminin' },
            { fr: 'la batterie', de: 'der Akku', hint: 'nom masculin' },
            { fr: 'le réseau', de: 'das Netzwerk', hint: 'nom neutre' },
            { fr: 'le câble', de: 'das Kabel', hint: 'nom neutre' },
            { fr: "l'intelligence artificielle", de: 'die künstliche Intelligenz', hint: 'nom féminin' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 4 — La Nourriture
    // ─────────────────────────────────────────
    {
        id: 'nourriture',
        name: 'La Nourriture',
        emoji: '🍽️',
        words: [
            { fr: 'le pain', de: 'das Brot', hint: 'nom neutre' },
            { fr: 'la viande', de: 'das Fleisch', hint: 'nom neutre' },
            { fr: 'le poisson', de: 'der Fisch', hint: 'nom masculin' },
            { fr: 'le légume', de: 'das Gemüse', hint: 'nom neutre' },
            { fr: 'le fruit', de: 'die Frucht', hint: 'nom féminin' },
            { fr: 'le fromage', de: 'der Käse', hint: 'nom masculin' },
            { fr: "l'œuf", de: 'das Ei', hint: 'nom neutre' },
            { fr: 'le lait', de: 'die Milch', hint: 'nom féminin' },
            { fr: "l'eau", de: 'das Wasser', hint: 'nom neutre' },
            { fr: 'le café', de: 'der Kaffee', hint: 'nom masculin' },
            { fr: 'le sucre', de: 'der Zucker', hint: 'nom masculin' },
            { fr: 'le sel', de: 'das Salz', hint: 'nom neutre' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 5 — La Ville
    // ─────────────────────────────────────────
    {
        id: 'ville',
        name: 'La Ville',
        emoji: '🏙️',
        words: [
            { fr: 'la rue', de: 'die Straße', hint: 'nom féminin' },
            { fr: 'le bâtiment', de: 'das Gebäude', hint: 'nom neutre' },
            { fr: 'le magasin', de: 'das Geschäft', hint: 'nom neutre' },
            { fr: "l'hôpital", de: 'das Krankenhaus', hint: 'nom neutre' },
            { fr: "l'école", de: 'die Schule', hint: 'nom féminin' },
            { fr: 'la gare', de: 'der Bahnhof', hint: 'nom masculin' },
            { fr: 'le pont', de: 'die Brücke', hint: 'nom féminin' },
            { fr: 'le parc', de: 'der Park', hint: 'nom masculin' },
            { fr: 'le musée', de: 'das Museum', hint: 'nom neutre' },
            { fr: 'la bibliothèque', de: 'die Bibliothek', hint: 'nom féminin' },
            { fr: 'le restaurant', de: 'das Restaurant', hint: 'nom neutre' },
            { fr: "l'hôtel", de: 'das Hotel', hint: 'nom neutre' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 6 — Le Corps
    // ─────────────────────────────────────────
    {
        id: 'corps',
        name: 'Le Corps',
        emoji: '🧍',
        words: [
            { fr: 'la tête', de: 'der Kopf', hint: 'nom masculin' },
            { fr: 'les yeux', de: 'die Augen', hint: 'pluriel' },
            { fr: 'la bouche', de: 'der Mund', hint: 'nom masculin' },
            { fr: 'les oreilles', de: 'die Ohren', hint: 'pluriel' },
            { fr: 'le nez', de: 'die Nase', hint: 'nom féminin' },
            { fr: 'la main', de: 'die Hand', hint: 'nom féminin' },
            { fr: 'le pied', de: 'der Fuß', hint: 'nom masculin' },
            { fr: 'le cœur', de: 'das Herz', hint: 'nom neutre' },
            { fr: 'le dos', de: 'der Rücken', hint: 'nom masculin' },
            { fr: 'le genou', de: 'das Knie', hint: 'nom neutre' },
            { fr: 'les cheveux', de: 'die Haare', hint: 'pluriel' },
            { fr: 'le bras', de: 'der Arm', hint: 'nom masculin' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 7 — Voyages
    // ─────────────────────────────────────────
    {
        id: 'voyages',
        name: 'Voyages',
        emoji: '✈️',
        words: [
            { fr: "l'avion", de: 'das Flugzeug', hint: 'nom neutre' },
            { fr: 'le train', de: 'der Zug', hint: 'nom masculin' },
            { fr: 'la voiture', de: 'das Auto', hint: 'nom neutre' },
            { fr: 'le bateau', de: 'das Schiff', hint: 'nom neutre' },
            { fr: 'le passeport', de: 'der Reisepass', hint: 'nom masculin' },
            { fr: 'la valise', de: 'der Koffer', hint: 'nom masculin' },
            { fr: "l'aéroport", de: 'der Flughafen', hint: 'nom masculin' },
            { fr: 'le billet', de: 'die Fahrkarte', hint: 'nom féminin' },
            { fr: 'la carte', de: 'die Karte', hint: 'nom féminin' },
            { fr: 'le voyage', de: 'die Reise', hint: 'nom féminin' },
            { fr: "l'hôtel", de: 'das Hotel', hint: 'nom neutre' },
            { fr: 'la frontière', de: 'die Grenze', hint: 'nom féminin' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 8 — Émotions
    // ─────────────────────────────────────────
    {
        id: 'emotions',
        name: 'Émotions',
        emoji: '😊',
        words: [
            { fr: 'la joie', de: 'die Freude', hint: 'nom féminin' },
            { fr: 'la tristesse', de: 'die Traurigkeit', hint: 'nom féminin' },
            { fr: 'la colère', de: 'die Wut', hint: 'nom féminin' },
            { fr: 'la peur', de: 'die Angst', hint: 'nom féminin' },
            { fr: 'la surprise', de: 'die Überraschung', hint: 'nom féminin' },
            { fr: "l'amour", de: 'die Liebe', hint: 'nom féminin' },
            { fr: 'la honte', de: 'die Scham', hint: 'nom féminin' },
            { fr: 'la fierté', de: 'der Stolz', hint: 'nom masculin' },
            { fr: "l'espoir", de: 'die Hoffnung', hint: 'nom féminin' },
            { fr: 'la jalousie', de: 'die Eifersucht', hint: 'nom féminin' },
            { fr: 'la confiance', de: 'das Vertrauen', hint: 'nom neutre' },
            { fr: 'la curiosité', de: 'die Neugier', hint: 'nom féminin' },
        ]
    },

    {
        id: 'verbes',
        name: 'Verbes',
        emoji: '🧑‍🎓​',
        words: [
            { fr: 'Laufen', de: 'Marcher', hint: 'verbe' },
        ]
    },

    {
        id: 'animaux',
        name: 'Animaux',
        emoji: '​🐻​​',
        words: [
        { fr: 'le chien', de: 'der Hund', hint: 'Masculin - Proche de "hound" en anglais' },
        { fr: 'le chat', de: 'die Katze', hint: 'Féminin - Proche de "cat"' },
        { fr: 'le cheval', de: 'das Pferd', hint: 'Neutre - Finit par un -d' },
        { fr: 'la vache', de: 'die Kuh', hint: 'Féminin - Proche de "cow"' },
        { fr: 'le cochon', de: 'das Schwein', hint: 'Neutre - Également utilisé pour dire "avoir de la chance"' },
        { fr: 'le mouton', de: 'das Schaf', hint: 'Neutre - Proche de "sheep"' },
        { fr: 'la chèvre', de: 'die Ziege', hint: 'Féminin - Commence par un Z' },
        { fr: 'l\'âne', de: 'der Esel', hint: 'Masculin - Animal têtu' },
        { fr: 'le lapin', de: 'das Kaninchen', hint: 'Neutre - Diminutif en -chen' },
        { fr: 'la poule', de: 'die Henne', hint: 'Féminin - Proche de "hen"' },
        { fr: 'le coq', de: 'der Hahn', hint: 'Masculin - Chante le matin' },
        { fr: 'le canard', de: 'die Ente', hint: 'Féminin - Donne son nom au journal "Canard Enchaîné"' },
        { fr: 'la souris', de: 'die Maus', hint: 'Féminin - Identique à l\'anglais à une lettre près' },

        // --- Animaux de la forêt & sauvages locaux ---
        // { fr: 'le renard', de: 'der Fuchs', hint: 'Masculin - Proche de "fox"' },
        { fr: 'le loup', de: 'der Wolf', hint: 'Masculin - Orthographe identique à l\'anglais' },
        { fr: 'l\'ours', de: 'der Bär', hint: 'Masculin - Symbole de la ville de Berlin' },
        // { fr: 'le cerf', de: 'der Hirsch', hint: 'Masculin - Roi de la forêt' },
        // { fr: 'l\'écureuil', de: 'das Eichhörnchen', hint: 'Neutre - Mot long très difficile à prononcer !' },
        // { fr: 'le hérisson', de: 'der Igel', hint: 'Masculin - Petit animal à piquants' },
        // { fr: 'le hibou / la chouette', de: 'die Eule', hint: 'Féminin - Proche de "owl"' },
        { fr: 'la grenouille', de: 'der Frosch', hint: 'Masculin - Proche de "frog"' },
        { fr: 'le crapaud', de: 'die Kröte', hint: 'Féminin - Souvent confondu avec la grenouille' },
        // { fr: 'l\'escargot', de: 'die Schnecke', hint: 'Féminin - Avance très lentement' },

        // --- Oiseaux, insectes & petites bêtes ---
        { fr: 'l\'oiseau', de: 'der Vogel', hint: 'Masculin - Donne le verbe "fliegen" (voler)' },
        { fr: 'l\'aigle', de: 'der Adler', hint: 'Masculin - Symbole sur les pièces d\'euro allemandes' },
        { fr: 'l\'abeille', de: 'die Biene', hint: 'Féminin - Fait du miel' },
        { fr: 'le papillon', de: 'der Schmetterling', hint: 'Masculin - Se termine par -ling' },
        { fr: 'la mouche', de: 'die Fliege', hint: 'Féminin - Lié au verbe voler' },
        // { fr: 'l\'araignée', de: 'die Spinne', hint: 'Féminin - Lié au verbe tisser/filer' },
        { fr: 'le poisson', de: 'der Fisch', hint: 'Masculin - Proche de "fish"' },

        // --- Animaux exotiques & du zoo ---
        { fr: 'le lion', de: 'der Löwe', hint: 'Masculin - Le roi de la savane' },
        // { fr: 'le tigre', de: 'der Tiger', hint: 'Masculin - Même orthographe qu\'en anglais' },
        { fr: 'l\'éléphant', de: 'der Elefant', hint: 'Masculin - S\'écrit avec un f au lieu de ph' },
        { fr: 'la girafe', de: 'die Giraffe', hint: 'Féminin - Prend deux -f-' },
        { fr: 'le singe', de: 'der Affe', hint: 'Masculin - Animal très agile' },
        { fr: 'le serpent', de: 'die Schlange', hint: 'Féminin - Signifie aussi "la file d\'attente"' },
        { fr: 'la tortue', de: 'die Schildkröte', hint: 'Féminin - Littéralement le "crapaud à bouclier"' },
        { fr: 'le crocodile', de: 'das Krokodil', hint: 'Neutre - Animal du Nil' },
        // { fr: 'le pingouin', de: 'der Pinguin', hint: 'Masculin - Vit sur la glace' },
        // { fr: 'le dauphin', de: 'der Delphin', hint: 'Masculin - Mammifère marin très intelligent' },
        // { fr: 'la baleine', de: 'der Wal', hint: 'Masculin - Proche de "whale"' },
        { fr: 'le requin', de: 'der Hai', hint: 'Masculin - Grand prédateur des océans' /}
        ]
    },

    // ─────────────────────────────────────────
    //  ➕ AJOUTE UN NOUVEAU THÈME ICI
    //  Copie-colle ce bloc et remplis-le :
    //
    //  {
    //    id: 'mon_theme',
    //    name: 'Mon Thème',
    //    emoji: '🎸',
    //    words: [
    //      { fr: 'le mot',  de: 'das Wort',  hint: 'nom neutre' },
    //    ]
    //  },
    // ─────────────────────────────────────────

];