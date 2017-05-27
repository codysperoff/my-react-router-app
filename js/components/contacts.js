export default {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

import React from 'react';

export default function Contact(props) {
    return (
        <div>
        <strong>
        {props.name}
        </strong>
        &nbsp;
        {props.phoneNumber}
        </div>
    );
};
