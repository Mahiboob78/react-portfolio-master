import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-0 pb-2">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        
        <div className=" md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute  before:-left-5
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="about"
                className="z-10"
                src="assets/mahi.jpg"
              />
            </div>
          ) : (
            <img alt="about" className="z-10" src="assets/mahi.jpg" />
          )}
        </div>

        <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
            >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          As a frontend developer with 2 years of experience, 
          I am passionate about designing and developing web applications with a premium touch.
          {/* “As a programmer, it is your job to put yourself out of business. 
          What you do today can be automated tomorrow.” - Doug McIlroy */}
          <div>Name: Mahiboob B</div>
          <div>Education: BCA</div>
          <div>Experience: 2 Years @ CTS</div>
          <div>Name: Mahiboob B</div>
          <div>Education: BCA</div>
          <div>Name: Mahiboob B</div>
          </p>
        </motion.div>

        
      </div>

      
    </section>
  );
};

export default About;
