import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import React from 'react';
import { addMessageMutation, messageAddedSubscription, messagesQuery } from './graphql/queries';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Chat = ({user}) => {
  // const [messages, setMessages] = useState([]);
  // const {loading, error, data} = useQuery(messageQuery);
  // useQuery(messagesQuery, {
  //   onCompleted: ({messages}) => setMessages(messages)
  // });
  const { data } = useQuery(messagesQuery);
  const messages = data ? data.messages : []

  useSubscription(messageAddedSubscription, {
    onSubscriptionData: ({client, subscriptionData}) => {
      // setMessages(messages.concat(subscriptionData.data.messageAdded));
      client.writeData({data: {
        messages: messages.concat(subscriptionData.data.messageAdded)
      }});
    }
  });

  // const [addMessage, {loading, error, data, called}] = useMutation(addMessageMutation);
  const [addMessage] = useMutation(addMessageMutation);

  const handleSend = async (text) => {
    await addMessage({variables: {input: {text}}});
  };

  //if (loading) console.log(queryLoading);
  //if (error) console.log(queryError);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chatting as {user}</h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </section>
  );
};

export default Chat;
