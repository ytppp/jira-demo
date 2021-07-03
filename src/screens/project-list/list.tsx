import { UserProps, ProjectProps } from "./index";

interface ListProps {
  users: UserProps[];
  projects: ProjectProps[];
}

const List = ({ users, projects }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
