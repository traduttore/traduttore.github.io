import React from "react";

import Layout from "../components/Layout.jsx";

import "../styles/app.css";

const About = () => (
  <Layout>
    <h1>About</h1>
    <article className="blog-post-content">
      <p>
        {`Communication in service environments between ASL and non-ASL users is difficult without (rare and expensive) ASL interpreters`}
      </p>
      <p>
        {`In grade 9, I took my first coding class. This was a pivotal moment, as
        it exposed me to what would be my new passion. I loved coding because it
        allows me to work with complex technical problems, as well as add
        creativity in the work which I produce. Throughout highschool I took
        part in many tech related extra-curriculars, such as my highschool's
        compotetive coding team, as well as some artistic extra-curriculars like
        my school's play Grease! I loved being able to do both, Artistic and
        technical.`}
      </p>
      <p>
        {`That's when I heard about the University of Waterloo's Mechatronics
        Engineering program. It wasnt necessarily artistic, but it was a diverse
        discipline which would allow me to combine multiple passions of mine.
        The mechanical design and visual coding aspects are more artistic, while
        the electrical engineering and programming allow me to explore complex
        technical challenges. To learn more about my academics and interests,
        feel free to check out one of my `}
        <a href="/Blog">Blog Posts</a>
      </p>
      <h2>{`There's more than just my acedemics!`}</h2>
      <p>
        {`Although I do have a fondness for academia, it is definitely not how I
        define myself. Outside of school I enjoy tinkering on my own projects,
        learning new creative disciplines, and playing with my Jeep! My current
        project happens to be this website. '#TODO: update when I take on my
        next project ;)' Currently, I'm really enjoying working on this site,
        and trying to make it as official as I can. One creative discipline
        which I most recently attempted to master is the art of embroidery. I
        decdided it would be very cool if I was able to decorate premade
        clothing with my own designs. So I set out to learn how, with the help
        of my mother, and Youtube, I completed a simple flower design on a denim
        shirt! Pictures coming soon!`}
        {/* <comment> add Gallery Page </comment> */}
      </p>
      <p>
        {`And finally I get to talk about my Jeep. Ever since I was a wee lad,
        I've always aspired to own a Jeep Wrangler. I think I was really sold on
        the idea after watching Dawson get one on Dawson's Creek. Last year I
        made that dream a reality, and purchased my baby (Blueberry Beast). I
        enjoy taking the roof off, and sometimes even the doors, and just
        spending time with my friends and family while driving! Im sure you want
        to see more, so I've made a `}
        <a href="/Jeep">Jeep page</a>
        {` dedicated to stories and pictures with my Jeep!`}
      </p>
    </article>
  </Layout>
);

export default About;
