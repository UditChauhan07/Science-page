import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/addresses.module.css";
import { Decrypt, Destroy, AuthCheck, ShareDrive } from "@/data/Auth";
import {
  createCustomerAddress,
  deleteCustomerAddress,
  updateCustomerAddress,
} from "@/data/lib";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PageHead from "@/utilities/Head";
import SEO from "../../../json/SEO.json";
import { useRouter } from "next/navigation";

const AccountAddress = () => {
  const router = useRouter();
  if (!AuthCheck()) {
    // router.push("/account/login");
    window.location.href = "https://www.brunomd.com/account/login";
  }
  let [Address, setAddress] = useState();
  useEffect(() => {
    if (ShareDrive()) {
      let data = ShareDrive();
      setAddress(data);
      setFormData(data);
    }
  }, []);

  const initialFormData = {};
  const [formData, setFormData] = React.useState(initialFormData);
  const [formErrors, setFormErrors] = React.useState();

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData?.id) {
      updateCustomerAddress({
        address: formData,
        customerAccessToken: Decrypt(),
      })
        .then((response) => {
          console.log({ resposne: response });
          var errors =
            response.data.customerAddressUpdate.customerUserErrors || [];
          if (errors.length != 0) {
            console.error({ errors });
            setFormErrors(errors);
          } else {
            router.push("/account/addresses");
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      createCustomerAddress({
        address: formData,
        customerAccessToken: Decrypt(),
      })
        .then((response) => {
          var errors =
            response.data.customerAddressCreate.customerUserErrors || [];
          if (errors.length != 0) {
            console.error({ errors });
            setFormErrors(errors);
          } else {
            router.push("/account/addresses");
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
    delete formData.isDefault;
  };
  const deleteSubmit = () => {
    confirmAlert({
      title: "Are you Sure?",
      message: "to Delete this Address",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(),
        },
        {
          label: "NO",
          // onClick: () => alert("Click No")
        },
      ],
    });
  };
  const handleDelete = () => {
    deleteCustomerAddress({
      customerAccessToken: Decrypt(),
      addressId: formData.id,
    })
      .then((response) => {
        var errors =
          response.data.customerAddressDelete.customerUserErrors || [];
        if (errors.length != 0) {
          console.error({ errors });
          setFormErrors(errors);
        } else {
          router.push("/account/addresses");
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const submissionEnabled = Boolean(Object.keys(formData).length);
  const {
    address1,
    address2,
    city,
    company,
    country,
    firstName,
    lastName,
    phone,
    province,
    zip,
  } = formData;

  return (
    <section>
      <PageHead
        content={
          Address?.id
            ? SEO["EU"]?.EditAddress?.SEO
            : SEO["EU"]?.createAddress?.SEO
        }
      />
      <div className={styles.dFlex}>
      <Link href="/account/addresses" className={styles.backLink} aria-label="Go back to account's dashboard">
      <button className={styles.logOut}> ← Back</button>
      </Link>
      <h1 className={styles.header}>
        {Address?.id ? "Edit address" : "Create address"}
      </h1>
      </div>
      <>
        <form onSubmit={handleSubmit} className={styles.addressForm}>
          <div className={styles.nameContainer}>
            <div className={styles.nameWrapper}>
              <label className={styles.label}><b>First name:</b></label>
              <input
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                className={styles.input}
              />
            </div>
            <div className={styles.nameWrapper}>
              <label className={styles.label}><b>Last name:</b> </label>
              <input
                className={styles.input}
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <label className={styles.label}><b>Company:</b> </label>
          <input
            className={styles.input}
            name="company"
            value={company}
            onChange={handleOnChange}
          />
          <label className={styles.label}><b>Address:</b> </label>
          <input
            className={styles.input}
            name="address1"
            value={address1}
            onChange={handleOnChange}
          />
          <label className={styles.label}><b>Apartment, suite, etc:</b> </label>
          <input
            className={styles.input}
            name="address2"
            value={address2}
            onChange={handleOnChange}
          />
          <label className={styles.label}><b>City:</b> </label>
          <input
            className={styles.input}
            name="city"
            value={city}
            onChange={handleOnChange}
          />
          <div className={styles.inlineWrapper}>
            <div className={styles.verticalInput}>
              <label className={styles.label}><b>Country/Region:</b> </label>
              <input
                className={styles.input}
                name="country"
                value={country}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.verticalInput}>
              <label className={styles.label}><b>State:</b> </label>
              <input
                className={styles.input}
                name="province"
                value={province}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.verticalInput}>
              <label className={styles.label}><b>ZIP code:</b> </label>
              <input
                className={styles.input}
                name="zip"
                value={zip}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.verticalInput}>
              <label className={styles.label}><b>Phone:</b> </label>
              <input
                className={styles.input}
                name="phone"
                value={phone}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={styles.inlineWrapper}></div>
          {formErrors && (
            <div>
              {formErrors.map(({ message }, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
          )}
          <div className={styles.linkHolder}>
            {Address?.id && (
              <button
                className={`${styles.deleteButton} ${styles.btnHover}`}
                onClick={() => deleteSubmit()}
              >
                Delete address
              </button>
            )}
            <button
              type="submit"
              className={`${styles.addressButton} ${styles.btnHover}`}
              disabled={!submissionEnabled}
            >
              Save
            </button>
          </div>
        </form>
      </>
    </section>
  );
};

export default AccountAddress;
