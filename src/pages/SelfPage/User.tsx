import { UserStore } from "stores";
import { useStore } from "effector-react";
import { Loader } from "components";
import { StartWrapper } from "layots";
import {
  ActiveTask,
  UserCard,
  UserChart,
  UserJobInfo,
  UserNumberCharacter,
} from "./components";

const User = () => {
  const { isLoading, userData } = useStore(UserStore.$userInfo);

  const options = userData
    ? [
        userData.speed,
        userData.quality,
        userData.sociability,
        userData.knowledge,
        userData.understanding,
      ]
    : [];
  if (isLoading || !userData) return <Loader.Large />;

  return (
    <StartWrapper cssProps={"p-10 gap-5"}>
      <section className="grid grid-cols-2 grid gap-5 w-full">
        <div className="w-full flex items-center flex-col">
          <UserChart size={400} options={options} />
          <ActiveTask />
        </div>
        <div className="w-full flex items-center flex-col">
          <UserCard data={userData} />
          <UserJobInfo />
          <UserNumberCharacter />
        </div>
      </section>
    </StartWrapper>
  );
};

export { User };
