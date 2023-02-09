import React from 'react';

import "./ResetButton.css";

const ResetButton = ({ resetBoard }) => {
    return (
		<div className='div'>
        <button className="button-49" onClick={resetBoard}>Reset</button>
		</div>
    )
}
export default ResetButton