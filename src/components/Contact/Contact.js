import React from "react"

//my
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/alanson76@gmail.com"
          method="POST"
          className={styles.form}
        >
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="your name"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="your email"
            />
          </div>
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              rows="10"
              name="message"
              id="message"
              className={styles.formControl}
              placeholder="your message"
            />
          </div>
          <div>
            <input type="submit" value="Submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
