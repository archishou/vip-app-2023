import {memo, useState} from 'react';
import type { FC } from 'react';

import resets from '../../../../dkd/src/components/_resets.module.css';
import classes from './Frame32.module.css';
import { Frame6921Icon } from './Frame6921Icon';
import { IconNavigationArrow_back_24pxI } from './IconNavigationArrow_back_24pxI';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';
import {useLocation, useNavigate} from "react-router-dom";

interface Props {
  className?: string;
}
/* @figmaId 20:1944 */
export const DKD: FC<Props> = memo(function Frame32(props = {}) {
    let navigate = useNavigate();
    const location = useLocation();

    const [button_states, set_button_state] = useState([0, 0]);
    const button_colors = ['white', '#4D77FF'];
    const text_colors = ['#4D77FF', 'white'];

    function update_button_state(button: any) {
        const new_buttons = [0, 0];
        new_buttons[button] = 1;
        set_button_state(new_buttons);
    }
    const openInNewTab = () => {
        const newWindow = window.open("https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome#:~:text=Irritable%20bowel%20syndrome%20(IBS)%20is,disease%20in%20your%20digestive%20tract.", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const routeChange = () =>{
        let path = '/question2';
        for (let i = 0; i < 2; i++) {
            if (button_states[i]) navigate(path, {state:{
                    q1_buttons: [location.state.hypertension, location.state.ibs, location.state.obesity, i]
            }});
        }
    }

    return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.diabeticKidneyDiseaseOccursWhe}>
        Diabetic kidney disease occurs when the kidneys are damaged from both high blood pressure and high blood sugar.
      </div>
      <div className={classes.diabeticKidneyDiseaseOccursWhe2}>
        Diabetic kidney disease occurs when the kidneys are damaged from both high blood pressure and high blood sugar.
      </div>
      <div className={classes.doYouHaveDKD}>Do you have DKD?</div>
      <div className={classes.undraw_with_love_re_1q3m1}>
        <Undraw_with_love_re_1q3m1Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle3}></div>
        <button className={classes.continue} onClick={routeChange}>Continue</button>

        <div className={classes.rectangle4} style={{backgroundColor: button_colors[button_states[1]]}}  ></div>
        <div className={classes.rectangle5} style={{backgroundColor: button_colors[button_states[0]]}} ></div>

        <button className={classes.yes}  style={{color: text_colors[button_states[1]]}} onClick={() => update_button_state(1)} >Yes</button>
        <button className={classes.no} style={{color: text_colors[button_states[0]]}} onClick={() => update_button_state(0)}>No</button>

      <div className={classes.rectangle6}></div>
        <button className={classes.clickHereForMoreInformation} onClick={() => openInNewTab()}>Click here for more information</button>
      <div className={classes.frame6921}>
        <Frame6921Icon className={classes.icon4} />
      </div>
    </div>
  );
});
