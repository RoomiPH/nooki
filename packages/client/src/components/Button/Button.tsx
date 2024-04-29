import classNames from 'classnames';
import React, { ReactElement, useEffect, useRef, useState } from 'react'

type Props = {
    onClick: any
    children: JSX.Element | JSX.Element[]
    className?: string
}

const ButtonWrapper = ( props: Props ): ReactElement => {

  const handleClick = () => {
    props.onClick();
  };

  return (
    <button 
        type="button" 
        style={{
            backgroundColor: "#FFF0B9",
            padding: "0.3em 2rem",
            border: "2px solid #5D606A",
            borderRadius: "0.2rem"
        }}
        className={classNames(props.className)} 
        onClick={handleClick}
    >
        {props.children}
    </button>
);
}

export default ButtonWrapper