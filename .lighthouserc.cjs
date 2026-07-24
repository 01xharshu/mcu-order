module.exports = {
  ci: {
    collect: {
      startServerCommand: "PORT=3001 npm run start",
      startServerReadyPattern: "Ready",
      startServerReadyTimeout: 30000,
      url: ["http://localhost:3001/", "http://localhost:3001/films", "http://localhost:3001/sources"],
      numberOfRuns: 1,
      settings: { preset: "desktop" },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
    upload: { target: "filesystem", outputDir: ".lighthouseci" },
  },
};
