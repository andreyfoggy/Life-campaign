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
      <IonContent>
        <IonItem>
          <IonLabel>{campaign?.description}</IonLabel>
        </IonItem>
        <div className="ion-text-center ion-padding">
          {missions?.map((mission) => (
            <IonCard key={mission.id} color="primary" onClick={() => handleMissionClick(mission)}>
              <IonCardHeader>
                <IonCardTitle>{mission.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{mission.description}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CampaignPage;