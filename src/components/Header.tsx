import rocketIcon from '../assets/rocket.svg';
import { CustomBlueTypography, CustomPurpleTypography, CustomHeader } from './styles';

export function Header() {
  return (
    <CustomHeader>
      <img src={rocketIcon} className="logo react" alt="React logo" />
      <CustomBlueTypography variant='medium'>to</CustomBlueTypography>
      <CustomPurpleTypography variant='medium'>do</CustomPurpleTypography>
    </CustomHeader>
  );
}