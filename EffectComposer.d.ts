import * as THREE from 'three';
import React from 'react';
import { EffectComposer as EffectComposerImpl, NormalPass } from 'postprocessing';
import { TextureDataType } from 'three';
export declare const EffectComposerContext: React.Context<{
    composer: EffectComposerImpl;
    normalPass: NormalPass;
    camera: THREE.Camera;
    scene: THREE.Scene;
}>;
export declare type EffectComposerProps = {
    children: JSX.Element | JSX.Element[];
    depthBuffer?: boolean;
    stencilBuffer?: boolean;
    multisampling?: number;
    frameBufferType?: TextureDataType;
    renderPriority?: number;
    camera?: THREE.Camera;
    scene?: THREE.Scene;
    shouldRender?: boolean;
};
declare const EffectComposer: React.MemoExoticComponent<React.ForwardRefExoticComponent<EffectComposerProps & React.RefAttributes<unknown>>>;
export default EffectComposer;
