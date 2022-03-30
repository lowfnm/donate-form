import styled from 'styled-components';
import palette from '../../theme/palette';

const DonationContainer = styled.div`
    margin-bottom: 25px;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    border: 1px solid ${palette.grey[100]};
`;

const Wrapper = styled.div`
    padding: 25px;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h3`
    font-size: 14px;
    margin-bottom: 5px;
    color: ${palette.grey[100]};
`;

export { DonationContainer, Wrapper, CardWrapper, Title };
