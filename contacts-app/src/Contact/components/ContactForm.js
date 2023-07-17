import { useEffect } from 'react'
import { FormHelperText, Grid, Stack} from '@mui/material';

import InputText from './shared/InputText';
import Button from './shared/Button';
import useFormValidation from '../hooks/useFormValidation';


export default function ContactForm(props) {

    const { 
        recordForEdit, 
        setOpenPopup, 
        handleInsert, 
        handleEdit 
    } = props;
    
    const {
        values,
        handleSetValues,
        errors,
        handleChange,
        handleSubmit
    } = useFormValidation(setOpenPopup, handleInsert, handleEdit);


    useEffect(() => {
        handleSetValues({
            ...recordForEdit
        })
    }, [])

    return (
        <form onSubmit={handleSubmit} >
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={6}>
                    <InputText
                        name="firstName"
                        label="*First Name"
                        value={values?.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputText
                        name="lastName"
                        label="*Last Name"
                        value={values?.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputText
                        label="*Mobile Number"
                        name="mobileNumber"
                        value={values?.mobileNumber}
                        
                        onChange={handleChange}
                        error={errors.mobileNumber}
                    />
                    <FormHelperText sx={{color: "#3b82f6"}}>
                        (+63) Must have 10 digits    
                    </FormHelperText>
                </Grid>
                <Grid item xs={6}>
                    <InputText
                        label="*Telephone Number"
                        name="telephoneNumber"
                        value={values?.telephoneNumber}
                        
                        onChange={handleChange}
                        error={errors.telephoneNumber}
                    />
                    <FormHelperText sx={{color: "#3b82f6"}}>
                        Must have 10 digits (ex. XXX-XXX-XXXX)
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <InputText
                        label="*Email"
                        name="email"
                        value={values?.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormHelperText sx={{color: "#3b82f6"}}>
                        example@example.com
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <InputText
                        label="*Address"
                        name="address"
                        value={values?.address}
                        onChange={handleChange}
                        error={errors.address}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        sx={{background: 'linear-gradient(to right, #34d399, #22d3ee)'}}
                        type="submit"
                        text="Submit" />
                </Grid>
            </Grid>       
        </form>
    )
}
