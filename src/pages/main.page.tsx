import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { getAllCampaigns } from './../api';
import { Campaign } from '../models';

const MainPage: React.FC = () => {
  const history = useHistory();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await getAllCampaigns();
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
  };

  const handleCampaignClick = (campaign: Campaign) => {
    history.push(`/campaign/${campaign.id}`, { campaign });
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
          {campaigns.map((campaign) => (
            <IonCard key={campaign.id} color="primary" onClick={() => handleCampaignClick(campaign)}>
              <IonCardHeader>
                <IonCardTitle>{campaign.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{campaign.description}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;