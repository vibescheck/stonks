import {useState} from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    
    return (
    <>
    <main>
        <h2>register</h2>
        <form onSubmit={'/*check auth and setsuccess*/'}>
                <div> <input
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                /> </div>
                <div> <input
                    type="text"
                    id="username"
                    placeholder="username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                /> </div>
                <div> <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                /> </div>
                <button>register</button>
            </form>        

            <p className="deez">
                return to <Link to="/login">login</Link>
            </p>

            <div className='footer'>
                    <Link to="/" className="stonks"> stonks! </Link>
            </div> 
    </main>
    </>
  )
}

export default Register

