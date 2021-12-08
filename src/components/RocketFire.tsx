import { Stage } from '@inlet/react-pixi';
import React from 'react';
import { Images } from '../constants/Images';
import emitterConfig from '../data/emitter.json';
import { ParticleEmitter } from './ParticleEmitter';

const RocketFire = () => (
  <Stage
    width={360}
    height={300}
    options={{ transparent: true, resolution: 2 }}
    onMount={(app) => {
      app.renderer.plugins.interaction.autoPreventDefault = false;
      app.renderer.view.style.touchAction = 'auto';
    }}
  >
    <ParticleEmitter
      x={180}
      y={42}
      image={Images.Particle}
      config={emitterConfig}
    />
  </Stage>
);

export default RocketFire;
