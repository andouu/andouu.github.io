import Page from './Page';

export default function ContactPage(props) {
  const { name } = props;
  return (
    <Page name={name}>
      <span>Email: <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com' rel='noreferrer' target="_blank">andrewzhou16@gmail.com</a></span>
      <br />
      Phone: (425) 761-6980
      <br />
      Discord: andou#4764
    </Page>
  );
};