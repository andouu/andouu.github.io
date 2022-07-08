import Page from './Page';
import pageClasses from '../styles/page.module.css';
import { BsLink45Deg } from 'react-icons/bs';

export default function SoftwarePage(props) {
  const { name } = props;
  return (
    <Page name={name}>
      In my free time, I develop mobile apps and develop games :)
      <div className={pageClasses['button-row']}>
        <a href='#apps' className={pageClasses.button}>Apps</a>
        <a href='#games' className={pageClasses.button}>Games</a>
      </div>
      <div id='apps'>
        <h3>📱 Mobile / Desktop Apps:</h3>
        <Showcase name='Intral' role='Project Lead, Full Stack Developer'>
          Intral is the cross-platform, all-in-one mobile app designed by students, with students in mind.
          Tracking performance throughout the year, students have the ability to analyze which
          classes they're doing good in, which classes they're doing bad in, and how best to improve.
          Newly added assignments are notified to the app so that students no longer need to constantly
          stress over and check the grade book every few minutes.
        </Showcase>
        <Showcase name='Toss-It' role='Project Co-Lead, Full Stack Developer' link='https://www.tossit.app'>
          Toss-It is a real-time online quizzing game in which the teacher doesn't quiz the students,
          but the students quiz each other. With a variety of engaging and fun quiz options, Toss-It
          promotes active and enjoyable learning!
        </Showcase>
      </div>
      <div id='games'>
        <h3>🎮 Games:</h3>
        <Showcase name='Dinnersaurs!' role='Developer' link='https://queazy.itch.io/dinnersaurs'>
        A cartoony "run and gun" game featuring a love-hate relationship between an oviraptor and its pursuers.
        Players run and snatch eggs from nests, breaking into sick dance moves as they do so.
        </Showcase>
        <Showcase name='Sustainity' role='Developer' link='https://theyuch.itch.io/sustainity'>
        A 2D isometric tower-defense game promoting building clean energy infrastructure to fight climate
        change and global warming. Implemented algorithms that helped this game win the Best Game and Best Code
        awards for the 2020 Washington State Parent Teacher Association (WSPTA) game development competition.
        </Showcase>
      </div>
    </Page>
  );
};

function Showcase(props) {
  const { name, role, link, children } = props;
  return (
    <div className={pageClasses.showcase}>
      <div className={pageClasses.title}>
        <span><strong>{name}</strong> / {role}</span>
        {link && (
          <a className={pageClasses.link} href={link} rel='noreferrer' target='_blank'>
            <BsLink45Deg size={20} />
          </a>
        )}
      </div>
      <div className={pageClasses.description}>{children}</div>
    </div>
  );
};
