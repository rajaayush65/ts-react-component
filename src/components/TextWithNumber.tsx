import React, { ReactNode, useState } from "react";

function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;

  children: (num: number) => ReactNode;
}) {
  const [state, setState] = useState<number>(1);
  return (
    <div>
      {header && <h3>{header?.(state)}</h3>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  );
}

export default TextWithNumber;
