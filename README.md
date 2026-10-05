# Multilente Website Prototype

Live demo: https://sophiaputerman.github.io/multilente-website-prototype/

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/ccd513fa-8753-4d4e-ba94-a9b89f91c9cc" />

Responsive website prototype for Laboratorios Multilente, a Venezuelan ophthalmic products company (contact lenses, solutions, equipment, and surgical products). I built it to improve navigation, product discovery, and the ways customers can reach the company. The site content is in Spanish.

## Background

This was my first coding project, done in the summer of 2025. I built the original site from scratch for a real client, using HTML, CSS, and JavaScript, to learn the fundamentals. I wrote the original code myself. I used AI tools as a learning aid and for occasional debugging help, not to generate the site.

In October 2026 I did a cleanup pass to prepare it for GitHub, using AI tools to help fix bugs and edit images.

## Before and after

*Before*
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/b8862fb1-1f92-4bde-a687-c4715d2aa251" />
*After*
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/2b6472b8-d665-4704-b1e2-eb92a3743b3e" />

The original site was built with outdated HTML and hadn't been updated in years. Its home page was one large promotional image with the contact details baked into the picture, and navigation was a column of image buttons that didn't make it clear what the company sells or where to find things. Company information was missing. I rebuilt it with a top navigation bar and product dropdown, four clear product categories, a home page that leads with those categories, mission and vision content, a real text contact page, and a responsive layout that works on phones.

## Features
- Responsive layout with breakpoints at 960, 768, 600, and 480px 
- Mobile hamburger menu and dropdown navigation
- Hero image carousel in vanilla JavaScript
- Scrollable product-category carousel with buttons and arrow-key support
- Search: keywords route straight to a category, and other terms filter product cards through the URL query
- Category pages for contact lenses, solutions, equipment, and surgical products
- Contact page with email and phone cards 
- "Coming soon" placeholder for the catalog page

<img width="1440" height="776" alt="image" src="https://github.com/user-attachments/assets/e8414de8-d806-4ad6-82a2-f1ff311a329b" />

## Tech

HTML5, CSS3 (flexbox, grid, media queries), vanilla JavaScript, Font Awesome, Google Fonts (Gantari), GitHub Pages

## Design decisions 

- Navigation: I used a dropdown for product categories and large, simple page titles, so visitors always know where they are. Every page is reachable from the top navigation bar or the product cards.
- Product discovery: I added category cards to the home page so visitors can see what the company sells right away. One click on a card opens everything in that category.
- Contact: The old site only showed phone numbers and emails inside an image. I replaced that with a contact page where each phone number and email address is a link, so visitors can call or write with one click.

## What I learned

**Technical**
- **HTML, CSS, and JavaScript from scratch.** This project is where I learned all three, building a real multi-page site instead of following tutorials.
- **Development tools.** I learned to work in an IDE, run a site on localhost, and use the browser's DevTools and console to inspect and debug.
- **One small mistake can break a whole page.** A single missing `</div>` made an entire page look wrong. When I closed it, the layout shifted again, because my CSS had been quietly depending on the broken structure. Now I check the HTML structure first when a layout looks off.
- **Broken pages taught me how to debug.** Shared JavaScript crashed on pages that were missing certain elements, which silently broke search. I learned to find the cause in the console instead of guessing.
- **Sizing and dimensions matter.** Fixed image boxes with `object-fit: cover` cropped my product photos. Switching to `contain` showed the whole image, and I learned to check every page at different screen sizes.
- **Paths behave differently online.** Absolute paths like `/images/logo.png` work locally but break on GitHub Pages, so I switched to relative paths.

**Working with a client**
- **Turning wants into a product.** I met with the business owner to learn what she liked and disliked about the old site, then translated her feedback and my own ideas into a working design.
- **Iterating on feedback.** I changed the site based on her requests, which taught me to communicate clearly with someone non-technical and to adjust a design when it didn't match what she needed.


## Known limitations and next steps

- Equipment, surgical, and solutions pages still use placeholder content, and some lens sub-pages are unfinished
- The catalog page is a "coming soon" placeholder
- Search is simple keyword matching and only covers the category cards
- Images could be compressed and given more descriptive alt text, and each page could use a proper accessibility pass
Run locally

No build step. From the project folder:

python3 -m http.server 8000

Then open http://localhost:8000. You can also use the VS Code Live Server extension.

Project structure
index.html
nosotros.html
productos.html
categoria-*.html
contacto.html
catalogos.html
css/styles.css
js/app.js
images/

### Notes
Product photos and the logo belong to their respective owners and are used here for demonstration only. 
The team photo from the original site is omitted for privacy.

Author
Sophia Puterman Ghitelman, Computer Engineering at Boston University 

