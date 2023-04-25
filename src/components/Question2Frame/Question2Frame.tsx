import {memo, useState} from 'react';
import type { FC } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Arrow_back_24px } from './Arrow_back_24px/Arrow_back_24px';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './Frame5.module.css';
import { Group6921Icon } from './Group6921Icon';
import { IconNavigationArrow_back_24pxI } from './IconNavigationArrow_back_24pxI';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';

interface Props {
  className?: string;
}
/* @figmaId 54:222 */
export const Question2Frame: FC<Props> = memo(function Frame5(props = {}) {
    const location = useLocation();
    let navigate = useNavigate();


    const [button_states, set_button_state] = useState([0, 0, 0, 0]);
    const button_colors = ['white', '#4D77FF'];
    const text_colors = ['#4D77FF', 'white'];

    function update_button_state(button: any) {
        const new_buttons = [0, 0, 0, 0];
        new_buttons[button] ^= 1;
        set_button_state(new_buttons);
    }
    const routeChange = () =>{
        let path = '/question3';
        for (let i:number = 0; i < 4; i++) {
            if (button_states[i]) navigate(path, {state:{q1_buttons: location.state.q1_buttons, q2_button_choice: i}});
        }
    }
  return (
    <div className={`${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group6921}>
        <Group6921Icon className={classes.icon2} />
      </div>
      <div className={classes.pleaseSelectYourTreatmentBudge}>Please select your treatment budget:</div>

      <div className={classes.rectangle3} style={{backgroundColor: button_colors[button_states[0]] }}></div>
      <button className={classes._50} style={{color: text_colors[button_states[0]]}} onClick={() => update_button_state(0)}>&lt;50</button>

      <div className={classes.rectangle4} style={{backgroundColor: button_colors[button_states[1]] }}></div>
      <button className={classes._100500} style={{color: text_colors[button_states[1]]}} onClick={() => update_button_state(1)}>100-500</button>

      <div className={classes.rectangle5} style={{backgroundColor: button_colors[button_states[2]] }}></div>
      <button className={classes._5001000} style={{color: text_colors[button_states[2]]}} onClick={() => update_button_state(2)}>500-1000</button>

      <div className={classes.rectangle6} style={{backgroundColor: button_colors[button_states[3]] }}></div>
      <button className={classes._1000} style={{color: text_colors[button_states[3]]}} onClick={() => update_button_state(3)}>&gt;1000</button>

      <div className={classes.rectangle7}></div>
      <button className={classes.submit} onClick={routeChange}>Submit</button>

      <div className={classes.undraw_with_love_re_1q3m1}>
        <Undraw_with_love_re_1q3m1Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon4} />
      </div>
      <Arrow_back_24px
        className={classes.arrow_back_24px}
        swap={{
          iconNavigationArrow_back_24px: <IconNavigationArrow_back_24pxI className={classes.icon} />,
        }}
      />
    </div>
  );
});
