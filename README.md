# Hunar Saarthi

Hunar Saarthi is a basic web prototype for artisan groups to manage artisan profiles, skill progress, products, sample orders, and earnings.

## Project structure

```text
hunar-saathi/
├── index.html       # Interactive prototype entry point
├── landing.html     # Short project overview and link to the prototype
├── css/
│   ├── style.css    # Prototype dashboard styles
│   ├── landing.css  # Landing page styles
│   └── main.css     # Additional shared styles
├── js/
│   ├── app.js       # Dashboard screens, sample data, and interactions
│   └── nav.js       # Shared navigation behavior
├── pages/           # Supporting project pages
├── docs/            # Supporting project documents
└── .gitignore       # Files and folders excluded from Git
```

## Run the project

No package installation or build step is required.

### Option 1: Open in a browser

1. Open `landing.html` in a browser.
2. Select **Open prototype**.

You can also open `index.html` directly.

### Option 2: Run a local web server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Press `Ctrl+C` in the terminal to stop the server.

## Prototype notes

The dashboard is built with plain HTML, CSS, and JavaScript. It currently uses sample data and is a prototype, not a deployed service or connected backend.
