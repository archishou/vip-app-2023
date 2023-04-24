import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../../vite-react-ts-5/src/components/_resets.module.css';
import { Arrow_back_24px } from './Arrow_back_24px/Arrow_back_24px';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './Frame6.module.css';
import { Group6921Icon } from './Group6921Icon';
import { IconNavigationArrow_back_24pxI } from './IconNavigationArrow_back_24pxI';
import { Undraw_with_love_re_1q3m1Icon } from './Undraw_with_love_re_1q3m1Icon';

interface Props {
  className?: string;
}
/* @figmaId 54:273 */
export const Question3Frame: FC<Props> = memo(function Frame6(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group6921}>
        <Group6921Icon className={classes.icon2} />
      </div>
      <div className={classes.areYouCoveredByMedicareMedicai}>Are you covered by Medicare/Medicaid?</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.yes}>Yes</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.no}>No</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.submit}>Submit</div>
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
