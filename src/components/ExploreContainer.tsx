import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Log in to view your friends!</strong>
      <IonButton class='custom-button'>Log In</IonButton>
      <IonButton class='custom-button'>Sign Up</IonButton>
    </div>
  );
};

export default ExploreContainer;
