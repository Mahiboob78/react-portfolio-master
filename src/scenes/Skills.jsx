import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import SkillsLevel from "../skills/SkillsLevel"

const Skills = () => {
  return (
    <section id="skills" className="pt-2 pb-0">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
            MY <span className="text-red">SKILLS</span>
          </p>
        <LineGradient width="mx-auto w-2/5" />
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[450px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        
          <div data-aos="fade-up" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow" >
          <div className="text-black">
            <SkillsLevel skillsName="HTML5" percentage="90%" />
            <SkillsLevel skillsName="CSS3" percentage="95%" />
            <SkillsLevel skillsName="SASS" percentage="85%" />
            <SkillsLevel skillsName="Bootstrap" percentage="75%" />
            <SkillsLevel skillsName="Tailwind CSS" percentage="95%" />
          </div>
          </div>
         
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[450px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div data-aos="fade-down" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow">
          <div className="text-black">
            <SkillsLevel skillsName="JavaScript" percentage="85%" />
            <SkillsLevel skillsName="ReactJs" percentage="90%" />
            <SkillsLevel skillsName="Redux" percentage="80%" />
            <SkillsLevel skillsName="RESTful API" percentage="85%" />
            <SkillsLevel skillsName="NextJs" percentage="80%" />
          </div>
        </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[450px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div data-aos="fade-up" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow">
          <div className="text-black">
            <SkillsLevel skillsName="Git" percentage="80%" />
            <SkillsLevel skillsName="GitHub" percentage="90%" />
            <SkillsLevel skillsName="Vite" percentage="95%" />
            <SkillsLevel skillsName="Firebase" percentage="75%" />
            <SkillsLevel skillsName="Locafy" percentage="85%" />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
