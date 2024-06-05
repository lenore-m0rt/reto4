import React from "react";
import {data} from '../data/data.js';

const Ventas = () => {
    return (
<ul>
    {data.map((order, id) => (
        <li key={id} className="bg-white hover:bg-base-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols:2 items-center justify-between cursor-pointer">
            <div className="flex items-center">
                <div className="bg-primary p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                </div>
                <div className="pl-4">
                <p className="text-primary-content font-bold">${order.total} </p>
                <p className="text-gray-600">{order.name.first} </p>
                </div>
                </div>
            <p className="text-gray-600 /text-center sm:flex hidden">
                <span 
                className={
                order.status == 'En curso' 
                ?  'bg-warning text-white p-2 rounded-lg'
                : order.status == 'Aprobado'
                ? 'bg-success text-white p-2 rounded-lg'
                : 'bg-error text-white p-2 rounded-lg' 
            }> {order.status}</span></p>
            <p className="hidden md:flex">{order.date} </p>
            <div className="sm:flex hidden justify-between items-center">
                <p>{order.method} </p>
            </div>
        </li>
    ))}
    </ul>
    )
}

export default Ventas