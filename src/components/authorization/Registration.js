import Button from "../Button";
import Close from "../Close";

const Registration = () => {
    return (
        <form className="auth">
            <Close />
            <h2 className="auth__title">Введите ваши данные</h2>
            <div className="auth__fields">
                <input
                    className="auth__field"
                    type="login"
                    placeholder="Введите ваш логин"
                />
                <input
                    className="auth__field"
                    type="password"
                    placeholder="Введите ваш пароль"
                />
            </div>
            <Button text={"Зарегистрироваться"} />
        </form>
    );
};

export default Registration;
