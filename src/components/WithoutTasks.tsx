import { CustomSimpleGrayTypography, CustomSimpleTypography, SimpleDivider } from './styles';
import clipBoard from '../assets/clipboard.svg'


export function WithoutTasks() {

  return (
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
  );
}