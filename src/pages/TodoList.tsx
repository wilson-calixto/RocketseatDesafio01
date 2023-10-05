import { useCallback, useState } from 'react'
import { NewTask } from '../components/NewTask'
import { Header } from '../components/Header';
import { MainCard } from '../components/styles';
import { Tasks } from '../components/Tasks';

function TodoList() {
  const [count, setCount] = useState(0)
  const [taskList, setTaskList] = useState<string[]>([])




  const handleCreateTask = useCallback((newItem: string) => {

    setTaskList((prev) => {
      const newFileList: string[] = [
        ...prev,
        newItem
      ];
      return newFileList;
    })


  }, [taskList, setTaskList]);


  return (
    <>
      <Header />

      <MainCard>
        <NewTask createTask={handleCreateTask} />
        <Tasks tasks={taskList} checkedTask={console.log} deleteTask={console.log}></Tasks>
      </MainCard>

    </>
  )
}

export default TodoList
