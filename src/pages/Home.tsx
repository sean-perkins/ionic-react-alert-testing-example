import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const Home: React.FC = () => {
  const [presentAlert, dismissAlert] = useIonAlert();
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const promptRemoveItem = (item: string) => {
    presentAlert({
      message: "Are you sure you want to remove this item?",
      buttons: [
        {
          text: "No",
          role: "cancel",
        },
        {
          text: "Yes, remove it",
          role: "confirm",
          handler: () => removeItem(item),
        },
      ],
    });
  };

  const removeItem = (item: string) => {
    const newItems = items.filter((i) => i !== item);
    setItems(newItems);
    dismissAlert();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {items.map((item) => (
            <IonItem key={item}>
              <IonLabel>{item}</IonLabel>
              <IonButton slot="end" onClick={() => promptRemoveItem(item)}>
                Remove Item
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
