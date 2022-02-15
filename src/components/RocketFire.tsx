import { Stage } from '@inlet/react-pixi';
import React from 'react';
import { Images } from '../constants/Images';
import emitterConfig from '../data/emitter.json';
import { ParticleEmitter } from './ParticleEmitter';

const RocketFire = () => (
  <Stage
    width={720}
    height={600}
    options={{ backgroundAlpha: 0, resolution: 2 }}
    onMount={(app) => {
      app.renderer.plugins.interaction.autoPreventDefault = false;
      app.renderer.view.style.touchAction = 'auto';
    }}
  >
    <ParticleEmitter
      x={360}
      y={84}
      width={180}
      height={150}
      image={Images.Particle}
      config={emitterConfig}
    />
  </Stage>
);

export default RocketFire;
