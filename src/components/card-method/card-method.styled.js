import styled from 'styled-components';
import palette from '../../theme/palette';
import { Button } from '@mui/material';
import AtmSVGComponent from '../../assets/image/AtmSVGComponent';
import VisaSVGComponent from '../../assets/image/VisaSVGComponent';
import MastercardSVGComponent from '../../assets/image/MastercardSVGComponent';
import WebMoneySVGComponent from '../../assets/image/WebMoneySVGComponent';
import PaypalSVGComponent from '../../assets/image/PaypalSVGComponent';
import PrivatSVGComponent from '../../assets/image/PrivatSVGComponent';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

const Card = styled(Button)`
    && {
        width: 180px;
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
        width: 50px;
        height: 50px;
        fill: ${palette.white[100]};
    }
`;

const VisaICon = styled(VisaSVGComponent)`
    width: 50px;
    height: 50px;
    margin-left: 25px;
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
