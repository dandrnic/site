import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "rmlyrics",
    description:
      "A lyrics scraper with engilsh/romaji translations built on node.js.",
    image: "/rmlyrics.png",
    github: "https://github.com/dandrnic/rmlyrics",
    link: "https://rmlyrics.vercel.app/",
  },
  {
    name: "Audio Transcription Script",
    description:
      "A Jupyter script that transcribes mp4 videos into simple text, using json and AWS apis.",
    image: "/awsscript.png",
    github: "https://github.com/dandrnic/awsTranscription/blob/main/",
    link: "https://github.com/dandrnic/awsTranscription/blob/main/",
  },
  {
    name: "Moon Patrol",
    description: "A remake of the Moon Patrol arcade game on the TIC80 fantasy console.",
    image: "/final_make.gif",
    github: "https://github.com/dandrnic/moonpatrol-remake", 
    link: "https://github.swarthmore.edu/pages/CS91S-F23/make-jnguyen1-ndandre1/make_game/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
