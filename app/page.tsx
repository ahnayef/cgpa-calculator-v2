"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css'
import { RiShieldStarLine } from "react-icons/ri";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import party from 'party-js'
import Link from 'next/link';




const initialData: { subList: Array<{ subName: string, grade: number, credit: number }> } = {
  subList: []
}


export default function Home() {

  const [subState, setSubState] = useState(initialData.subList);
  const [cgpa, setCgpa] = useState(0);
  const [check, setCheck] = useState(false);


  const handleConfetti = () => {
    party.confetti(document.querySelector('#result') as HTMLElement, {
      count: party.variation.range(50, 100)
    });
  }

  const Counter = ({ end }: { end: number }) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
      let start = 0;
      let totalMilSecDur = 1000;
      let increment = end / (totalMilSecDur / 50);

      let timer = setInterval(() => {
        start += increment;
        if (start > end) start = end; // Ensure we don't exceed the end value
        setCount(parseFloat(start.toFixed(2)));

        if (start.toFixed(2) == end.toFixed(2)) {
          clearInterval(timer);
        }
      }, 50); // Update every second

      // Clear interval on component unmount
      return () => clearInterval(timer);
    }, [end]);

    return <h1>{count.toFixed(2)}</h1>;
  };


  const triggerNav = () => {
    let check = document.getElementsByClassName("triggerNav")[0] as HTMLInputElement;
    check.checked == true ? check.checked = false : check.checked = true;
    setCheck(check.checked);
  }

  const handleAdd = (e: any) => {
    e.preventDefault();

    if (e.target.subject.value === '') return;

    // Prevent user from adding same subject twice
    for (let i = 0; i < subState.length; i++) {
      if (subState[i].subName === e.target.subject.value) {
        toast.error('Subject already added');
        return;
      }
    }


    const subName = e.target.subject.value;
    const grade = e.target[1].value;
    const credit = e.target[2].value;

    const newSub = {
      subName: subName,
      grade: grade,
      credit: credit
    }

    setSubState([...subState, newSub]);
    e.target.reset();
    setCgpa(0);
  }


  const scrollToBottom = () => {
    const result = document.querySelector('#bottomRef');
    result?.scrollIntoView({ behavior: 'smooth' });
  }


  const calcCGPA = () => {

    if (subState.length === 0) {
      toast.error('Add some subjects first');
      return;
    }

    let totalCredit = 0;
    let totalGrade = 0;

    for (let i = 0; i < subState.length; i++) {
      totalCredit += Number(subState[i].credit);
      totalGrade += subState[i].credit * subState[i].grade;
    }

    const cgpa = totalGrade / totalCredit;
    toast.success(`Your CGPA is ${cgpa.toFixed(2)}`);
    setCgpa(cgpa);
    setTimeout(() => {
      scrollToBottom();
      setTimeout(() => {
        handleConfetti();
      }, 200);
    }, 500);
  }

  return (
    <>
      <ToastContainer theme='dark' />
      <main className={styles.main}>
      
        <div className={styles.navGearIcon} onClick={triggerNav}>
          <i><TbInfoHexagonFilled /></i>
        </div>



      <input type="checkbox" className='triggerNav' id={styles.navTg} hidden/>
        <div className={styles.nav}>
          <h2>Menu</h2>
          <a href='https://github.com/ahnayef/cgpa-calculator-v2' target='_'><i><FaGithub /></i> Source code</a>
          <Link href='/feedback' ><i><VscFeedback /></i> Feedback</Link>
          <button onClick={triggerNav}>Close</button>
        </div>



        <div className={styles.inputArea}>
          <h1 className={styles.heading}>CGPA Calculator</h1>
          <form className={styles.inputBox} onSubmit={handleAdd}>

            <div className={styles.iSub}>
              <h3>Course: </h3>
              <input type="text" placeholder='Course Name' id='subject' list='subjects' required />
              <datalist id="subjects">
                <option value="Data Structure and Algorithm" />
                <option value="Electronic Devices and Circuits" />
                <option value="Electronic Devices and Circuits Lab" />
                <option value="Data Structure and Algorithm Lab" />
                <option value="Linear Algebra" />
                <option value="Fundamentals of physics" />
                <option value="Advanced Functional English" />
                <option value="Bangladesh Studies" />
              </datalist>
            </div>
            <div className={styles.point}>
              <div className={styles.iGrade}>
                <h3>Grade: &nbsp;</h3>
                <select required>
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

            {/* <div className={styles.sub}>
            <h3>EDC</h3>
            <h3>A+</h3>
            <h3>Credit</h3>
          </div>

          <div className={styles.sub}>
            <h3>DSA</h3>
            <h3>A+</h3>
            <h3>Credit</h3>
          </div>  */}
            {subState.length > 0 &&
              subState.map((sub, index) => {
                return (
                  <div className={styles.sub} key={index}>
                    <h3>{sub.subName}</h3>
                    <h3>{sub.grade}</h3>
                    <h3>{sub.credit}</h3>
                  </div>
                )
              })
            }


          </div>

          <div className={styles.calculate}>
            <button onClick={calcCGPA}>Calculate</button>
          </div>

          <div className={styles.result} id='result'>

            {cgpa > 0 &&
              <div className={styles.cgCircle}>
                <div className={styles.cgGradient}>
                  <div className={styles.texts}>
                    <i><RiShieldStarLine /></i>
                    <Counter end={cgpa} />
                    <p>{
                      cgpa >= 4 ? 'A+' :
                        cgpa >= 3.75 ? 'A' :
                          cgpa >= 3.5 ? 'A-' :
                            cgpa >= 3.25 ? 'B+' :
                              cgpa >= 3 ? 'B' :
                                cgpa >= 2.75 ? 'B-' :
                                  cgpa >= 2.5 ? 'C+' :
                                    cgpa >= 2.25 ? 'C-' :
                                      cgpa >= 2 ? 'D' :
                                        'F'
                    }</p>
                  </div>
                </div>
              </div>

            }

            {/* <div className={styles.cgCircle}>
              <div className={styles.cgGradient}>
                <div className={styles.texts}>
                  <i><RiShieldStarLine /></i>
                  <Counter end={3.65} />
                  <p>A+</p>
                </div>
              </div>
            </div> */}

          </div>

        </div>
        <div id="bottomRef"></div>
      </main>
    </>
  )
}
