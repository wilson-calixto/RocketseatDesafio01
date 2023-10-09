import { TasksDivItem } from './styles';
import { Trash } from 'phosphor-react'
import Unchecked from '../assets/unchecked.svg';
import Checked from '../assets/checked.svg';
import { ITask } from './TaskCard';



interface TasksProps {
  item: ITask,
  checkedTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Task({ item, checkedTask, deleteTask }: TasksProps) {
  return (
    <>
      <TasksDivItem key={item.toString()} checked={item.checked} >
        {
          item.checked ?
            <img src={Checked} alt="React Logo" onClick={() => {
              checkedTask(item.id);
            }} />
            :
            <img src={Unchecked} alt="React Logo" onClick={() => {
              checkedTask(item.id);
            }} />
        }
        <label htmlFor={item.text}> {item.text}</label><br></br>
        <Trash
          onClick={() => {
            deleteTask(item.id);
          }}
        ></Trash>
      </TasksDivItem>
    </>
  );
}