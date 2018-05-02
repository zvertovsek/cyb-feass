import React from 'react';

const completedNotice = (props) => (
    <div>
        <h1>Application Complete</h1>
        <p><strong>{props.applicantName}</strong> thank you for applying to this usefull service.</p>
    </div>
);

export default completedNotice;