import { Link } from "react-router-dom";
import './about.css'
export default function About() {
  return (
    <section id="section__About">
      <h1 className="sections__Title">Vo Phong Giang</h1>
      <p> 
      I have more than 1 years experience in HTML/CSS/Javascript. 
      I love creating user interfaces which are intuitive, convenient and beautiful. Of course,
        I am paying attention to performance and accessibility that I consider to be highly important.</p>

      <Link className="nav-link" to="https://export-download.canva.com/ApH1s/DAFZNbApH1s/586/0-7017026977893529239.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240214%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240214T201748Z&X-Amz-Expires=57040&X-Amz-Signature=94ee4bbf307b502f769ad16929e6fd000be0ec7dca78e53c28fafcb8fa76738b&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Vo%2520Phong%2520Giang.pdf.pdf&response-expires=Thu%2C%2015%20Feb%202024%2012%3A08%3A28%20GMT">
        Download CV
      </Link>

    </section>
  )
}
