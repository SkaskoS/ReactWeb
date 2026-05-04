"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
    {
        number: "01",
        title: "Dynamic Form System"
    },
    {
        number: "02",
        title: "API + Database Integration"
    },
];

export default function ProjectsShowcase() {
    return (
        <div className="projects-showcase-wrap">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.15}
                spaceBetween={24}
                speed={700}
                breakpoints={{
                    768: {
                        slidesPerView: 1.35,
                        spaceBetween: 32,
                    },
                    1100: {
                        slidesPerView: 1.6,
                        spaceBetween: 40,
                    },
                    1400: {
                        slidesPerView: 1.8,
                        spaceBetween: 48,
                    },
                }}
                className="projects-showcase-swiper"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.number}>
                        <article className="project-showcase-card">
                            <div className="project-showcase-left">
                                    <p className="project-number">{project.number}</p>
                                    <h3>{project.title}</h3>
                                    <p className="project-description">
                                        {project.description}
                                    </p>                                   
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}