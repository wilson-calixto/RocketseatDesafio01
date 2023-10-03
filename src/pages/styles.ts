import styled from 'styled-components'

export const Main = styled.main`
width: 100vw;
height: 100vh;
  flex: 1;

  display: row;
  align-items: center;
  justify-content: center;


`

export const Header = styled.header`
height: 15vh;
  flex: 1;
  background: var(--Gray-700, #0D0D0D);
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 22px;
    width: 36px;
  }
  p{
    margin: 0;
    color: var(--Blue, #4EA8DE);
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 900;
line-height: normal;

  }
  p:nth-child(2) {
    color: var(--PurpleDark, #5E60CE);

}
`

export const Body = styled.body`
width: 100vw;
height: 85vh;
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
