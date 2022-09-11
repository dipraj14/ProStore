import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer'
const App = () => {
  return (
    <div className="App">
      <>
        <Header />
          <main className = 'py-3'> 
            <Container>
              <h1>Welcome To ProStore</h1>
            </Container>
          </main>
        <Footer />
      </>

    </div>
  );
}

export default App;
