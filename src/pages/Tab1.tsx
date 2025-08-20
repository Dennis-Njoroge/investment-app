import {
    IonButton,
    IonCard,
    IonCardContent, IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab1.css';
import {
    addOutline,
    carOutline,
    giftOutline,
    helpCircleOutline,
    homeOutline,
    phonePortraitOutline,
    schoolOutline,
} from "ionicons/icons";
import DashboardContent from "../components/home/dashboard-content";
import React from "react";

interface GoalProps {
    id: number;
    name: string;
    icon: any;
}

interface HomeProps {
    auth: any
}

const Home: React.FC<HomeProps> = ({ auth}) => {

    const goals: GoalProps[] = [
        {id: 1, name: "Buy a House", icon: homeOutline},
        {id: 2, name: "Buy a Car", icon: carOutline},
        {id: 3, name: "Buy a Phone", icon: phonePortraitOutline},
    ]

    const secondGoals: GoalProps[] = [
        {id: 1, name: "Higher Education", icon: schoolOutline},
        {id: 2, name: "Buy a Gift", icon: giftOutline},
        {id: 3, name: "Buy a Book", icon: addOutline},
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-justify-content-between">
                    <IonTitle slot={"start"}>Hello, {auth?.name}</IonTitle>
                    <IonButton fill="clear" slot="end">
                        <IonIcon icon={helpCircleOutline}/> Help
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <DashboardContent/>
                <IonCard>
                    <IonCardContent className={"investment-card"}>
                        <div>
                            <img src={"assets/img.png"} alt={""}/>
                        </div>
                        <div>
                            <p>Why you should start investing. </p>
                            <p> Learn under 60 seconds. <a href="#">Get Started</a></p>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonCard className="strategy-card">
                    <IonCardContent>
                        Your Investment Strategy: <strong className="balanced-text">Balanced</strong>
                    </IonCardContent>
                </IonCard>
                <div className={"ion-padding-horizontal"}>
                    <h2>Invest on your goal</h2>
                    <p>Invest smarter based on your goals</p>
                </div>

                <IonGrid className={"ion-no-padding goal-grid"}>
                    <IonRow>
                        {goals?.map(goal => (
                            <IonCol sizeMd={"3"} size={"4"} sizeLg={"2"} key={goal.id}>
                                <GoalCard
                                    icon={goal.icon}
                                    text={goal.name}/>
                            </IonCol>
                        ))}
                    </IonRow>
                    <IonRow>
                        {secondGoals?.map(goal => (
                            <IonCol sizeMd={"3"} size={"4"} sizeLg={"2"} key={goal.id}>
                                <GoalCard
                                    icon={goal.icon}
                                    text={goal.name}/>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

const GoalCard: React.FC<{ icon: string; text: string }> = ({icon, text}) => (
    <IonCard className="goal-card">
        <IonCardContent>
            <IonIcon icon={icon} size="large" className={"goal-icon"}/>
            <p>{text}</p>
        </IonCardContent>
    </IonCard>
);

export default Home;
