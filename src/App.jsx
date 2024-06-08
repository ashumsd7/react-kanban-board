import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCard from "./components/TaskCard";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import { completed, inProgress, todos } from "./data";
import NoTask from "./components/NoTask";

function App() {

  const [allTodos, setAllTodos] = useState(todos);
  const [allInProgress, setAllInProgress] = useState(inProgress);
  const [allCompleted, setAllCompleted] = useState(completed);

  function getConfig(ev) {
    console.log("***TODO*****");
    const droppedItemId = ev.dataTransfer.getData("id");
    const droppedItemFrom = ev.dataTransfer.getData("from");
    console.log("Dropped item ID:", droppedItemId);
    console.log("droppedFrom", droppedItemFrom);
    const droppedItemIndex = ev.dataTransfer.getData("index");
    console.log("droppedItemIndex", droppedItemIndex);

    return {
      id: droppedItemId,
      from: droppedItemFrom,
      index: droppedItemIndex,
    };
  }

  function removeItemFromTodo(index) {
    const selectedTask = allTodos[index];
    console.log("selectedTask", selectedTask);
    setAllTodos((prev) => {
      const prevItems = [...prev];
      console.log("prevItems vef", prevItems);
      prevItems.splice(index, 1);
      console.log("prevItems  af", prevItems);
      return prevItems;
    });
    return selectedTask;
  }
  function removeItemFromInProgress(index) {
    const selectedTask = allInProgress[index];
    setAllInProgress((prev) => {
      const prevItems = [...prev];
      prevItems.splice(index, 1);
      return prevItems;
    });
    return selectedTask;
  }
  function removeItemFromInCompleted(index) {
    const selectedTask = allCompleted[index];
    setAllCompleted((prev) => {
      const prevItems = [...prev];
      prevItems.splice(index, 1);
      return prevItems;
    });
    return selectedTask;
  }

  function onDropInTodo(ev) {
    console.log("***TODO*****");
    const { id, from, index } = getConfig(ev);
    console.log({ id, from, index });
    let selectedTask = null;
    if (from == "todo") return;
    if (from == "inprogress") {
      selectedTask = removeItemFromInProgress(index);
    }
    if (from == "completed") {
      selectedTask = removeItemFromInCompleted(index);
    }

    setAllTodos((prev) => {
      const prevItems = [...prev];
      prevItems.unshift(selectedTask);
      return prevItems;
    });
  }

  function onDropInProgress(ev) {
    console.log("***INPROGRESS*****");

    const { id, from, index } = getConfig(ev);
    console.log({ id, from, index });

    let selectedTask = null;
    if (from == "inprogress") return;
    if (from == "todo") {
      selectedTask = removeItemFromTodo(index);
    }
    if (from == "completed") {
      selectedTask = removeItemFromInCompleted(index);
    }

    setAllInProgress((prev) => {
      const prevItems = [...prev];
      prevItems.unshift(selectedTask);
      return prevItems;
    });
  }
  function onDropInCompleted(ev) {
    console.log("***IN COMPLETED*****");

    const { id, from, index } = getConfig(ev);
    console.log({ id, from, index });

    let selectedTask = null;
    if (from == "completed") return;
    if (from == "todo") {
      selectedTask = removeItemFromTodo(index);
    }
    if (from == "inprogress") {
      selectedTask = removeItemFromInProgress(index);
    }

    setAllCompleted((prev) => {
      const prevItems = [...prev];
      prevItems.unshift(selectedTask);
      return prevItems;
    });
  }
  function allowDrop(ev) {
    console.log("Hey ");
    ev.preventDefault();
  }

  return (
    <div className="">
      <Sidebar />'
      <main className="ml-[300px] mt-[70px] h-screen fixed flex  gap-6   ">
     
        {/* TODO -  */}
        <div className="relative">
          <h2 className="font-extrabold text-2xl mb-4">Todo ({allTodos.length})</h2>
          <div
            className="flex flex-col gap-4  p-4  h-[87vh] overflow-y-auto overflow-x-hidden mb-10 "
            onDrop={onDropInTodo}
            onDragOver={allowDrop}
          >
            <div className="w-[340px] border rounded-md justify-center border-dotted border-red-400  flex flex-col gap-2 p-4 ease-out 2s transition-shadow">
              {allTodos.length > 0 ? (
                allTodos?.map((item, index) => {
                  return <TaskCard data={item} from="todo" index={index} />;
                })
              ) : (
                <NoTask />
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <h2 className="font-extrabold text-2xl mb-4">In Progress ({allInProgress.length})</h2>
          <div
            className="flex flex-col gap-4  p-4 h-[87vh] overflow-y-auto overflow-x-hidden mb-10 "
            onDrop={onDropInProgress}
            onDragOver={allowDrop}
          >
             <div className="w-[340px] border rounded-md justify-center border-dotted border-red-400  flex flex-col gap-2 p-4">
              {allInProgress.length > 0 ? (
                allInProgress?.map((item, index) => {
                  return <TaskCard data={item} from="inprogress" index={index} />;
                })
              ) : (
                <NoTask text={'Nothing here! Move something from todo.'} />
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <h2 className="font-extrabold text-2xl mb-4">Completed ({allCompleted.length})</h2>
          <div
            className="flex flex-col gap-4  p-4  h-[87vh] overflow-y-auto overflow-x-hidden mb-10 "
            onDrop={onDropInCompleted}
            onDragOver={allowDrop}
          >
             <div className="w-[340px] border rounded-md justify-center border-dotted border-red-400  flex flex-col gap-2 p-4">
              {allCompleted.length > 0 ? (
                allCompleted?.map((item, index) => {
                  return <TaskCard data={item} from="completed" index={index} />;
                })
              ) : (
                <NoTask text={'You have not completed any tasks yet'} />
              )}
            </div>
          </div>
          {/* <div className="mb-4 absolute right-0 top-[-80px]">
            <Button type="bordered"> + Add new task</Button>
          </div> */}
           <div className="mb-4 absolute right-0 top-[-80px] text-white font-extrabold">
           <a href="https://aat.netlify.app" target="_blank">Built by : Ashutosh Anand Tiwari</a>
          </div>
        </div>

        {/* Done */}
        {/* <TaskCard /> */}
      </main>
    </div>
  );
}

export default App;
