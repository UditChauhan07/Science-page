import * as React from "react";
import styles from "@/styles/register.module.css";
import PageHead from "@/utilities/Head";
import SEO from '../../../json/SEO.json'
import { createUser } from "@/data/Auth";
import { useRouter } from "next/navigation";
import { createUserShop } from "@/data/lib";

const RegisterForm = () => {
  let router=useRouter()
  const [disabled, setDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [registerErrors, setRegisterErrors] = React.useState();
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    console.log({bb:registerData.email,aa:registerData.password});
    setDisabled(registerData.email === "" || registerData.password === "");
  }, [registerData.email, registerData.password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRegisterErrors(null);
    setIsLoading(true);


    createUserShop({user:registerData}).then((response)=>{
      if(response?.data?.customerUserErrors){
        setRegisterErrors(response?.data?.customerUserErrors)
      }
      if(response?.data?.customerCreate?.customer){
        // router.push("/account/login")
        window.location.href = "https://www.brunomd.com/account/login"
      }
      if(response?.errors){
        setRegisterErrors(response?.errors)
      }
    }).catch((err)=>{
      console.log({err});
    })
  };


  return (
    <section>
      <PageHead content={SEO['EU']?.register?.SEO}/>
      <h1 className={styles.registerHeader}>Create Account</h1>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <label className={styles.registerLabel}>First name</label>
          <input
            className={styles.registerInput}
            type="text"
            value={registerData.firstName}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                firstName: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Last name</label>
          <input
            className={styles.registerInput}
            type="text"
            value={registerData.lastName}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                lastName: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Email</label>
          <input
            className={styles.registerInput}
            type="email"
            value={registerData.email}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                email: event.target.value,
              }))
            }
            required
          />
          <label className={styles.registerLabel}>Password</label>
          <input
            className={styles.registerInput}
            type="password"
            value={registerData.password}
            onChange={(event) =>
              setRegisterData((currentData) => ({
                ...currentData,
                password: event.target.value,
              }))
            }
            required
          />
          <button
            disabled={disabled}
            type="submit"
            className={styles.registerButton}
          >
            Create
          </button>
          {!registerErrors ? (
            <div></div>
          ) : (
            registerErrors.map((er, i) => {
              return <div key={i}>{er.message}</div>;
            })
          )}
        </form>
    </section>
  );
};

export default RegisterForm;
