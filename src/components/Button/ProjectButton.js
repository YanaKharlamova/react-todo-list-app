import React from "react";
import { Button, Icon } from "semantic-ui-react";
import cn from "classnames";
import "./ProjectButton.scss";

const ProjectButton = ({ icon, handleActionOnClick }) => {
  return (
    <Button
      className={cn(["todo-button", `todo-button--${icon}`])}
      onClick={handleActionOnClick}
    >
      <Icon name={icon} />
    </Button>
  );
};

export default ProjectButton;
