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

## Prototype workflow

The dashboard guides the user through one stage at a time:

1. Review artisan profiles.
2. Record skill checks and training progress.
3. Choose a product.
4. Configure a sample order.
5. Review the purchase order.
6. Track the order.
7. Review the earnings estimate.

The progress indicator shows the current stage. Use the task action to continue or **Previous step** to go back; later stages are not directly accessible.

## Prototype notes

The dashboard is built with plain HTML, CSS, and JavaScript. It currently uses sample data and is a prototype, not a deployed service or connected backend.

## Voice help

Choose **Hear instructions** to listen to guidance for the current step. In a supported browser, choose **Use voice commands** and allow microphone access to say “next”, “back”, or “repeat”. Commands follow the selected English, Hindi, or Marathi language. Voice controls are optional; all steps can also be completed with the on-screen buttons.

Voice command support depends on the browser and may require localhost or HTTPS. The browser may process speech recognition audio; the prototype does not record or save it.
