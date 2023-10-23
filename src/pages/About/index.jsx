import { Link } from "react-router-dom";
import './about.css'
export default function About() {
  return (
    <section id="section__About">
      <h1 className="sections__Title">Hi, Pavel from Kyiv, Ukraine</h1>
      <p> 
      I have more than 1 years’ experience in HTML/CSS/Javascript. 
      I love creating user interfaces which are intuitive, convenient and beautiful. Of course,
        I’m paying attention to performance and accessibility that I consider to be highly important.</p>

      <Link className="nav-link" to="https://drive.usercontent.google.com/download?id=11XyCtJQH4i72DWajXF-_NddbcSXYILmj&export=download&authuser=0&confirm=t&uuid=9522124b-c534-42e1-aff0-85f4190f087e&at=APZUnTXE56OGsNmIHEMIHMAgNpsu:1697548122153">
        Download CV
      </Link>

    </section>
  )
}
