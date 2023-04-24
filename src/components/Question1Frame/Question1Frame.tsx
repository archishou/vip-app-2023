import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../../vite-react-ts-3/src/components/_resets.module.css';
import classes from './Frame4.module.css';
import { Group6921Icon } from './Group6921Icon';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';

interface Props {
  className?: string;
}
/* @figmaId 52:91 */
export const Question1Frame: FC<Props> = memo(function Frame4(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group6921}>
        <Group6921Icon className={classes.icon} />
      </div>
      <div className={classes.whatComorbiditiesDoYouHave}>What commodities do you have?</div>
      <div className={classes.rectangle3}></div>
      <button className={classes.hypertension}>Hypertension</button>
      <div className={classes.rectangle4}></div>
      <button className={classes.iBS}>IBS</button>
      <div className={classes.rectangle5}></div>
      <button className={classes.obesity}>Obesity</button>
      <div className={classes.rectangle6}></div>
      <button className={classes.dKD}>DKD</button>
      <div className={classes.rectangle7}></div>
      <button className={classes.submit}>Submit</button>
      <div className={classes.undraw_with_love_re_1q3m1}>
        <Undraw_with_love_re_1q3m1Icon className={classes.icon2} />
      </div>
    </div>
  );
});
