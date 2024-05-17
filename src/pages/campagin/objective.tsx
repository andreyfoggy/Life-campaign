import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';

const Objective: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/campaign/mission" />
          </IonButtons>
          <IonTitle>Do some basic preps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
        <IonLabel>Choose convenient closes, according to weather forecast</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Take a shower 24 hours or less prior to next step</IonLabel>
      </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Objective;
