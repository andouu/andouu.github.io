import HomePage from './HomePage';
import ResearchPage from './ResearchPage';
import SoftwarePage from './SoftwarePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

export const HOME_PAGE = 'Home';
export const RESEARCH_PAGE = 'Research';
export const SOFTWARE_PAGE = 'Software';
export const CONTACT_PAGE = 'Contact';
export const ABOUT_PAGE = 'About Me';

export const pages = [HOME_PAGE, RESEARCH_PAGE, SOFTWARE_PAGE, CONTACT_PAGE, ABOUT_PAGE];

export function getPage(pageName) {
  switch (pageName) {
    case HOME_PAGE:
      return <HomePage name={HOME_PAGE} />;
    case RESEARCH_PAGE:
      return <ResearchPage name={RESEARCH_PAGE} />;
    case SOFTWARE_PAGE:
      return <SoftwarePage name={SOFTWARE_PAGE} />;
    case CONTACT_PAGE:
      return <ContactPage name={CONTACT_PAGE} />;
    case ABOUT_PAGE:
      return <AboutPage name={ABOUT_PAGE} />;
    default:
      return <HomePage name={HOME_PAGE} />;
  }
}

export function FadeAwayPage(props) {
  const { name, onAnimationEnd } = props;
  const page = getPage(name);

  return (
    <div key={Math.random()} className='fade-page Main' onAnimationEnd={onAnimationEnd}>
      {page}
    </div>
  );
};
