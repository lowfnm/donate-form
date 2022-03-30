import { DonationContainer, Wrapper, Title } from './donation-method.styled';
import { CardData } from '../card-data';

const DonationMethod = () => {
    return (
        <DonationContainer>
            <Wrapper>
                <Title>Спосіб оплати</Title>
                <CardData />
            </Wrapper>
        </DonationContainer>
    );
};

export default DonationMethod;
