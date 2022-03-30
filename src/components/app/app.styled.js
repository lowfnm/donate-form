import styled from 'styled-components';
import { Button } from '@mui/material';
import palette from '../../theme/palette';
import typography from '../../theme/typography';

const SubTitle = styled.span`
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #8f8f98d9;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SubmitButton = styled(Button)`
    && {
        width: 200px;
        height: 50px;
        font-family: ${typography.fontFamily.primary};
        font-weight: ${typography.fontWeightBold};
        color: ${palette.white[100]};
        background: linear-gradient(90deg, #e53656, #9863a2 85%);
        box-shadow: 0 0 15px #e53656;
        transition: 5s linear box-shadow;
        margin-bottom: 10px;

        &:hover {
            box-shadow: none;
        }
    }
`;

export { SubTitle, ButtonContainer, SubmitButton };
