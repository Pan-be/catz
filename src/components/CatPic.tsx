import React from "react";
import { useEffect, useState } from "react";

const CatPic = () => {

    const url = "https://api.thecatapi.com/v1/images/search"
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [picUri, setPicUri] = useState<string>('')

    interface CatPic {
        url: string;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url)
                const data: CatPic[] = await resp.json()
                console.log(data[0].url)
                setIsLoaded(true)
                setPicUri(data[0].url)
            } catch (error: any) {
                console.error(error.message);
            }
        };
        fetchData()
    }, [])

    return (
        <div className="flex justify-center items-center w-[200px] h-[200px]">
            {!isLoaded ? (

                <img width="20px" src="loading.gif" alt="loading icon" />
            ) : (
                <img src={picUri} alt="a cat" />
            )}
        </div>
    )
};

export default CatPic