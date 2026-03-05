/**
 * 3DLUss — Demo Data & Configuration
 * Questo script contiene dati di esempio per testare il viewer.
 * Viene caricato opzionalmente per popolare il viewer con annotazioni e tour.
 */

const DEMO_DATA = {
    projectName: "3DLUss — Showcase Archeologico",

    // Esempio nuvola pubblica (Heidentor)
    cloudPath: "https://potree.org/potree/resources/pointclouds/heidentor/metadata.json",

    // Annotazioni di esempio
    annotations: [
        {
            position: [-1.41, -0.61, 5.09],
            title: "Arco Principale",
            description: "Dettaglio del fornice centrale. Rilievo fotogrammetrico."
        },
        {
            position: [2.86, 3.42, 1.54],
            title: "Basamento",
            description: "Struttura di fondazione in blocchi di calcare."
        }
    ],

    // Camera Tour
    tourKeyframes: [
        { position: [15, 10, 8], target: [0, 0, 2], t: 0.0 },
        { position: [0, 15, 4], target: [0, 0, 2], t: 0.3 },
        { position: [-12, 5, 10], target: [0, 0, 3], t: 0.6 },
        { position: [8, -12, 6], target: [0, 0, 2], t: 1.0 }
    ]
};

// Se il viewer è caricato in modalità demo, applica questa config
if (typeof DLUSS_CONFIG !== 'undefined') {
    Object.assign(DLUSS_CONFIG, DEMO_DATA);
}
