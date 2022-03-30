import styled from 'styled-components';
import typography from '../../../theme/typography';

const StyledTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 34px;
    font-weight: ${typography.fontWeightExtraBold};
    color: #3b3e5e;

    @media (max-width: 330px) {
        font-size: 30px;
    }
`;

export { StyledTitle };
