// import { useState } from 'react';
import {
    CardContainer,
    CardWrapper,
    CardTitle,
    InputWrapper,
    CardInput,
} from './card-data.styled';

const CardData = () => {
    // const [cardNumber1, setCardNumber1] = useState('');
    //
    // const [cardNumber2, setCardNumber2] = useState('');
    // const [cardNumber2Ref, setCardNumber2Focus] = UseFocus();
    //
    // const [cardNumber3, setCardNumber3] = useState('');
    // const [cardNumber3Ref, setCardNumber3Focus] = UseFocus();
    //
    // const [cardNumber4, setCardNumber4] = useState('');
    // const [cardNumber4Ref, setCardNumber4Focus] = UseFocus();
    //
    // const [validity1, setValidity1] = useState('');
    // const [validity1Ref, setValidity1Focus] = UseFocus();
    //
    // const [validity2, setValidity2] = useState('');
    // const [validity2Ref, setValidity2Focus] = UseFocus();
    //
    // const [cvv, setCvv] = useState('');
    // const [cvvRef, setCvvFocus] = UseFocus();

    return (
        <CardContainer>
            <CardWrapper>
                <CardTitle>Номер карти</CardTitle>
                <InputWrapper>
                    <CardInput type="number" />
                    <CardInput type="number" />
                    <CardInput type="number" />
                    <CardInput type="number" />
                </InputWrapper>

                <InputWrapper>
                    <div>
                        <CardTitle>Термін дії</CardTitle>
                        <CardInput type="number" />
                    </div>

                    <div>
                        <CardTitle>CVC/CVV</CardTitle>
                        <CardInput type="number" />
                    </div>
                </InputWrapper>
            </CardWrapper>
        </CardContainer>
    );
};

export default CardData;
