import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Spinner } from '@ui';
import { Suspense } from 'react';
import { path } from './Orderly';

export const HomePage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<Spinner></Spinner>}>
          <div className="full centered">
            <IonButton routerLink={path.PublisherListPage}>
              Publishers
            </IonButton>
          </div>
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
