import { CheckIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import "./FunctionalityDock.css";

const FunctionalityDock = ({
  handleDeleteAll,
  handleDeleteCompleted,
  handleAllCompleted,
}) => {
  const handleMarkUnfinished = () => {
    handleAllCompleted(false);
  };
  return (
    <div className="func__container">
      <p className="func__item" onClick={handleAllCompleted}>
        <CheckIcon className="icons--dock" />
        Mark all as completed
      </p>
      <p className="func__item" onClick={handleMarkUnfinished}>
        <MinusIcon className="icons--dock" />
        Mark all as unfinished
      </p>
      <p className="func__item item--warn" onClick={handleDeleteCompleted}>
        <TrashIcon className="icons--dock item--warn" />
        Clear completed items
      </p>
      <p className="func__item item--warn" onClick={handleDeleteAll}>
        <TrashIcon className="icons--dock item--warn" />
        Clear all
      </p>
    </div>
  );
};

export default FunctionalityDock;
