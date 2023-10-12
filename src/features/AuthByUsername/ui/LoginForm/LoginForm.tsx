import cls from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { ReduxStoreManager } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";

export interface LoginFormProps {
  className?: string;
}
const LoginForm = memo(({ className }: LoginFormProps) => {
  const isLoading = useSelector(getLoginLoading);
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);

  console.log(username);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreManager;

  useEffect(() => {
    store.reducerManager?.add("loginForm", loginReducer);

    dispatch({ type: "@INIT loadingForm reducer" });
    return () => {
      store.reducerManager.remove("loginForm");
      dispatch({ type: "@DESTROY loadingForm reducer" });
    };
  }, []);
  const onChangeUsername = useCallback(
    (value: string) => {
      console.log(value);

      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && (
        <Text
          text={t("Вы ввели неверный логин или пароль")}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("Введите username")}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});

export default LoginForm;
