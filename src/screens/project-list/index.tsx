import { useEffect, useState } from "react";
import Panel from "./panel";
import List from "./list";
import * as qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;
export interface UserProps {
  id: number;
  name: string;
}
export interface ProjectProps {
  id: number;
  name: string;
  personId: number;
  organization: number;
  created: number;
}

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    id: "",
  });
  const debouncedParam = useDebounce(param, 500);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setProjects(await response.json());
      }
    });
  }, [debouncedParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <Panel users={users} param={param} setParam={setParam} />
      <List users={users} projects={projects} />
    </div>
  );
};

export default ProjectList;
