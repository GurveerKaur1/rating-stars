function Dialog(props) {
    return (
        <div class="main">
            <div className={props.showText ? 'dialog' : 'notDialog'}>
                <h3>Provide feedback</h3>
                <p className = "para">Rate my website by clicking the stars</p>
                <button className="close" onClick={props.closeDialog}>Close</button>
            </div>
        </div>
    )
}

export default Dialog