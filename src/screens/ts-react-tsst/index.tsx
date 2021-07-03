import { useArray, useMount } from "utils";

const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    {
      name: "jack",
      age: 25,
    },
  ];
  const { value, add, removeIndex, clear } = useArray(persons);
  useMount(() => {
    // error
    // console.log(value.notExist);
    // error
    // add({ name: david });
    // error
    // removeIndex("123");
  });
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove first</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <div key={index}>
          <span>{index}.</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default TsReactTest;
