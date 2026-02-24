import { useEffect, useRef, useCallback } from 'react'
import './AnimatedBackground.css'

function AnimatedBackground() {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    const particlesRef = useRef([])
    const orbsRef = useRef([])
    const mouseRef = useRef({ x: -1000, y: -1000 })

    const createParticles = useCallback((width, height) => {
        const count = Math.min(Math.floor((width * height) / 18000), 80)
        return Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.8 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.005,
            pulsePhase: Math.random() * Math.PI * 2,
        }))
    }, [])

    const createOrbs = useCallback((width, height) => {
        const colors = [
            { r: 96, g: 165, b: 250 },   // accent blue
            { r: 167, g: 139, b: 250 },   // purple
            { r: 59, g: 130, b: 246 },    // deeper blue
            { r: 139, g: 92, b: 246 },    // violet
        ]
        return Array.from({ length: 4 }, (_, i) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            radius: Math.random() * 200 + 120,
            color: colors[i % colors.length],
            opacity: Math.random() * 0.04 + 0.02,
            wobbleSpeed: Math.random() * 0.003 + 0.001,
            wobblePhase: Math.random() * Math.PI * 2,
            wobbleRadius: Math.random() * 30 + 10,
        }))
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let time = 0

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr
            canvas.style.width = window.innerWidth + 'px'
            canvas.style.height = window.innerHeight + 'px'
            ctx.scale(dpr, dpr)
            particlesRef.current = createParticles(window.innerWidth, window.innerHeight)
            orbsRef.current = createOrbs(window.innerWidth, window.innerHeight)
        }

        resize()
        window.addEventListener('resize', resize)

        const handleMouse = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMouse, { passive: true })

        const animate = () => {
            const w = window.innerWidth
            const h = window.innerHeight
            time += 1

            ctx.clearRect(0, 0, w, h)

            // Draw gradient orbs
            const orbs = orbsRef.current
            for (let i = 0; i < orbs.length; i++) {
                const orb = orbs[i]
                orb.wobblePhase += orb.wobbleSpeed
                orb.x += orb.vx + Math.sin(orb.wobblePhase) * 0.3
                orb.y += orb.vy + Math.cos(orb.wobblePhase * 0.7) * 0.3

                // Wrap around edges
                if (orb.x < -orb.radius) orb.x = w + orb.radius
                if (orb.x > w + orb.radius) orb.x = -orb.radius
                if (orb.y < -orb.radius) orb.y = h + orb.radius
                if (orb.y > h + orb.radius) orb.y = -orb.radius

                const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
                grad.addColorStop(0, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${orb.opacity * 1.5})`)
                grad.addColorStop(0.5, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${orb.opacity * 0.5})`)
                grad.addColorStop(1, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},0)`)
                ctx.fillStyle = grad
                ctx.beginPath()
                ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
                ctx.fill()
            }

            // Update & draw particles
            const particles = particlesRef.current
            const connectionDist = 120
            const mx = mouseRef.current.x
            const my = mouseRef.current.y

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]
                p.pulsePhase += p.pulseSpeed
                p.x += p.vx
                p.y += p.vy

                // Mouse interaction — gentle push away
                const dmx = p.x - mx
                const dmy = p.y - my
                const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy)
                if (mouseDist < 150 && mouseDist > 0) {
                    const force = (150 - mouseDist) / 150 * 0.4
                    p.vx += (dmx / mouseDist) * force * 0.05
                    p.vy += (dmy / mouseDist) * force * 0.05
                }

                // Dampen velocity
                p.vx *= 0.998
                p.vy *= 0.998

                // Wrap around
                if (p.x < 0) p.x = w
                if (p.x > w) p.x = 0
                if (p.y < 0) p.y = h
                if (p.y > h) p.y = 0

                // Pulsing opacity
                const pulseAlpha = p.opacity + Math.sin(p.pulsePhase) * 0.15

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 210, 255, ${Math.max(0.05, pulseAlpha)})`
                ctx.fill()

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < connectionDist) {
                        const lineAlpha = (1 - dist / connectionDist) * 0.12
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            // Draw mouse glow
            if (mx > 0 && my > 0) {
                const mouseGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 180)
                mouseGrad.addColorStop(0, 'rgba(96, 165, 250, 0.06)')
                mouseGrad.addColorStop(1, 'rgba(96, 165, 250, 0)')
                ctx.fillStyle = mouseGrad
                ctx.beginPath()
                ctx.arc(mx, my, 180, 0, Math.PI * 2)
                ctx.fill()
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationRef.current)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouse)
        }
    }, [createParticles, createOrbs])

    return <canvas ref={canvasRef} className="animated-bg" />
}

export default AnimatedBackground
