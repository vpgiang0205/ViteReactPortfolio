import './template.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import PageContent from './Components/PageContent';
import Footer from './Components/Footer';

export default function Template() {
  return (
    <div className="template">
      <Header />
      <div className="flex">
        <div className="w-3/12"> {/* 1/2 width (col-6 equivalent) */}
          <Navbar />
        </div>
        <div className="w-9/12"> {/* 1/2 width (col-6 equivalent) */}
          <PageContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
