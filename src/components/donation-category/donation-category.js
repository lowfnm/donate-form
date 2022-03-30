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
import { DonationMethod } from '../donation-method';
import { DonationContainer } from '../donation-method/donation-method.styled';
import { height } from '@mui/system';
import { Spinner } from '../common/spinner';

const DonationCategory = () => {
    const [item, setItem] = useState('wallet');

    return (
        <>
            <CardContainer>
                <Card disableRipple onClick={() => setItem('do')}>
                    <CardItem selected={item === 'do'}>
                        <DoIcon selected={item === 'do'} />
                    </CardItem>

                    <CardTitle selected={item === 'do'}>Зробити</CardTitle>
                </Card>

                <Card disableRipple onClick={() => setItem('wallet')}>
                    <CardItem selected={item === 'wallet'}>
                        <WalletIcon selected={item === 'wallet'} />
                    </CardItem>

                    <CardTitle selected={item === 'wallet'}>
                        Фінансова допомога
                    </CardTitle>
                </Card>

                <Card disableRipple onClick={() => setItem('material')}>
                    <CardItem selected={item === 'material'}>
                        <MaterialIcon selected={item === 'material'} />
                    </CardItem>

                    <CardTitle selected={item === 'material'}>
                        Матеріальна допомога
                    </CardTitle>
                </Card>

                <Card disableRipple onClick={() => setItem('heart')}>
                    <CardItem selected={item === 'heart'}>
                        <HeartIcon selected={item === 'heart'} />
                    </CardItem>

                    <CardTitle selected={item === 'heart'}>
                        Волонтерство
                    </CardTitle>
                </Card>
            </CardContainer>

            {item === 'wallet' ? (
                <DonationMethod />
            ) : (
                <DonationContainer style={{ height: '286px' }}>
                    <Spinner />
                </DonationContainer>
            )}
        </>
    );
};

export default DonationCategory;
