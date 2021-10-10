import Navigation from '../Navigation/Navigation';
import { AppBar } from '@material-ui/core';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <AppBar>
      <Navigation />
    </AppBar>
  );
}
