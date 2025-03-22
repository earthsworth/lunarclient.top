import {useTranslation} from "react-i18next";
import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router";
import {ApiResponse, AuthResponse} from "../../entities.ts";
import axios from "axios";
import { useTitle } from "../../utils.ts";


function DashboardLoginPage() {
    useTitle("Login into LunarCN");
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navRegister = () => {
        navigate("/dashboard/register");
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        // send request to backend
        try {
            const response: ApiResponse<AuthResponse> = await axios.post("/api-next/user/login", `username=${username}&password=${password}`);
            // set token and redirect to dashboard
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate("/dashboard");
        } catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)) {
                const message: string = e.response?.data.message;
                setError(message);
            }
        }
        setLoading(false);
    }

    return <div className={"w-full h-screen flex items-center justify-center"}>
        <div className="card w-110 bg-base-100 card-md shadow-sm">
            <form className="card-body w-full" onSubmit={handleLogin}>
                <h2 className="card-title">{t('dashboard.login')}</h2>
                {error && <p className={"text-red-500"}>{error}</p>}
                <p>{t('dashboard.login.tip')}</p>
                {/*username field*/}
                <label className="floating-label w-full">
                    <span>Username</span>
                    <input type="text" placeholder="Username" className="input input-md w-full" value={username} onChange={(e) => setUsername(e.target.value)} required={true}/>
                </label>
                {/*password field*/}
                <label className="floating-label w-full">
                    <span>Password</span>
                    <input type="password" placeholder="Password" className="input input-md w-full" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
                </label>
                <div className={"flex flex-row w-full justify-between"}>
                    <a className={"underline text-blue-400 cursor-pointer"} onClick={navRegister}>{t('dashboard.login.register-link')}</a>
                    <div className="card-actions">
                        <button className="btn btn-primary" type={"submit"} disabled={loading}>
                            {loading && <span className="loading loading-spinner loading-md"></span>}
                            {t('dashboard.login.process')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>;
}

export default DashboardLoginPage;