import React from 'react';
import {Icon} from '../icon/Icon'
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
       <a  onClick={()=>{scroll.scrollToTop()}}>
           <Icon iconId={"cube"} width={'41'} height={'41'} viewBox={'0 0 41 41'}/>
       </a>
    );
};
