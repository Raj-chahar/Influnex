"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version for a smaller bundle

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only necessary features
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0c0e15",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // return <Particles id={id} init={particlesLoaded} options={options} />;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-1", // Push behind other content
      }}
    >
      <Particles id={id} init={particlesLoaded} options={options} />
    </div>
  );
};
export default ParticlesComponent;