import React, { useState } from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';

interface BuyflowProps {
    productId: ProductIds,
};

export enum ProductIds {
    devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES= {
    [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState('email');
    const [collectedData, updateData] = useState({
        'email': '',
        'age': 0,
    });
    const getStepCallback = (nextStep:string) => (

        (field: string, value: any) => {
            updateData({...collectedData, [field]: value});
            setStep(nextStep);
        }
    );
    switch (currentStep) {
        case 'email':
            return <>
                <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
                <EmailStep cb={getStepCallback('age')} />
            </>;
        case 'age':
            return <>
                <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
                <AgeStep  cb={getStepCallback('summary')} />
            </>;
        case 'summary':
            return <>
                <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
                <SummaryStep collectedData={collectedData} />
            </>;
        default:
            return <>
                <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
            </>;
            
    }

};

export default Buyflow;