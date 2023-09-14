import "./Footer.css";

const Footer = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <footer>
      <div className="footer__container">
        <p className="footer__text">
          Completed: <span className="footer__state">{completedCount}</span>
        </p>
        <p className="footer__text">
          Unfinished:{" "}
          <span className="footer__state">
            {todos.length - completedCount}
          </span>
        </p>
        <p className="footer__text">Total: {todos.length}</p>
      </div>
    </footer>
  );
};

export default Footer;
