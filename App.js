import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


class App extends React.Component {
  render(){
  return (
    <div>
      <Navbar />

      <Header />

    <Container />

    <Footer />
</div>
  );
}
}
export default App;
