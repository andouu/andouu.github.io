import pageClasses from '../styles/page.module.css';

export default function Page(props) {
  const { name, children } = props;
  return (
    <>
      <h1 className={pageClasses.header}>{name}</h1>
      <div style={{ lineHeight: 2 }}>{children}</div>
    </>
  );
};
