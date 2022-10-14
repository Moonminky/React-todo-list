import StartButton from './Button'

const Start = ({onAdd, showAdd}) => {
    return ( 
    <header className='header'>
            <StartButton 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd}/>
        </header>
    )
}

export default Start;