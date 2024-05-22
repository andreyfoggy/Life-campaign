import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useHistory, useLocation, useParams } from 'react-router';
import { getMissionById, getObjectivesByMissionId } from '../../../api';
import './mission.scss';
import { Mission, Objective } from '../../../models';

const MissionComponent: React.FC = () => {
  const history = useHistory();
  const { id, missionId } = useParams<{ id: string; missionId: string }>();

  const location = useLocation<{ mission: Mission }>();
  const [mission, setMission] = useState<Mission | null>(null);
  const [objectives, setObjectives] = useState<Objective[]>([]);

  useEffect(() => {
    const missionFromLocation = location.state?.mission;
    if (missionFromLocation) {
      setMission(missionFromLocation);
    } else {
      fetchMission();
    }
  }, []);

  useEffect(() => {
    fetchObjectives();
  }, []);

  const fetchMission = async () => {
    try {
      const response = await getMissionById(missionId);
      setMission(response.data);
    } catch (error) {
      console.error('Error fetching mission:', error);
    }
  };

  const fetchObjectives = async () => {
    try {
      const response = await getObjectivesByMissionId(missionId);
      setObjectives(response.data);
    } catch (error) {
      console.error('Error fetching objectives:', error);
    }
  };

  const handleObjectiveClick = (objective: Objective) => {
    history.push(`/campaign/${id}/mission/${missionId}/objective/${objective.id}`, { objective });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/campaign/${id}`} />
          </IonButtons>
          <IonTitle>{mission?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard class="no-shadow">
          <IonCardHeader>
            <IonCardTitle>{mission?.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{mission?.description}</p>
          </IonCardContent>
        </IonCard>
  
        {objectives.map((objective, index) => (
          <IonCard
            key={objective.id}
            color={objective.id === '1' ? 'success' : 'primary'}
            onClick={() => handleObjectiveClick(objective)}
            className={`objective-card ${index === 0 ? 'first-objective' : ''}`}
          >
            <IonCardHeader>
              <IonCardTitle color={objective.id === '1' ? 'light' : undefined}>{objective.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent color={objective.id === '1' ? 'light' : undefined}>            <p>{objective.description}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default MissionComponent;
