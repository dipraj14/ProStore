import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <div className='App'>
      <>
        <Header />
        <main className='py-3'>
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </>
    </div>
  );
};

export default App;
