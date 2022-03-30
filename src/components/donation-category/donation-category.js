import { useState } from 'react';
import {
    CardContainer,
    Card,
    CardItem,
    DoIcon,
    WalletIcon,
    MaterialIcon,
    CardTitle,
    HeartIcon,
} from './donation-category.styled';

const DonationCategory = () => {
    const [item, setItem] = useState('wallet');

    return (
        <CardContainer>
            <Card
                disableRipple
                style={{ backgroundColor: 'transparent' }}
                onClick={() => setItem('do')}
            >
                <CardItem selected={item === 'do'}>
                    <DoIcon selected={item === 'do'} />
                </CardItem>

                <CardTitle selected={item === 'do'}>Зробити</CardTitle>
            </Card>

            <Card
                disableRipple
                style={{ backgroundColor: 'transparent' }}
                onClick={() => setItem('wallet')}
            >
                <CardItem selected={item === 'wallet'}>
                    <WalletIcon selected={item === 'wallet'} />
                </CardItem>

                <CardTitle selected={item === 'wallet'}>
                    Фінансова допомога
                </CardTitle>
            </Card>

            <Card
                disableRipple
                style={{ backgroundColor: 'transparent' }}
                onClick={() => setItem('material')}
            >
                <CardItem selected={item === 'material'}>
                    <MaterialIcon selected={item === 'material'} />
                </CardItem>

                <CardTitle selected={item === 'material'}>
                    Матеріальна допомога
                </CardTitle>
            </Card>

            <Card
                disableRipple
                style={{ backgroundColor: 'transparent' }}
                onClick={() => setItem('heart')}
            >
                <CardItem selected={item === 'heart'}>
                    <HeartIcon selected={item === 'heart'} />
                </CardItem>

                <CardTitle selected={item === 'heart'}>Волонтерство</CardTitle>
            </Card>
        </CardContainer>
    );
};

export default DonationCategory;
