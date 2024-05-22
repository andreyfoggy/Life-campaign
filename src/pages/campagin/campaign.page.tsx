import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory, useLocation, useParams } from 'react-router';
import { getCampaign, getMissionsByCampaignId } from './../../api';
import { Campaign, Mission } from '../../models';

const CampaignPage: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [missions, setMissions] = useState<Mission[]>([]);

  const location = useLocation<{ campaign: Campaign }>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    const campaignFromLocation = location.state?.campaign;
    if (campaignFromLocation) {
      setCampaign(campaignFromLocation);
    } else {
      fetchCampaign();
    }
  }, []);

  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchCampaign = async () => {
    try {
      const response = await getCampaign(id);
      setCampaign(response.data);
    } catch (error) {
      console.error('Error fetching campaign:', error);
    }
  };

  const fetchMissions = async () => {
    try {
      const response = await getMissionsByCampaignId(id);
      setMissions(response.data);
    } catch (error) {
      console.error('Error fetching missions:', error);
    }
  };

  const handleMissionClick = (  mission : Mission) => {
    history.push(`/campaign/${id}/mission/${mission.id}`,  { mission });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle>{campaign?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard  class="no-shadow">
          <IonCardHeader>
            <IonCardTitle>{campaign?.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{campaign?.description}</p>
          </IonCardContent>
        </IonCard>
  
        {missions?.map((mission, index) => (
          <IonCard
            key={mission.id}
            color="primary"
            onClick={() => handleMissionClick(mission)}
            className={`mission-card ${index === 0 ? 'first-mission' : ''}`}
          >
            <IonCardHeader>
              <IonCardTitle>{mission.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{mission.description}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default CampaignPage;