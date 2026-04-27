"use client";

import { useEffect, useRef } from "react";

export default function SnowCanvas() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, radius: 110 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        let snowflakes = [];
        let animationFrame;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const createSnowflakes = () => {
            snowflakes = Array.from({ length: 120 }, () => {
                const size = Math.random() * 3 + 1;

                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseR: size,
                    r: size,
                    speedY: Math.random() * 1 + 0.5,
                    drift: Math.random() * 0.6 - 0.3,
                    opacity: Math.random() * 0.5 + 0.4,
                };
            });
        };

        const resetFlake = (flake) => {
            const size = Math.random() * 3 + 1;

            flake.x = Math.random() * width;
            flake.y = -5;
            flake.baseR = size;
            flake.r = size;
            flake.speedY = Math.random() * 1 + 0.5;
            flake.drift = Math.random() * 0.6 - 0.3;
            flake.opacity = Math.random() * 0.5 + 0.4;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const mouse = mouseRef.current;

            snowflakes.forEach((flake) => {
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = flake.x - mouse.x;
                    const dy = flake.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);

                        flake.r -= 0.05 * force;
                        flake.opacity -= 0.04 * force;

                        flake.x += Math.cos(angle) * force * 1.5;
                        flake.y += Math.sin(angle) * force * 1.5;
                    } else {
                        if (flake.r < flake.baseR) flake.r += 0.01;
                        if (flake.opacity < 0.9) flake.opacity += 0.01;
                    }
                }

                flake.y += flake.speedY;
                flake.x += flake.drift;

                if (flake.y > height || flake.r <= 0.2 || flake.opacity <= 0) {
                    resetFlake(flake);
                }

                if (flake.x < 0) flake.x = width;
                if (flake.x > width) flake.x = 0;

                ctx.beginPath();
                ctx.arc(flake.x, flake.y, Math.max(flake.r, 0), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${Math.max(flake.opacity, 0)})`;
                ctx.fill();
            });

            animationFrame = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        resizeCanvas();
        createSnowflakes();
        draw();

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="canvas" />;
}