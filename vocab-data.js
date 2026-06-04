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
            { fr: 'la feuille', de: 'das Blatt', hint: 'nom neutre' }
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
            { fr: 'la glace', de: 'das Eis', hint: 'nom neutre' }
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
            { fr: "l'intelligence artificielle", de: 'die künstliche Intelligenz', hint: 'nom féminin' }
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
            {
                id: 'nourriture',
                name: 'Nourriture & Fruits / Légumes',
                emoji: '🍎',
                words: [
                    // --- Vos mots d'origine ---
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

                    // --- Légumes importants ajoutés ---
                    { fr: 'la pomme de terre', de: 'die Kartoffel', hint: 'nom féminin - Base de la cuisine allemande' },
                    { fr: 'la tomate', de: 'die Tomate', hint: 'nom féminin' },
                    { fr: 'la salade', de: 'der Salat', hint: 'nom masculin' },
                    { fr: 'la carotte', de: 'die Karotte', hint: 'nom féminin - Se dit aussi Möhre' },
                    { fr: 'l\'oignon', de: 'die Zwiebel', hint: 'nom féminin' },
                    { fr: 'l\'ail', de: 'der Knoblauch', hint: 'nom masculin' },
                    { fr: 'le concombre', de: 'die Gurke', hint: 'nom féminin' },
                    { fr: 'le champignon', de: 'der Pilz', hint: 'nom masculin' },
                    { fr: 'le chou', de: 'der Kohl', hint: 'nom masculin - Utilisé pour Sauerkraut' },
                    { fr: 'l\'avocat', de: 'die Avocado', hint: 'nom féminin' },
                    { fr: 'le poivron', de: 'die Paprika', hint: 'nom féminin' },
                    { fr: 'les épinards', de: 'der Spinat', hint: 'nom masculin (singulier en allemand)' },
                    { fr: 'le maïs', de: 'der Mais', hint: 'nom masculin' },
                    { fr: 'le petit pois', de: 'die Erbse', hint: 'nom féminin' },

                    // --- Fruits importants ajoutés ---
                    { fr: 'la pomme', de: 'der Apfel', hint: 'nom masculin - Devient Äpfel au pluriel' },
                    { fr: 'la banane', de: 'die Banane', hint: 'nom féminin' },
                    { fr: 'la fraise', de: 'die Erdbeere', hint: 'nom féminin - Littéralement la baie de terre' },
                    { fr: 'la framboise', de: 'die Himbeere', hint: 'nom féminin' },
                    { fr: 'la cerise', de: 'die Kirsche', hint: 'nom féminin' },
                    { fr: 'l\'orange', de: 'die Orange', hint: 'nom féminin' },
                    { fr: 'le citron', de: 'die Zitrone', hint: 'nom féminin' },
                    { fr: 'la poire', de: 'die Birne', hint: 'nom féminin' },
                    { fr: 'la pêche', de: 'der Pfirsich', hint: 'nom masculin' },
                    { fr: 'le raisin', de: 'die Weintraube', hint: 'nom féminin - Souvent utilisé au pluriel' },
                    // { fr: 'la prune', de: 'die Pflaume', hint: 'nom féminin' },
                    { fr: 'l\'ananas', de: 'die Ananas', hint: 'nom féminin' },
                    { fr: 'le melon', de: 'die Melone', hint: 'nom féminin' },
                    { fr: 'la pastèque', de: 'die Wassermelone', hint: 'nom féminin - Littéralement le melon d\'eau' }
                ]
            }

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

                    // --- Les Auxiliaires & Fondamentaux ---
                    { fr: 'être', de: 'sein', hint: 'L\'auxiliaire le plus important (irrégulier)' },
                    { fr: 'avoir', de: 'haben', hint: 'L\'auxiliaire de possession (proche de have)' },
                    { fr: 'devenir', de: 'werden', hint: 'Sert aussi à construire le futur et le passif' },
                    { fr: 'faire / faire de l\'activité', de: 'machen', hint: 'Verbe à tout faire (proche de make)' },
                    { fr: 'faire / exécuter', de: 'tun', hint: 'Courte action, seulement 3 lettres' },

                    // --- Verbes de modalité & Compréhension ---
                    { fr: 'aimer / apprécier (un objet/une idée)', de: 'mögen', hint: 'Verbe de modalité (ich mag, du magst). Donne aussi "aimeriez" (möchte)' },
                    { fr: 'comprendre / saisir / piger', de: 'begreifen', hint: 'Verbe fort (begriff, begriffen). Plus profond et intellectuel que verstehen' },
                    { fr: 'pouvoir / être capable', de: 'können', hint: 'Verbe de modalité (ich kann, du kannst)' },
                    { fr: 'devoir / être obligé', de: 'müssen', hint: 'Verbe de modalité (ich muss, du musst)' },

                    // --- Réception (bekommen / erhalten / kriegen), Explication & Nettoyage ---
                    { fr: 'recevoir / obtenir (courant)', de: 'bekommen', hint: 'Le verbe le plus standard pour "recevoir" (ne pas confondre avec devenir !)' },
                    { fr: 'recevoir / obtenir (standard/formel)', de: 'erhalten', hint: 'Verbe fort (er erhält). Plus formel que bekommen' },
                    { fr: 'recevoir / choper (familier)', de: 'kriegen', hint: 'Verbe régulier très utilisé à l\'oral' },
                    { fr: 'expliquer', de: 'erklären', hint: 'Verbe à particule inséparable (l\'accent est sur klären)' },
                    { fr: 'apprécier / aimer', de: 'schätzen', hint: 'Signifie estimer, apprécier la valeur de qqch' },
                    { fr: 'laver', de: 'waschen', hint: 'Verbe fort (ä au présent avec du/er/sie/es) - proche de wash' },
                    { fr: 'signifier / vouloir dire', de: 'bedeuten', hint: 'Donne le nom "die Bedeutung" (la signification)' },

                    // --- Mouvement & Déplacement ---
                    { fr: 'aller (à pied) / marcher', de: 'gehen', hint: 'Déplacement général à pied (proche de go)' },
                    { fr: 'courir / marcher', de: 'laufen', hint: 'Mouvement rapide à pied (sens de courir ou marcher selon le contexte)' },
                    { fr: 'aller (en véhicule) / conduire', de: 'fahren', hint: 'Obligatoire dès qu\'on utilise un vélo, train, voiture' },
                    { fr: 'venir', de: 'kommen', hint: 'Proche de l\'anglais "come"' },
                    { fr: 'voler (dans les airs)', de: 'fliegen', hint: 'Action de l\'oiseau ou de l\'avion' },
                    { fr: 'sauter', de: 'springen', hint: 'Proche de l\'anglais "spring"' },
                    { fr: 'rester', de: 'bleiben', hint: 'Indique l\'immobilité dans un lieu' },

                    // --- Communication & Esprit ---
                    { fr: 'parler', de: 'sprechen', hint: 'Verbe fort (i au présent avec du/er/sie/es)' },
                    { fr: 'dire', de: 'sagen', hint: 'Proche de l\'anglais "say"' },
                    { fr: 'penser', de: 'denken', hint: 'Proche de l\'anglais "think"' },
                    { fr: 'croire', de: 'glauben', hint: 'Signifie penser ou avoir la foi (proche de believe)' },
                    { fr: 'savoir', de: 'wissen', hint: 'Connaître un fait (ich weiß, du weißt...)' },
                    { fr: 'comprendre', de: 'verstehen', hint: 'Proche de l\'anglais "understand"' },
                    { fr: 'apprendre / étudier', de: 'lernen', hint: 'Proche de l\'anglais "learn"' },
                    { fr: 'demander', de: 'fragen', hint: 'Poser une question' },
                    { fr: 'répondre', de: 'antworten', hint: 'Donner la réponse (donne le nom die Antwort)' },

                    // --- Vie quotidienne & Besoins ---
                    { fr: 'manger', de: 'essen', hint: 'Verbe fort (i au présent avec du/er/sie/es)' },
                    { fr: 'boire', de: 'trinken', hint: 'Proche de l\'anglais "drink"' },
                    { fr: 'dormir', de: 'schlafen', hint: 'Verbe fort (ä au présent avec du/er/sie/es) - proche de sleep' },
                    { fr: 'acheter', de: 'kaufen', hint: 'Donne aussi le mot "supermarché" (Supermarkt)' },
                    { fr: 'payer', de: 'zahlen', hint: 'À demander au restaurant pour l\'addition' },
                    { fr: 'travailler', de: 'arbeiten', hint: 'Fait référence au travail (die Arbeit)' },
                    { fr: 'habiter', de: 'wohnen', hint: 'Résider dans un appartement/maison' },
                    { fr: 'vivre', de: 'leben', hint: 'Être vivant (proche de live)' },

                    // --- Actions courantes ---
                    { fr: 'voir', de: 'sehen', hint: 'Verbe fort (ie au présent avec du/er/sie/es) - proche de see' },
                    { fr: 'entendre / écouter', de: 'hören', hint: 'Utiliser ses oreilles (proche de hear)' },
                    { fr: 'écrire', de: 'schreiben', hint: 'Utiliser un stylo ou un clavier' },
                    { fr: 'lire', de: 'lesen', hint: 'Verbe fort (ie au présent avec du/er/sie/es)' },
                    { fr: 'donner', de: 'geben', hint: 'Verbe fort (i au présent) - proche de give' },
                    { fr: 'prendre', de: 'nehmen', hint: 'Verbe fort très irrégulier (ich nehme, du nimmst)' },
                    { fr: 'apporter / amener', de: 'bringen', hint: 'Proche de l\'anglais "bring"' },
                    { fr: 'trouver', de: 'finden', hint: 'Orthographe identique à l\'anglais' },
                    { fr: 'chercher', de: 'suchen', hint: 'Essayer de trouver quelque chose' },
                    { fr: 'aimer', de: 'lieben', hint: 'Proche de l\'anglais "love"' },
                    { fr: 'jouer', de: 'spielen', hint: 'Pour les jeux, le sport ou la musique' }

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
            { fr: 'le requin', de: 'der Hai', hint: 'Masculin - Grand prédateur des océans'}
        ]
    },

    {
        id: 'nouveaux',
        name: 'Nouveaux',
        emoji: '​​🌞​',
        words: [
            { fr: 'le mot', de: 'das Wort', hint: 'nom neutre' },
        ]
    }

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