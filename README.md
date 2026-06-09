# Wörter — Adding a New Language

This guide explains step by step how to add a new learning language to Wörter. **Italian** (questions in German, answers in Italian) is used as an example throughout.

---

## Overview: What needs to change?

| File | What to do |
|---|---|
| `vocab-data-it.js` (new) | Create the vocabulary data for the new language |
| `index.html` | Update 4 places: script tag, button, config, switchLanguage |

---

## Step 1 — Create the vocabulary file

Create a new file `vocab-data-{flag from your language}.js` (vocab-data-it.js for italian, vocab-data-ru.js for russian ) following the same structure as `vocab-data-de.js`.

```js
// vocab-data-it.js

const THEMES_IT = [

  {
    id: 'natura',
    name: 'Die Natur',
    emoji: '🌿',
    words: [
      { de: 'der Baum',    it: "l'albero",   pl: "gli alberi",   hint: 'masculine' },
      { de: 'die Blume',   it: 'il fiore',    pl: 'i fiori',      hint: 'masculine' },
      { de: 'das Meer',    it: 'il mare',     pl: 'i mari',       hint: 'masculine' },
      { de: 'der Berg',    it: 'la montagna', pl: 'le montagne',  hint: 'feminine'  },
    ]
  },

  // more themes...
];
```

### Word object structure

```js
{
  de:   'der Baum',    // source language (here: German with article)
  it:   "l'albero",   // target language (here: Italian with article)
  pl:   'gli alberi', // plural form — optional, only used in Plural mode
  hint: 'masculine'   // grammar hint — optional, displayed in small text below the question
}
```

> **Note:** Field names (`de`, `it`, `fr`, `es` …) are freely chosen but must match the config in `index.html` (see Step 3).

> **Plural mode:** Only words with a filled `pl` field appear in Plural mode. Words without `pl` are automatically skipped.

---

## Step 2 — Add the script tag in `index.html`

Add a new `<script>` tag next to the existing ones, just before `</body>`:

```html
<!-- existing -->
<script src="vocab-data-de.js"></script>
<script src="vocab-data-es.js"></script>

<!-- add this -->
<script src="vocab-data-it.js"></script>
```

---

## Step 3 — Add an entry to `LANG_CONFIG`

In `index.html`, find the `LANG_CONFIG` object and add a new `it` entry:

```js
const LANG_CONFIG = {

  de: { /* existing config */ },
  es: { /* existing config */ },

  // NEW:
  it: {
    themes: () => THEMES_IT,          // points to the variable from vocab-data-it.js

    questionField: 'de',              // word field shown as the question
    answerField:   'it',              // word field the user must type

    homeTitle: 'Lerne<br>Italienisch <span class="accent">nach Themen.</span>',
    cardLangQuestion: 'Deutsch',      // label on the front of the flashcard
    cardLangAnswer:   'Italiano',     // label on the back of the flashcard

    quizLabel:  'Was ist das italienische Wort für…',
    writeLabel: 'Schreibe das italienische Wort mit Artikel',

    // quick-article buttons in Free Input mode
    dets:      ['il ', 'la ', "l'", 'i ', 'le '],
    detLabels: ['il',  'la',  "l'", 'i',  'le'],

    placeholder: "e.g. : il mare",

    resultsTitles: {
      flash:     { title: 'Gut gemacht!',  sub: 'Du hast alle Karten durchgesehen.' },
      excellent: { t: 'Perfetto!',         s: 'Perfektes Ergebnis, Glückwunsch!'    },
      great:     { t: 'Molto bene!',       s: 'Sehr gute Leistung!'                 },
      good:      { t: 'Bene!',             s: 'Weiter so!'                          },
      keep:      { t: "Ancora un po'!",    s: 'Übe noch ein bisschen mehr.'         },
    },

    // normalize() is used when comparing the user's free-text answer to the correct one.
    // Strip accents so that e.g. "e" and "è" are treated as equal.
    normalize: (str) => str.trim().toLowerCase()
      .replace(/[àá]/g, 'a')
      .replace(/[èéê]/g, 'e')
      .replace(/[ìí]/g,  'i')
      .replace(/[òó]/g,  'o')
      .replace(/[ùú]/g,  'u'),
  },
};
```

