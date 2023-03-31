import { useEffect, useState } from "react";
export function App() {
    function addAToDo(){
        const title=prompt("Enter a title for todo");
        const description=prompt("Enter a description for todo");
        setTodolist([...todolist,{id: counter+1,title: title, description: description}]);
        setCounter(counter+1);
    }
  const [todolist, setTodolist] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("There are some changes in to do list");
  }, [todolist]);
  if (todolist.length === 0) {
    return (
      <>
        <div>Hey Mate there is nothing to do, Just chill Maadi!</div>
        <button onClick={addAToDo}>Click me to add a todo!</button>
      </>
    );
  } else {
    let mapped=todolist.map((ele) => {
      return (
        <div key={ele.id}>
          <span>{ele.id}</span>&nbsp;
          <span>{ele.title}</span>&nbsp;
          <span>{ele.description}</span>&nbsp; 
        </div>
      );
    });
    return [mapped, <button key={counter} onClick={addAToDo}>Click me to add a todo!</button>];
  }

}
