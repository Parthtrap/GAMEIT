import React from 'react';
import Todolistitem from './Todolistitem';

export default function Todolist(props){

    return(
        <div className="bg-gr rounded-lg w-60 p-2">
                
            <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
            Insert heading here
            </h2>

            <div className='space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400'>
            
                {props.todolist.map((item) => {
                    return <>
                    <Todolistitem item={item} />
                    </>
                })}

            </div>

        </div>
    );
}