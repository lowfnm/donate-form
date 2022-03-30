import { useState } from 'react';
import { InputLabel } from '@mui/material';
import { BaseInput } from '../common/base-input';
import {
    Form,
    StyledButtonGroup,
    StyledButton,
    ContentSection,
    ContentLine,
    DataForm,
    SmallForm,
} from './user-info-forms.styled';
import { SubTitle } from '../app/app.styled';

const UserInfoForms = () => {
    const [formType, setFormType] = useState('physical');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');

    return (
        <>
            <StyledButtonGroup variant="outlined" aria-label="buttons">
                <StyledButton
                    selected={formType === 'physical'}
                    onClick={() => setFormType('physical')}
                >
                    Фіз. особа
                </StyledButton>
                <StyledButton
                    selected={formType !== 'physical'}
                    onClick={() => setFormType('')}
                >
                    Юр. особа
                </StyledButton>
            </StyledButtonGroup>

            {formType !== 'physical' ? (
                <SubTitle>In Working</SubTitle>
            ) : (
                <Form
                    id="form"
                    action="#"
                    method="POST"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setName('');
                        setSurname('');
                        setCompany('');
                        setEmail('');
                        setPhone('');
                        setCountry('');
                        setCity('');
                        setState('');
                        setAddress('');
                        setZip('');
                    }}
                >
                    <ContentSection>
                        <ContentLine>
                            <DataForm>
                                <InputLabel htmlFor="name">Ім'я</InputLabel>
                                <BaseInput
                                    id="name"
                                    type="text"
                                    title="Введіть ваше ім'я"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </DataForm>

                            <DataForm>
                                <InputLabel htmlFor="surname">
                                    Фамілія
                                </InputLabel>
                                <BaseInput
                                    id="surname"
                                    type="text"
                                    title="Введіть ваше прізвище"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                />
                            </DataForm>
                        </ContentLine>

                        <DataForm>
                            <InputLabel htmlFor="company">
                                Назва компанії, організації
                            </InputLabel>
                            <BaseInput
                                id="company"
                                type="text"
                                title="Введіть назву вашої команії"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </DataForm>

                        <DataForm>
                            <InputLabel htmlFor="email">Email-адрес</InputLabel>
                            <BaseInput
                                id="email"
                                type="email"
                                title="Введіть ваш email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </DataForm>

                        <DataForm>
                            <InputLabel htmlFor="phone">
                                Номер телефону
                            </InputLabel>
                            <BaseInput
                                id="phone"
                                type="tel"
                                title="Введіть ваш номер телефону"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </DataForm>
                    </ContentSection>

                    <ContentSection>
                        <DataForm>
                            <InputLabel htmlFor="country">Країна</InputLabel>
                            <BaseInput
                                id="country"
                                type="text"
                                title="Введіть назву вашої країни"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </DataForm>

                        <ContentLine>
                            <DataForm>
                                <InputLabel htmlFor="city">Місто</InputLabel>
                                <BaseInput
                                    id="city"
                                    type="text"
                                    title="Введіть назву вашого міста"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </DataForm>

                            <DataForm>
                                <InputLabel htmlFor="state">
                                    Штат, район
                                </InputLabel>
                                <BaseInput
                                    id="state"
                                    type="text"
                                    title="Введіть назву вашого штату та району"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                />
                            </DataForm>
                        </ContentLine>

                        <DataForm>
                            <InputLabel htmlFor="address">Адреса</InputLabel>
                            <BaseInput
                                id="address"
                                type="text"
                                title="Введіть вашу адрессу"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </DataForm>

                        <DataForm>
                            <SmallForm>
                                <InputLabel htmlFor="zip">
                                    Поштовий індекс
                                </InputLabel>
                                <BaseInput
                                    id="zip"
                                    type="number"
                                    title="Введіть ваш поштовий індекс"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    required
                                />
                            </SmallForm>
                        </DataForm>
                    </ContentSection>
                </Form>
            )}
        </>
    );
};

export default UserInfoForms;
