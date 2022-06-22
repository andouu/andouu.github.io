import Page from './Page';
import pageClasses from '../styles/page.module.css';

export default function HomePage(props) {
  const { name } = props;

  return (
    <Page name={name}>
      Hi, I'm Andrew! I am currently a highschool student attending Interlake High School as part of the
      gifted International Baccalaureate (IB) program. Below are the subjects that I studied for the IB program:
      <ul className={pageClasses.indented}>
        <li>Higher Level Physics 2</li>
        <li>Higher Level Math, Analysis and Approaches 2</li>
        <li>Higher Level English Lang Lit 2</li>
        <li>Higher Level Music</li>
        <li>Standard Level History</li>
        <li>Standard Level Chinese</li>
      </ul>
      <br />
      Outside of school, I spend a large portion of my time programming various apps, which you can see in the <b>Software</b> section.
      At the moment, I am pursuing an internship in a STEM field where I will be able to utilize my software development skills to make research easier.
    </Page>
  );
};
