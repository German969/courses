import React, { useState } from 'react';
import { Measure, getMeasure } from '../data/measures';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonToolbar,
  IonInput,
  IonButton,
} from '@ionic/react'

import { useHistory } from 'react-router-dom'

import './Add.css';

interface AddProps {
  measures: Array<Measure>,
  setMeasures: Function
}

const Add: React.FC<AddProps> = ({ measures, setMeasures }) => {
  const [measure, setMeasure] = useState<string>('')
  const history = useHistory()
  const today = new Date()

  return (
    <IonPage id='view-measure-page'>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text='Measures' defaultHref='/home'></IonBackButton>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton onClick={() => {
              setMeasures([
                ...measures,
                {
                  weight: measure,
                  id: Math.max.apply(
                    Math,
                    measures.map((item) => parseInt(item.weight))
                  ),
                  date:
                    today.getDate() +
                    ' ' +
                    today.toLocaleString('default', { month: 'short' }),
                },
              ])
              history.push('/home')
            }}>Save</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <>
          <IonItem>
            <IonInput
              value={measure}
              placeholder='Enter Measure'
              onIonChange={(e) => setMeasure(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </>
      </IonContent>
    </IonPage>
  )
}

export default Add;