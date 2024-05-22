import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonTextarea, IonRow, IonCol, IonImg, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useLocation, useParams } from 'react-router';
import { Objective, PlayerHistory, Vibe } from '../../../models';
import { saveFeedback, Feedback, getPlayerHistoryByPlayerId } from '../../../api';

const ObjectiveComponent: React.FC = () => {
  const { id, missionId } = useParams<{ id: string; missionId: string; objectiveId: string }>();
  const location = useLocation<{ objective: Objective }>();
  const objective = location.state?.objective;

  const [rating, setRating] = useState(0);
  const smileys = [
    'src/assets/slightly-smiling-face.svg',
    'src/assets/neutral-face.svg',
    'src/assets/slightly-frowning-face.svg',
  ];

  const handleRating = (index: any) => {
    setRating(index + 1);
  };

  const [feedback, setFeedback] = useState('');
  const [vibe, setVibe] = useState(Vibe.Happy);
  const [playerHistory, setPlayerHistory] = useState<PlayerHistory | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchPlayerHistory();
  }, []);

  const fetchPlayerHistory = async () => {
    try {
      const response = await getPlayerHistoryByPlayerId();
      console.log(response.data);
        (item: PlayerHistory) => item.objectiveId === objective.id
        console.log(objective)
      const history = response.data.find(
        (item: PlayerHistory) => item.objectiveId === objective.id
      );
      if (history) {
        setPlayerHistory(history);
        setFeedback(history.feedback);
        setVibe(history.vibe);
        handleRating(history.vibe);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error fetching player history:', error);
    }
  };


  const handleFeedbackInput = (event: CustomEvent) => {
    setFeedback(event.detail.value);
  };

  const handleSubmit = async () => {
    try {
      if(!feedback) {
        return;
      }

      const feedbackData: Feedback = {
        objectiveId: objective.id,
        feedback,
        vibe,
      };

      await saveFeedback(feedbackData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving feedback:', error);
      // Show an error message to the user
    }
  };
  if (!objective) {
    return <div>Loading...</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/campaign/${id}/mission/${missionId}`} />
          </IonButtons>
          <IonTitle>{objective.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{objective.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{objective.detail}</p>
          </IonCardContent>
        </IonCard>
  
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>How do you feel about it?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow className="ion-justify-content-center">
              {smileys.map((smiley, index) => (
                <IonCol key={index} size="auto" className="ion-text-center">
                  <IonButton
                    fill="clear"
                    onClick={() => {
                      handleRating(index);
                      setVibe(index);
                    }}
                  >
                    <IonImg
                      src={smiley}
                      style={{
                        width: '50px',
                        height: '50px',
                        opacity: rating === index + 1 ? 1 : 0.5,
                      }}
                    />
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          </IonCardContent>
        </IonCard>
  
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Your Feedback</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonTextarea
                placeholder="Share your thoughts about the task"
                value={feedback}
                onIonInput={handleFeedbackInput}
                rows={4}
                className="custom-textarea"
              ></IonTextarea>
            </IonItem>
          </IonCardContent>
        </IonCard>
  
        {submitted && feedback && vibe !== undefined && (
          <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle>Objective Complete!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Thank you for providing your feedback and completing the objective.</p>
            </IonCardContent>
          </IonCard>
        )}
  
        <div className="ion-padding">
          <IonButton expand="block" onClick={handleSubmit} disabled={!feedback || vibe === undefined}>
            Submit Feedback
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ObjectiveComponent;
