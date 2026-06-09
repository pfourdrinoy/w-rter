// ═══════════════════════════════════════════════════════════════
//  WÖRTER — Vocabulary data file
//  Modify this file to add themes or words.
// ═══════════════════════════════════════════════════════════════
//
//  THEME STRUCTURE:
//  {
//    id:    'unique_identifier',   ← lowercase, no spaces
//    name:  'Displayed Name',
//    emoji: '🌿',
//    words: [
//      { fr: 'French word', de: 'German word', pl: 'plural form', hint: 'neuter noun' },
//    ]
//  }
//
//  WORD STRUCTURE:
//  {
//    fr:   'the word in French (with article)',
//    de:   'the word in German (with article)',   ← include der/die/das
//    pl:   'the plural form',                     ← plural with "die" (optional, for nouns)
//    hint: 'grammatical hint (e.g., masculine noun, verb, plural...)'
//  }
//
//  ℹ️  The "free text input" quiz compares the answer to the `de` field.
//      The student must write, for example: "der Baum", "die Blume", "das Meer"
//      The comparison ignores capitalization and spaces.
//  ℹ️  The "plurals" quiz uses the `pl` field.
//      Only words with a filled-in `pl` field will appear in this mode.
// ═══════════════════════════════════════════════════════════════

const THEMES_DE = [

    {
        id: 'nature',
        name: 'La Nature',
        emoji: '🌿',
        words: [
            { fr: "l'arbre", de: 'der Baum', pl: 'die Bäume', hint: 'nom masculin' },
            { fr: 'la forêt', de: 'der Wald', pl: 'die Wälder', hint: 'nom masculin' },
            { fr: 'la fleur', de: 'die Blume', pl: 'die Blumen', hint: 'nom féminin' },
            { fr: 'la montagne', de: 'der Berg', pl: 'die Berge', hint: 'nom masculin' },
            { fr: 'la rivière', de: 'der Fluss', pl: 'die Flüsse', hint: 'nom masculin' },
            { fr: 'la mer', de: 'das Meer', pl: 'die Meere', hint: 'nom neutre' },
            { fr: 'le lac', de: 'der See', pl: 'die Seen', hint: 'nom masculin' },
            { fr: "l'herbe", de: 'das Gras', pl: 'die Gräser', hint: 'nom neutre' },
            { fr: 'la feuille', de: 'das Blatt', pl: 'die Blätter', hint: 'nom neutre' }
        ]
    },

    {
        id: 'meteo',
        name: 'La Météo',
        emoji: '🌤️',
        words: [
            { fr: 'le soleil', de: 'die Sonne', pl: 'die Sonnen', hint: 'nom féminin' },
            { fr: 'la pluie', de: 'der Regen', hint: 'nom masculin' },
            { fr: 'la neige', de: 'der Schnee', hint: 'nom masculin' },
            { fr: 'le vent', de: 'der Wind', pl: 'die Winde', hint: 'nom masculin' },
            { fr: 'le nuage', de: 'die Wolke', pl: 'die Wolken', hint: 'nom féminin' },
            { fr: "l'orage", de: 'das Gewitter', pl: 'die Gewitter', hint: 'nom neutre' },
            { fr: 'la tempête', de: 'der Sturm', pl: 'die Stürme', hint: 'nom masculin' },
            { fr: 'le brouillard', de: 'der Nebel', pl: 'die Nebel', hint: 'nom masculin' },
            { fr: 'la chaleur', de: 'die Hitze', hint: 'nom féminin' },
            { fr: 'le froid', de: 'die Kälte', hint: 'nom féminin' },
            { fr: "l'arc-en-ciel", de: 'der Regenbogen', pl: 'die Regenbögen', hint: 'nom masculin' },
            { fr: 'la glace', de: 'das Eis', hint: 'nom neutre' }
        ]
    },

    {
        id: 'technologie',
        name: 'Technologie',
        emoji: '💻',
        words: [
            { fr: "l'ordinateur", de: 'der Computer', pl: 'die Computer', hint: 'nom masculin' },
            { fr: 'le téléphone', de: 'das Telefon', pl: 'die Telefone', hint: 'nom neutre' },
            { fr: "l'écran", de: 'der Bildschirm', pl: 'die Bildschirme', hint: 'nom masculin' },
            { fr: 'le clavier', de: 'die Tastatur', pl: 'die Tastaturen', hint: 'nom féminin' },
            { fr: 'la souris', de: 'die Maus', pl: 'die Mäuse', hint: 'nom féminin' },
            { fr: 'internet', de: 'das Internet', hint: 'nom neutre' },
            { fr: 'le logiciel', de: 'die Software', pl: 'die Softwares', hint: 'nom féminin' },
            { fr: "l'application", de: 'die App', pl: 'die Apps', hint: 'nom féminin' },
            { fr: 'la batterie', de: 'der Akku', pl: 'die Akkus', hint: 'nom masculin' },
            { fr: 'le réseau', de: 'das Netzwerk', pl: 'die Netzwerke', hint: 'nom neutre' },
            { fr: 'le câble', de: 'das Kabel', pl: 'die Kabel', hint: 'nom neutre' },
            { fr: "l'intelligence artificielle", de: 'die künstliche Intelligenz', hint: 'nom féminin' }
        ]
    },

    {

        id: 'nourriture',
        name: 'Nourriture & Fruits / Légumes',
        emoji: '🍎',
        words: [
            { fr: 'le pain', de: 'das Brot', pl: 'die Brote', hint: 'nom neutre' },
            { fr: 'la viande', de: 'das Fleisch', hint: 'nom neutre' },
            { fr: 'le poisson', de: 'der Fisch', pl: 'die Fische', hint: 'nom masculin' },
            { fr: 'le légume', de: 'das Gemüse', hint: 'nom neutre' },
            { fr: 'le fruit', de: 'die Frucht', pl: 'die Früchte', hint: 'nom féminin' },
            { fr: 'le fromage', de: 'der Käse', pl: 'die Käse', hint: 'nom masculin' },
            { fr: "l'œuf", de: 'das Ei', pl: 'die Eier', hint: 'nom neutre' },
            { fr: 'le lait', de: 'die Milch', hint: 'nom féminin' },
            { fr: "l'eau", de: 'das Wasser', hint: 'nom neutre' },
            { fr: 'le café', de: 'der Kaffee', hint: 'nom masculin' },
            { fr: 'le sucre', de: 'der Zucker', hint: 'nom masculin' },
            { fr: 'le sel', de: 'das Salz', hint: 'nom neutre' },
            { fr: 'la pomme de terre', de: 'die Kartoffel', pl: 'die Kartoffeln', hint: 'nom féminin - Base de la cuisine allemande' },
            { fr: 'la tomate', de: 'die Tomate', pl: 'die Tomaten', hint: 'nom féminin' },
            { fr: 'la salade', de: 'der Salat', pl: 'die Salate', hint: 'nom masculin' },
            { fr: 'la carotte', de: 'die Karotte', pl: 'die Karotten', hint: 'nom féminin - Se dit aussi Möhre' },
            { fr: "l'oignon", de: 'die Zwiebel', pl: 'die Zwiebeln', hint: 'nom féminin' },
            { fr: "l'ail", de: 'der Knoblauch', hint: 'nom masculin' },
            { fr: 'le concombre', de: 'die Gurke', pl: 'die Gurken', hint: 'nom féminin' },
            { fr: 'le champignon', de: 'der Pilz', pl: 'die Pilze', hint: 'nom masculin' },
            { fr: 'le chou', de: 'der Kohl', pl: 'die Kohle', hint: 'nom masculin - Utilisé pour Sauerkraut' },
            { fr: "l'avocat", de: 'die Avocado', pl: 'die Avocados', hint: 'nom féminin' },
            { fr: 'le poivron', de: 'die Paprika', pl: 'die Paprikas', hint: 'nom féminin' },
            { fr: 'les épinards', de: 'der Spinat', hint: 'nom masculin (singulier en allemand)' },
            { fr: 'le maïs', de: 'der Mais', hint: 'nom masculin' },
            { fr: 'le petit pois', de: 'die Erbse', pl: 'die Erbsen', hint: 'nom féminin' },
            { fr: 'la pomme', de: 'der Apfel', pl: 'die Äpfel', hint: 'nom masculin - Devient Äpfel au pluriel' },
            { fr: 'la banane', de: 'die Banane', pl: 'die Bananen', hint: 'nom féminin' },
            { fr: 'la fraise', de: 'die Erdbeere', pl: 'die Erdbeeren', hint: 'nom féminin - Littéralement la baie de terre' },
            { fr: 'la framboise', de: 'die Himbeere', pl: 'die Himbeeren', hint: 'nom féminin' },
            { fr: 'la cerise', de: 'die Kirsche', pl: 'die Kirschen', hint: 'nom féminin' },
            { fr: "l'orange", de: 'die Orange', pl: 'die Orangen', hint: 'nom féminin' },
            { fr: 'le citron', de: 'die Zitrone', pl: 'die Zitronen', hint: 'nom féminin' },
            { fr: 'la poire', de: 'die Birne', pl: 'die Birnen', hint: 'nom féminin' },
            { fr: 'la pêche', de: 'der Pfirsich', pl: 'die Pfirsiche', hint: 'nom masculin' },
            { fr: 'le raisin', de: 'die Weintraube', pl: 'die Weintrauben', hint: 'nom féminin - Souvent utilisé au pluriel' },
            { fr: "l'ananas", de: 'die Ananas', pl: 'die Ananas', hint: 'nom féminin' },
            { fr: 'le melon', de: 'die Melone', pl: 'die Melonen', hint: 'nom féminin' },
            { fr: 'la pastèque', de: 'die Wassermelone', pl: 'die Wassermelonen', hint: "nom féminin - Littéralement le melon d'eau" }



        ]
    },

    {
        id: 'ville',
        name: 'La Ville',
        emoji: '🏙️',
        words: [
            { fr: 'la rue', de: 'die Straße', pl: 'die Straßen', hint: 'nom féminin' },
            { fr: 'le bâtiment', de: 'das Gebäude', pl: 'die Gebäude', hint: 'nom neutre' },
            { fr: 'le magasin', de: 'das Geschäft', pl: 'die Geschäfte', hint: 'nom neutre' },
            { fr: "l'hôpital", de: 'das Krankenhaus', pl: 'die Krankenhäuser', hint: 'nom neutre' },
            { fr: "l'école", de: 'die Schule', pl: 'die Schulen', hint: 'nom féminin' },
            { fr: 'la gare', de: 'der Bahnhof', pl: 'die Bahnhöfe', hint: 'nom masculin' },
            { fr: 'le pont', de: 'die Brücke', pl: 'die Brücken', hint: 'nom féminin' },
            { fr: 'le parc', de: 'der Park', pl: 'die Parks', hint: 'nom masculin' },
            { fr: 'le musée', de: 'das Museum', pl: 'die Museen', hint: 'nom neutre' },
            { fr: 'la bibliothèque', de: 'die Bibliothek', pl: 'die Bibliotheken', hint: 'nom féminin' },
            { fr: 'le restaurant', de: 'das Restaurant', pl: 'die Restaurants', hint: 'nom neutre' },
            { fr: "l'hôtel", de: 'das Hotel', pl: 'die Hotels', hint: 'nom neutre' },
        ]
    },

    {
        id: 'corps',
        name: 'Le Corps',
        emoji: '🧍',
        words: [
            { fr: 'la tête', de: 'der Kopf', pl: 'die Köpfe', hint: 'nom masculin' },
            { fr: 'les yeux', de: 'die Augen', hint: 'pluriel' },
            { fr: 'la bouche', de: 'der Mund', pl: 'die Münder', hint: 'nom masculin' },
            { fr: 'les oreilles', de: 'die Ohren', hint: 'pluriel' },
            { fr: 'le nez', de: 'die Nase', pl: 'die Nasen', hint: 'nom féminin' },
            { fr: 'la main', de: 'die Hand', pl: 'die Hände', hint: 'nom féminin' },
            { fr: 'le pied', de: 'der Fuß', pl: 'die Füße', hint: 'nom masculin' },
            { fr: 'le cœur', de: 'das Herz', pl: 'die Herzen', hint: 'nom neutre' },
            { fr: 'le dos', de: 'der Rücken', pl: 'die Rücken', hint: 'nom masculin' },
            { fr: 'le genou', de: 'das Knie', pl: 'die Knie', hint: 'nom neutre' },
            { fr: 'les cheveux', de: 'die Haare', hint: 'pluriel' },
            { fr: 'le bras', de: 'der Arm', pl: 'die Arme', hint: 'nom masculin' },
        ]
    },

    {
        id: 'voyages',
        name: 'Voyages',
        emoji: '✈️',
        words: [
            { fr: "l'avion", de: 'das Flugzeug', pl: 'die Flugzeuge', hint: 'nom neutre' },
            { fr: 'le train', de: 'der Zug', pl: 'die Züge', hint: 'nom masculin' },
            { fr: 'la voiture', de: 'das Auto', pl: 'die Autos', hint: 'nom neutre' },
            { fr: 'le bateau', de: 'das Schiff', pl: 'die Schiffe', hint: 'nom neutre' },
            { fr: 'le passeport', de: 'der Reisepass', pl: 'die Reisepässe', hint: 'nom masculin' },
            { fr: 'la valise', de: 'der Koffer', pl: 'die Koffer', hint: 'nom masculin' },
            { fr: "l'aéroport", de: 'der Flughafen', pl: 'die Flughäfen', hint: 'nom masculin' },
            { fr: 'le billet', de: 'die Fahrkarte', pl: 'die Fahrkarten', hint: 'nom féminin' },
            { fr: 'la carte', de: 'die Karte', pl: 'die Karten', hint: 'nom féminin' },
            { fr: 'le voyage', de: 'die Reise', pl: 'die Reisen', hint: 'nom féminin' },
            { fr: "l'hôtel", de: 'das Hotel', pl: 'die Hotels', hint: 'nom neutre' },
            { fr: 'la frontière', de: 'die Grenze', pl: 'die Grenzen', hint: 'nom féminin' },
        ]
    },

    {
        id: 'emotions',
        name: 'Émotions',
        emoji: '😊',
        words: [
            { fr: 'la joie', de: 'die Freude', pl: 'die Freuden', hint: 'nom féminin' },
            { fr: 'la tristesse', de: 'die Traurigkeit', hint: 'nom féminin' },
            { fr: 'la colère', de: 'die Wut', hint: 'nom féminin' },
            { fr: 'la peur', de: 'die Angst', pl: 'die Ängste', hint: 'nom féminin' },
            { fr: 'la surprise', de: 'die Überraschung', pl: 'die Überraschungen', hint: 'nom féminin' },
            { fr: "l'amour", de: 'die Liebe', hint: 'nom féminin' },
            { fr: 'la honte', de: 'die Scham', hint: 'nom féminin' },
            { fr: 'la fierté', de: 'der Stolz', hint: 'nom masculin' },
            { fr: "l'espoir", de: 'die Hoffnung', pl: 'die Hoffnungen', hint: 'nom féminin' },
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
            { fr: 'être', de: 'sein', hint: "L'auxiliaire le plus important (irrégulier)" },
            { fr: 'avoir', de: 'haben', hint: "L'auxiliaire de possession (proche de have)" },
            { fr: 'devenir', de: 'werden', hint: 'Sert aussi à construire le futur et le passif' },
            { fr: "faire / faire de l'activité", de: 'machen', hint: 'Verbe à tout faire (proche de make)' },
            { fr: 'faire / exécuter', de: 'tun', hint: 'Courte action, seulement 3 lettres' },
            { fr: "aimer / apprécier (un objet/une idée)", de: 'mögen', hint: 'Verbe de modalité (ich mag, du magst). Donne aussi "aimeriez" (möchte)' },
            { fr: 'comprendre / saisir / piger', de: 'begreifen', hint: 'Verbe fort (begriff, begriffen). Plus profond et intellectuel que verstehen' },
            { fr: 'pouvoir / être capable', de: 'können', hint: 'Verbe de modalité (ich kann, du kannst)' },
            { fr: 'devoir / être obligé', de: 'müssen', hint: 'Verbe de modalité (ich muss, du musst)' },
            { fr: 'recevoir / obtenir (courant)', de: 'bekommen', hint: 'Le verbe le plus standard pour "recevoir" (ne pas confondre avec devenir !)' },
            { fr: 'recevoir / obtenir (standard/formel)', de: 'erhalten', hint: 'Verbe fort (er erhält). Plus formel que bekommen' },
            { fr: 'recevoir / choper (familier)', de: 'kriegen', hint: "Verbe régulier très utilisé à l'oral" },
            { fr: 'expliquer', de: 'erklären', hint: "Verbe à particule inséparable (l'accent est sur klären)" },
            { fr: 'apprécier / aimer', de: 'schätzen', hint: 'Signifie estimer, apprécier la valeur de qqch' },
            { fr: 'laver', de: 'waschen', hint: 'Verbe fort (ä au présent avec du/er/sie/es) - proche de wash' },
            { fr: 'signifier / vouloir dire', de: 'bedeuten', hint: 'Donne le nom "die Bedeutung" (la signification)' },
            { fr: 'aller (à pied) / marcher', de: 'gehen', hint: 'Déplacement général à pied (proche de go)' },
            { fr: 'courir / marcher', de: 'laufen', hint: 'Mouvement rapide à pied (sens de courir ou marcher selon le contexte)' },
            { fr: 'aller (en véhicule) / conduire', de: 'fahren', hint: "Obligatoire dès qu'on utilise un vélo, train, voiture" },
            { fr: 'venir', de: 'kommen', hint: 'Proche de l\'anglais "come"' },
            { fr: 'voler (dans les airs)', de: 'fliegen', hint: "Action de l'oiseau ou de l'avion" },
            { fr: 'sauter', de: 'springen', hint: 'Proche de l\'anglais "spring"' },
            { fr: 'rester', de: 'bleiben', hint: 'Indique l\'immobilité dans un lieu' },
            { fr: 'parler', de: 'sprechen', hint: 'Verbe fort (i au présent avec du/er/sie/es)' },
            { fr: 'dire', de: 'sagen', hint: 'Proche de l\'anglais "say"' },
            { fr: 'penser', de: 'denken', hint: 'Proche de l\'anglais "think"' },
            { fr: 'croire', de: 'glauben', hint: 'Signifie penser ou avoir la foi (proche de believe)' },
            { fr: 'savoir', de: 'wissen', hint: 'Connaître un fait (ich weiß, du weißt...)' },
            { fr: 'comprendre', de: 'verstehen', hint: 'Proche de l\'anglais "understand"' },
            { fr: 'apprendre / étudier', de: 'lernen', hint: 'Proche de l\'anglais "learn"' },
            { fr: 'demander', de: 'fragen', hint: 'Poser une question' },
            { fr: 'répondre', de: 'antworten', hint: 'Donner la réponse (donne le nom die Antwort)' },
            { fr: 'manger', de: 'essen', hint: 'Verbe fort (i au présent avec du/er/sie/es)' },
            { fr: 'boire', de: 'trinken', hint: 'Proche de l\'anglais "drink"' },
            { fr: 'dormir', de: 'schlafen', hint: 'Verbe fort (ä au présent avec du/er/sie/es) - proche de sleep' },
            { fr: 'acheter', de: 'kaufen', hint: 'Donne aussi le mot "supermarché" (Supermarkt)' },
            { fr: 'payer', de: 'zahlen', hint: "À demander au restaurant pour l'addition" },
            { fr: 'travailler', de: 'arbeiten', hint: 'Fait référence au travail (die Arbeit)' },
            { fr: 'habiter', de: 'wohnen', hint: 'Résider dans un appartement/maison' },
            { fr: 'vivre', de: 'leben', hint: 'Être vivant (proche de live)' },
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
            { fr: 'le chien', de: 'der Hund', pl: 'die Hunde', hint: 'Masculin - Proche de "hound" en anglais' },
            { fr: 'le chat', de: 'die Katze', pl: 'die Katzen', hint: 'Féminin - Proche de "cat"' },
            { fr: 'le cheval', de: 'das Pferd', pl: 'die Pferde', hint: 'Neutre - Finit par un -d' },
            { fr: 'la vache', de: 'die Kuh', pl: 'die Kühe', hint: 'Féminin - Proche de "cow"' },
            { fr: 'le cochon', de: 'das Schwein', pl: 'die Schweine', hint: 'Neutre - Également utilisé pour dire "avoir de la chance"' },
            { fr: 'le mouton', de: 'das Schaf', pl: 'die Schafe', hint: 'Neutre - Proche de "sheep"' },
            { fr: 'la chèvre', de: 'die Ziege', pl: 'die Ziegen', hint: 'Féminin - Commence par un Z' },
            { fr: "l'âne", de: 'der Esel', pl: 'die Esel', hint: 'Masculin - Animal têtu' },
            { fr: 'le lapin', de: 'das Kaninchen', pl: 'die Kaninchen', hint: 'Neutre - Diminutif en -chen' },
            { fr: 'la poule', de: 'die Henne', pl: 'die Hennen', hint: 'Féminin - Proche de "hen"' },
            { fr: 'le coq', de: 'der Hahn', pl: 'die Hähne', hint: 'Masculin - Chante le matin' },
            { fr: 'le canard', de: 'die Ente', pl: 'die Enten', hint: 'Féminin - Donne son nom au journal "Canard Enchaîné"' },
            { fr: 'la souris', de: 'die Maus', pl: 'die Mäuse', hint: "Féminin - Identique à l'anglais à une lettre près" },
            { fr: 'le loup', de: 'der Wolf', pl: 'die Wölfe', hint: "Masculin - Orthographe identique à l'anglais" },
            { fr: "l'ours", de: 'der Bär', pl: 'die Bären', hint: 'Masculin - Symbole de la ville de Berlin' },
            { fr: 'la grenouille', de: 'der Frosch', pl: 'die Frösche', hint: 'Masculin - Proche de "frog"' },
            { fr: 'le crapaud', de: 'die Kröte', pl: 'die Kröten', hint: 'Féminin - Souvent confondu avec la grenouille' },
            { fr: "l'oiseau", de: 'der Vogel', pl: 'die Vögel', hint: 'Masculin - Donne le verbe "fliegen" (voler)' },
            { fr: "l'aigle", de: 'der Adler', pl: 'die Adler', hint: "Masculin - Symbole sur les pièces d'euro allemandes" },
            { fr: "l'abeille", de: 'die Biene', pl: 'die Bienen', hint: 'Féminin - Fait du miel' },
            { fr: 'le papillon', de: 'der Schmetterling', pl: 'die Schmetterlinge', hint: 'Masculin - Se termine par -ling' },
            { fr: 'la mouche', de: 'die Fliege', pl: 'die Fliegen', hint: 'Féminin - Lié au verbe voler' },
            { fr: 'le poisson', de: 'der Fisch', pl: 'die Fische', hint: 'Masculin - Proche de "fish"' },
            { fr: 'le lion', de: 'der Löwe', pl: 'die Löwen', hint: 'Masculin - Le roi de la savane' },
            { fr: "l'éléphant", de: 'der Elefant', pl: 'die Elefanten', hint: "Masculin - S'écrit avec un f au lieu de ph" },
            { fr: 'la girafe', de: 'die Giraffe', pl: 'die Giraffen', hint: 'Féminin - Prend deux -f-' },
            { fr: 'le singe', de: 'der Affe', pl: 'die Affen', hint: 'Masculin - Animal très agile' },
            { fr: 'le serpent', de: 'die Schlange', pl: 'die Schlangen', hint: 'Féminin - Signifie aussi "la file d\'attente"' },
            { fr: 'la tortue', de: 'die Schildkröte', pl: 'die Schildkröten', hint: 'Féminin - Littéralement le "crapaud à bouclier"' },
            { fr: 'le crocodile', de: 'das Krokodil', pl: 'die Krokodile', hint: 'Neutre - Animal du Nil' },
            { fr: 'le requin', de: 'der Hai', pl: 'die Haie', hint: 'Masculin - Grand prédateur des océans' }
        ]
    },

    {
        id: 'nouveaux',
        name: 'Nouveaux',
        emoji: '​​🌞​',
        words: [
            { fr: 'le mot', de: 'das Wort', pl: 'die Wörter', hint: 'nom neutre' },
        ]
    }

    // ─────────────────────────────────────────
    //  ➕ ADD A NEW THEME HERE
    //  Copy-paste this block and fill it out:
    //
    //  {
    //    id: 'my_theme',
    //    name: 'My Theme',
    //    emoji: '🎸',
    //    words: [
    //      { fr: 'French word',  de: 'German word', pl: 'plural form', hint: 'neuter noun' },
    //    ]
    //  },
    // ─────────────────────────────────────────

];