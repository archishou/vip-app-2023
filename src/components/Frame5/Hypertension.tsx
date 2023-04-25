import {memo, useState} from 'react';
import type { FC } from 'react';

import classes from './Frame5.module.css';
import { Frame6921Icon } from './Frame6921Icon';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';
import {useNavigate} from "react-router-dom";

interface Props {
  className?: string;
}
/* @figmaId 15:59 */
export const Hypertension: FC<Props> = memo(function Frame5(props = {}) {
    let navigate = useNavigate();
    const [button_states, set_button_state] = useState([0, 0]);
    const button_colors = ['white', '#4D77FF'];
    const text_colors = ['#4D77FF', 'white'];

    function update_button_state(button: any) {
        const new_buttons = [0, 0];
        new_buttons[button] = 1;
        set_button_state(new_buttons);
    }
    const routeChange = () =>{
        let path = '/ibs';
        for (let i = 0; i < 2; i++) {
            if (button_states[i]) navigate(path, {state:{hypertension: i}});
        }
    }

    return (
    <div className={`${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.HypertensionOrHighBloodPressur}>
        *Hypertension, or high blood pressure, is usually 180/120 or higher
      </div>
      <div className={classes.someSymptomsMayIncludeSevereHe}>
        Some symptoms may include severe headaches, chest pain, dizziness, and difficulty breathing.
      </div>
      <div className={classes.doYouHaveHypertension}>Do you have hypertension?</div>
      <div className={classes.undraw_with_love_re_1q3m1}>
        <Undraw_with_love_re_1q3m1Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle3}></div>
      <button className={classes.continue} onClick={routeChange}>Continue</button>
      <div className={classes.rectangle4} style={{backgroundColor: button_colors[button_states[1]]}}  ></div>
      <div className={classes.rectangle5} style={{backgroundColor: button_colors[button_states[0]]}} ></div>

      <button className={classes.yes}  style={{color: text_colors[button_states[1]]}} onClick={() => update_button_state(1)} >Yes</button>
      <button className={classes.no} style={{color: text_colors[button_states[0]]}} onClick={() => update_button_state(0)}>No</button>

      <div className={classes.frame6921}>
        <Frame6921Icon className={classes.icon2} />
      </div>
    </div>
  );
});
