import {
    DonationContainer,
    Wrapper,
    CardWrapper,
    Title,
} from './donation-method.styled';
import { CardMethod } from './card-method';

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
                </CardWrapper>
            </Wrapper>
        </DonationContainer>
    );
};

export default DonationMethod;
