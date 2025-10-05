import { StatusMassageProps } from "../../types/moviesTypes";
const StatusMessage = ({ message, color = "white" }: StatusMassageProps) => {
  return (
    <div
      className={`flex justify-center items-center  h-screen text-2xl
       ${color}`}
    >
      <b>{message}</b>
    </div>
  );
};

export default StatusMessage;
