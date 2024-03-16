// export * from './CircularColorsDemo';
// export { default } from './CircularColorsDemo';

'use client';

import dynamic from 'next/dynamic';

const CircularColorsDemo = dynamic(() => import('./CircularColorsDemo'));

export default CircularColorsDemo;
