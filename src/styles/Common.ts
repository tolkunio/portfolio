import {theme} from "./Theme";

type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    fmin?: number,
    fmax?: number
}
export const font = ({family, weight, color, lineHeight, fmin, fmax}: fontPropsType) => `
    font-family:${family || 'Poppins'};
    font-weight:${weight || 400};
    color:${color || theme.colors.baseFontColor};
    line-height:${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1280 - 360) * (${fmax} - ${fmin}) + ${fmin}px);

`
