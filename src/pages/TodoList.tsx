import { useCallback, useState } from 'react'
import { NewTask } from '../components/NewTask'
import { Header } from '../components/Header';
import { MainCard } from '../components/styles';
import { ITask, TaskCard } from '../components/TaskCard';

function TodoList() {
  const [taskList, setTaskList] = useState<ITask[]>([])




  const handleCreateTask = useCallback((text: string) => {
    const newItem: ITask = { id: taskList.length, text: text, checked: false }
    setTaskList((prev) => {
      const newFileList: ITask[] = [
        ...prev,
        newItem
      ];
      console.log(newFileList)

      return newFileList;
    })

  }, [taskList, setTaskList]);


  const handleDeleteTask = useCallback((id: number) => {

    setTaskList(taskList.filter(item => item.id !== id));

  }, [taskList, setTaskList]);

  function handlecheckTask(id: number) {

    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          text: task.text
        }
      } else {
        return task;
      }
    });
    setTaskList(updatedTasks);
    console.log("updatedTasks", updatedTasks)

  }
  return (
    <>
      <Header />

      <MainCard>
        <NewTask createTask={handleCreateTask} />
        <TaskCard tasks={taskList} checkedTask={handlecheckTask} deleteTask={handleDeleteTask} />
      </MainCard>

    </>
  )
}

export default TodoList
