import React from "react";
import { Button } from "semantic-ui-react";

export const ActionButtonIcon = React.forwardRef(({ icon, iconColor }, ref) => {
  return (
    <div ref={ref} className={iconColor}>
      {icon}
    </div>
  );
});
const ActionButton = (props) => {
  const { className, ...rest } = props;
  return <Button className={className} icon={<ActionButtonIcon />} {...rest} />;
};

export default ActionButton;
