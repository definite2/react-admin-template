import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
export const Fallback = () => {
  return (
    <div className="fallback-screen">
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </div>
  );
};
