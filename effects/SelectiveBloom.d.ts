import { SelectiveBloomEffect } from 'postprocessing';
import React, { MutableRefObject } from 'react';
import { Object3D } from 'three';
declare type ObjectRef = MutableRefObject<Object3D>;
export declare type SelectiveBloomProps = ConstructorParameters<typeof SelectiveBloomEffect>[2] & Partial<{
    lights: ObjectRef[];
    selection: ObjectRef | ObjectRef[];
    selectionLayer: number;
}>;
export declare const SelectiveBloom: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<SelectiveBloomEffect>>;
export {};
