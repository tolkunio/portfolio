import React from 'react';
import iconsSprite from '../../assets/icons/sprite.svg';
type IconProps={
    iconId:string,
    width?:string,
    height?:string,
    viewBox:string
}
export const Icon = (props:IconProps) => {
    return (
        <div>
            <svg width={props.width} height={props.height} viewBox={props.viewBox} xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
        </div>
    );
};
