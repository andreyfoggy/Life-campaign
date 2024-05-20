import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonTextarea, IonRow, IonCol, IonImg } from '@ionic/react';

const Objective: React.FC = () => {

  const [rating, setRating] = useState(0);

  const smileys = [
    'src/assets/slightly-smiling-face.svg',
    'src/assets/neutral-face.svg',
    'src/assets/slightly-frowning-face.svg',
  ];

  const handleRating = (index: any) => {
    setRating(index + 1);
  };

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

      <IonRow>
      {smileys.map((smiley, index) => (
        <IonCol key={index} onClick={() => handleRating(index)}>
          <IonImg
            src={smiley}
            style={{
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              opacity: rating === index + 1 ? 1 : 0.5,
            }}
          />
        </IonCol>
      ))}
    </IonRow>

      <IonItem>
        <IonTextarea label="Your feedback" labelPlacement="stacked" placeholder="Thoughts on the task"></IonTextarea>
      </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Objective;
