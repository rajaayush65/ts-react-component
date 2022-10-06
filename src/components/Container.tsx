import React, { ReactElement, ReactNode } from "react";

const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = {
  children: ReactNode;
} & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}
Container.defaultProps = defaultContainerProps;

export default Container;
