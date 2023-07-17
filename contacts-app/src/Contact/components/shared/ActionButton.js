import { Button } from '@mui/material';

export default function ActionButton(props) {

    const { children, onClick } = props;

    return (
        <Button
            sx={{color: "#22d3ee"}}
            onClick={onClick}>
            {children}
        </Button>
    )
}
