import React from 'react'

const skills = () => {
  return (
    <div id="skills" className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'> 
        <div data-aos="zoom-in-up" >
        <h2 className='text-4xl md:tech-5xl font-bold'>Technologies I Work With</h2>
        <p className='text-gray-500 pt-2'>
        I have built a strong foundation in web development, with a focus on HTML, CSS, and JavaScript. I specialize in using modern frameworks like React and Next.js to create dynamic, responsive, and user-friendly web applications. Additionally, I am proficient in using Tailwind CSS for efficient and scalable styling, which allows me to create clean and visually appealing designs.
With a passion for continuous learning, I stay updated with the latest technologies and industry trends, ensuring that I can apply best practices to every project. My goal is to leverage these skills to contribute effectively to innovative and impactful projects.
        </p>
    </div>
    <div>
      <div className='grid grid-cols-2 text-yellow-600 text-3xl sm:text-4xl'>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Typescript</h2>
          <h2 data-aos="zoom-in-up">Next.Js</h2>
          <h2 data-aos="zoom-in-up">React.Js</h2>
        </div>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Tailwind</h2>
          <h2 data-aos="zoom-in-up">CSS</h2>
          <h2 data-aos="zoom-in-up">Node.js</h2>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default skills