import { useState } from 'react'
import './TodoList.css'
import { Body, Header, Main } from './styles'
import reactLogo from '../assets/react.svg'

function TodoList() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Header>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>to</p><p>do</p>
        </Header>
        <Body>
          <div>

            <form action="/action_page.php">

              <input placeholder='Adicione uma nova tarefa' type="text" id="fname" name="fname" />
              <input type="submit" value="Submit" />
            </form>






            <a href="https://vitejs.dev" target="_blank">
            </a>
            <a href="https://react.dev" target="_blank">
            </a>


          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>

          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Body>

      </Main>
    </>
  )
}

export default TodoList
