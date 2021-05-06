import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false); // initialise with false

    // useState returns an array of two elements. video 460
    // 1st param returns the value and 2nd param is a method used to handle the state
    // whenever the state changes JSX is rendered again

    function deleteHandler() {
        console.log('>> props', props);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h1>{props.title}</h1>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler} >Delete</button>
                {/* <button className='btn' onClick={()=>{deleteHandler()}} >Delete</button> */}
                {/* <button className='btn' onClick={function () { deleteHandler() }} >Delete</button> */}
                {/* NOT USEFUL  <button className='btn' onClick={deleteHandler()} >Delete</button> */}
                {/* just pass the reference, else invoke in arrow function */}
            
            {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
            {modalIsOpen && <Backdrop onBackdropClick={closeModal} />}
            {/* cannot add onClick property on our custom components */}
            </div>
        </div>
    );
}

export default Todo;