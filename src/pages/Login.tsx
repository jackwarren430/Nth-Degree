import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginContainer from '../components/LoginContainer';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
