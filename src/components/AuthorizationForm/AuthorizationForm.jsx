const AuthorizationForm = () => {
    return (
        <>
        <h1>Авторизуйтесь</h1>
        <form action="">
            <label htmlFor="login">Логін</label>
            <input id="login" type="text"  placeholder="e.g.lampalampa"/>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" placeholder="все з маленької" />
            <button type="submit">Увійти</button>
        </form>    
        </>
    )
}

export default AuthorizationForm