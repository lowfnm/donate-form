import styled from 'styled-components';
import breakpoints from '../../../theme/breakpoints';

const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        max-width: 700px;
    }
`;

export { StyledContainer };
