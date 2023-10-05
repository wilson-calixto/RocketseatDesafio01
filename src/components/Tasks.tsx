import { CustomBlueTypography, CustomCount, CustomDivider, CustomPurpleTypography, CustomSimpleGrayTypography, CustomSimpleTypography, SimpleDivider, TasksDiv } from './styles';
import clipBoard from '../assets/clipboard.svg'


interface Task {
  id: string;
  checked: boolean;
  text: string;
}

interface TasksProps {
  tasks: Task[],
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks({ tasks, checkedTask, deleteTask }: TasksProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);

  return (
    <>
      <CustomDivider>
        <TasksDiv>
          <CustomBlueTypography variant='small'>Tarefas criadas </CustomBlueTypography>
          <CustomCount>{tasks.length}</CustomCount>
        </TasksDiv>

        <TasksDiv>
          <CustomPurpleTypography variant='small'>Concluídas</CustomPurpleTypography>
          <CustomCount>{0}</CustomCount>
        </TasksDiv>

      </CustomDivider>


      {tasks.length > 0 ?
        tasks.map((item, index) =>

          <div key={item.toString()}>
            <input type="checkbox" id="vehicle1" value={index} />
            <label for="vehicle1"> {item}</label><br></br>
          </div>
        )
        :
        <>
          <SimpleDivider>
            <img src={clipBoard} className="Clip Board" alt="Clipe Board" />
          </SimpleDivider>
          <CustomSimpleTypography >
            Você ainda não tem tarefas cadastradas
          </CustomSimpleTypography>
          <CustomSimpleGrayTypography >
            Crie tarefas e organize seus itens a fazer
          </CustomSimpleGrayTypography>
        </>
      }


    </>
  );
}