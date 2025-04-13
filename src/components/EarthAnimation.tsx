import { useEffect, useRef } from "react";

const EarthAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Установка размеров canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Звезды
    const stars: { x: number; y: number; radius: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
      });
    }

    let earthRotation = 0;

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Фон космоса
      ctx.fillStyle = "#000921";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Звезды
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Мерцание звезд
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
      });

      // Земля
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      
      // Создаем градиент для Земли
      const earthGradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.85, 
        centerX, centerY, radius
      );
      earthGradient.addColorStop(0, "#1e4877");
      earthGradient.addColorStop(0.5, "#4584b4");
      earthGradient.addColorStop(1, "#5ab9ff");
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = earthGradient;
      ctx.fill();
      
      // Континенты
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(earthRotation);
      
      // Северная Америка
      ctx.beginPath();
      ctx.moveTo(-radius * 0.3, -radius * 0.3);
      ctx.bezierCurveTo(
        -radius * 0.4, -radius * 0.5, 
        -radius * 0.2, -radius * 0.7, 
        radius * 0.1, -radius * 0.5
      );
      ctx.fillStyle = "#4c9a2a";
      ctx.fill();
      
      // Южная Америка
      ctx.beginPath();
      ctx.moveTo(-radius * 0.1, radius * 0);
      ctx.bezierCurveTo(
        -radius * 0.2, radius * 0.2, 
        -radius * 0.1, radius * 0.5, 
        radius * 0.1, radius * 0.4
      );
      ctx.fillStyle = "#5ea832";
      ctx.fill();
      
      // Евразия
      ctx.beginPath();
      ctx.moveTo(radius * 0.1, -radius * 0.4);
      ctx.bezierCurveTo(
        radius * 0.3, -radius * 0.5, 
        radius * 0.7, -radius * 0.3, 
        radius * 0.5, radius * 0
      );
      ctx.fillStyle = "#539c2d";
      ctx.fill();
      
      // Облака
      ctx.beginPath();
      ctx.arc(radius * 0.3, -radius * 0.3, radius * 0.1, 0, Math.PI * 2);
      ctx.arc(radius * 0.45, -radius * 0.35, radius * 0.07, 0, Math.PI * 2);
      ctx.arc(-radius * 0.4, radius * 0.4, radius * 0.12, 0, Math.PI * 2);
      ctx.arc(radius * 0.1, radius * 0.5, radius * 0.08, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fill();
      
      ctx.restore();
      
      // Атмосфера
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(140, 210, 255, 0.3)";
      ctx.lineWidth = 20;
      ctx.stroke();
      
      earthRotation += 0.002;
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />;
};

export default EarthAnimation;
