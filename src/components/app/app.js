import { Container } from '../common/container';
import { Title } from '../common/title';
import { UserInfoForms } from '../user-info-forms';
import { SubTitle, ButtonContainer, SubmitButton } from './app.styled';
import { DonationCategory } from '../donation-category';
import { DonationMethod } from '../donation-method';

const App = () => {
    return (
        <Container>
            <Title>Заповніть форму</Title>
            <UserInfoForms />
            <Title>Види допомоги</Title>
            <SubTitle>Ви можете змінити вид допомоги</SubTitle>
            <DonationCategory />
            <DonationMethod />
            <ButtonContainer>
                <SubmitButton
                    disableRiple
                    style={{ backgroundColor: 'transparent' }}
                    form="form"
                    type="submit"
                >
                    Допомогти
                </SubmitButton>
            </ButtonContainer>
        </Container>
    );
};

export default App;
