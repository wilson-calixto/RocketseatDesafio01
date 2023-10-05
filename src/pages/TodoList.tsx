import { useCallback, useState } from 'react'
import { NewTask } from '../components/NewTask'
import { Header } from '../components/Header';
import { MainCard } from '../components/styles';
import { ITask, Tasks } from '../components/Tasks';

function TodoList() {
  const [count, setCount] = useState(0)
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

  return (
    <>
      <Header />

      <MainCard>
        <NewTask createTask={handleCreateTask} />
        <Tasks tasks={taskList} checkedTask={console.log} deleteTask={handleDeleteTask}></Tasks>
      </MainCard>

    </>
  )
}

export default TodoList
