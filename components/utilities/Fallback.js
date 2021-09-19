import React, { useEffect, useState } from 'react'

export default function Fallback({children, loading}) {


    if(loading){
        return (<div>Loading</div>)
    }
    else{
        return(<>{children}</>)
    }


    
}
