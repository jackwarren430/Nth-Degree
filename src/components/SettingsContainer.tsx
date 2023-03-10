import { IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './SettingsContainer.css';

interface ContainerProps { }

const SettingsContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Log in to view your friends!</strong>
      <Link to="/login">
        <IonButton class='custom-button'>Log In</IonButton>
      </Link>
      <Link to="/signup">
        <IonButton class='custom-button'>Sign Up</IonButton>
      </Link>    
    </div>
  );
};

export default SettingsContainer;
