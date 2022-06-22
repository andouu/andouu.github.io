import Page from './Page';
import pageClasses from '../styles/page.module.css';
import PhysicsII from '../assets/papers/Physics II.pdf';
import MathIA from '../assets/papers/Math IA.pdf';
import EE from '../assets/papers/EE.pdf';
import EarthShader from '../assets/videos/Earth Shader.mp4';

export default function ResearchPage(props) {
  const { name } = props;
  return (
    <Page name={name}>
      Throughout the IB program, students must write numerous analytical papers, in which they independently research and report their findings.
      Attached below are various papers I've written for different subjects:
      <br />
      <br />
      <Paper subject='Higher Level Physics 2' link={PhysicsII}>
        In this Individual Investigation (II), I investigate the relationship between the internal pressure of a basketball and its initial rebound height.
      </Paper>
      <Paper subject='Higher Level Math (Analysis and Approaches 2)' link={MathIA}>
        In this paper, I created a model of the Earth using vector math and shader code (GLSL). Below is a video of the shader:
        <video style={{ marginTop: '1rem', overflow: 'hidden' }} width='100%' autoPlay muted loop>
          <source src={EarthShader} type='video/mp4' />
        </video>
      </Paper>
      <Paper subject='Connect 4 Solver Comparision' link={EE}>
        A computer science extended essay exploring how different optimizations to a Connect 4 solver increases its efficiency, pruning millions of unnecessary searches.
      </Paper>
    </Page>
  );
};

function Paper(props) {
  const { subject, link, children } = props;
  
  return (
    <div className={pageClasses['paper-container']}>
      <h3>{subject}: <a href={link} rel='noreferrer' target='_blank'>Download</a></h3>
      {children}
    </div>
  );
};
