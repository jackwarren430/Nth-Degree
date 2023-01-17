import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SignUpContainer from '../components/SignUpContainer';
import './SignUp.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <strong>Sign Up</strong>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SignUpContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
