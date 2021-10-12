import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Navigation from 'components/Navigation/Navigation';
import Search from '../Search/Search';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2">SP</Typography>
        <Navigation />
        <Search />
      </Toolbar>
    </AppBar>
  );
}
