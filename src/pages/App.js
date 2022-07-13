import './App.scss';
import AppHeader from '../sections/Header'
import AppHomeBanner from '../sections/HomeBanner'
import AppCards from '../sections/Cards';
import AppMotionSection from '../sections/Motion';
import AppContact from '../sections/Contact';
import AppFooter from '../sections/Footer';
import { useTheme } from '../ThemeContext';

function App() {

  const { theme } = useTheme()

  return (
    <div
      className="App"
      brand={theme.brand}
      theme='theme-1'
      mode={theme.mode} >
      <AppHeader />
      <AppHomeBanner />
      <AppCards />
      <AppMotionSection />
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-start-2 col-span-10">
          <span className='divider'></span>
        </div>
      </div>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default App;