### Field reference

| Field | Type | Description |
|---|---|---|
| `themes` | Function | Returns the themes array (`() => THEMES_IT`) |
| `questionField` | String | Word object field displayed as the **question** |
| `answerField` | String | Word object field the user must **type** |
| `homeTitle` | HTML string | Title on the home screen (may contain `<br>` and `<span>`) |
| `cardLangQuestion` | String | Language label on the front of the flashcard |
| `cardLangAnswer` | String | Language label on the back of the flashcard |
| `quizLabel` | String | Instruction shown above the question in Multiple Choice mode |
| `writeLabel` | String | Instruction shown above the question in Free Input mode |
| `dets` | Array | Article strings for the quick-input buttons (include a trailing space) |
| `detLabels` | Array | Display text for the quick-input buttons |
| `placeholder` | String | Placeholder text in the input field |
| `resultsTitles` | Object | Title and subtitle on the results screen, by score bracket |
| `normalize` | Function | Strips accents/special characters for lenient answer comparison |

---

## Step 4 — Add a button in the header

Inside the `lang-switcher` div in `index.html`'s `<header>`, add a new button:

```html
<div class="lang-switcher">

  <!-- existing buttons -->
  <button class="lang-btn active" id="lang-de" onclick="switchLanguage('de')">
    <span class="lang-flag">🇫🇷</span>→<span class="lang-flag">🇩🇪</span> Deutsch
  </button>
  <button class="lang-btn" id="lang-es" onclick="switchLanguage('es')">
    <span class="lang-flag">🇪🇸</span>→<span class="lang-flag">🇫🇷</span> Französisch
  </button>

  <!-- NEW: -->
  <button class="lang-btn" id="lang-it" onclick="switchLanguage('it')">
    <span class="lang-flag">🇩🇪</span>→<span class="lang-flag">🇮🇹</span> Italienisch
  </button>

</div>
```

> The `id` must follow the pattern `lang-XX`, where `XX` matches the key used in `LANG_CONFIG` (here `it`).

---

## Step 5 — Update `switchLanguage()`

The `switchLanguage()` function manages the `active` CSS class on all language buttons. Add the new language to it:

```js
function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  selectedTheme = null;

  // existing lines:
  document.getElementById('lang-de').classList.toggle('active', lang === 'de');
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');

  // ADD this line:
  document.getElementById('lang-it').classList.toggle('active', lang === 'it');

  // ... rest of the function stays unchanged
}
```

---

## Checklist

- [ ] `vocab-data-it.js` created with `const THEMES_IT = [...]`
- [ ] `<script src="vocab-data-it.js"></script>` added in `index.html`
- [ ] `it: { ... }` entry added to `LANG_CONFIG`
- [ ] `questionField` and `answerField` match the field names in the word objects
- [ ] Button with `id="lang-it"` added in the header
- [ ] `switchLanguage()` updated with the new `lang-it` line
- [ ] Tested in browser: button appears, themes load, all 4 modes work

---

## Common mistakes

**"No themes are displayed"**
→ `questionField` or `answerField` doesn't match the field names in the word objects. Example: config says `questionField: 'de'` but the words have no `de` field.

**"Cards show — instead of a word"**
→ Same cause: check that field names in the config and vocabulary file match.

**"Plural mode shows 0 words"**
→ Word objects have no `pl` field, or it's empty. The `pl` field is optional — words without it are automatically skipped in Plural mode.

**"Button is always inactive / always active"**
→ The button `id` (`lang-it`) doesn't match the key used in `switchLanguage()`.