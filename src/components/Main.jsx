import heroImg from "../assets/images/image-web-3-desktop.jpg";
import heroImgResponsive from "../assets/images/image-web-3-mobile.jpg";
import { motion } from "framer-motion";

function Main() {
  return (
    <main className="container main">
      <motion.section
        className="hero"
        animate={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
      >
        <picture>
          <img
            loading="lazy"
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="hero_img"
          />
          <img
            loading="lazy"
            src={heroImgResponsive}
            alt=""
            aria-hidden="true"
            className="hero_img_responsive"
          />
        </picture>
        <div className="hero_section_content">
          <h1 className="hero_title">The Bright Future of Web 3.0?</h1>
          <div className="section_main_content">
            <p className="hero_info">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="hero_btn">Read more</button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="blog"
        animate={{ y: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="blog_title">New</h2>

        <div className="blogs_section">
          <article className="blog_item">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>

          <article className="blog_item">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>

          <article className="blog_item">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>
      </motion.section>
    </main>
  );
}

export default Main;
