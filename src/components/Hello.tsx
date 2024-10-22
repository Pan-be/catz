import React, { useState } from "react";
import Form from "./Form";

const Hello: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    return (
        <>
            <Form userName={userName} setUserName={setUserName} />
            <h1 className="">Hello {userName}</h1>
        </>
    )
}

export default Hello;