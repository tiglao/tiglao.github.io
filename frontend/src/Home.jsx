import React from 'react';
import Header from './Header'; // Adjust the import paths as needed
import Footer from './Footer'; // Adjust the import paths as needed

function Home() {
  return (
    <div className="flex-column">
      <Header />
      <main>
        <div className="container">
        <div className="row">
            <div className="col-12 py-5"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <img src="/images/sun.PNG" alt="Sun" className="img-fluid" />
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
          <div className="col text-center">
            <p className="sans-serif">Ellie Tiglao - Sans-Serif</p>
            <p className="serif">Ellie Tiglao - Serif</p>
            <p className="monospace">Ellie Tiglao - Monospace</p>
            <p className="cursive">Ellie Tiglao - Cursive</p>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
