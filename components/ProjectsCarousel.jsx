"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function ProjectsShowcase() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/SkaskoS/repos?per_page=100")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((repo) =>
                    repo.topics?.includes("portfolio")
                );
                setRepos(filtered);
            });
    }, []);


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
                    768: { slidesPerView: 1.35, spaceBetween: 32 },
                    1100: { slidesPerView: 1.6, spaceBetween: 40 },
                    1400: { slidesPerView: 1.8, spaceBetween: 48 },
                }}
                className="projects-showcase-swiper"
            >
                {repos.map((repo, index) => (
                    <SwiperSlide key={repo.id}>
                        <article className="project-showcase-card">
                            <div className="project-showcase-left">
                                <p className="project-number">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3>{repo.name.replaceAll("-", " ")}</h3>
                                <p className="project-description">
                                    {repo.description}
                                </p>
                                <div className="project-links">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        View GitHub Repository
                                    </a>                                 
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}