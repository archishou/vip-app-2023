import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../../../../vite-react-ts-4/src/components/_resets.module.css';
import classes from './Arrow_back_24px.module.css';
import { IconNavigationArrow_back_24pxI } from './IconNavigationArrow_back_24pxI';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconNavigationArrow_back_24px?: ReactNode;
  };
}
/* @figmaId 57:999 */
export const Arrow_back_24px: FC<Props> = memo(function Arrow_back_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.iconNavigationArrow_back_24px}>
        {props.swap?.iconNavigationArrow_back_24px || <IconNavigationArrow_back_24pxI className={classes.icon} />}
      </div>
    </div>
  );
});
