import { FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFountainPreset } from "@tsparticles/preset-fountain";
import { useEffect, useState } from "react";

const ParticlesBackground: FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // load the engine once on mount
    initParticlesEngine(async (engine) => {
      await loadFountainPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: any = {
    preset: "fountain",
    background: { color: { value: "#ffffffff" } },
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;
