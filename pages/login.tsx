import type { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Login.module.css';

type User = {
  id?: number;
  name: string;
  website?: string;
};

type UserLoginType = {
  username: string;
  password?: string;
  remember?: boolean;
};

const LoginPage: NextPage = () => {
  const [user, setUser] = useState<User>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLoginType>();

  const onSubmit = ({ username, password, remember }: UserLoginType) => {
    // You should handle login logic with username, password and remember form data

    setUser({ name: username });
  };

  return (
    <>
      <div className={styles.container}>
        {user ? (
          <span className={styles.helloUser}>Hello, {user.name}!</span>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <h3 className={styles.formHeader}>LOGIN</h3>
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="user name"
                {...register('username', {
                  required: { value: true, message: 'User name is required' },
                  minLength: {
                    value: 3,
                    message: 'User name cannot be less than 3 character',
                  },
                })}
                className={
                  styles.formField +
                  (errors.username ? ` ${styles.hasError}` : '')
                }
              />
              {errors.username && (
                <span className={styles.errorLabel}>
                  {errors.username?.message}
                </span>
              )}
            </div>
            <div className={styles.row}>
              <input
                type="password"
                placeholder="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Please enter your password',
                  },
                })}
                className={
                  styles.formField +
                  (errors.password ? ` ${styles.hasError}` : '')
                }
              />
              {errors.password && (
                <span className={styles.errorLabel}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className={`${styles.row} ${styles.rowRemember}`}>
              <input type="checkbox" id="remember" {...register('remember')} />
              <label htmlFor="remember" className={styles.rememberLabel}>
                Remember me
              </label>
            </div>
            <div className={styles.row}>
              <button
                type="submit"
                className={`${styles.btn} ${styles.loginBtn}`}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginPage;
