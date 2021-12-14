export default function ProjName({ projectName }) {
  //const projectName = process.env.REACT_APP_PROJECT_NAME;
  document.title = projectName;
  return (
    <h2 align="center">
      {' '}
      - &#9887; &emsp; &#9958; &emsp;
      <u>{projectName}</u> &emsp; &#9957; &emsp; &#9886; -
    </h2>
  );
}
