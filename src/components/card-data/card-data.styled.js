import styled from 'styled-components';
import palette from '../../theme/palette';
import { BaseInput } from '../common/base-input';

const CardContainer = styled.div`
    width: 30%;
    background-color: ${palette.grey[100]};
    border-radius: 20px;
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
    justify-content: space-between;
`;

const CardInput = styled(BaseInput)`
    && {
        width: 61px;
        text-align: center;
        border-radius: 5px;
        background-color: white;
    }
`;

export { CardContainer, CardWrapper, CardTitle, InputWrapper, CardInput };
