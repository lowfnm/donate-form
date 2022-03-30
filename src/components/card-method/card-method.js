import {
    Wrapper,
    Card,
    AtmIcon,
    Title,
    MasterIcon,
    VisaICon,
    WebMoneyIcon,
    PayPalIcon,
    PrivatIcon,
} from './card-method.styled';
import { useState } from 'react';
import CardData from '../card-data/card-data';

const CardMethod = () => {
    const [item, setItem] = useState('privat24');
    return (
        <>
            <Wrapper>
                <Card
                    selected={item === 'visa'}
                    onClick={() => setItem('visa')}
                >
                    <div>
                        <MasterIcon />
                        <VisaICon />
                    </div>
                    <Title>Карта Visa/MasterCard</Title>
                </Card>

                <Card
                    selected={item === 'privat24'}
                    onClick={() => setItem('privat24')}
                >
                    <PrivatIcon />
                    <Title>Приват24</Title>
                </Card>

                <Card
                    selected={item === 'terminal'}
                    onClick={() => setItem('terminal')}
                >
                    <AtmIcon />
                    <Title>Термінал України</Title>
                </Card>

                <Card
                    selected={item === 'webmoney'}
                    onClick={() => setItem('webmoney')}
                >
                    <WebMoneyIcon />
                    <Title>WebMoney</Title>
                </Card>

                <Card
                    selected={item === 'paypal'}
                    onClick={() => setItem('paypal')}
                >
                    <PayPalIcon />
                    <Title>PayPal</Title>
                </Card>
            </Wrapper>

            {item === 'privat24' ? <CardData /> : ''}
        </>
    );
};

export default CardMethod;
