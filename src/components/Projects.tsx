'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Heading from './Heading';

const data = [
    {
        id: 1,
        title: "E-commerce Website",
        desc: "A stunning cake-ordering platform designed using Figma and developed with Next.js and Tailwind CSS, prioritizing UI & UX for a seamless customer experience.",
        img: "/project-1.jpg",
        tags: ["Next.Js", "Tailwind.css", "Figma", "UI & UX"]
    },
    {
        id: 2,
        title: "Currency Converter",
        desc: "A sleek tool built with HTML, CSS, and TypeScript for real-time currency conversion with a user-friendly interface.",
        img: "/project-2.jpg",
        tags: ["HTML", "CSS", "TypeScript"]
    },
    {
        id: 3,
        title: "E-commerce Website",
        desc: "A mobile-responsive cake-ordering platform designed using Figma and developed with Next.js and Tailwind CSS, focusing on a seamless UI & UX for a great customer experience.",
        img: "/project-3.jpg",
        tags: ["Tailwind CSS", "Next.js", "Figma", "UI & UX"]
    },
    {
        id: 4,
        title: "Resume Builder",
        desc: "A static interactive resume created using HTML, CSS, JavaScript, and TypeScript, designed to provide a personalized and dynamic experience.",
        img: "/project-4.jpg",
        tags: ["HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
        id: 5,
        title: "Portfolio Website",
        desc: "A modern and responsive portfolio website built using Next.js and styled with Tailwind CSS, showcasing projects and skills with a sleek design.",
        img: "/project-5.jpg",
        tags: ["Next.js", "Tailwind CSS"]
    },
    {
        id: 6,
        title: "Furniture E-commerce Website",
        desc: "A modern and responsive e-commerce platform for furniture, designed using Figma and developed with Next.js and Tailwind CSS, prioritizing a seamless UI & UX for a smooth shopping experience.",
        img: "/project-6.jpg",
        tags: ["Next.js", "Tailwind CSS", "Figma", "UI & UX"]
    },
    {
        id: 7,
        title: "Custom CSS Portfolio",
        desc: "A sleek and responsive personal portfolio website built with Next.js and custom CSS, showcasing projects and skills in a clean, modern design.",
        img: "/project-7.jpg",
        tags: ["Next.js", "Custom CSS"]
    },
    {
        id: 8,
        title: "Shareable Resume Builder",
        desc: "A dynamic, shareable resume builder created with HTML, CSS, TypeScript, and JavaScript, allowing users to generate and share personalized resumes easily.",
        img: "/project-8.jpg",
        tags: ["HTML", "CSS", "TypeScript", "JavaScript"]
    },
];

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1200, easing: 'ease-in-out' });
    }, []);

    return (
        <div id="projects" className='container pt-32'>
            <Heading title='My Projects' className='font-bold'/>
            <div className='grid gap-10 xl:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <div
                        key={el.id}
                        className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg flex flex-col items-center p-5"
                        data-aos="zoom-in-up"
                    >
                        <img
                            src={el.img}
                            alt={el.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{el.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{el.desc}</p>
                        <div className="flex gap-2 flex-wrap">
                            {el.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;










