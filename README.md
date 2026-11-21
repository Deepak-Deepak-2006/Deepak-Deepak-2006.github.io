# My Portfolio Website

This project is a static portfolio website built with HTML, CSS, and JavaScript.

## Run locally

1. Open `index.html` directly in your browser.
2. Or use a local server:
   - Install VS Code Live Server extension and click "Go Live".
   - Or run a simple Python server in the project folder:
     ```bash
     python -m http.server 8000
     ```
   - Then visit: `http://localhost:8000`

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Push the contents of this project folder to that repository.
3. In GitHub, go to the repository settings -> Pages.
4. Select the `main` branch and the `/ (root)` folder.
5. Save, then GitHub will provide a published site URL.

### Example GitHub Pages URL

If your GitHub username is `your-username` and your repository is named `my-portfolio-main`, the published site will be available at:

```
https://your-username.github.io/my-portfolio-main/
```

Replace `your-username` with your GitHub username.

## Notes

- The homepage is served from `index.html`.
- If you want a custom domain, add a `CNAME` file with your domain name and configure DNS accordingly.
