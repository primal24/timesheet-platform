import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatBox = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Placeholders:
    useEffect(() => {
        // Connect to socket.io server
        const socket = io('your-backend-url');

        // Fetch existing messages from API
        fetch('your-api-url')
            .then(response => response.json())
            .then(data => {
                // Update chatMessages state with fetched messages
                setChatMessages(data);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            });

        // Listen for 'receiveMessage' event from socket.io server
        socket.on('receiveMessage', (message) => {
            // Update chatMessages state with received message
            setChatMessages(prevMessages => [...prevMessages, message]);
        });

        // Clean up socket.io connection on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    // Simplified - no submit handling.  Later use form elements if needed.
    const updateMessage = (event) => {  
        setNewMessage(event.target.value);
    };

    return (
        <div className="chat-container"> 
            <div className="chat-messages">  
                {/* Messages would be mapped for rendering within here */}
            </div>
            <input type="text" value={newMessage} onChange={updateMessage} /> 
        </div>
    );
};

export default ChatBox; 
