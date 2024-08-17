import React, {useEffect} from "react";
import { useInput } from "../../../../shared/lib/hooks/useValidation";
import { useActions } from "../../../../shared/lib/hooks/useActions";
import MyInput from "../../../../shared/ui/input/MyInput";
import MyButton from "../../../../shared/ui/button/MyButton";
import { RESET_ROUTE, SIGNUP_ROUTE } from "../../../../app/utils/consts";
import { Link } from "react-router-dom";

interface AuthModalFormProps {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const AuthModalForm = ({ active, setActive }: AuthModalFormProps) => {
    //validation
    const MIN_PASSWORD: number = 8;
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: MIN_PASSWORD });

    //auth store
    const { login } = useActions()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        login({email: email.value, password: password.value});
        setActive(false);
    }

    const handleLink = () => {
        setActive(false);
    }

    //clear form when modal active is false
    useEffect(() => {
        if (!active) {
            email.setValue('');
            email.setIsDirty(false);
            password.setValue('');
            password.setIsDirty(false);
        }
    }, [active])

    return (
        <div className="form-sign__modal">
            <h1 className="form-sign__modal-title">Вход</h1>
            <form className="form-sign" action="/" method="post" onSubmit={handleSubmit}>
                <div className="form__item">
                    <MyInput
                        onBlur={(): void => email.onBlur()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => email.onChange(e)}
                        value={email.value}
                        type="email"
                        placeholder="Email"
                    />
                    <div className="form__labels">
                        {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                    </div>
                </div>
                <div className="form__item">
                    <MyInput
                        onBlur={(): void => password.onBlur()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => password.onChange(e)}
                        value={password.value}
                        type="password"
                        placeholder="Пароль"
                    />
                    <div className="form__labels">
                        {(password.isDirty && password.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(password.isDirty && password.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_PASSWORD} символов!`}</label>}
                    </div>
                    <Link className="form-sign__link form-sign__link--ml" to={'/' + RESET_ROUTE} onClick={handleLink}>Забыли пароль?</Link>
                </div>
                <div className="form-sign__btns">
                    <MyButton
                        disabled={!email.inputValid || !password.inputValid}
                        type="submit"
                    >
                        Войти
                    </MyButton>
                    <Link className="form-sign__link" to={'/' + SIGNUP_ROUTE} onClick={handleLink}>Регистрация</Link>
                </div>
            </form>
        </div>
    )
}