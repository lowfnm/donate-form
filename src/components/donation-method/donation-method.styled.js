import styled from 'styled-components';
import palette from '../../theme/palette';
import breakpoints from '../../theme/breakpoints';

const DonationContainer = styled.div`
    margin-bottom: 25px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${palette.grey[100]};
`;

const Wrapper = styled.div`
    padding: 25px;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.values.desktop}px) {
        flex-direction: column;
    }
`;

const Title = styled.h3`
    font-size: 14px;
    margin-bottom: 5px;
    color: ${palette.grey[100]};

    @media (max-width: ${breakpoints.values.desktop}px) {
        // top right bottom left
        margin: 0 auto 15px;
        &:last-child {
            display: none;
        }
    }
`;

export { DonationContainer, Wrapper, CardWrapper, Title };
