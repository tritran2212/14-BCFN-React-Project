import { Input } from "../components/input"
import { SelectGender } from "../components/selected"
export function signup(){

    return (
        <>
        <h1>Sign Up</h1>
        <Input required/>
        <br></br>
        <br></br>
        <Input></Input>
        <SelectGender/>
        </>
    )
}