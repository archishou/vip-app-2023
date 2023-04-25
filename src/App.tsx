import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { WelcomeFrame } from './components/WelcomeFrame/WelcomeFrame';
import { Question1Frame } from './components/Question1Frame/Question1Frame';
import { Question2Frame } from './components/Question2Frame/Question2Frame';
import { RecommendationFrame } from './components/RecommendationFrame/RecommendationFrame';
import {Question3Frame} from "./components/Question3Frame/Question3Frame";
import {Hypertension} from "./components/Frame5/Hypertension";
import {IBS} from "./components/Frame8/IBS";
import {Obesity} from "./components/Frame17/Obesity";
import {DKD} from "./components/Frame32/DKD";


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomeFrame/>} />
            <Route path="/hypertension"  element={<Hypertension/>} />
            <Route path="/ibs"          element={<IBS/>} />
            <Route path="/obesity"      element={<Obesity/>} />
            <Route path="/dkd"          element={<DKD/>} />
            <Route path="/question2" element={<Question2Frame/>} />
            <Route path="/question3" element={<Question3Frame/>} />
            <Route path="/results" element={<RecommendationFrame/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
});
