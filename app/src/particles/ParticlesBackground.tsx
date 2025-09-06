import { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useEffect, useState } from "react";

const ParticlesBackground: FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // load the engine once on mount
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: any = {
    preset: "links",
    background: { color: { value: "#3a4885ff" } },
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;
