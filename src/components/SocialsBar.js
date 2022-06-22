import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const iconSize = 25;
const socialsData = [
  { name: 'Github', icon: <AiFillGithub size={iconSize} />, link: 'https://github.com/andouu' },
  { name: 'LinkedIn', icon: <FaLinkedinIn size={iconSize - 2.5} />, link: 'https://www.linkedin.com/in/andou/'},
  { name: 'Instagram', icon: <AiOutlineInstagram size={iconSize} />, link: 'https://www.instagram.com/andou____/' }
];

function SocialsButton(props) {
  const { icon, link } = props;

  return (
    <a href={link} target='_blank' rel='noreferrer' className='socials-button'>
      {icon}
    </a>
  );
};

export default function SocialsBar() {
  const socials = socialsData.map((platform, index) => {
    return <SocialsButton icon={platform.icon} link={platform.link} />;
  });

  return (
    <div id='socials-bar'>
      {socials}
    </div>
  );
};
