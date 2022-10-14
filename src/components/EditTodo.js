import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditTodo = ({ todo, onEdit }) => {
    const [text, setText] = useState(todo.text)
    const [day, setDay] = useState(todo.day)
    const [status, setStatus] = useState(todo.status)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a todo')
        }

        onEdit(todo.id, { text, day, status })

        setText(todo.text)
        setDay(todo.day)
        setStatus(todo.status)

    }

    function handleChange(event) {
        console.log(event)
        const { value } = event.target
        setStatus(value)
    }

    return (
        <form className='edit-form' onSubmit={onSubmit}>
            <FormControl>
                <TextField type="text"
                    placeholder={todo.text}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required />
            </FormControl>
            <FormControl>
                <TextField type="date"
                    placeholder={todo.day}
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </FormControl>
            <FormControl>
                <Select
                    value={status}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Pick status</em>
                    </MenuItem>
                    <MenuItem value="Not started">Not Started</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </FormControl>
            <Button sx={{
                backgroundColor: 'black'
            }} variant="contained" className='btn' type="submit" value="Save Todo">Save</Button>
        </form>
    )
}

export default EditTodo