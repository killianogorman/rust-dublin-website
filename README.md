# 🦀 Rust Dublin Website
The public facing website for rust dublin (rustdublin.dev)

## Become a sponsor
Sponsorship packages include the following and more!
- [x] On stage video ad
- [x] Logo on live stream
- [x] Website placement
### How to become a sponsor
We would love to have you on as a sponsor. To apply for a sponsor opportunity please email sponsorships@rustdublin.dev. Please note we require all inquiry emails to come from company domains.
## 🚀 Project Structure
Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── blog/       // Where blog posts are stored
│   │   └── people/     // If you are writing a blog post or a talk you must create a file about you
│   │   └── talks/      // Where talks are stored
│   └── pages/
│   |   └── index.astro
│   └── main.rs         // This is a rust programme that should break up a markdown file and check for profanity
└── package.json
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the public/ directory.
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
