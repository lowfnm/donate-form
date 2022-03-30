import styled from 'styled-components';
import palette from '../../theme/palette';
import breakpoints from '../../theme/breakpoints';
import typography from '../../theme/typography';
import { Button, ButtonGroup } from '@mui/material';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        flex-direction: column;
    }
`;

const StyledButtonGroup = styled(ButtonGroup)`
    && {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 30px;

        & .MuiButtonGroup-grouped:not(:last-of-type) {
            border-right-color: ${palette.grey[50]};

            &:hover {
                border-right-color: ${palette.grey[50]};
            }
        }
    }
`;

const StyledButton = styled(Button)`
  && {
    font-family: inherit;
    font-weight: ${typography.fontWeightBold};
    border: 2px solid ${palette.grey[50]};
    color: ${(props) =>
        props.selected ? `${palette.white[100]}` : `${palette.grey[50]}`};
    background: ${(props) =>
        props.selected ? `${palette.grey[50]}` : `${palette.white[100]}`};

    &:hover {
      color: ${palette.white[100]};
      border: 2px solid ${palette.grey[50]};
      background-color: ${palette.grey[50]};
    }
  } 
}
`;

const ContentSection = styled.div`
    min-width: 480px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        min-width: 100%;
    }
`;

const ContentLine = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.values.desktop}px) {
        flex-direction: column;
    }
`;

const DataForm = styled.div`
    margin-bottom: 25px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: ${breakpoints.values.desktop}px) {
        &:last-child {
            margin-bottom: 25px;
        }
    }
`;

const SmallForm = styled.div`
    width: 45%;

    @media (max-width: ${breakpoints.values.desktop}px) {
        width: 100%;
    }
`;

export {
    Form,
    StyledButtonGroup,
    StyledButton,
    ContentSection,
    ContentLine,
    DataForm,
    SmallForm,
};
