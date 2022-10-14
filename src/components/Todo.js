import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Todo = ({ todo, onEdit }) => {

    return (
        <ListItem key={todo.id} component="div" disablePadding>
            <ListItemButton onClick={() => onEdit(todo.id)}>
                <ListItemText primary={todo.text} secondary={<div><p>{todo.day}</p>
            <p>{todo.status}</p></div>}/>
            </ListItemButton>
        </ListItem>
    )
}

export default Todo
