
function Skills() {
  return (
    <div className=" flex  justify-center gap-5 p-4">
      <div className="">
        <div>
          <p className="text-white" data-aos="fade-up" data-aos-anchor-placement="top-center">
            I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          </p>
        </div>

        <ul className="text-green-300">
          <li data-aos="fade-right"
            data-aos-offset="500"
          >ReactJs</li>

          <li data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="550">JavaScript (ES5+)</li>

          <li data-aos="fade-right"
            data-aos-delay="600">Tailwind, Bootstrap</li>

          <li data-aos="fade-right"
            data-aos-delay="650">HTML and CSS, Sass</li>

          <li data-aos="fade-right"
            data-aos-delay="700">PHP</li>

          <li data-aos="fade-right"
            data-aos-delay="800">MySQL</li>

          <li data-aos="fade-right"
            data-aos-delay="900">TOEIC Certificate: 740 / Cybersoft Academy GPA: 8.7</li>
        </ul>
      </div>

      <div className="">
        <ul className="text-green-300">
          <li data-aos="fade-down"
            data-aos-delay="500">Redux--toolkit, React hooks</li>
          <li className="mt-4"
            data-aos="fade-down"
            data-aos-delay="550"
          >Version control: Github, SourceTree</li>
          <li data-aos="fade-down"
            data-aos-delay="700">Performance optimization</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
