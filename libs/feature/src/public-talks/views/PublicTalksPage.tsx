import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Button, Spinner } from '@ui';
import { Suspense } from 'react';
import { WeekPicker } from '../components/WeekPicker';
import { getMondaysForNext26Weeks } from '../helper/getMondaysArray';

export const PublicTalksPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>PublicTalksPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<Spinner></Spinner>}>
          <div className="full centered">
            <Button onClick={() => console.log(getMondaysForNext26Weeks())}>
              Button
            </Button>
            <WeekPicker></WeekPicker>
          </div>
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default PublicTalksPage;
