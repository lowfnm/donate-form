import styled from 'styled-components';
import palette from '../../theme/palette';
import breakpoints from '../../theme/breakpoints';
import typography from '../../theme/typography';
import { Button } from '@mui/material';
import PanToolIcon from '@mui/icons-material/PanTool';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 25px;

    @media (max-width: ${breakpoints.values.desktop}px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Card = styled(Button)`
    && {
        &:hover {
            background-color: transparent;
        }
    }

    @media (max-width: ${breakpoints.values.desktop}px) {
        flex-direction: column;
    }
`;

const CardItem = styled.span`
    padding: 25px 30px;
    border-radius: 20px;
    border: ${(props) =>
        props.selected
            ? `2px solid ${palette.pink[100]}`
            : `2px solid ${palette.grey[100]}`};
    background-color: ${(props) =>
        props.selected ? `${palette.pink[100]}` : ''};
`;

const DoIcon = styled(PanToolIcon)`
    && {
        width: 35px;
        height: 40px;
        fill: ${(props) => (props.selected ? 'white' : `${palette.grey[100]}`)};
    }
`;

const MaterialIcon = styled(CheckroomIcon)`
    && {
        width: 50px;
        height: 50px;
        fill: ${(props) => (props.selected ? 'white' : `${palette.grey[100]}`)};
    }
`;

const WalletIcon = styled(AccountBalanceWalletIcon)`
    && {
        width: 45px;
        height: 40px;
        fill: ${(props) => (props.selected ? 'white' : `${palette.grey[100]}`)};
    }
`;

const HeartIcon = styled(FavoriteIcon)`
    && {
        width: 45px;
        height: 40px;
        fill: ${(props) => (props.selected ? 'white' : `${palette.grey[100]}`)};
    }
`;

const CardTitle = styled.span`
    margin-left: 15px;
    font-size: 15px;
    font-family: ${typography.fontFamily.primary};
    font-weight: ${typography.fontWeightBold};
    color: ${(props) => (props.selected ? 'black' : `${palette.grey[100]}`)};

    @media (max-width: ${breakpoints.values.desktop}px) {
        margin-left: 0;
    }

    @media (max-width: ${breakpoints.values.tablet}px) {
        display: none;
    }
`;

export {
    CardContainer,
    Card,
    CardItem,
    DoIcon,
    WalletIcon,
    MaterialIcon,
    HeartIcon,
    CardTitle,
};
