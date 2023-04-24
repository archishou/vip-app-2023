import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../../vite-react-ts-6/src/components/_resets.module.css';
import classes from './Frame17.module.css';
import { Undraw_showing_support_re_5f2v } from './Undraw_showing_support_re_5f2v';

interface Props {
  className?: string;
}
/* @figmaId 54:829 */
export const RecommendationFrame: FC<Props> = memo(function Frame17(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.undraw_showing_support_re_5f2v}>
        <Undraw_showing_support_re_5f2v className={classes.icon} />
      </div>
      <div className={classes.dapagliflozin}>Dapagliflozin</div>
      <div className={classes.weRecommend}>We recommend</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.learnMore}>Learn more</div>
    </div>
  );
});
