import classes from './Layout.module.css';
import Navigation from '../layout/MainNavigation';

const Layout = (props) => {
    <div>
        <Navigation></Navigation>
        <main className={classes.main}>

            {props.children}

        </main>
    </div>

}

export default Layout;