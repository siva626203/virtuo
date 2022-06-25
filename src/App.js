import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.css';
import { Fragment } from 'react';
import Home from './pages/home'

function App() {
  return (<Fragment>
      <ThemeProvider   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <Home />
      </ThemeProvider>
  </Fragment>
  );
}

export default App;
