import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router';

const CampaignPage: React.FC = () => {
  const history = useHistory();

  const handleCampaignClick = () => {
    history.push('/campaign/mission');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle>Find Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
        <IonLabel>Here's a small campaign description for the content. Nothing more, nothing less.</IonLabel>
      </IonItem>
      <div className="ion-text-center ion-padding">
          <IonCard color='primary' onClick={handleCampaignClick}>
            <IonCardHeader>
              <IonCardTitle>Make a friend in a public place</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Don't be afraid, future missions are much scarier 😅
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CampaignPage;
