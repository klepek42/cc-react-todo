import React from 'react';

interface Props {
    title: string;
}

const Todos = ({title}:Props) => {
    return (<div><h2>{title}</h2><div>Learn react</div></div>);
}

export default Todos;