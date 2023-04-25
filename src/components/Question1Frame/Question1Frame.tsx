import {memo, useState} from 'react';
import { useNavigate } from "react-router-dom";
import type { FC } from 'react';

import classes from './Frame4.module.css';
import { Group6921Icon } from './Group6921Icon';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';

interface Props {
  className?: string;
}
/* @figmaId 52:91 */
export const Question1Frame: FC<Props> = memo(function Frame4(props = {}) {
	let navigate = useNavigate();
	const [button_states, set_button_state] = useState([0, 0, 0, 0]);
	const button_colors = ['white', '#4D77FF'];
	const text_colors = ['#4D77FF', 'white'];

	function update_button_state(button: any) {
		const new_buttons = {...button_states};
		new_buttons[button] ^= 1;
		set_button_state(new_buttons);
	}
	const routeChange = () =>{
		let path = '/question2';
		for (let i = 0; i < 4; i++) {
			if (button_states[i]) navigate(path, {state:{q1_buttons: button_states}});
		}
	}
  return (
	<div className={`${classes.root}`}>
	  <div className={classes.rectangle1}></div>
	  <div className={classes.group6921}>
		<Group6921Icon className={classes.icon} />
	  </div>
	  <div className={classes.whatComorbiditiesDoYouHave}>What commodities do you have?</div>

	  <div className={classes.rectangle3} style={{backgroundColor: button_colors[button_states[0]] }}> </div>
	  <button className={classes.hypertension} style={{color: text_colors[button_states[0]]}} onClick={() => update_button_state(0)}>Hypertension</button>

	  <div className={classes.rectangle4} style={{backgroundColor: button_colors[button_states[1]] }}></div>
	  <button className={classes.iBS} style={{color: text_colors[button_states[1]]}} onClick={() => update_button_state(1)}>IBS</button>

	  <div className={classes.rectangle5} style={{backgroundColor: button_colors[button_states[2]] }}></div>
	  <button className={classes.obesity} style={{color: text_colors[button_states[2]]}} onClick={() => update_button_state(2)}>Obesity</button>

	  <div className={classes.rectangle6} style={{backgroundColor: button_colors[button_states[3]] }}></div>
	  <button className={classes.dKD} style={{color: text_colors[button_states[3]]}} onClick={() => update_button_state(3)}>DKD</button>

	  <div className={classes.rectangle7}></div>
	  <button className={classes.submit} onClick={routeChange}>Submit</button>

	  <div className={classes.undraw_with_love_re_1q3m1}>
		<Undraw_with_love_re_1q3m1Icon className={classes.icon2} />
	  </div>
	</div>
  );
});
