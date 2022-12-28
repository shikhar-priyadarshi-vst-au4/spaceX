import './formInput.css';

// interface FormInputProps {
//     type ?: React.HTMLInputTypeAttribute,
//     size ?: "xs" | "sm" | "md" | "lg",
//     variant? : "outlined" | "filled",
//     name ?: string,
//     value ?: any,
//     placeholder ?: string,
//     disabled ?: boolean,
//     onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void,
//     onFocus ?: (event : React.FocusEvent<HTMLInputElement>) => void,
//     onBlur ?: (event : React.FocusEvent<HTMLInputElement>) => void,
//     innerRef ?: React.RefObject<HTMLInputElement>,
//     startIcon ?:  React.ReactSVGElement | React.ReactNode,
//     endIcon ?: React.ReactSVGElement | React.ReactNode,
// }

export default function FormInput(props){
    const {
        type = "text",
        size = "lg",
        variant = "outlined",
        name,
        value,
        placeholder,
        disabled = false,
        onChange,
        onBlur,
        onFocus,
        innerRef,
        startIcon = null,
        endIcon = null
    } = props;

    const getIconType = startIcon && endIcon ? "both" : startIcon ? "left" : endIcon ? "right": null;

    return <>
    <div className={"form-input"} data-icon={getIconType}>
        {startIcon && <div className={"form-icon form-left-icon"} data-testid="sticon">
            {startIcon}
        </div>}
        <input 
            className={`form-input-field form-input-${variant} form-input-${size}`}
            ref={innerRef}
            {...{
                type,
                name,
                value,
                placeholder,
                disabled,
                onChange,
                onFocus,
                onBlur
            }}/>
        {endIcon && <div className={"form-icon form-right-icon"} data-testid="endicon">
            {endIcon}
        </div>}
    </div>
    </>
}