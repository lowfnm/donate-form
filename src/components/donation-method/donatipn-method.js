import {
    DonationContainer,
    Wrapper,
    CardWrapper,
    Title,
} from './donation-method.styled';
import { CardMethod } from '../card-method';
import { CardData } from '../card-data';

const DonationMethod = () => {
    return (
        <DonationContainer>
            <Wrapper>
                <CardWrapper>
                    <Title>Спосіб оплати</Title>
                    <Title>Введіть наступні данні</Title>
                </CardWrapper>

                <CardWrapper>
                    <CardMethod />
                    <CardData />
                </CardWrapper>
            </Wrapper>
        </DonationContainer>
    );
};

export default DonationMethod;
