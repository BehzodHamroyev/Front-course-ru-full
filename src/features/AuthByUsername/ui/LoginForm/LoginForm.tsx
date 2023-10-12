import { useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../model/slice/LoginSlice";
import { classNames } from "shared/lib/classNames/classNames";
import { getLoginState } from "../../model/selectors/AuthSelector/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/LoginByUserName";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { username, password } = useSelector(getLoginState);
  // console.log(loginForm, "jk");

  const changeUsername = useCallback(
    (value: string) => {
      dispatch(AuthAction.setUsername(value));
    },
    [dispatch]
  );

  const changePassword = useCallback(
    (value: string) => {
      dispatch(AuthAction.setPassword(value));
    },
    [dispatch]
  );

  const onClickAuth = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("Введите username")}
        value={username}
        onChange={changeUsername}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        value={password}
        onChange={changePassword}
      />
      <Button onClick={onClickAuth} className={cls.loginBtn}>
        {t("Войти")}
      </Button>
    </div>
  );
};
