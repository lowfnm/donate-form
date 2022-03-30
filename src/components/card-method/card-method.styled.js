import styled from 'styled-components';
import palette from '../../theme/palette';
import { Button } from '@mui/material';
import AtmSVGComponent from '../../assets/image/AtmSVGComponent';
import VisaSVGComponent from '../../assets/image/VisaSVGComponent';
import MastercardSVGComponent from '../../assets/image/MastercardSVGComponent';
import WebMoneySVGComponent from '../../assets/image/WebMoneySVGComponent';
import PaypalSVGComponent from '../../assets/image/PaypalSVGComponent';
import PrivatSVGComponent from '../../assets/image/PrivatSVGComponent';
import breakpoints from '../../theme/breakpoints';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }
`;

const Card = styled(Button)`
    && {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: ${(props) =>
            props.selected ? `${palette.pink[100]}` : `${palette.grey[100]}`};
        border-radius: 20px;

        &:hover {
            background-color: ${(props) =>
                props.selected
                    ? `${palette.pink[100]}`
                    : `${palette.grey[100]}`};
        }
    }
`;

const Title = styled.span`
    font-size: 10px;
    color: ${palette.white[100]};
`;

const MasterIcon = styled(MastercardSVGComponent)`
    && {
        height: 50px;
        fill: ${palette.white[100]};

        @media (max-width: 425px) {
            display: none;
        }
    }
`;

const VisaICon = styled(VisaSVGComponent)`
    width: 50px;
    height: 50px;
    margin-left: 25px;

    @media (max-width: 425px) {
        margin-left: 0;
    }
`;

const PrivatIcon = styled(PrivatSVGComponent)`
    fill: ${palette.white[100]};
`;

const AtmIcon = styled(AtmSVGComponent)`
    width: 50px;
    height: 50px;
    fill: ${palette.white[100]};
`;

const WebMoneyIcon = styled(WebMoneySVGComponent)`
    fill: ${palette.white[100]};
`;

const PayPalIcon = styled(PaypalSVGComponent)`
    width: 40px;
    height: 40px;
    fill: ${palette.white[100]};
`;

export {
    Wrapper,
    Card,
    AtmIcon,
    VisaICon,
    MasterIcon,
    PrivatIcon,
    WebMoneyIcon,
    PayPalIcon,
    Title,
};
