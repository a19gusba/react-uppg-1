function ChatWindow() {

    this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
    };

    function getChatMessagesData() {
        var date = new Date()
        var dateData = date.toDateString()
        var data = { user: { id: null, username: null, email: null }, comment: { id: null, cityName: null, author: null, date: null, content: null } }
        var message1 = { user: { id: 1, username: "username1", email: "email1@gmail.com" }, comment: { id: 1, cityName: "City", author: "username1", date: dateData, likes: 10, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos molestias assumenda pariatur ad, dolorum itaque suscipit tempore consequatur odio!" } }
        var message2 = { user: { id: 2, username: "username2", email: "email2@gmail.com" }, comment: { id: 2, cityName: "City", author: "username2", date: dateData, likes: 50, content: "Lorem ipsum dolor sit amet." } }
        var message3 = { user: { id: 3, username: "username3", email: "email3@gmail.com" }, comment: { id: 3, cityName: "City", author: "username3", date: dateData, likes: 100, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." } }

        return [message1, message2, message3, message1]
    }

    return (
        <div className="chat-window">
            <div className="chat-header-container">
                <h1>chat</h1>
                <div className="chat-hide-btn">Hide chat</div>
            </div>

            <ChatMessages data={getChatMessagesData()}></ChatMessages>
        </div>
    )
}