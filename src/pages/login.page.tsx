import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import { useHistory } from 'react-router';

const LoginPage: React.FC = () => {
const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);

    history.push('/main');
  };

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-text-center">
        <div className="login-container">
          <IonButton expand="block" onClick={handleLogin} size="large">
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;