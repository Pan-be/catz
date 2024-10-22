import { useEffect, useState } from "react";
import CatPic from "./CatPic.js";
import React from "react";

const fetchinFacts = async (setFact: React.Dispatch<React.SetStateAction<string>>) => {
    const url = "https://meowfacts.herokuapp.com/"
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setFact(json.data[0])
    } catch (error) {

        if (error instanceof Error) {
            console.error(error.message)
        } else {
            console.error("unexpected error", error)
        }
    }
}

const Cats: React.FC = () => {
    const [fact, setFact] = useState<string>('')

    useEffect(() => {
        fetchinFacts(setFact)
    }, [])

    return (
        <>
            <CatPic />
            <div className="flex justify-center">
                <p>{fact}</p>
            </div>
        </>
    )
}

export default Cats;