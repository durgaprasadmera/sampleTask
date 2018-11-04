// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Sidebar,
} from './';

export default {
  path: 'sidebar',
  name: 'Sidebar',
  childRoutes: [
    { path: 'sidebar', name: 'Sidebar', component: Sidebar, isIndex: true },
  ],
};
