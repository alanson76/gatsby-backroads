import React, { useState } from "react"

//icons
import { FaAngleDown } from "react-icons/fa"

//styles
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn}>
          <FaAngleDown onClick={() => setInfo(!showInfo)} />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day

