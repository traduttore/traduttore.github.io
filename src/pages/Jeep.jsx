import * as React from "react"

import Layout from "../components/Layout.jsx"
import { UncontrolledCarousel } from "reactstrap"
import Jeep1 from "../images/Jeep1.jpg"
import Jeep2 from "../images/Jeep2.jpg"
import Jeep3 from "../images/Jeep3.jpg"
import Jeep4 from "../images/Jeep4.jpg"

import "../styles/app.css"

const items = [
  {
    src: Jeep1,
    key: "1",
  },
  {
    src: Jeep2,
    key: "2",
  },
  {
    src: Jeep3,
    key: "3",
  },
  {
    src: Jeep4,
    key: "4",
  },
]

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export default () => {
  const myRef = React.useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Layout noBorder>
      <div className="flexContainer">
        <UncontrolledCarousel items={items} className="slider" />
        <div className="verticalContainer">
          <button onClick={executeScroll} className="button--scroll">
            Jump to content
          </button>
        </div>
      </div>
      <article className="blog-post-content--border">
        <h1 ref={myRef}>Blueberry Beast</h1>
        <p>
          Ever since I was a wee lad, I've always aspired to own a Jeep
          Wrangler. I think I was really sold on the idea after watching Dawson
          get one on Dawson's Creek. Last year I made that dream a reality, and
          purchased my baby (Blueberry Beast). I enjoy taking the roof off, and
          sometimes even the doors, and just spending time with my friends and
          family while driving! And yes, driving a Wrangler is a little like
          being in a secret club! If you ever get the chance to take one for a
          spin, make sure to wave at the other Wranglers on the road!
        </p>
        <h2>Why do we call her Blueberry Beast you may ask?</h2>
        <p>
          Well, you have to admit that for a car, Blueberry looks a bit like a
          blueberry. I chose a bright blue Jeep, since I really wanted to catch
          people's attention when driving by. My dream was to get a Jeep
          Wrangler, so I had to make my dreams come true. When was looking for
          my car, I couldn't quite decide on the colour. Luckly, when I saw this
          blue, I knew this was the one for me.
        </p>
        <p>
          The reason we call her Beast is actually because of my mother.
          Apparently (I haven't been convinced of this) the steering on the
          Blueberry is a little stiff, and driving it is difficult. My mother
          had to drive Blueberry one day, and came home complaining about how
          hard it was. Then she started asking me if I was gonna take the Beast
          to the mall, or if I had filled the Beast up with gas. Now most people
          would have chosen one name, and probably the name that wasn't Beast.
          But...I thought Blueberry Beast sounded pretty cool, and sometimes I
          even refer to her as Big 'Ol Blueberry Beast!
        </p>
      </article>
    </Layout>
  )
}
