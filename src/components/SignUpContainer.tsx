import { IonButton, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import './SignUpContainer.css';

interface ContainerProps { }

const SignUpContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Enter your college email</strong>
      <IonInput placeholder='email' />
      <IonButton class='custom-button'>Verify Email</IonButton>
      <Link to="/login" className='discrete-button'>
        <IonButton class='discrete-button'>Log In</IonButton>
      </Link>
    </div>
  );
};

export default SignUpContainer;
