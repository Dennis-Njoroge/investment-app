import React from "react";
import {IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonRow} from "@ionic/react";
import {addOutline, arrowForwardOutline, cashOutline, eyeOutline, swapVerticalOutline} from "ionicons/icons";
import "./dashboard-content.css";

interface ContentProps {
    id: number;
    name: string;
    icon: any
    link?: string
}

const DashboardContent: React.FC = () => {

    const content: ContentProps[] = [
        {id: 1, name: "Transfer", icon: arrowForwardOutline, link: 'topup'},
        {id: 2, name: "Add", icon: addOutline, link: 'topup'},
        {id: 3, name: "Top Up", icon: cashOutline, link: 'topup'},
        {id: 4, name: "Withdraw", icon: swapVerticalOutline, link: 'topup'}
    ];

    return (
        <IonCard className={"balance-card"}>
            <IonCardContent>
                <p className="balance-label">Current Balance</p>
                <div className="balance-amount">
                    <h1 style={{marginRight: "10px"}}>KES 23,627.00</h1>
                    <IonIcon icon={eyeOutline} className="eye-icon"/>
                </div>
                <IonGrid className={"action-grid"}>
                    <IonRow>
                        {content.map((item) => (
                            <IonCol key={item.id}>
                                <IonButton routerLink={item.link} fill={"clear"} className={"action-button"}>
                                    <IonIcon icon={item.icon}/>
                                </IonButton>
                                <p>{item.name}</p>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}

export default DashboardContent;
