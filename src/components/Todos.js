import Todo from './Todo'
import List from '@mui/material/List';


const Todos = ({ todos, onEdit }) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onEdit={onEdit} />
            ))}
        </List>
    )
}

export default Todos
