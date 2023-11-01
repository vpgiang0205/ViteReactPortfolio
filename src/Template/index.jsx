import './template.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import Footer from './Components/Footer';

export default function Template() {
  return (
    <div className="template">
      <div className="mx-auto w-10/12">
        <Header />
        <div className="md:flex">
          <div className="md:w-2/12 md:h-screen">
            <Navbar />
          </div>

          <div className="md:w-10/12">
            <PageContent />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
