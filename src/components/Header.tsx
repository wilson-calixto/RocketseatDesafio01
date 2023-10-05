import rocketIcon from '../assets/rocket.svg';
import { CustomBlueTypography, CustomPurpleTypography, Header2 } from './styles';

export function Header() {
  return (
    <Header2>
      <img src={rocketIcon} className="logo react" alt="React logo" />
      <CustomBlueTypography variant='medium'>to</CustomBlueTypography>
      <CustomPurpleTypography variant='medium'>do</CustomPurpleTypography>
    </Header2>
  );
}