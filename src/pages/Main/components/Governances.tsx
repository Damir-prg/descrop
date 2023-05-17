import React from "react";
import { UI } from "components";
import { Governance } from "./Governance";
import { useStore } from "effector-react";
import { AuthStore } from "stores";

const Governances = () => {
  const { governance, departments } = useStore(AuthStore.$companyData);
  return (
    <aside className="flex flex-col gap-2 custom__shadow-inner p-2 rounded-xl">
      <UI.Custom.Label isBlockLabel={true} textPosition={"left"}>
        Управления
      </UI.Custom.Label>
      {governance.map((el) => (
        <Governance
          key={Math.random()}
          governance={el}
          departments={
            departments.filter((dEl) => dEl.governanceKey === el.key)[0]
          }
        />
      ))}
    </aside>
  );
};

export { Governances };
