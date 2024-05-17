import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const MainPage: React.FC = () => {
  const history = useHistory();

  const handleCampaignClick = () => {
    history.push('/campaign');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Campaigns</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-text-center ion-padding">
          <IonCard color='primary' onClick={handleCampaignClick}>
            <IonCardHeader>
              <IonCardTitle>Find Friends</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              The jorney to a solid social circle.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="ion-text-center ion-padding">
          <IonCard color='medium' >
            <IonCardHeader>
              <IonCardTitle>Lead mafia family</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Become a succesfull mafia leader with a perfect life-work balance 😎
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;