import React from "react";

interface FormProps {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({ userName, setUserName }) => {

    const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userName);
    }

    return (
        <form onSubmit={handleSubmition} className="flex flex-col gap-1">
            <input type="text"
                placeholder="Name"
                value={userName || ''}
                onChange={(e) => setUserName(e.target.value)} />
            <button type="submit">Yep</button>
        </form>
    )
}

export default Form;