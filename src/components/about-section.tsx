import React from "react"
import Image from "next/image"


const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Lua" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "Unity" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              My name is Nick and I am a current junior at{" "}
              <span className="font-bold">{"Swarthmore College"}</span>,
              majoring in CS and minoring in math.
            </p>
            <br />
            
            <p>
              I'm interested in web dev, game dev, and computer vision.
              In my free time, I enjoy playing volleyball, drawing, and doing improv.
            </p>
            <br />

            <p>
              I'm always seeking new experiences and love to keep myself
              engaged and learning new things! 🙂
            </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
