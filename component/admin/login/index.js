import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useLoginStore from "../../../store/store";
import LoginStyles from "../../admin/login/Login.module.css"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const setLogin = useLoginStore((state) => state.setLogin)
    const setUser = useLoginStore((state) => state.setUser)
    const setAccessToken = useLoginStore((state) => state.setAccessToken)
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        const loginData = {
            username: username,
            password: password
        }
        axios.post(`${process.env.HOST_API}/api/auth/login`, loginData)
            .then((res) => {
                if (res.status == 400) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Invalid Credential!',
                        icon: 'error',
                    })
                } else {
                    setLogin();
                    setUser(res.data.username);
                    setAccessToken(res.data.accesstoken);
                    router.push('/admin/admin');
                }
            })
            .catch((err) => {
                console.error(err)
                Swal.fire({
                    title: 'Error',
                    text: 'Error Occured!',
                    icon: 'error'
                })
            })
    }

    return (
        // <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <div className={LoginStyles.formsignin}>
            <main className="text-center mt-5">

                <form onSubmit={handleLogin}>
                    <img src="/rs.png" alt="logo" srcSet="" className={LoginStyles.image} />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login;