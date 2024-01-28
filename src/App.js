import { useState, useEffect } from 'react';
import Router from './routes/Router';
import { SplashImg } from 'components';

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1300);
  }, []);
  return <>{splash ? <SplashImg /> : <Router />}</>;
}

export default App;
