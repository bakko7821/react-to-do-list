import React, { useState } from "react"
import plusIcon from '../../assets/images/plus.png'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from "./Form.styled"

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('')

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        
        if (text) {
            props.createNewToDo(text)
            setText('')
        } else {
            console.error('Строка создания задачи - пустая.')
        }
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField 
                        value={text} 
                        type="text" 
                        onChange={(event) => setText(event.target.value)}/>
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}