import { IonButton, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import './LoginContainer.css';

interface ContainerProps { }

const LoginContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Log in to view your friends!</strong>
      <IonInput placeholder='email' />
      <IonInput placeholder='password' />
      <IonButton class='custom-button'>Log In</IonButton>
      <Link to="/signup">
        <IonButton class='custom-button'>Sign Up</IonButton>
      </Link>
    </div>
  );
};

export default LoginContainer;
