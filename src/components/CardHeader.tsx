import { CustomBlueTypography, CustomCount, CustomDivider, CustomPurpleTypography, TasksDiv } from './styles';
import { ITask } from './TaskCard';


interface CardHeaderProps {
  tasks: ITask[];
}

export function CardHeader({ tasks }: CardHeaderProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);

  return (
    <CustomDivider>
      <TasksDiv>
        <CustomBlueTypography variant='small'>Tarefas criadas </CustomBlueTypography>
        <CustomCount>{createdTasks}</CustomCount>
      </TasksDiv>

      <TasksDiv>
        <CustomPurpleTypography variant='small'>Concluídas</CustomPurpleTypography>
        <CustomCount>{tasksCompleted + " de "}{createdTasks}</CustomCount>
      </TasksDiv>

    </CustomDivider>
  );
}