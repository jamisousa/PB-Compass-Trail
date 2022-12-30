import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>

};

const ModalOverlay = props => {
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
        </footer>
    </Card>
};

function ErrorModal(props){
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}></Backdrop>, 
            document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal(
            <ModalOverlay 
            title={props.title} 
            message={props.message} 
            onCofirm={props.onConfirm}></ModalOverlay>, 
            document.getElementById('overlay-root'))} 

        </React.Fragment>
    );
}

export default ErrorModal;