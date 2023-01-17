import { IonButton } from '@ionic/react';
import './SignUpContainer.css';

interface ContainerProps { }

const SignUpContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Log in to view your friends!</strong>
      <IonButton class='custom-button'>Log In</IonButton>
      <IonButton class='custom-button'>Log In</IonButton>
    </div>
  );
};

export default SignUpContainer;
