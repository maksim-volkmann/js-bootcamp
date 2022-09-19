import useCustomHook from "./useCustomHook";
import "./App.css";

const HookPage = () => {
  const { dataState, loading, error } = useCustomHook(
    "http://localhost:3001/api/get"
  );

  const displayUsers = () => {
    return (
      <>
        {dataState?.map((user) => {
          return (
            <div className="userswrapper">
              <div className="left">{`Username: ${user.userName}`}</div>
              <div className="right"> {`Emails: ${user.email}`}</div>
            </div>
          );
        })}
      </>
    );
  };

  return <div className="users">{displayUsers()}</div>;
};

export default HookPage;
