import React from 'react'

interface IHelloProps {
    message:string;
}

// const Hello: React.FunctionComponent<IHelloProps> =(props) =>{
    const Hello: React.FC<IHelloProps> =(props) =>{
    // props.children
    return <h2>{props.message}</h2>
}
Hello.defaultProps =  {
    message: "hello world2" //默认值
}

export default Hello;