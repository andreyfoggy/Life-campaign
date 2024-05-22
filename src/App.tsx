import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.scss';
import MainPage from './pages/main.page';
import CampaignPage from './pages/campagin/campaign.page';
import LoginPage from './pages/login.page';
import ObjectiveComponent from './pages/campagin/objective/objective';
import MissionComponent from './pages/campagin/mission/mission';

setupIonicReact();

const App: React.FC = () => (
<IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/campaign/:id" component={CampaignPage} />
      <Route exact path="/campaign/:id/mission/:missionId" component={MissionComponent} />
      <Route exact path="/campaign/:id/mission/:missionId/objective/:objectiveId" component={ObjectiveComponent} />
      <Redirect exact from="/" to="/login" />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);

export default App;
