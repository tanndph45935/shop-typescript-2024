import { Link } from 'react-router-dom';
import styles from './login.module.scss';
import classNames from 'classnames/bind';
import instance from '../../services/apis';
import { useState } from 'react';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await instance.post('/api/users/login', { email, password });
            const role = data.datas.role;
            const token = data.datas.accessToken;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            if (role === 'admin') {
                window.location.href = '/admin';
            } else {
                setTimeout(() => {
                    window.location.href = '/';

                }, 5000);
                const notify = () => toast.success(`Đăng nhập thành công`);
                notify()
            }
        } catch (error: any) {
            const notify = () => toast.error(`${error.response.data.message}`);
            notify();
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('img-login')}>
                <img src="src/public/images/Side Image.png" alt="" />
            </div>
            <div className={cx('login')}>
                <div>
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setEmail(e.target.value) }} type="text" placeholder="Email or Phone Number" />
                        </div>
                        <div className={cx('ip-login')}>
                            <label htmlFor=""></label>
                            <input onChange={(e: any) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                        </div>
                        <div className={cx('btn-login')}>
                            <button>Log In</button>
                            <div><a href="">Forget Password?</a></div>
                        </div>
                        <Link to={'/register'}>
                            <div className={cx('register')}>Don't have an account?<a href="/register">Sign Up</a></div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
