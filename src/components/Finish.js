import {Link} from 'react-router-dom';

function Finish() {
    return (
        <div className="finishContainer">
            <div className="finishTextContainer">
                <h4>Thank you!</h4>
                <Link className='keepExploringButton' to={'/'}>Keep Exploring &#8594;</Link>
            </div>
        </div>
    )
}

export default Finish