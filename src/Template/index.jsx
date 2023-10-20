import './template.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import Footer from './Components/Footer';

export default function Template() {
  return (
    <div className="template">
      {CubeXl()}
      <div className="mx-auto w-10/12">
        <Header />
        <div className="flex">
          <div className="w-2/12">
            <Navbar />
          </div>

          <div className="w-10/12">
            <PageContent />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const CubeXl = () => (
  <svg width="256px"
    height="256px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000" transform="rotate(90)">
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}" }} /></defs>

      <polygon fill='red' points="40.86 14.3 23.89 4.5 7.03 14.23 24 24.03 40.86 14.3" />
      <polygon fill='blue' points="24 24.03 7.03 14.23 7.03 33.7 24 43.5 24 24.03" />
      <polygon fill='green' points="40.86 14.3 24 24.03 24 43.5 40.86 33.77 40.86 14.3" />
    </g></svg>

);