import { TextField } from '@mui/material';

export default function InputText(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            fullWidth
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
