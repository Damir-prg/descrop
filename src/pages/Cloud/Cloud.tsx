import React from "react";
import { File, Folder } from "./components";
import { StartWrapper } from "layots";
import { CommandStore, AuthStore } from "stores";
import { useStore } from "effector-react";

const Cloud = () => {
  const { departments, governance } = useStore(AuthStore.$companyData);
  const commands = useStore(CommandStore.$commands);
  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <Folder
        children={governance.map((gover) => (
          <Folder
            children={departments
              .filter((dep) => dep.governanceKey === gover.key)[0]
              .departments.map((el) => (
                <Folder folderLabel={el.name} />
              ))}
            folderLabel={gover.title}
          />
        ))}
        folderLabel={"Управления"}
      />
      <Folder
        children={commands.map((el) => (
          <Folder folderLabel={el.name} />
        ))}
        folderLabel={"Отдел"}
      />
      <Folder
        children={[
          <Folder
            children={[
              <File type={"word"} label={"Техническое задание"} />,
              <File type={"pdf"} label={"Техническое задание"} />,
              <File type={"img"} label={"Техническое задание"} />,
              <File type={"other"} label={"Техническое задание (.txt)"} />,
            ]}
            folderLabel={"Папка"}
          />,
          <Folder folderLabel={"Папка 2"} />,
          <Folder folderLabel={"Папка 3"} />,
        ]}
        folderLabel={"Команда"}
      />
      <Folder children={[]} folderLabel={"Мое облако"} />
    </StartWrapper>
  );
};

export { Cloud };
