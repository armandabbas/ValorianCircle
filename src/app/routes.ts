import { createHashRouter } from "react-router-dom";
import { MissionPage } from './pages/MissionPage';
import { SelectionPage } from './pages/SelectionPage';
import { CirclesPage } from './pages/CirclesPage';
import { MembersPage } from './pages/MembersPage';
import { NewPage } from './pages/NewPage';
import { ImprintPage } from './pages/ImprintPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RootLayout } from './layouts/RootLayout';

export const router = createHashRouter([
  {
    path: "/",
    Component: NewPage,
  },
  {
    Component: RootLayout,
    children: [
      { path: "mission", Component: MissionPage },
      { path: "selection", Component: SelectionPage },
      { path: "members", Component: MembersPage },
      { path: "circles", Component: CirclesPage },
      { path: "imprint", Component: ImprintPage },
      { path: "privacy", Component: PrivacyPage },
    ]
  }
]);
