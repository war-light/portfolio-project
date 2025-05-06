import SkillBox from "./SkillBox"
import Footer from "../../Footer"

const Home = () => {
  return (
    <>
      <div className="relative w-full h-full min-h-screen flex flex-col gap-4 pt-8 bg-gradient-to-b from-black via-neutral-900 to-neutral-800 items-center">
        <img
          src="./goldwaves.svg"
          alt=""
          className="fixed opacity-10 pointer-events-none"
        />

        {/* Header */}
        <section className="relative w-full lg:w-max flex flex-wrap h-fit md:h-1/2 gap-20 items-center animate-fadeIn">
          <section className="relative top-8 left-8 inline-block h-fit w-fit animate-slideInUp">
            <h2 className="font-literata text-gold">Welcome, traveler</h2>
            <hr className="border-darkerGold" />
            <h1 className="text-darkGold font-bold">I'm David G</h1>
            <br />
            <h3 className="text-gold">Fullstack Web Developer</h3>
            <br />
            <div className="border border-gold w-32 h-16 content-center items-center flex justify-center bg-neutral-800">
              <button className="border border-gold w-28 h-12 text-white hover:bg-gold hover:text-black transition-colors">
                Contact Me
              </button>
            </div>
          </section>

          {/* Right Box */}
          <section className="relative grid grid-flow-col ml-auto w-10/12 h-fit md:h-4/6 lg:h-5/6 md:w-1/2 rounded-s-3xl gap-10 overflow-hidden animate-slideInUp delay-200 bg-gradient-to-r from-black to-transparent">
            <div className="bg-gray-700 max-w-96 min-w-24 rounded-l-3xl overflow-hidden">
              <img src="./goldwaves.svg" alt="" />
            </div>
            <ul className="text-white p-3 space-y-2 flex flex-col justify-center">
              <li>✅ 100% human</li>
              <li>🧠 Solution Maker</li>
              <li>🌍 Enviroment adaptability</li>
              <li>🕒 [1 + n] years of experience</li>
            </ul>
          </section>
        </section>

        {/* About Me */}
        <section className="relative bg-neutral-800 border border-gold w-10/12 max-w-[80rem] self-center mt-8 p-8 rounded-xl animate-fadeIn">
          <h2 className="text-darkGold font-semibold mb-2">About Me</h2>
          <p className="text-white">
            I'm David G, a full-stack web developer with a passion for creating
            innovative experiences. With a strong background
            in software development and a keen eye for design, I'm dedicated to
            delivering high-quality solutions that meet the needs of users and
            businesses alike.
          </p>
        </section>

        {/* Skills */}
        <section className="flex items-center flex-col gap-2 relative bg-neutral-800 border max-w-[80rem] border-gold w-10/12 self-center mt-8 p-8 rounded-xl animate-fadeIn delay-200">
          <h2 className="text-darkGold font-semibold">My Skills</h2>
          <div className="flex gap-2 w-full flex-wrap justify-center">
            <SkillBox iconName="js" />
            <SkillBox iconName="css" />
            <SkillBox iconName="tailwind" />
            <SkillBox iconName="postgres" />
            <SkillBox iconName="react" />
            <SkillBox iconName="python" />
            <SkillBox iconName="ts" />
            <SkillBox iconName="nodejs" />
            <SkillBox iconName="wordpress" />
            <SkillBox iconName="html" />
            <SkillBox iconName="express" />
            <SkillBox iconName="bash" />
            <SkillBox iconName="flask" />
            <SkillBox iconName="vim" />
            <SkillBox iconName="vscode" />
            <SkillBox iconName="git" />
            <SkillBox iconName="github" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Home
