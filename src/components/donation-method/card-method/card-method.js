import {
    CardWrapper,
    Card,
    AtmIcon,
    CardTitle,
    MasterIcon,
    VisaICon,
    WebMoneyIcon,
    PayPalIcon,
    PrivatIcon,
} from './card-method.styled';
import { useState } from 'react';
import CardData from '../card-data/card-data';
import { CardContainer } from '../card-data/card-data.styled';
import { Spinner } from '../../common/spinner';

const CardMethod = () => {
    const [payment, setPayment] = useState('privat24');
    return (
        <>
            <CardWrapper>
                <Card
                    selected={payment === 'visa'}
                    onClick={() => setPayment('visa')}
                >
                    <div>
                        <MasterIcon />
                        <VisaICon />
                    </div>
                    <CardTitle>Карта Visa/MasterCard</CardTitle>
                </Card>

                <Card
                    selected={payment === 'privat24'}
                    onClick={() => setPayment('privat24')}
                >
                    <PrivatIcon />
                    <CardTitle>Приват24</CardTitle>
                </Card>

                <Card
                    selected={payment === 'terminal'}
                    onClick={() => setPayment('terminal')}
                >
                    <AtmIcon />
                    <CardTitle>Термінал України</CardTitle>
                </Card>

                <Card
                    selected={payment === 'webmoney'}
                    onClick={() => setPayment('webmoney')}
                >
                    <WebMoneyIcon />
                    <CardTitle>WebMoney</CardTitle>
                </Card>

                <Card
                    selected={payment === 'paypal'}
                    onClick={() => setPayment('paypal')}
                >
                    <PayPalIcon />
                    <CardTitle>PayPal</CardTitle>
                </Card>
            </CardWrapper>

            {payment === 'privat24' ? (
                <CardData />
            ) : (
                <CardContainer>
                    <Spinner />
                </CardContainer>
            )}
        </>
    );
};

export default CardMethod;
