import React, { useEffect, useRef } from 'react';

const CanvasDots = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;

        // Configuration - Adjusted for larger, sparser crosses
        const SPACING = 57; // ~10% more dots than 60 spacing
        const CROSS_SIZE = 19; // Reduced size by 5% from 20
        const CROSS_THICKNESS = 4; // Doubled from 2
        const DOT_COLOR = 'rgba(211, 47, 47, 0.035)'; // Very subtle opacity to lay over cards properly

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Handle high DPI displays for crisp rendering
        const dpr = window.devicePixelRatio || 1;

        const setupCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        };
        setupCanvas();

        let mouseX = -1000;
        let mouseY = -1000;
        let scrollY = window.scrollY;

        // Grid stores individual hover "spin" momentum for each cross
        let grid = [];
        const initGrid = (keepOld = false) => {
            const cols = Math.ceil(width / SPACING) + 1;
            const rows = Math.ceil(height / SPACING) + 1;

            const newGrid = Array.from({ length: cols }, (_, i) =>
                Array.from({ length: rows }, (_, j) => {
                    if (keepOld && grid[i] && grid[i][j]) {
                        return grid[i][j];
                    }
                    return { hoverAngle: 0, velocity: 0 };
                })
            );
            grid = newGrid;
        };
        initGrid();

        const handleResize = () => {
            setupCanvas();
            initGrid(true); // Persist momentum across resizes (e.g., mobile URL bar hiding)
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // For touch devices (mobile swiping/touching on background)
        const handleTouchMove = (e) => {
            if (e.touches && e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        };

        const handlePointerLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('mouseleave', handlePointerLeave);
        window.addEventListener('touchend', handlePointerLeave);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const drawCross = (x, y, angle) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.beginPath();
            // Draw horizontal arm
            ctx.rect(-CROSS_SIZE / 2, -CROSS_THICKNESS / 2, CROSS_SIZE, CROSS_THICKNESS);
            // Draw vertical arm
            ctx.rect(-CROSS_THICKNESS / 2, -CROSS_SIZE / 2, CROSS_THICKNESS, CROSS_SIZE);
            ctx.fillStyle = DOT_COLOR;
            ctx.fill();
            ctx.restore();
        };

        // Find all text and interactive elements to mask out
        const getElementsToMask = () => {
            return document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, input, textarea, .glass-card');
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Draw all the crosses normally
            ctx.globalCompositeOperation = 'source-over';

            // Global rotation from scrolling: 1 degree per 10 pixels scrolled
            const baseAngle = (scrollY / 10) * (Math.PI / 180);

            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    const cx = i * SPACING;
                    const cy = j * SPACING;

                    const dx = cx - mouseX;
                    const dy = cy - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Add rotational velocity if pointer is near (reduced area of spin by 40% to 300px)
                    if (dist < 300) {
                        const force = (300 - dist) / 300;
                        grid[i][j].velocity += force * 0.05; // Slightly increased acceleration for the larger area
                    }

                    // Apply friction to slow down over time
                    grid[i][j].velocity *= 0.92;
                    grid[i][j].hoverAngle += grid[i][j].velocity;

                    // Final angle is global scroll angle + local hover momentum
                    const totalAngle = baseAngle + grid[i][j].hoverAngle;

                    drawCross(cx, cy, totalAngle);
                }
            }

            // 2. Erase/Fade crosses that are behind text and interactive elements
            ctx.globalCompositeOperation = 'destination-out';
            const elements = getElementsToMask();

            elements.forEach(el => {
                const rect = el.getBoundingClientRect();

                // Only process elements currently in the viewport to save performance
                if (rect.top < height && rect.bottom > 0 && rect.width > 0 && rect.height > 0) {
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    // Make the mask slightly larger than the element for a soft fade edge
                    const radiusX = (rect.width / 2) + 20;
                    const radiusY = (rect.height / 2) + 20;
                    const maxRadius = Math.max(radiusX, radiusY);

                    // Create a soft radial gradient that erases strongly in the center and fades out
                    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
                    // 0.85 alpha ensures it gets "extra blurry" and barely shows, but doesn't completely vanish
                    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
                    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.5)');
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                    ctx.fillStyle = gradient;

                    ctx.save();
                    // Draw an ellipse that conforms to the shape of the text/button bounding box
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, radiusX, radiusY, 0, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.restore();
                }
            });

            // Reset composite operation for next frame
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('mouseleave', handlePointerLeave);
            window.removeEventListener('touchend', handlePointerLeave);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // z-index 9998 matches the old body::after to stay on top of the layout but behind modals
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9998] opacity-100 transition-opacity duration-500"
            style={{ width: '100vw', height: '100vh' }}
            aria-hidden="true"
        />
    );
};

export default CanvasDots;
