import { applyDefaultProps, Container, PixiComponent } from '@inlet/react-pixi';
import * as particles from 'pixi-particles';
import * as PIXI from 'pixi.js';

PIXI.utils.skipHello();

type ParticleEmitterProps = {
  image: string;
  config: particles.OldEmitterConfig | particles.EmitterConfig;
};

type RefProps = {
  _emitter: particles.Emitter;
  _raf: number;
};

export const ParticleEmitter = PixiComponent<
  ParticleEmitterProps & React.ComponentProps<typeof Container>,
  PIXI.ParticleContainer
>('ParticleEmitter', {
  create() {
    return new PIXI.ParticleContainer();
  },
  applyProps(
    instance,
    oldProps: ParticleEmitterProps,
    newProps: ParticleEmitterProps,
  ) {
    const { image, config, ...newP } = newProps;
    applyDefaultProps(instance, oldProps, newP);
    let emitter = (this as unknown as RefProps)._emitter;
    if (!emitter) {
      emitter = new particles.Emitter(
        instance,
        [PIXI.Texture.from(image)],
        config,
      );
      let elapsed = performance.now();
      const tick = () => {
        (this as unknown as RefProps)._raf = requestAnimationFrame(tick);
        const now = performance.now();
        emitter.update((now - elapsed) * 0.0003);
        elapsed = now;
      };
      emitter.emit = true;
      tick();
    }
    (this as unknown as RefProps)._emitter = emitter;
  },
  willUnmount() {
    if ((this as unknown as RefProps)._emitter) {
      (this as unknown as RefProps)._emitter.emit = false;
      cancelAnimationFrame((this as unknown as RefProps)._raf);
    }
  },
});
