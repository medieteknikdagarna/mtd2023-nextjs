import React from 'react'

export default function Button({style, onClick, type="primary", size="medium",children}) {
    return (
        <div>
        <button style={style} onClick={onClick} className={"mtd-button--" + type +  " mtd-button--" + size}>
            {children}
        </button>
        </div>
    )
}
