import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SignUpContainer from '../components/SignUpContainer';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Signup Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SignUpContainer />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
