import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const[password, setPassword] =useState('');

    const handleSubmit = async (e) =>{
        e.preventDeafult();

        const authObject = {
            'Project-ID':  'fa7eb8fe-f782-4a73-bf15-f8ce4b99cb72',
            'User-Name': username,
            'User-Secret': password
        }
        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        }catch(error){

        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) =>setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align='center'>
                        <button type="Submit" className="button">
                            <span>Start Chat</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>    
    )
}

export default LoginForm;