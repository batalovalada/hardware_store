import React, { useState, useEffect } from "react";

export const useValidation = (value:string, validations: {[key: string]: string | number | boolean}) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [minLengthErr, setMinLengthErr] = useState<boolean>(false);
    const [maxLengthErr, setMaxLengthErr] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [inputValid, setInputValid] = useState<boolean>(false);

    useEffect(():void => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthErr(true) : setMinLengthErr(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthErr(true) : setMaxLengthErr(false);
                    break;
                case 'isEmpty': 
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'checkPassword':
                    value !== validations[validation] ? setPasswordError(true) : setPasswordError(false);
                    break;
                default: 
                    break;
            }
        }
    }, [value]);

    useEffect(():void => {
        if (isEmpty || minLengthErr || maxLengthErr || emailError || passwordError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }

    }, [isEmpty, minLengthErr, maxLengthErr, emailError, passwordError])

    return {
        isEmpty,
        minLengthErr,
        maxLengthErr,
        emailError,
        passwordError,
        inputValid
    }
}

export const useInput = (initialValue: string, validations: { [key: string]: string | number | boolean }) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setValue(e.target.value)
    }

    const onBlur = ():void => {
        setIsDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    }

}