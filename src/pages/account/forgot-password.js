import React from "react";
import Link from "next/link";
import styles from "@/styles/forgot-password.module.css";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import { ResetUser } from "@/data/lib";


const ForgotPasswordForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitErrors, setSubmitErrors] = React.useState();
  const [submitInProgress, setSubmitInProgress] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitErrors(null);
    ResetUser({email:inputValue}).then((response)=>{
      let error = response?.data?.customerRecover?.customerUserErrors||[];
      if(error.length > 0){
        setSubmitErrors(error)
      }else{
        setSubmitSuccess(true)
      }
    }).catch((err)=>{
      console.log({err});
    })
  };

  const disableLoginButton = !inputValue || submitInProgress;

  return (
    <section>
      <PageHead content={SEO["EU"]?.forgot?.SEO} />
      <div>
        {submitSuccess ? (
          <React.Fragment>
            <div className={styles.message}>
              <h1>Check your inbox!</h1>
              <p>
                We&apos;ve just sent you an email - follow the reset instructions to change your password.
              </p>
              <p>
                <a href={"https://www.brunomd.com/account/login"}>← Go Back</a>
                {/* <Link href={"/account/login"}>← Go Back</Link> */}
              </p>
            </div>
          </React.Fragment>
        ) : (
          <section>
            <h1 className={styles.forgotHeader}>Forgot Your Password?</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.emailField}>
              Email Address
                <input
                  className={styles.input}
                  placeholder="email@example.com"
                  type="email"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  required
                />
              </label>
              <button
                type="submit"
                disabled={disableLoginButton}
                className={styles.submitButton}
              >
                Send
              </button>
              <Link className={styles.linkBack} href="https://www.brunomd.com/account/login">
                Cancel
              </Link>
              {/* <Link className={styles.linkBack} href="/account/login">
                Cancel
              </Link> */}
              {submitErrors && (
                <div>
                  {submitErrors.map((error, index) => (
                    <strong key="error-message">{error.message}</strong>
                  ))}
                </div>
              )}
            </form>
          </section>
        )}
      </div>
    </section>
  );
};

export default ForgotPasswordForm;
