import { memo } from 'react';
import type { FC } from 'react';

import classes from './Frame17.module.css';
import { Undraw_showing_support_re_5f2v } from './Undraw_showing_support_re_5f2v';
import {useLocation, useNavigate} from "react-router-dom";

interface Props {
  className?: string;
}
/* @figmaId 54:829 */
export const RecommendationFrame: FC<Props> = memo(function Frame17(props = {}) {
    const location = useLocation();
    let navigate = useNavigate();

    const comorb = location.state.q1_buttons;
    const budget = location.state.q2_buttons;
    const medicare = location.state.q3_buttons;
    console.log(comorb);
    console.log(budget);
    console.log(medicare);

    const hypertension = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    const obesity = [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0];
    const ibs = [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0];
    const dkd = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]
    const comorbsAnswers = {
        0:hypertension,
        1:obesity,
        2:ibs,
        3:dkd,
    }
    let medIds = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    console.log(comorb)
    for (let i = 0; i < comorb.length; i++) {
        let uMed = (comorbsAnswers as any)[comorb[i]];
        console.log(medIds, uMed)
        for (let j = 0; j < medIds.length; j++) {
            medIds[j] = medIds[j] === 1 && uMed[j] === 1 ? 1: 0;
        }
        medIds = uMed;
    }

    let meds = []
    for (let i = 0; i < medIds.length; i++) {
        if (medIds[i] == 1) {
            meds.push(i)
        }
    }
    const numTMed = {
        0:"Empagliflozin",
        1:"Liraglutide",
        2:"Ipragliflozin",
        3:"Canagliflozin",
        4:"Semaglutide",
        5:"Dulaglutide",
        6:"Metformin",
        7:"Verapamil",
        8:"Exenatide",
        9:"Ertugliflozin",
        10:"Dapagliflozin",
    }
    const budgets = {
        0: [99],
        1: [499],
        2: [999],
        3: [10000]
    }
    const table = {
        0:[757.42, true],
        1:[1260, true],
        2:[571, false],
        3:[604, true],
        4:[1045,true],
        5:[1000,true],
        6:[24,true],
        7:[12,true],
        8:[950,true],
        9:[348,false],
        10:[560,true],
    }
    let medStrings = ""
    let med_count = 0
    for (let i = 0; i < meds.length; i++) {
        let budgetHigh = (budgets as any)[budget][0];
        if (medicare && (table as any)[meds[i]][1]) {
            budgetHigh *= 1.25;
        }
        let medCost = (table as any)[meds[i]][0];
        if (medCost < budgetHigh) {
            if (med_count == 1) medStrings += " and "
            medStrings += (numTMed as any)[meds[i]]
            med_count += 1
        }
        if (med_count >= 2) break
    }
    if (medStrings.length == 0) medStrings = "There are no matches for your input";

  return (
    <div className={`${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.undraw_showing_support_re_5f2v}>
        <Undraw_showing_support_re_5f2v className={classes.icon} />
      </div>
      <div className={classes.dapagliflozin} >{medStrings}</div>
      <div className={classes.weRecommend}>We recommend</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.learnMore}>Learn more</div>
    </div>
  );
});
