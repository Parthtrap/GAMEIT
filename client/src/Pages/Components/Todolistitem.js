import React from 'react';
import { useState, useEffect } from "react";

export default function Todolistitem(props){

    const [itemstatus, setItemstatus] = useState(props.item.status);

    return(
        
        <div onClick={() => {
            setItemstatus(!itemstatus);
          }} 
          className='flex'>
        
            {itemstatus ? 
                (
                    <div >
                    <svg
                        className='w-5 h-5 mt-[3px] mr-[4px] text-green-400 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        >
                        <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                        />
                    </svg>
                    </div>
                ):(
                    <div onClick={() => {
                        setItemstatus(!itemstatus);
                      }}>
                    <svg
                        className='w-5 h-5 mt-[3px] mr-[4px] text-red-400 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        >
                        <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                            clipRule='evenodd'
                        />
                    </svg>
                    </div>
                )
            }
            
            <div className={`${itemstatus ? "":"line-through"}`}>{props.item.disc}</div>
        </div>

    );
}

//