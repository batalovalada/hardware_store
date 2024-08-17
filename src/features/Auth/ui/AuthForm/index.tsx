import React from "react";
import MyButton from "../../../../shared/ui/button/MyButton";
import MyInput from "../../../../shared/ui/input/MyInput";
import { useInput } from "../../../../shared/lib/hooks/useValidation";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, RESET_ROUTE, MAIN_ROUTE, SIGNUP_ROUTE } from "../../../../app/utils/consts";
import { useActions } from "../../../../shared/lib/hooks/useActions";
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import Loader from "../../../../shared/ui/loader/Loader";

interface AuthFormProps {
    fromPage?: string;
}

export const AuthForm = ({ fromPage }: AuthFormProps): JSX.Element => {
    //validation
    const MIN_NAME: number = 5;
    const MIN_PASSWORD: number = 8;
    const name = useInput('', { isEmpty: true, minLength: MIN_NAME })
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password1 = useInput('', { isEmpty: true, minLength: MIN_PASSWORD });
    const password2 = useInput('', { isEmpty: true, minLength: MIN_PASSWORD, checkPassword: password1.value });

    //location
    const location = useLocation()
    const isLogin:boolean = location.pathname === '/' + LOGIN_ROUTE;
    const isSignUp: boolean = location.pathname === '/' + SIGNUP_ROUTE;
    const isReset: boolean = location.pathname === '/' + RESET_ROUTE;

    //navigate
    const pageNav:string = fromPage ? fromPage : MAIN_ROUTE;
    const navigate = useNavigate();

    //auth store
    const { loading, error } = useTypedSelector(state => state.user)
    const { login, register } = useActions()

    //handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        if (isLogin) {
            login({email: email.value, password: password1.value})            
        }
        if (isSignUp) {
            register({ id: Date.now(), name: name.value, email: email.value, password: password1.value })
        }
        navigate(pageNav, { replace: true });
    }

    if (loading) {
        <div className="error">
            <Loader />
        </div>
    }

    if (error) {
        <div className="error">
            {error}
        </div>
    }

    return (
        <div className="form-sign__main">
            <div className="container">
                {isLogin &&
                    <h1 className="form-sign__title">Вход</h1>
                }
                {isSignUp &&
                    <h1 className="form-sign__title">Регистрация</h1>
                }
                {isReset &&
                    <h1 className="form-sign__title">Сброс пароля</h1>
                }
                <form className="form-sign" action="/" method="post" onSubmit={handleSubmit}>
                    {isSignUp &&
                        <div className="form__item">
                            <MyInput
                                onBlur={(): void => name.onBlur()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => name.onChange(e)}
                                value={name.value}
                                type="text"
                                placeholder="Имя Фамилия"
                            />
                            <div className="form__labels">
                                {(name.isDirty && name.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                                {(name.isDirty && name.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NAME} символов!`}</label>}
                            </div>
                        </div>
                    }
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
                    {!isReset &&
                        <div className="form__item">
                            <MyInput
                                onBlur={(): void => password1.onBlur()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => password1.onChange(e)}
                                value={password1.value}
                                type="password"
                                placeholder="Пароль"
                            />
                            <div className="form__labels">
                                {(password1.isDirty && password1.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                                {(password1.isDirty && password1.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_PASSWORD} символов!`}</label>}
                            </div>
                            {isLogin && <Link className="form-sign__link form-sign__link--ml" to={'/' + RESET_ROUTE}>Забыли пароль?</Link>}
                        </div>
                    }
                    {isSignUp &&
                        <div className="form__item">
                            <MyInput
                                onBlur={(): void => password2.onBlur()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => password2.onChange(e)}
                                value={password2.value}
                                type="password"
                                placeholder="Подтвердите пароль"
                            />
                            <div className="form__labels">
                                {(password2.isDirty && password2.isEmpty) && <label className="form__err-label">Подтвердите пароль!</label>}
                                {(password2.isDirty && password2.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_PASSWORD} символов!`}</label>}
                                {(password2.isDirty && password2.passwordError) && <label className="form__err-label">Неверный пароль!</label>}
                            </div>
                        </div>
                    }
                    <div className="form-sign__btns">
                        {isSignUp &&
                            <MyButton
                                disabled={!name.inputValid || !email.inputValid || !password1.inputValid || !password2.inputValid}
                                type="submit"
                            >
                                Регистрация
                            </MyButton>
                        }
                        {isLogin &&
                            <MyButton
                                disabled={!email.inputValid || !password1.inputValid}
                                type="submit"
                            >
                                Войти
                            </MyButton>
                        }
                        {isReset &&
                            <MyButton disabled={!email.inputValid} type="submit">Восстановить</MyButton>
                        }
                        {isSignUp &&
                            <>
                                <span>Уже есть аккаунт? <Link className="form-sign__link" to={'/' +LOGIN_ROUTE}>Войти</Link></span>
                                <Link className="form-sign__link" to={'/' +RESET_ROUTE}>Восстановить аккаунт</Link>
                            </>
                        }
                        {isReset &&
                            <>
                                <Link className="form-sign__link" to={'/' +LOGIN_ROUTE}>Войти</Link>
                                <Link className="form-sign__link" to={'/' +SIGNUP_ROUTE}>Регистрация</Link>
                            </>
                        }
                        {isLogin &&
                            <Link className="form-sign__link" to={'/' + SIGNUP_ROUTE}>Регистрация</Link>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}