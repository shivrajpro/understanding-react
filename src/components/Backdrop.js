function Backdrop(props) {
    console.log('>> bd props', props);
    return <div className='backdrop' onClick={props.onBackdropClick} />
}

export default Backdrop;