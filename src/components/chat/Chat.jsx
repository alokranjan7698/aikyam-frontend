import React from 'react'
import "./Chat.css";
import io from 'socket.io-client';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="container">
                <div className="chatContainer" id="chatContainer">
                    <div className="chatHead">
                        <p>Programmer's Group</p>
                        <div className="usersCount">
                            <i className="fa-solid fa-user"></i>
                            <span id="onUsers">0</span>
                        </div>
                    </div>
                    <div className="chattings" id="chatting">
                    </div>
                    <form action="#" id="messageForm">
                        <input type="text" id="messageInput" placeholder="Enter your message" />
                        <button id="sendBtn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat