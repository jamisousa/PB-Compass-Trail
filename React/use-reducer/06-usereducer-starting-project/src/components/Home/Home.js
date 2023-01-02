import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { useContext } from 'react';

const Home = (props) => {

  const authCtx = useContext(AuthContext);


  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
