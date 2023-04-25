import {memo, useState} from 'react';
import type { FC } from 'react';

import classes from './Frame6.module.css';
import { Group6921Icon } from './Group6921Icon';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';
import {useLocation, useNavigate} from "react-router-dom";

interface Props {
  className?: string;
}
/* @figmaId 54:273 */
export const Question3Frame: FC<Props> = memo(function Frame6(props = {}) {

    const location = useLocation();
    let navigate = useNavigate();


    const [button_states, set_button_state] = useState([0, 0]);
    const button_colors = ['white', '#4D77FF'];
    const text_colors = ['#4D77FF', 'white'];

    function update_button_state(button: any) {
        const new_buttons = [0, 0];
        new_buttons[button] ^= 1;
        set_button_state(new_buttons);
    }
    const routeChange = () =>{
        let path = '/results';
        for (let i = 0; i < 2; i++) {
            if (button_states[i]) navigate(path, {
                state: {
                    q1_buttons: location.state.q1_buttons,
                    q2_buttons: location.state.q2_button_choice,
                    q3_buttons: i
                }});
        }
    }

  return (
    <div className={`${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group6921}>
        <Group6921Icon className={classes.icon2} />
      </div>
      <div className={classes.areYouCoveredByMedicareMedicai}>Are you covered by Medicare/Medicaid?</div>

      <div className={classes.rectangle3} style={{backgroundColor: button_colors[button_states[0]]}} ></div>
      <button className={classes.yes} style={{color: text_colors[button_states[0]]}} onClick={() => update_button_state(0)}>Yes</button>

      <div className={classes.rectangle4} style={{backgroundColor: button_colors[button_states[1]]}} ></div>
      <button className={classes.no} style={{color: text_colors[button_states[1]]}} onClick={() => update_button_state(1)}>No</button>

      <div className={classes.rectangle7}></div>
      <button className={classes.submit} onClick={routeChange}>Submit</button>

      <div className={classes.undraw_with_love_re_1q3m1}>
        <Undraw_with_love_re_1q3m1Icon className={classes.icon3} />
      </div>
    </div>
  );
});
