import { UserProps } from "./index";

interface PanelProps {
  users: UserProps[];
  param: {
    name: string;
    id: string;
  };
  setParam: (params: PanelProps["param"]) => void;
}

const Panel = ({ users, param, setParam }: PanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
        <select
          value={param.id}
          onChange={(e) =>
            setParam({
              ...param,
              id: e.target.value,
            })
          }
        >
          <option value="">全部</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Panel;
