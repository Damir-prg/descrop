import React from "react";

const UserListTableThead = () => {
  return (
    <thead className="user-list-table__thead">
      <tr>
        <th align={"left"}>ФИО</th>
        <th align={"left"}>Номер телефона</th>
        <th align={"left"}>Команда</th>
        <th>Активных проектов</th>
      </tr>
    </thead>
  );
};

export { UserListTableThead };
