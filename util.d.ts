import React, { ForwardRefExoticComponent } from 'react';
import { Vector2 } from 'three';
import { Effect, BlendFunction } from 'postprocessing';
declare type DefaultProps = Partial<{
    blendFunction: BlendFunction;
    opacity: number;
}>;
export declare const wrapEffect: <T extends new (...args: any[]) => Effect>(effectImpl: T, defaultBlendMode?: BlendFunction) => React.ForwardRefExoticComponent<ConstructorParameters<T>[0] & Partial<{
    blendFunction: BlendFunction;
    opacity: number;
}>>;
export declare const useVector2: (props: any, key: string) => Vector2;
/**
 * @deprecated can cause too many webGL Context error, instead this should be let for dev to check,
 * or attempt to get from existing canvas
 */
export declare const isWebGL2Available: () => boolean;
export {};
