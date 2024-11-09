import { Link, Navigate } from 'react-router-dom';
import styles from './register.module.scss'
import classNames from 'classnames/bind';
import { useState } from 'react';
import instance from '../../services/apis';
import { toast } from 'react-toastify';
const cx = classNames.bind(styles)
function Register() {
    const [email, setEmail] = useState<string>()
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [confirmpassword, setConfirmPassword] = useState<string>()
    const handleSumit = async (e: any) => {
        e.preventDefault()

        try {
            const { data } = await instance.post('/api/users/register', { email, username, password, confirmpassword })
            const notify = () => toast.success(`${data.message} Bạn sẽ được chuyển hướng đến trang Login sau 6s`);
            notify()
            setTimeout(() => {
                window.location.href = '/login'
            }, 6000);
        } catch (error: any) {
            const notify = () => toast.error(`${error.response.data.message}`);
            notify()
        }
    }
    return (
        <div className={cx('container')}>
            <div className={cx('img-login')}>
                <img src="src/public/images/Side Image.png" alt="" />
            </div>
            <div className={cx('login')}>
                <div>
                    <h1>Register to Exclusive</h1>
                    <p>Enter your details below</p>
                    <form action="" onSubmit={handleSumit}>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setEmail(e.target.value) }} type="text" placeholder="Email or Phone Number" />
                        </div>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setUsername(e.target.value) }} type="text" placeholder="User name" />
                        </div>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setPassword(e.target.value) }} type="text" placeholder="Password" />
                        </div>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setConfirmPassword(e.target.value) }} type="text" placeholder="Confirm Password" />
                        </div>
                        <div className={cx('btn-login')}>
                            <button>Register</button>
                            <Link to={'/login'}>
                                <div className={cx('login')}>You have accoount?<a href="/login">Sign in</a></div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;