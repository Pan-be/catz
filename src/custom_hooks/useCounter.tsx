import { useState } from "react"

const useCounter = (initialValue: number = 0): [number, () => void] => {

    const [count, setCount] = useState<number>(initialValue)
    const increment = () => setCount((prevCount) => prevCount + 1)

    return [count, increment]

}

export default useCounter