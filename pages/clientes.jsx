import Header from "../components/Header";
import React, { Suspense } from "react";
import { fetchData } from "../data/fetchData"

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function Clientes() {
  const data = apiData.read();

  return (
    <div className="bg-base-200 min-h-screen">
      <Header/>
      <div className="flex justify-between p-4">
      <h2 className="text-primary-content font-bold text-lg">Clientes</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 items-center justify-between">
                    <span>Nombre</span>
                    <span className="sm:text-left text-right">E-mail</span>
                    <span className="hidden md:grid">Usuario</span>
                    <span className="hidden sm:grid">Ciudad</span>
                </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ul>
          {data?.map((user) => (
            <li key={user.id} className="bg-white hover:bg-base-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols:2 items-center justify-between cursor-pointer">
            <div className="flex items-center">
            <div className="bg-primary p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </div>
            <div className="pl-4">
            <p className="text-primary-content">{user.name} </p>
            </div>
            </div>
            <p className="text-primary-content">{user.email} </p>
            <p className="hidden md:flex">{user.username} </p>
            <div className="sm:flex hidden justify-between items-center">
            <p>{user.address.city} </p>
            </div>
            </li>
          ))}
        </ul>
      </Suspense>
      </div>
      </div>
    </div>
  );
}
export default Clientes;