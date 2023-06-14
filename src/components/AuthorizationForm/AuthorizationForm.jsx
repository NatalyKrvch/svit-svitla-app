const AuthorizationForm = () => {
    return (
        <>
        <h1>Авторизуйтесь</h1>
        <form action="">
            <label htmlFor="">Логін</label>
            <input type="text" name="login" placeholder="e.g.lampalampa"/>
            <label htmlFor="">Пароль</label>
            <input type="password" name="password" placeholder="все з маленької" />
            <button type="submit">Увійти</button>
        </form>    
        </>
    )
}

export default AuthorizationForm