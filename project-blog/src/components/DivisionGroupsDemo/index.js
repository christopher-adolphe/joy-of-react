// export * from './DivisionGroupsDemo';
// export { default } from './DivisionGroupsDemo';

'use client';

import dynamic from 'next/dynamic';

const DivisionGroupsDemo  = dynamic(() => import('./DivisionGroupsDemo'));

export default DivisionGroupsDemo;
