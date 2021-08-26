import TextField from '@material-ui/core/TextField';

function CustomInput({variant,label,placeholder,type,onChange}){
    return(
        <TextField variant={variant} label={label} placeholder={placeholder} type={type} onChange={onChange} fullWidth/>
    );
}

export default CustomInput;