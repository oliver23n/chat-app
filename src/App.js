import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
    return (
        <ChatEngine 
        height='100vh'
            projectID='
        fa7eb8fe-f782-4a73-bf15-f8ce4b99cb72'
        userName='oliver'
        userSecret='pass1234'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}  />}
        /> 

    );
}

export default App;