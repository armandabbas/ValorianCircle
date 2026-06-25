import { createHashRouter } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { MissionPage } from './pages/MissionPage';
import { SelectionPage } from './pages/SelectionPage';
import { CirclesPage } from './pages/CirclesPage';
import { MembersPage } from './pages/MembersPage';
import { NewPage } from './pages/NewPage';
import { RootLayout } from './layouts/RootLayout';

export const router = createHashRouter([
  {
    path: "/",
    Component: NewPage,
  },
  {
    Component: RootLayout,
    children: [
      { path: "landing", Component: LandingPage },
      { path: "mission", Component: MissionPage },
      { path: "selection", Component: SelectionPage },
      { path: "members", Component: MembersPage },
      { path: "circles", Component: CirclesPage },
    ]
  }
]);
