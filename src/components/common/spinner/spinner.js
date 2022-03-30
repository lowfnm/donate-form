import { SpinnerWrap } from './spinner.styled';
import CircularProgress from '@mui/material/CircularProgress';
import palette from '../../../theme/palette';

const Spinner = () => {
    return (
        <SpinnerWrap>
            <CircularProgress
                sx={{ color: `${palette.pink[100]}`, opacity: 0.8 }}
            />
        </SpinnerWrap>
    );
};

export default Spinner;
