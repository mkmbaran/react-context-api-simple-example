import { useContext } from "react"
import { MyContext } from "../App"

export default function Header() {
    const context = useContext(MyContext) // replace props with useContext
    return <h1>{ context.appName }</h1>
}
