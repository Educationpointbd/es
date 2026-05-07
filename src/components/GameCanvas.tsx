import React, { useRef, useEffect } from 'react';

export const GameCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Simple animation loop
        let animationFrameId: number;
        const render = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw bubble (example)
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
            ctx.fillStyle = '#0ff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#0ff';
            ctx.fill();
            ctx.closePath();

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas ref={canvasRef} width={400} height={600} className="border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></canvas>;
};
