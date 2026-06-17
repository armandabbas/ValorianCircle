import { createHashRouter } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CirclesPage } from './pages/CirclesPage';
import { MembersPage } from './pages/MembersPage';
import { MissionPage } from './pages/MissionPage';
import { FellowshipsPage } from './pages/FellowshipsPage';
import { ImprintPage } from './pages/ImprintPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LogoDownloadPage } from './pages/LogoDownloadPage';
import { SubmittedPage } from './pages/SubmittedPage';
import { PricingEligibilityPage } from './pages/PricingEligibilityPage';
import { NewPage } from './pages/NewPage';
import { MenuPage } from './pages/MenuPage';
import { RootLayout } from './layouts/RootLayout';

export const router = createHashRouter([
  {
    path: "/",
    Component: NewPage,
  },
  {
    path: "/circles",
    Component: CirclesPage,
  },
  {
    path: "/members",
    Component: MembersPage,
  },
  {
    Component: RootLayout,
    children: [
      { path: "home", Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "about-circles", Component: HomePage },
      { path: "mission", Component: MissionPage },
      { path: "fellowships", Component: FellowshipsPage },
      { path: "logos", Component: LogoDownloadPage },
      { path: "pricing-eligibility", Component: PricingEligibilityPage },
      { path: "imprint", Component: ImprintPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "submitted", Component: SubmittedPage },
    ],
  },
  {
    path: "/menu",
    Component: MenuPage,
  },
]);
