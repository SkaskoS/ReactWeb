"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -200, y: -200, radius: 90 });
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const { x, y, radius } = mouseRef.current;

            const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
            glow.addColorStop(0, "rgba(255,255,255,0.16)");
            glow.addColorStop(0.4, "rgba(255,255,255,0.08)");
            glow.addColorStop(1, "rgba(255,255,255,0)");

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();

            animationRef.current = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const interactive = e.target.closest("a, button");

            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.radius = interactive ? 110 : 90;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = -200;
            mouseRef.current.y = -200;
        };

        resizeCanvas();
        draw();

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-canvas" />;
}