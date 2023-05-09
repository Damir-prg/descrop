import React from 'react';

const CommandsTableHeadTd = ({isLast, text}: {isLast?: boolean, text: string}) => {
  return (
    <td
      align={"center"}
      className={`grid place-content-center p-2 border-b-2 font-semibold ${isLast ? "" : "border-r-2"}`}
    >
      {text}
    </td>
  );
};

export {CommandsTableHeadTd};