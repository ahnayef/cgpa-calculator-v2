import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inputArea}>
        <h1>CGPA Calculator</h1>
        <form className={styles.inputBox}>

          <div className={styles.iSub}>
            <h3>Course: </h3>
            <input type="text" id='subject' list='subjects' required/>
            <datalist id="subjects">
              <option value="Data Structure and Algorithm"/>
              <option value="Electronic Devices and Circuits"/>
              <option value="Electronic Devices and Circuits Lab"/>
              <option value="Data Structure and Algorithm Lab"/>
              <option value="Linear Algebra"/>
              <option value="Fundamentals of physics"/>
              <option value="Advanced Functional English"/>
              <option value="Bangladesh Studies"/>
              <option value="EDC"/>
              <option value="EDC Lab"/>
              <option value="DSA"/>
              <option value="DSA Lab"/>
              </datalist>
          </div>
          <div className={styles.point}>
            <div className={styles.iGrade}>
              <h3>Grade: &nbsp;</h3>
              <select>
                <option value={4}>A+</option>
                <option value={3.75}>A</option>
                <option value={3.5}>A-</option>
                <option value={3.25}>B+</option>
                <option value={3}>B</option>
                <option value={2.75}>B-</option>
                <option value={2.5}>C+</option>
                <option value={2.25}>C-</option>
                <option value={2}>D</option>
                <option value={0}>F</option>
              </select>
            </div>
            <div className={styles.iCredit}>
              <h3>Credit: </h3>
              <select name="" id="">
                <option value={3}>3</option>
                <option value={1.5}>1.5</option>
              </select>
            </div>
          </div>
          <div className={styles.add}>
            <button type="submit">Add</button>
          </div>
        </form>

        <div className={styles.subList}>

          <div className={styles.sub}>
            <h3>Subject</h3>
            <h3>Grade</h3>
            <h3>Credit</h3>
          </div>

          <div className={styles.sub}>
            <h3>Subject Lorem ipsum dolor sit amet.</h3>
            <h3>A</h3>
            <h3>Credit</h3>
          </div>
          <div className={styles.sub}>
            <h3>Subject Lorem, ipsum dolor.</h3>
            <h3>C</h3>
            <h3>Credit</h3>
          </div>
          <div className={styles.sub}>
            <h3>Subject Lorem ipsum dolor sit.</h3>
            <h3>B</h3>
            <h3>Credit</h3>
          </div>
          <div className={styles.sub}>
            <h3>Subject</h3>
            <h3>D</h3>
            <h3>Credit</h3>
          </div>
        </div>

        <div className={styles.calculate}>
          <button>Calculate</button>
        </div>

        <div className={styles.result}>
          <h2>CGPA: </h2>
          <h2>3.5</h2>
        </div>

      </div>
    </main>
  )
}
