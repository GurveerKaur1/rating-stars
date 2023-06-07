import StarRating from "./components/StarRating";
import './style/index.css';
import Dialog from "./components/Dialog";
import { useState } from 'react';

function App() {

  const [dialogClick, setValue] = useState(true);
  const [showText, setText] = useState(false);
  const show = () => {
    if (dialogClick === true && showText === false) {
      setText(true);
      setValue(false)
    }
    
  }

  const closeDialog = () => {
    setText(false);
    setValue(true);
  }
  return (
    <div className="container">
      <StarRating />
      <Dialog
        dialogClick={dialogClick}
        setValue={setValue}
        setText={setText}
        showText={showText}
        show={show}
        closeDialog = {closeDialog} />
            <button onClick={show} className={dialogClick ? 'open' : 'close-dialog'} >Dialog</button>

    </div>
  );
}

export default App;
