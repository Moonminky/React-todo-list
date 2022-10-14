import Proptypes from 'prop-types'
import Button from '@mui/material/Button';

const StartButton = ({color, text, onClick}) => {

    return <Button 
    variant="contained"
    onClick={onClick} 
    style={{backgroundColor: color}} 
    className='btn'>
    {text}
    </Button>
}
StartButton.defaultProps = {
    color: 'steelblue'
}

StartButton.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func
}
export default StartButton