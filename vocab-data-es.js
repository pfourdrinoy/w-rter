// ═══════════════════════════════════════════════════════════════
//  WÖRTER — Vocabulaire ESPAGNOL → FRANÇAIS
//  L'élève voit le mot espagnol et doit répondre en français.
// ═══════════════════════════════════════════════════════════════
//
//  STRUCTURE D'UN MOT :
//  {
//    es:   'la palabra en español (con artículo)',
//    fr:   'le mot en français (avec article)',
//    hint: 'indication / conseil mémo'
//  }
// ═══════════════════════════════════════════════════════════════

const THEMES_ES = [

    // ─────────────────────────────────────────
    //  THÈME 1 — La Naturaleza
    // ─────────────────────────────────────────
    {
        id: 'naturaleza',
        name: 'La Naturaleza',
        emoji: '🌿',
        words: [
            { es: 'el árbol',      fr: "l'arbre",       hint: 'árbol → arbre, même racine latine' },
            { es: 'el bosque',     fr: 'la forêt',       hint: 'penser à "boscage"' },
            { es: 'la flor',       fr: 'la fleur',       hint: 'flor → fleur, très proche !' },
            { es: 'la montaña',    fr: 'la montagne',    hint: 'montaña → montagne' },
            { es: 'el río',        fr: 'la rivière',     hint: 'río → rivière (attention au genre !)' },
            { es: 'el mar',        fr: 'la mer',         hint: 'mar → mer, même racine' },
            { es: 'el lago',       fr: 'le lac',         hint: 'lago → lac' },
            { es: 'la hierba',     fr: "l'herbe",        hint: 'hierba → herbe' },
            { es: 'la hoja',       fr: 'la feuille',     hint: 'hoja = feuille (aussi feuille de papier)' },
            { es: 'la piedra',     fr: 'la pierre',      hint: 'piedra → pierre' },
            { es: 'la arena',      fr: 'le sable',       hint: 'arena = sable (aussi arène !)' },
            { es: 'la playa',      fr: 'la plage',       hint: 'playa → plage' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 2 — El Tiempo
    // ─────────────────────────────────────────
    {
        id: 'tiempo',
        name: 'El Tiempo',
        emoji: '🌤️',
        words: [
            { es: 'el sol',        fr: 'le soleil',      hint: 'sol → soleil' },
            { es: 'la lluvia',     fr: 'la pluie',       hint: 'llover (pleuvoir) → lluvia' },
            { es: 'la nieve',      fr: 'la neige',       hint: 'nieve → neige (même racine latine nix/nivis)' },
            { es: 'el viento',     fr: 'le vent',        hint: 'viento → vent' },
            { es: 'la nube',       fr: 'le nuage',       hint: 'nube → nuage (nebula en latin)' },
            { es: 'la tormenta',   fr: "l'orage / la tempête", hint: 'tormenta → tourmente' },
            { es: 'la niebla',     fr: 'le brouillard',  hint: 'niebla = brouillard (même racine que nube)' },
            { es: 'el calor',      fr: 'la chaleur',     hint: 'calor → chaleur (calorie !)' },
            { es: 'el frío',       fr: 'le froid',       hint: 'frío → froid' },
            { es: 'el arcoíris',   fr: "l'arc-en-ciel",  hint: 'arco = arc, iris = iris' },
            { es: 'el hielo',      fr: 'la glace',       hint: 'hielo → glace (hielar = geler)' },
            { es: 'la tormenta',   fr: 'la tempête',     hint: 'tormenta = tempête / orage' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 3 — La Tecnología
    // ─────────────────────────────────────────
    {
        id: 'tecnologia',
        name: 'La Tecnología',
        emoji: '💻',
        words: [
            { es: 'el ordenador',  fr: "l'ordinateur",   hint: 'en Amérique latine: la computadora' },
            { es: 'el teléfono',   fr: 'le téléphone',   hint: 'teléfono → téléphone, identique !' },
            { es: 'la pantalla',   fr: "l'écran",        hint: 'pantalla = écran (aussi: abat-jour)' },
            { es: 'el teclado',    fr: 'le clavier',     hint: 'tecla = touche → teclado' },
            { es: 'el ratón',      fr: 'la souris',      hint: 'ratón = grosse souris → souris d\'ordi' },
            { es: 'el internet',   fr: 'internet',       hint: 'identique !' },
            { es: 'el software',   fr: 'le logiciel',    hint: 'emprunté à l\'anglais' },
            { es: 'la aplicación', fr: "l'application",  hint: 'aplicación → application' },
            { es: 'la batería',    fr: 'la batterie',    hint: 'batería → batterie' },
            { es: 'la red',        fr: 'le réseau',      hint: 'red = réseau / filet' },
            { es: 'el cable',      fr: 'le câble',       hint: 'identique !' },
            { es: 'la inteligencia artificial', fr: "l'intelligence artificielle", hint: 'les mots sont proches dans les deux langues' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 4 — La Comida
    // ─────────────────────────────────────────
    {
        id: 'comida',
        name: 'La Comida',
        emoji: '🍽️',
        words: [
            { es: 'el pan',        fr: 'le pain',        hint: 'pan → pain' },
            { es: 'la carne',      fr: 'la viande',      hint: 'carné → viande (carné = fait de chair)' },
            { es: 'el pescado',    fr: 'le poisson',     hint: 'pescado = poisson pêché, pesca = pêche' },
            { es: 'la verdura',    fr: 'le légume',      hint: 'verdura = légume vert' },
            { es: 'la fruta',      fr: 'le fruit',       hint: 'fruta → fruit' },
            { es: 'el queso',      fr: 'le fromage',     hint: 'queso → fromage (même racine que caseus)' },
            { es: 'el huevo',      fr: "l'œuf",          hint: 'huevo → œuf (ovum en latin)' },
            { es: 'la leche',      fr: 'le lait',        hint: 'leche → lait (lactose !)' },
            { es: 'el agua',       fr: "l'eau",          hint: 'agua → eau (aqua en latin !)' },
            { es: 'el café',       fr: 'le café',        hint: 'identique !' },
            { es: 'el azúcar',     fr: 'le sucre',       hint: 'azúcar → sucre (de l\'arabe)' },
            { es: 'la sal',        fr: 'le sel',         hint: 'sal → sel (salaire vient de là !)' },
            { es: 'la patata',     fr: 'la pomme de terre', hint: 'en Amérique latine: la papa' },
            { es: 'el tomate',     fr: 'la tomate',      hint: 'tomate → tomate (attention au genre !)' },
            { es: 'la zanahoria',  fr: 'la carotte',     hint: 'de l\'arabe isfanāriyya' },
            { es: 'la cebolla',    fr: "l'oignon",       hint: 'cebolla → oignon' },
            { es: 'el ajo',        fr: "l'ail",          hint: 'ajo → ail' },
            { es: 'la manzana',    fr: 'la pomme',       hint: 'manzana = pomme (et aussi pâté de maisons !)' },
            { es: 'el plátano',    fr: 'la banane',      hint: 'plátano = banane (en Espagne)' },
            { es: 'la fresa',      fr: 'la fraise',      hint: 'fresa → fraise' },
            { es: 'la naranja',    fr: "l'orange",       hint: 'naranja → orange (même origine arabe)' },
            { es: 'el limón',      fr: 'le citron',      hint: 'limón → citron (limonade !)' },
            { es: 'la pera',       fr: 'la poire',       hint: 'pera → poire' },
            { es: 'la uva',        fr: 'le raisin',      hint: 'uva = raisin (uva en latin)' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 5 — La Ciudad
    // ─────────────────────────────────────────
    {
        id: 'ciudad',
        name: 'La Ciudad',
        emoji: '🏙️',
        words: [
            { es: 'la calle',      fr: 'la rue',         hint: 'calle → ruelle (callis en latin)' },
            { es: 'el edificio',   fr: 'le bâtiment',    hint: 'edificio → édifice' },
            { es: 'la tienda',     fr: 'le magasin',     hint: 'tienda = magasin / tente' },
            { es: 'el hospital',   fr: "l'hôpital",      hint: 'identique !' },
            { es: 'la escuela',    fr: "l'école",        hint: 'escuela → école' },
            { es: 'la estación',   fr: 'la gare',        hint: 'estación = station / gare / saison' },
            { es: 'el puente',     fr: 'le pont',        hint: 'puente → pont (pons en latin)' },
            { es: 'el parque',     fr: 'le parc',        hint: 'parque → parc' },
            { es: 'el museo',      fr: 'le musée',       hint: 'museo → musée' },
            { es: 'la biblioteca', fr: 'la bibliothèque', hint: 'biblioteca → bibliothèque' },
            { es: 'el restaurante', fr: 'le restaurant',  hint: 'identique !' },
            { es: 'el hotel',      fr: "l'hôtel",        hint: 'identique !' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 6 — El Cuerpo
    // ─────────────────────────────────────────
    {
        id: 'cuerpo',
        name: 'El Cuerpo',
        emoji: '🧍',
        words: [
            { es: 'la cabeza',     fr: 'la tête',        hint: 'cabeza → chef (caput en latin)' },
            { es: 'los ojos',      fr: 'les yeux',       hint: 'ojo → œil, ojos → yeux' },
            { es: 'la boca',       fr: 'la bouche',      hint: 'boca → bouche' },
            { es: 'las orejas',    fr: 'les oreilles',   hint: 'oreja → oreille' },
            { es: 'la nariz',      fr: 'le nez',         hint: 'nariz → nez (nasus en latin)' },
            { es: 'la mano',       fr: 'la main',        hint: 'mano → main (manus en latin) — féminin en -o !' },
            { es: 'el pie',        fr: 'le pied',        hint: 'pie → pied (pes/pedis en latin)' },
            { es: 'el corazón',    fr: 'le cœur',        hint: 'corazón → cœur (cor en latin)' },
            { es: 'la espalda',    fr: 'le dos',         hint: 'espalda = dos (épaule en vieux français !)' },
            { es: 'la rodilla',    fr: 'le genou',       hint: 'rodilla → rotule !' },
            { es: 'el cabello',    fr: 'les cheveux',    hint: 'cabello → cheveu (capillus en latin)' },
            { es: 'el brazo',      fr: 'le bras',        hint: 'brazo → bras' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 7 — Los Viajes
    // ─────────────────────────────────────────
    {
        id: 'viajes',
        name: 'Los Viajes',
        emoji: '✈️',
        words: [
            { es: 'el avión',      fr: "l'avion",        hint: 'avión → avion' },
            { es: 'el tren',       fr: 'le train',       hint: 'identique !' },
            { es: 'el coche',      fr: 'la voiture',     hint: 'coche = voiture (en Amérique: el carro)' },
            { es: 'el barco',      fr: 'le bateau',      hint: 'barco → barque' },
            { es: 'el pasaporte',  fr: 'le passeport',   hint: 'pasaporte → passeport' },
            { es: 'la maleta',     fr: 'la valise',      hint: 'maleta → mallette' },
            { es: 'el aeropuerto', fr: "l'aéroport",     hint: 'aeropuerto → aéroport' },
            { es: 'el billete',    fr: 'le billet',      hint: 'billete → billet' },
            { es: 'el mapa',       fr: 'la carte',       hint: 'mapa = carte (attention, masculin en -a !)' },
            { es: 'el viaje',      fr: 'le voyage',      hint: 'viaje → voyage' },
            { es: 'la frontera',   fr: 'la frontière',   hint: 'frontera → frontière' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 8 — Las Emociones
    // ─────────────────────────────────────────
    {
        id: 'emociones',
        name: 'Las Emociones',
        emoji: '😊',
        words: [
            { es: 'la alegría',    fr: 'la joie',        hint: 'alegría → allégresse !' },
            { es: 'la tristeza',   fr: 'la tristesse',   hint: 'tristeza → tristesse, très proche' },
            { es: 'la ira',        fr: 'la colère',      hint: 'ira → ire (mot littéraire français)' },
            { es: 'el miedo',      fr: 'la peur',        hint: 'miedo = peur' },
            { es: 'la sorpresa',   fr: 'la surprise',    hint: 'sorpresa → surprise' },
            { es: 'el amor',       fr: "l'amour",        hint: 'amor → amour' },
            { es: 'la vergüenza',  fr: 'la honte',       hint: 'vergüenza = honte (attention au tréma !)' },
            { es: 'el orgullo',    fr: 'la fierté',      hint: 'orgullo → orgueil !' },
            { es: 'la esperanza',  fr: "l'espoir",       hint: 'esperanza → espérance' },
            { es: 'los celos',     fr: 'la jalousie',    hint: 'celos = jalousie (toujours pluriel en espagnol)' },
            { es: 'la confianza',  fr: 'la confiance',   hint: 'confianza → confiance' },
            { es: 'la curiosidad', fr: 'la curiosité',   hint: 'curiosidad → curiosité' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 9 — Los Verbos
    // ─────────────────────────────────────────
    {
        id: 'verbos',
        name: 'Los Verbos',
        emoji: '🧑‍🎓',
        words: [
            { es: 'ser',           fr: 'être (permanent)',   hint: 'ser = identité, origine, caractère permanent' },
            { es: 'estar',         fr: 'être (temporaire)',  hint: 'estar = état, position, émotion temporaire' },
            { es: 'tener',         fr: 'avoir',              hint: 'tener → tenir (mais sens = avoir)' },
            { es: 'hacer',         fr: 'faire',              hint: 'hacer → fact-, factory...' },
            { es: 'ir',            fr: 'aller',              hint: 'ir = aller (très irrégulier: voy, vas...)' },
            { es: 'venir',         fr: 'venir',              hint: 'identique !' },
            { es: 'poder',         fr: 'pouvoir',            hint: 'poder → pouvoir' },
            { es: 'querer',        fr: 'vouloir / aimer',    hint: 'querer = vouloir et aimer une personne' },
            { es: 'saber',         fr: 'savoir',             hint: 'saber → savoir (sapere en latin)' },
            { es: 'conocer',       fr: 'connaître',          hint: 'conocer → connaître (cognoscere en latin)' },
            { es: 'hablar',        fr: 'parler',             hint: 'hablar → fabuler... parler !' },
            { es: 'comer',         fr: 'manger',             hint: 'comer → consommer' },
            { es: 'beber',         fr: 'boire',              hint: 'beber → boire (bibere en latin)' },
            { es: 'dormir',        fr: 'dormir',             hint: 'identique !' },
            { es: 'trabajar',      fr: 'travailler',         hint: 'trabajar → travailler' },
            { es: 'comprar',       fr: 'acheter',            hint: 'comprar → comparer... non: acheter !' },
            { es: 'leer',          fr: 'lire',               hint: 'leer → lire (legere en latin)' },
            { es: 'escribir',      fr: 'écrire',             hint: 'escribir → écrire (scribere en latin)' },
            { es: 'ver',           fr: 'voir',               hint: 'ver → voir (videre en latin)' },
            { es: 'oír',           fr: 'entendre',           hint: 'oír → ouïr (vieux français !)' },
            { es: 'dar',           fr: 'donner',             hint: 'dar → donner (dare en latin)' },
            { es: 'encontrar',     fr: 'trouver',            hint: 'encontrar = rencontrer et trouver' },
            { es: 'entender',      fr: 'comprendre',         hint: 'entender → entendre (mais sens = comprendre !)' },
            { es: 'amar',          fr: 'aimer',              hint: 'amar → aimer (amare en latin)' },
            { es: 'jugar',         fr: 'jouer',              hint: 'jugar → jouer (jocus en latin)' },
        ]
    },

    // ─────────────────────────────────────────
    //  THÈME 10 — Los Animales
    // ─────────────────────────────────────────
    {
        id: 'animales',
        name: 'Los Animales',
        emoji: '🐻',
        words: [
            { es: 'el perro',      fr: 'le chien',       hint: 'perro → chien' },
            { es: 'el gato',       fr: 'le chat',        hint: 'gato → chat' },
            { es: 'el caballo',    fr: 'le cheval',      hint: 'caballo → cheval (caballus en latin)' },
            { es: 'la vaca',       fr: 'la vache',       hint: 'vaca → vache' },
            { es: 'el cerdo',      fr: 'le cochon',      hint: 'cerdo → cochon' },
            { es: 'la oveja',      fr: 'le mouton',      hint: 'oveja = brebis / mouton (ovis en latin)' },
            { es: 'la cabra',      fr: 'la chèvre',      hint: 'cabra → chèvre' },
            { es: 'el conejo',     fr: 'le lapin',       hint: 'conejo → lapin' },
            { es: 'la gallina',    fr: 'la poule',       hint: 'gallina → poule (gallus en latin)' },
            { es: 'el pato',       fr: 'le canard',      hint: 'pato → canard' },
            { es: 'el ratón',      fr: 'la souris',      hint: 'ratón = souris (aussi petite rate)' },
            { es: 'el lobo',       fr: 'le loup',        hint: 'lobo → loup (lupus en latin)' },
            { es: 'el oso',        fr: "l'ours",         hint: 'oso → ours (ursus en latin)' },
            { es: 'el pájaro',     fr: "l'oiseau",       hint: 'pájaro → oiseau' },
            { es: 'la abeja',      fr: "l'abeille",      hint: 'abeja → abeille' },
            { es: 'la mariposa',   fr: 'le papillon',    hint: 'mariposa = papillon (Marie qui pose...)' },
            { es: 'el león',       fr: 'le lion',        hint: 'león → lion (leo en latin)' },
            { es: 'el elefante',   fr: "l'éléphant",     hint: 'elefante → éléphant' },
            { es: 'la jirafa',     fr: 'la girafe',      hint: 'jirafa → girafe' },
            { es: 'el mono',       fr: 'le singe',       hint: 'mono → singe' },
            { es: 'la serpiente',  fr: 'le serpent',     hint: 'serpiente → serpent' },
            { es: 'el tiburón',    fr: 'le requin',      hint: 'tiburón → requin' },
        ]
    },

];