<template>
   <beautiful-chat 
        :open = 'openChat'
        :close = 'closeChat'
        :isOpen = 'open'
        :participants = 'participants'
        :onMessageWasSent = 'sendMessage'
        :messageList = 'messages'
        :colors = 'colors'
   />
</template>

<script>
    export default ({
        name : 'ButtonChatBot',
        data(){
            return({
                open : false,
                participants : [
                    {
                        id: '1',
                        name: 'Godmos',
                        imageUrl : ''
                    }
                ],
                messages: [],
                newMessages : 0,
                colors: {
                    header: {
                        bg: '#e38153',
                        text: '#ffffff'
                    },
                    launcher: {
                        bg: '#e38153'
                    },
                    messageList: {
                        bg: '#ffffff'
                    },
                    sentMessage: {
                        bg: '#e38153',
                        text: '#ffffff'
                    },
                    receivedMessage: {
                        bg: '#eaeaea',
                        text: '#222222'
                    },
                    userInput: {
                        bg: '#f4f7f9',
                        text: '#565867'
                    }
                }
            })
        },
        methods: {
            closeChat(){
                this.open = false
            },
            openChat(){
                this.open = true
            },
            sendMessage(message){
               
                if(message.data.text.length > 0){
                    console.log("enviando mensaje")
                    fetch(window.location.origin+'/chatbot')
                        .then(response => (
                           response.json()
                        ))
                        .then(json => this.onMessageWasSent({
                            author : 'me', 
                            type: 'text',
                            data: { text: message }
                        }))
                }
            },
            onMessageWasSent(message){
                this.messages = [ ...this.messages, message ]
            }
        }
    })
</script>

<style>
    .absolute{
        position: fixed;
        top : 85%;
        left : 90%;
    }
</style>


