import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const MoneyInput = styled(TextField)(({ theme }) => {
    const { palette } = theme;
    return {
        width: '100%',
        backgroundColor: palette.grey[0],
        '& .MuiInput-input': {
            fontFamily: 'inherit',
            fontSize: '18px',
            lineHeight: '22.94px',
        },
        '& .MuiOutlinedInput-input': {
            textAlign: 'center',
        },
    };
});

export default MoneyInput;
