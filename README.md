[![CircleCI](https://circleci.com/gh/alexbarkin/alexbarkin.github.io/tree/Gatsby-Dev.svg?style=svg)](https://circleci.com/gh/alexbarkin/alexbarkin.github.io/tree/Gatsby-Dev) [![codecov](https://codecov.io/gh/alexbarkin/alexbarkin.github.io/branch/Gatsby-Dev/graph/badge.svg)](https://codecov.io/gh/alexbarkin/alexbarkin.github.io)

<p align="center">
  <a href="traduttore.github.io">
    <img alt="Traduttore" src="./static/trad-icon.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Traduttore
</h1>

Welcome to the code base for alexbarkin.github.io!
If you've made it this far, then you're either interested in my development skills, or a really good stalker...
This website was a fun project I started in September of 2019, and it's always being updated.

## 🚀 The Goal

1.  **Create a wicked site.**

    I was working at [Wave](https://www.waveapps.com) when I first discovered that web development was really cool! I wanted to learn more about it, so I figured I would build a personal webiste.

2.  **Learn, Learn, Learn!**

    I decided to use Gatsby to help with the start up, and learn more about React. I used a bunch of components from [Reactstrap](https://reactstrap.github.io/), a library for react components that use Bootstrap for styling. I chose reactstrap since it was leading edge, and felt I could learn a lot from using their library. I also wanted to learn more about tooling. I set up tools like CircleCI, CodeCov, and Jest to make sure my website is always up to spec!

3.  **Be Creative!**

    Since I was a young Lad, I've loved designing things. This website was super fun to create and make exactly the way I wanted. Everything is straight from my heart ❤️.

## 🧐 What's inside?

Here's a look at the code layout, focusing on the aspects which I wrote.

    .
    ├── _src
    |   ├── components
    |   ├── images
    |   ├── markdown-pages
    |   ├── pages
    |   ├── styles
    |   └── templates
    ├── _static
    |   └── trad-icon.svg
    ├── gatsby-config.js
    ├── gatsby-node.js
    └── README.md

1.  **`/src`**: This is the folder where all the source code for the project lives. This is likely the folder you'll want to check out!

    1. **`/components`**: This is where I define all the components I use throughout the site!
    2. **`/images`**: Here lies the images used throughout the site. They're constantly being updated to add more.
    3. **`/markdown-pages`**: One benefit of [Gatsby](https://www.gatsbyjs.org) is it allows you to render markdown files as html, to look at how check out the `/templates` folder.
    4. **`/pages`**: Here is the main folder which holds all the pages which get rendered on the site (except for the markdown pages).
    5. **`/styles`**: All the CSS (thats not from Bootstrap) lives in here.
    6. **`/templates`**: Here is the aforementioned templates folder where the template for how to render the markdown files lives.

2)  **`/static`**: This folder is where I keep my personal logo/icon!

3)  **`gatsby-config.js`**: This is the configuration file for the Gatsby site. This is where I defined all the plug-ins I needed, as well as the site's metadata.

4)  **`gatsby-node.js`**: This is the file where I specified customization/extension of default Gatsby settings affecting the site's build process.

5)  **`README.md`**: The file you're reading right now! Hopefully enjoying it too.
