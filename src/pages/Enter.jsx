
import { Link } from 'react-router-dom'
import '../styles/enter.scss'

const Enter = () => {


  return (
    <div className='landing' >
        <Link to='/home'>
            <button className='enterButton'>Enter Site</button>
        </Link>

    </div>
  )
}

export default Enter