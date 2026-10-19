# Run the downloaded project

This folder contains the complete editable HTML, CSS, JavaScript, vocabulary data, and SVG illustrations. There is no build step and no API key is needed.

## Quick start

1. Extract the ZIP.
2. Open a terminal in `buildlingo-web-project`.
3. Run:

```sh
python3 -m http.server 8000 --directory dist
```

4. Visit **http://localhost:8000** in your browser.

You can also open `dist/index.html` directly for a quick preview. A local HTTP server is recommended for consistent browser storage and navigation behavior.

## Edit the site

- `dist/index.html`: layout and page structure.
- `dist/styles.css`: colors, typography, and responsive layouts.
- `dist/vocabulary.js`: all 350 English terms, definitions, examples, and IPA.
- `dist/house.js`: clickable house, room views, markers, and illustrations.
- `dist/app.js`: pronunciation, search, saved progress, quizzes, and flashcards.
- `dist/favicon.svg`: site icon.

Audio uses the English speech voices available in your browser or operating system.

For deployment, upload the **contents** of `dist/` to a static hosting service.

## Optional source validation

With Node.js 20.11 or newer, run:

```sh
node scripts/check.mjs
```

No dependency installation is required.

---

# Buildlingo — The Vocabulary House

An English-only learning website built around a clickable, illustrated house. No account, paid API, or backend is required for the learning features.

## Included

- 350 terms across 16 topics: framing, roofing, materials, plumbing, electricity, kitchen and laundry, bathrooms, furniture, doors and windows, exteriors, tools, construction actions, architectural plans, repairs, climate control, and worksite vocabulary.
- 95 clickable illustration objects, plus contextual markers and eight room views.
- Whole-house, structural, plumbing, electrical, and exterior layers.
- Original English definitions, example sentences, common US IPA, regional English alternatives, and related words.
- Spoken words and sentences, preferred US or UK voice, and slower playback.
- Searchable dictionary, bookmarks, learned-word tracking, recently explored words, and a JSON progress export.
- Meaning quizzes, listening quizzes, flashcards, category filters, saved-word sessions, and review of missed answers.
- Responsive layouts, keyboard-accessible house objects, keyboard quiz answers, visible focus indicators, reduced-motion support, and screen-reader labels.

## Source

The application is buildless. `dist/index.html` loads `styles.css`, `vocabulary.js`, `house.js`, and `app.js`. The house and vocabulary illustrations are source-native SVG. Font loading is optional; local system and serif fallbacks are provided.

Run content, source, and configuration checks:

```sh
node scripts/check.mjs
```

Serve `dist/` with any static HTTP server. Upload the contents of `dist/` to any static web host.

## Audio and saved progress

Audio uses the browser's Web Speech API and available English system voices. The selected accent is preferred when an appropriate voice is installed; otherwise an available English voice or the browser's default for the requested language is used. Speech synthesis is not a recorded human pronunciation library. IPA shows a common US pronunciation regardless of the chosen audio preference.

Learning progress is stored with localStorage on the current browser and origin. It is not synchronized across devices. A progress backup can be downloaded from My collection.

## Verification

Content integrity, references, JavaScript syntax, local assets, have been validated. Functional DOM checks exercised navigation, category and text filtering, modal details, bookmarking, learned state, reload persistence, room crops, layer visibility, labels, the guided tour, quiz scoring, flashcard review, listening-mode dispatch, empty selections, and unsupported-audio handling. The authored SVG was rendered and visually inspected separately.

A browser-control integration was unavailable during creation, so full browser layout and audible system-voice playback were not verified in this environment.
