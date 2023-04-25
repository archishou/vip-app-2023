import { memo } from 'react';
import { useNavigate } from "react-router-dom";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame3.module.css';
import { Undraw_doctors_p6aq1Icon } from './Undraw_doctors_p6aq1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 43:17 */
export const WelcomeFrame: FC<Props> = memo(function Frame3(props = {}) {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/question1`;
        navigate(path);
    }
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.weLlRecommendTheBestTreatmentP}>
        We’ll recommend the best treatment plan for you based on your commodities and current insurance plan!
      </div>
      <div className={classes.undraw_doctors_p6aq1}>
        <Undraw_doctors_p6aq1Icon className={classes.icon} />
      </div>
      <div className={classes.disclaimerWeAreNotLicensedProf}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Disclaimer</span>
          <span className={classes.label2}>
            : We are not licensed professionals. Please consult with your doctor before beginning treatment options.
          </span>
        </p>
      </div>
      <div className={classes.rectangle3}></div>
      <button className={classes.getStartedNow} onClick={routeChange}>Get started now</button>
      <div className={classes.welcome}>Welcome</div>
      <div className={classes.diabetesAndChronicDiseaseSyste}>Diabetes and Chronic Disease Systems</div>
    </div>
  );
});
