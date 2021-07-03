import { useEffect, useState } from "react";
import Panel from "./panel";
import List from "./list";
import * as qs from 'qs';
import { cleanObject } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    id: "",
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if(response.ok) {
        setProjects(await response.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if(response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  return (
    <div>
      <Panel users={users} param={param} setParam={setParam}/>
      <List users={users} projects={projects} />
    </div>
  );
};

export default ProjectList;
