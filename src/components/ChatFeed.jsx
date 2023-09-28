import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

const ChatFeed = (props) =>{
const {chats, activeChat, userName, messages} = props;

const chat = chats && chats[activeChat];
console.log(chat, userName,messages)
return(
    <div>
        feed
    </div>
)
}
export default ChatFeed;