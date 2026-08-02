import React from 'react'
import { myProjects } from '../constants'
import Projects from '../components/Projects'

const project = () => {
  return (
    <section className = "relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className ="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px]">
        {myProjects.map((project) => (<Projects key={project.id} {...project}/>))}
      </div>
    </section>
  )
}

export default project
