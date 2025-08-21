import React, {useEffect, useState} from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
    IonText,
    IonIcon,
} from "@ionic/react";
import { pencilOutline } from "ionicons/icons";
import {publish, subscribe} from '@ionic/portals';
interface PageProps {
    auth: any;
}

type Messages =
    | { topic: "cart:checkout"; data: 'test'}
    | { topic: "show-pin"; data: "cancel" | "Yes" | "No" }
    | { topic: "profile:update"; data: 'User' };



const TopUp: React.FC<PageProps> = ({ auth }) => {
    const [amount, setAmount] = useState<string>("");
    const [step, setStep] = useState<1 | 2>(1);

    const handleProceed = () => {
        if (!amount || Number(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
        }
        setStep(2);
    };

    const handleConfirm = () => {
        publish({
            topic: "show-pin",
            data: { show: "Yes", amount }
        });
        console.log("Depositing KSH.", amount);
    };


    const handleEdit = () => {
        setStep(1);
    };

    useEffect(() => {
        const subscription = subscribe("verified-pin", (event ) => {
            console.log("Received show-pin event:", event.data);
            // Here you can call your modal logic inside the Ionic app
            // @ts-ignore
            if (event.data.verified){
                alert(`Transaction Completed Successfully!`);
            }
        });

        return () => {
            // @ts-ignore
            subscription.remove();
        };
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Deposit from ZePay</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {step === 1 ? (
                    <IonCard>
                        <IonCardContent>
                            <IonText className="ion-text-center">
                                <h2>DEPOSIT FROM ZePay</h2>
                            </IonText>

                            <IonItem lines="none" className="ion-margin-top">
                                <IonLabel position="stacked">KSH.</IonLabel>
                                <IonInput
                                    type="number"
                                    value={amount}
                                    placeholder="Enter amount"
                                    onIonChange={(e) => setAmount(e.detail.value!)}
                                    clearInput
                                />
                            </IonItem>

                            <IonButton
                                expand="block"
                                className="ion-margin-top"
                                onClick={handleProceed}
                                color="success"
                            >
                                CONTINUE
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ) : (
                    <IonCard>
                        <IonCardContent>
                            <IonText>
                                <h2 className="ion-text-center">DEPOSIT FROM ZePay</h2>
                            </IonText>

                            <IonItem lines="none">
                                <IonLabel>Source of Funds</IonLabel>
                                <IonText slot="end">ZePay</IonText>
                            </IonItem>

                            <IonItem lines="none">
                                <IonLabel>Amount</IonLabel>
                                <IonText slot="end">KSH. {Number(amount).toFixed(2)}</IonText>
                            </IonItem>

                            <IonItem lines="none">
                                <IonLabel>Fee</IonLabel>
                                <IonText slot="end">KSH. 0</IonText>
                            </IonItem>

                            <IonButton
                                fill="clear"
                                color="medium"
                                size="small"
                                onClick={handleEdit}
                            >
                                <IonIcon icon={pencilOutline} slot="start" />
                                Edit
                            </IonButton>

                            <IonButton
                                expand="block"
                                className="ion-margin-top"
                                onClick={handleConfirm}
                                color="success"
                            >
                                DEPOSIT FROM ZePay
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                )}
            </IonContent>
        </IonPage>
    );
};

export default TopUp;
