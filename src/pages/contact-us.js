import React, { useEffect, useState } from 'react'
import styles from '@/styles/contattaci.module.css'
import ContactData from '../../json/contattaci.json'
import PageHead from '@/utilities/Head'

export default function Contattaci({ version }) {
  const { firstSection, term } = ContactData[version] || null;
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19647191",
          formId: "dd0d3402-2533-4782-a0ab-c61600d65a75",
          target: '#contactForm'
        })
      }
    });
  }, []);

  const handleCheck1 = () => {
    setState1(!state1)
  }

  const handleCheck2 = () => {
    setState2(!state2)
  }

  return (
    <section>
      <PageHead content={{ title: 'BrunoMD | Health & Wellness Products | Contact Us', description: "Have a question about our health & wellness products or a recent order? Contact BrunoMD by submitting your request using the form provided." }} />
      <div>
        <div className={styles.twoCol}>
          <div className={styles.copyBlock} dangerouslySetInnerHTML={{ __html: firstSection }}>
          </div>
          <div className={styles.form}>
            <form>
              <div className={styles.formGroup} id='contactForm'>
                {isSubmitted && (
                  <p className={styles.successMessage}>
                    Thanks for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                )}
                <label className={styles.formLabel}>
                  First Name
                  <input required className={styles.formInput} name="first_name" type="text" />
                </label>
                <label className={styles.formLabel}>
                  Last Name
                  <input required className={styles.formInput} name="last_name" type="text" />
                </label>
                <label className={styles.formLabel}>
                  Email
                  <input required className={styles.formInput} name="email" type="email" />
                </label>
                <label className={styles.formLabel}>
                  Phone Number
                  <input
                    required
                    className={styles.formInput}
                    name="phone_number"
                    type="tel"
                    pattern="[0-9\-]*"
                  />
                </label>
                <label className={styles.formLabel}>
                  Message
                  <textarea required id="message" className={styles.formInput} name="message" />
                </label>
                <button className={styles.cta} type="submit">
                  Submit
                </button>
              </div>
              <div className={styles.contPrivacy}>
                {term && <label for="con-1" className={styles.mt1}><input type="checkbox" id="con-1" checked={state1} onChange={handleCheck1} required /><span>&nbsp;Acconsento al trattamento dei miei dati e dichiaro di aver preso visione della &nbsp;<a href="/politica-sullariservatezza" target="_blank">Privacy Policy</a>.</span></label>}
                {term && <label for="con-2" className={styles.mt1}><input type="checkbox" id="con-2" checked={state2} onChange={handleCheck2} required /><span>&nbsp;Acconsento al trattamento dei miei dati personali per attivita di marketing, per ricevere la newsletter e informazioni relative alle vostre iniziative promozionali e commerciali</span></label>}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <NewsLetter content={HomePageData[version].newsletter} /> */}
    </section>
  )
}
