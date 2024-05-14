import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/login.module.css";
import login from "../../json/login.json";
import PageHead from "@/utilities/Head";

const LoginForm = ({ version }) => {
  const [loginErrors, setLoginErrors] = React.useState();
  const [loginFields, setLoginFields] = React.useState({
    email: "",
    password: "",
  });
  const [loginInProgress, setLoginInProgress] = React.useState(false);

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoginErrors(null);
    setLoginInProgress(true);
  };

  const disableLoginButton =
    loginFields.email === "" || loginFields.password === "" || loginInProgress;
  return (
    <>
      {login[version] && (
        <section className={styles.loginFormSection}>
          <PageHead content={{title:'Login | Bruno MD',description:"Health and wellness products rooted in the heart of Italy, made from all-natural ingredients. Pharmaceutical grade supplements to fuel your future."}}/>
          <h1 className={styles.loginHeader}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label for="email" className={styles.loginLabel}>
              {login[version].EmailLabel}
            </label>
            <input
              id="email"
              className={styles.loginInput}
              type="email"
              value={loginFields.email}
              onChange={(event) =>
                setLoginFields((prevLoginFields) => ({
                  ...prevLoginFields,
                  email: event.target.value,
                }))
              }
              required
            />

            <label for="password" className={styles.loginLabel}>
            {login[version].PasswordLabel}
            </label>
            <input
              id="password"
              className={styles.loginInput}
              type="password"
              value={loginFields.password}
              onChange={(event) =>
                setLoginFields((prevLoginFields) => ({
                  ...prevLoginFields,
                  password: event.target.value,
                }))
              }
              required
            />
            {loginErrors && (
              <div>
                <p>{loginErrors[0].message}</p>
              </div>
            )}
            <Link
              className={styles.secondaryCTA}
              href={login[version].PasswordLabel}
            >
              {login[version].PasswordLabel}
            </Link>
            <div>
              <button
                className={styles.loginButton}
                type="submit"
                disabled={disableLoginButton}
              >
                {login[version].btnLabel}
              </button>
            </div>
            <Link className={styles.secondaryCTA} href={login[version].create.href}>
             
            {login[version].create.label}
            </Link>
            <hr style={{ marginTop: "1rem" }} />
            <div
              className={styles.secondaryCTA}
              style={{ textDecoration: "none", paddingTop: ".5rem" }}
            >
              {login[version].cta}
            </div>
            <Link
              className={styles.loginButton2}
              href={login[version].Subscription.href}
            >
              {login[version].Subscription.label}
            </Link>
          </form>
        </section>
      )}
    </>
  );
};

export default LoginForm;
