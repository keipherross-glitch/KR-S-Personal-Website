# Keipher Ross | Personal Website

A personal website that introduces me, shows my interests and skills, and showcases the projects I have built. I am a year 2 Information Technology student at T.A. Marryshow Community College, and I'm aiming to become a software engineer and cloud architect.

**Live site:** https://keipherross-glitch.github.io/KR-S-Personal-Website/

## Summary of the JavaScript Enhancements

This assignment builds on my redesigned website by adding five JavaScript features in one external file, `js/script.js`. Each feature is its own function, and each one checks that its element exists first, so the same script can load safely on all four pages. The work was done on the `feature/javascript-enhancements` branch and merged into `main` through a Pull Request.

## The Five Features

| # | Feature | Page | What it does |
|---|---|---|---|
| 1 | Time-based welcome message | Home | Reads the visitor's local time and changes the greeting to "Good Morning", "Good Afternoon" or "Good Evening". |
| 2 | Live digital clock | Footer, all pages | Shows the current date and time and updates every second. |
| 3 | Dark / light mode toggle | Navigation, all pages | Switches the whole site between themes by changing a class on the body, and remembers the choice using `localStorage`. |
| 4 | Character counter | Contact | Counts the characters typed in the message box as the visitor types, and turns red when the limit is near. |
| 5 | Add a skill to the table | Home | Reads a skill name and level from a form, checks them, and builds a new row in the skills table. |

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid, variables, media queries, animations)
- JavaScript (DOM manipulation, events, `localStorage`)
- Git and GitHub, including GitHub Desktop and GitHub Pages
- Visual Studio Code and the Live Server extension

## Project Directory Structure

```
KR-S-Personal-Website/
├── index.html
├── about.html
├── portfolio.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── anime.jpg
    ├── pic.jpeg
    ├── school.jpeg
    ├── football.jpg
    ├── basketball.jpg
    ├── morijin.jpg
    ├── codingjavascript.jpeg
    ├── portfolio1.png
    └── portolio2.png
```


## Responsive Design Strategy

The site is made responsive for screens on mobile, tablet, and desktop devices.

- **Desktop:** text appears alongside images via Flexbox, and a two-column CSS grid design is used in the contact section.
- **Tablet (900px max width):** images, paddings, and hexagon border sizes are decreased, and the contact layout stacks at 768px.
- **Mobile (600px max width):** navigation wraps under the logo, all layouts switch to a single column layout, and images fit the entire screen.
- Images have a maximum width of 100%, and the viewport is defined on all pages.
- The new JavaScript controls (the theme button, character counter and skill form) wrap neatly at narrow widths.
- Animations are turned off for people who prefer reduced motion.

## Image Credits

- Skills page photo (image from the internet): "Person coding on multiple screens at night" by Abdullahi Mohamud on [Unsplash](https://unsplash.com/photos/person-coding-on-multiple-screens-at-night-xeCywSyt8Zc), licensed under the Unsplash License.
- Footballer photograph: [CNN](https://media.cnn.com/api/v1/images/stellar/prod/221203200749-lionel-messi-celebrating-argentina-australia-tease.jpg?c=16x9)
- Basketball player photograph: [add the source]
- God of Highschool artwork: [Pinterest](https://www.pinterest.com/pin/700661654543565802/) ([add the artist's name if you can find it])
- Home page illustration: [add the artist or source]
- All other images are my own screenshots and photographs.

## Use of AI Assistance

I used an AI assistant for guidance on code structure and Git steps. I tested the site myself and can explain the code.

## Reflection

In this project I included five different JavaScript functions in my personal website: timed greeting function, clock function, light and dark mode toggle button, counter on the contact page, and form that adds new rows to skills table. My problems mostly concerned some small issues. With dark mode, I needed to convert colours that were hard coded in my CSS to variables because otherwise parts of my page remained unchanged. Skills table did not work at first because I forgot to give the body of my table the same id name as the one I used in JavaScript. Browser console helped me with debugging those kinds of errors.

Now I know that the DOM allows JavaScript to find, modify, create and delete elements, and that events like click, input and submit allow webpage to react to visitors actions. Working on a separate branch protected my live page when I was testing, and committing every single feature separately made my process of working clear. Pull Request allowed me to review all my changes before merging them with main. Next time I will test light mode sooner and save additional skills.