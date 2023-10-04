import { useState } from 'react'
import './TodoList.css'
import { Body, CustomBlueTypography, CustomDivider, CustomForm, CustomPurpleTypography, CustomSimpleGrayTypography, CustomSimpleTypography, Header, Main, MainCard, SimpleDivider } from './styles'
import reactLogo from '../assets/react.svg'
import clipBoard from '../assets/clipboard.svg'
import { PlusCircle } from 'phosphor-react'

function TodoList() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Header>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <CustomBlueTypography variant='medium'>to</CustomBlueTypography>
          <CustomPurpleTypography variant='medium'>do</CustomPurpleTypography>
        </Header>
        <Body>

          <MainCard>

            <CustomForm action="/action_page.php">

              <input placeholder='Adicione uma nova tarefa' type="text" id="fname" name="fname" />
              <button type="submit" >
                Criar
                <PlusCircle size={24} />

              </button>
            </CustomForm>

            <CustomDivider>
              <CustomBlueTypography variant='small'>Tarefas criadas {count}</CustomBlueTypography>
              <CustomPurpleTypography variant='small'>Concluídas {count}</CustomPurpleTypography>
            </CustomDivider>

            <SimpleDivider>
              <img src={clipBoard} className="Clip Board" alt="Clipe Board" />
            </SimpleDivider>

            <CustomSimpleTypography >
              Você ainda não tem tarefas cadastradas
            </CustomSimpleTypography>
            <CustomSimpleGrayTypography >
              Crie tarefas e organize seus itens a fazer
            </CustomSimpleGrayTypography>


            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </MainCard>


        </Body>

      </Main>
    </>
  )
}

export default TodoList
