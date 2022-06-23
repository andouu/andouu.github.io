import * as React from 'react';
import './styles/App.css';
import globalClasses from './styles/global.module.css';
import pfp from './assets/images/pfp.jpg';
import { HOME_PAGE, pages, getPage, FadeAwayPage } from './components/getPage';
import SocialsBar from './components/SocialsBar';

function App() {
  const [pageName, setPageName] = React.useState(HOME_PAGE);
  const [prevPageName, setPrevPageName] = React.useState(null);
  const [showPrevPage, setShowPrevPage] = React.useState(false);
  
  const handleChangePage = React.useCallback((name) => {
    if (!pages.includes(name)) {
      return;
    }
    setShowPrevPage(true);
    setPrevPageName(pageName);
    setPageName(name);
  }, [pageName]);

  const navButtons = pages.map((page, index) => {
    return <NavButton key={index} name={page} selected={page === pageName} handleChangePage={handleChangePage} />
  });

  const getContentMemoized = React.useCallback(() => getPage(pageName), [pageName]);
  const content = getContentMemoized();

  return (
    <div className={[globalClasses['center-items']]}>
      <div className='App'>
        <div className='Nav'>
          <div id='bio'>
            <img id='pfp' src={pfp} alt='Me' onClick={(e) => { e.preventDefault(); handleChangePage(HOME_PAGE); }} />
            <div>
              <p id='name'>Andrew Zhou</p>
              <p id='description'>Student, Software Developer</p>
            </div>
          </div>
          <SocialsBar />
          <h1 id='toc-text'>Table of Contents:</h1>
          <ul id='menu'>
            {navButtons}
          </ul>
          <span id='copyright'>2022 &copy; All Rights Reserved.</span>
        </div>
        <div className='Main'>
        {prevPageName && showPrevPage && <FadeAwayPage name={prevPageName} onAnimationEnd={() => setShowPrevPage(false)} />}
          {content}
        </div>
      </div>
    </div>
  );
};

function NavButton(props) {
  const { name, selected, handleChangePage } = props;

  return (
    <li>
      <a 
        href="#bio" 
        onClick={(e) => {
          e.preventDefault();
          handleChangePage(name);
        }}
        style={{
          marginLeft: selected ? '0.75rem' : undefined,
          fontWeight: selected ? 700 : undefined,
          color: selected ? 'black' : 'gray'
        }}>
          {name}
        </a>
      </li>
  );
};

export default App;
