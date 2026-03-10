export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          active: '#37373d',
          hover: '#2a2d2e',
          border: '#3e3e42',
          text: '#cccccc',
          muted: '#858585',
          blue: '#007acc',
          green: '#4ec9b0',
          yellow: '#dcdcaa',
          orange: '#ce9178',
          purple: '#c586c0',
          cyan: '#9cdcfe',
        }
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}