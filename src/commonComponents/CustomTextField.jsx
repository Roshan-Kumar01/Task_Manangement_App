import { InputAdornment, TextField } from "@mui/material"
import { type } from "@testing-library/user-event/dist/type";
import { Controller } from "react-hook-form"

const CustomTextField = (props) => {
    const {
        name,
        control,
        rules=false,
        placeholder,
        variant,
        style,
        fullWidth,
        onChange,
        endIcon,
        endIconStyle,
        endIconClick,
        label,
    } = props;

    return(
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error }}) => (
                <TextField
                    label={label}
                    placeholder={placeholder}
                    {...field}
                    variant={variant}
                    style={{...style}}
                    fullWidth={fullWidth}
                    onChange={(e) => {
                        if(typeof onChange === 'function') {
                            onChange(e, name);
                            field.onChange(e);
                        }
                        else field.onChange(e);
                    }}
                    InputLabelProps={{ shrink: true}}
                    error={error && error}
                    helperText={error ? error.message : null}
                    InputProps={{
                        endAdornment: endIcon && (
                            <InputAdornment
                                position="end"
                                style={{...endIconStyle}}
                                onClick={endIconClick}
                            >
                                {endIcon}
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    )
}

export default CustomTextField