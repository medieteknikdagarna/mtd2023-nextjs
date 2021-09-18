import React from 'react'

export default function Fallback({children, loading}) {


    return (
        <div>
            {!loading && children}
            {loading && <h2>LOADING</h2>}
        </div>
    )


    
}
