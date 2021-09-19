import React from 'react'
import Link from 'next/link'
export default function Button({style,href, onClick, type="primary", size="medium",children}) {
    if(href){
        return (
            <Link href={href}>
                <div>
                    <button style={style} onClick={onClick} className={"mtd-button--" + type +  " mtd-button--" + size}>
                        {children}
                    </button>
                </div>
            </Link>
        )

    }
    else{
        return (
            <div>
            <button style={style} onClick={onClick} className={"mtd-button--" + type +  " mtd-button--" + size}>
                {children}
            </button>
    
            </div>
        )
    }
    
}
