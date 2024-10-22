// vitest.config.js
export default {
    test: {
        globals: true, // Włącza globalne funkcje testowe
        environment: 'jsdom', // Użycie jsdom do testowania komponentów React
    },
};
