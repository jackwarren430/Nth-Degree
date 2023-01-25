import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personOutline, settingsOutline } from 'ionicons/icons';


import FriendsContainer from '../components/FriendsContainer';
import ConnectContainer from '../components/ConnectContainer';
import SettingsContainer from '../components/SettingsContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home/friends">
              <FriendsContainer />
            </Route>
            <Route exact path="/home/connect">
              <ConnectContainer />
            </Route>
            <Route exact path="/home/settings">
              <SettingsContainer />
            </Route>
            <Route exact path="/home">
              <Redirect to="/home/friends" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
        <IonTabs>
        <IonTabBar slot="bottom">
          <IonTabButton tab="friends" href="/home/friends">
            <IonIcon icon={homeOutline} />
            <IonLabel>Friends</IonLabel>
          </IonTabButton>
          <IonTabButton tab="connect" href="/home/connect">
            <IonIcon icon={personOutline} />
            <IonLabel>Connect</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/home/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Home;
