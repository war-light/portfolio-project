import SkillBox from "./skillBox"
import Footer from "../../Footer"

// src/pages/Home.jsx
const Home = () => {
  return (
    <>
      <div className="relative w-full h-full min-h-screen border bg-neutral-900 border-red-500 flex flex-col gap-4">
        <img src="./goldwaves.svg" alt="" className="fixed" />
        <section className="relative w-full border border-red-500 flex flex-wrap h-fit md:h-1/2 gap-20 items-center">
          <section className="relative top-8 left-8 border border-red-400 inline-block h-fit w-fit">
            <h2 className="font-literata">Welcome, traveler</h2>;
            <hr className="border-yellow-200" />
            <h1>I'm David G</h1>
            <br />
            <h3>Fullstack Web Developer</h3>
            <br />
            <div className="border border-yellow-200 w-32 h-16 content-center items-center flex justify-center bg-neutral-800">
              <button className="border border-yellow-200 w-28 h-12 text-white">
                Contact Me
              </button>
            </div>
          </section>
          <section className="relative border border-yellow-200 grid grid-flow-col ml-auto w-10/12 h-fit md:h-4/6 lg:h-5/6 md:w-1/2 rounded-s-3xl gap-5 overflow-hidden">
            <div className="bg-gray-700 max-w-96 min-w-24">
              <img src="./goldwaves.svg" alt="" />
            </div>
            <ul className="text-white p-3">
              <li>100% human</li>
              <li>Solution Maker</li>
              <li>Enviroment adaptability</li>
              <li>[1 + n] years of experience</li>
            </ul>
          </section>
        </section>
        <section className="relative bg-neutral-800 border border-yellow-400 w-10/12 self-center mt-8 p-8">
          <h2>About Me</h2>
          <p className="text-white">
            I'm David G, a full-stack web developer with a passion for creating
            innovative and user-friendly experiences. With a strong background
            in software development and a keen eye for design, I'm dedicated to
            delivering high-quality solutions that meet the needs of users and
            businesses alike.
          </p>
        </section>
        <section className="flex items-center flex-col gap-2 relative bg-neutral-800 border border-yellow-400 w-10/12 self-center mt-8 p-8">
          <h2>My habilities</h2>
          <div className="flex gap-2 w-full flex-wrap">
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
            {/* js,css,tailwind,postgres,react,python,ts,nodejs,wordpress,html,expressjs,bash,flask,vim,vscode,git,github,zustand */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Home
