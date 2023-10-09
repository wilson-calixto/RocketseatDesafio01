import { CardHeader } from './CardHeader';
import { WithoutTasks } from './WithoutTasks';
import { Task } from './Task';



export interface ITask {
  id: number;
  checked: boolean;
  text: string;
}

interface TasksProps {
  tasks: ITask[],
  checkedTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function TaskCard({ tasks, checkedTask, deleteTask }: TasksProps) {
  const thereIsAnyTask = tasks.length > 0;

  return (
    <>
      <CardHeader
        tasks={tasks}
      />
      {thereIsAnyTask ?
        tasks.map((item) =>
          <Task
            item={item}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        )
        :
        <WithoutTasks />
      }
    </>
  );
}