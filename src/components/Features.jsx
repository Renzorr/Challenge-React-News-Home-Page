import pc from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import { motion } from "framer-motion";

function Features() {
  return (
    <motion.section
      className="container features"
      animate={{ x: [-50, 0], opacity: [0, 1] }}
      transition={{ ease: "easeIn", duration: 1.3 }}
    >
      <div className="feature_item">
        <img src={pc} alt="" aria-hidden="true" className="feature_img" />
        <div className="feature_item_content">
          <span className="feature_number">01</span>
          <h3 className="feature_title">Reviving Retro PCs</h3>
          <p className="feature_info">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="feature_item">
        <img src={laptop} alt="" aria-hidden="true" className="feature_img" />
        <div className="feature_item_content">
          <span className="feature_number">02</span>
          <h3 className="feature_title">Top 10 Laptops of 2022</h3>
          <p className="feature_info">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="feature_item">
        <img src={gaming} alt="" aria-hidden="true" className="feature_img" />
        <div className="feature_item_content">
          <span className="feature_number">03</span>
          <h3 className="feature_title">The Growth of Gaming</h3>
          <p className="feature_info">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
