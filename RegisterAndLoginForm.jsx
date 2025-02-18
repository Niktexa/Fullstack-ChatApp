import axios from 'axios';
import { useContext, useState} from "react";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    async function handleSubmit(ev) {
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        ev.preventDefault();
        try {
            const {data} = await axios.post(url, { username, password });
            setLoggedInUsername(username);
            setId(data.id);
        } catch (error) {
            console.error("Error submitting form: ", error);
            // Optionally, set an error message state to display feedback to the user
        }
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input  value={username} 
                        onChange={ev => setUsername(ev.target.value)} 
                        type="text" placeholder="username" 
                        className="block w-full rounded-sm p-2 mb-2 border"/>
                <input  value={password}
                        onChange={ev => setPassword(ev.target.value)} 
                        type="text" 
                        placeholder="password" 
                        className="block w-full rounded-sm p-2 mb-2 border"/>
                <button type="submit" className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register': 'Login'}
                </button>
                <div className='text-center mt-2'>
                    {isLoginOrRegister === 'register' && (
                        <div>
                            Already a member?
                            <button onClick={() => setIsLoginOrRegister('login')}>
                                Login here
                            </button>
                        </div>
                    )}
                    {isLoginOrRegister == 'login' && (
                        <div>
                        Don't have an account?
                        <button onClick={() => setIsLoginOrRegister('register')}>
                            Register
                        </button>
                    </div>

                    )}
                </div>
            </form>
        </div>
    );
}