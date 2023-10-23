
function Skills() {
  return (
    <div className="flex bg-black gap-5 p-4">
      <div className="flex-1">
        <p className="text-white">
          Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
        </p>

        <ul className="text-green-300">
          <li>JavaScript, Level 3 (React.js)</li>
          <li>TOEIC Certificate: 740 / Cybersoft Academy GPA: 8.7</li>
          <li>JavaScript, Level 2</li>
          <li>HTML and CSS</li>
        </ul>
      </div>

      <div className="flex-1">
        <ul className="text-green-300">
          <li>React</li>
          <li>Redux</li>
          <li>JavaScript (ES5+)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass</li>
          <li className="mt-4">Accessibility<br />Performance optimization</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
