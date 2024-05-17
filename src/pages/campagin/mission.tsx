import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router';

const Mission: React.FC = () => {
  const history = useHistory();

  const handleCampaignClick = () => {
    history.push('/campaign/mission/objective');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/campaign" />
          </IonButtons>
          <IonTitle>Make a friend in a public place</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
        <IonLabel>Don't be afraid, future missions are much scarier 😅</IonLabel>
      </IonItem>
      <div className="ion-text-center ion-padding">
          <IonCard color='success' onClick={handleCampaignClick}>
            <IonCardHeader>
              <IonCardTitle color='light'>Do some basic preps</IonCardTitle>
            </IonCardHeader>
            <IonCardContent color='light'>
              Clothing, shower, snacks
            </IonCardContent>
          </IonCard>
      </div>
      <div className="ion-text-center ion-padding">
          <IonCard color='primary' onClick={handleCampaignClick}>
            <IonCardHeader>
              <IonCardTitle>Whatever next step</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              whatever description
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mission;
