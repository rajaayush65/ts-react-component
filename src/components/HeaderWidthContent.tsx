import React, { ReactElement, ReactNode } from "react";

function HeaderWidthContent({
  children,
}: {
  children: ReactNode;
}): ReactElement | null {
  return <div>{children}</div>;
}

export default HeaderWidthContent;
