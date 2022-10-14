import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a todo')
        }
        console.log(status)
        onAdd({ text, day, status })

        setText('')
        setDay('')
        setStatus('')
    }

    function handleChange(event) {
        console.log(event)
        const { value } = event.target
        setStatus(value)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <FormControl>
                <FormHelperText>Describe your todo</FormHelperText>
                <TextField type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required />
            </FormControl>
            <FormControl>
                <FormHelperText>Fill the deadline</FormHelperText>
                <TextField type="date"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormHelperText>Todo status</FormHelperText>
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
                marginTop: '1rem',
                backgroundColor: 'black'
            }} variant="contained" className='btn' type="submit" value="Save Todo">Save</Button>

        </form>
    )
}

export default AddTodo