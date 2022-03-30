import { useState } from 'react';
import {
    CardContainer,
    CardWrapper,
    CardTitle,
    InputWrapper,
    CardInput,
} from './card-data.styled';

const CardData = () => {
    const [card1, setCard1] = useState('');
    const [card2, setCard2] = useState('');
    const [card3, setCard3] = useState('');
    const [card4, setCard4] = useState('');

    return (
        <CardContainer>
            <CardWrapper>
                <CardTitle>Номер карти</CardTitle>
                <InputWrapper>
                    <CardInput
                        type="text"
                        value={card1}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (
                                val.length <= 4 &&
                                isFinite(Number(val)) &&
                                !val.includes(' ')
                            ) {
                                setCard1(val);
                            }
                        }}
                    />
                    <CardInput
                        type="text"
                        value={card2}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (
                                val.length <= 4 &&
                                isFinite(Number(val)) &&
                                !val.includes(' ')
                            ) {
                                setCard2(val);
                            }
                        }}
                    />
                    <CardInput
                        type="text"
                        value={card3}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (
                                val.length <= 4 &&
                                isFinite(Number(val)) &&
                                !val.includes(' ')
                            ) {
                                setCard3(val);
                            }
                        }}
                    />
                    <CardInput
                        type="text"
                        value={card4}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (
                                val.length <= 4 &&
                                isFinite(Number(val)) &&
                                !val.includes(' ')
                            ) {
                                setCard4(val);
                            }
                        }}
                    />
                </InputWrapper>

                <InputWrapper>
                    <div>
                        <CardTitle>Термін дії</CardTitle>
                        <CardInput type="text" />
                    </div>

                    <div>
                        <CardTitle>CVC/CVV</CardTitle>
                        <CardInput type="text" />
                    </div>
                </InputWrapper>
            </CardWrapper>
        </CardContainer>
    );
};

export default CardData;
