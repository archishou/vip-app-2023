import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 126 126' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={63} cy={63} r={63} fill='white' stroke='#4D77FF' strokeWidth={3} />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
