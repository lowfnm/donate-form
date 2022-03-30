import styled from 'styled-components';
import palette from '../../../theme/palette';
import breakpoints from '../../../theme/breakpoints';
import MoneyInput from './money-input';

const CardContainer = styled.div`
    position: relative;
    width: 35%;
    background-color: ${palette.grey[100]};
    border-radius: 20px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        margin: 15px auto 0;
        width: 50%;
        height: 200px;
    }

    @media (max-width: 600px) {
        width: 75%;
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`;

const CardWrapper = styled.div`
    padding: 15px;
`;

const CardTitle = styled.h4`
    font-size: 12px;
    color: ${palette.white[100]};
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const CardInput = styled(MoneyInput)`
    && {
        border-radius: 5px;
        background-color: white;
    }
`;

export { CardContainer, CardWrapper, CardTitle, InputWrapper, CardInput };
