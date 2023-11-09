import { useCallback } from "react";
import Particles  from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim'

const ParticlesComponent = () => {
    const options = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 5,
                },
                grab: {
                    distance: 100,
                    duration: 0.2,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
                opacity: 0.1,
            },
            links: {
                color: "#ffffff",
                distance: 200,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent;