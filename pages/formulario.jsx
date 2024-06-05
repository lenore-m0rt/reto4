import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import UserList from "../components/UserList";



const formulario = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <Header/>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pl-4 justify-items-center">
            <Form/>
            <UserList />
            </div>
            </div>
    )
}

export default formulario