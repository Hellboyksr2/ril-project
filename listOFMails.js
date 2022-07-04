var listOfMails = [{
    id: "1",
    title: "Okeis Dokies",
    description: "Some Description",
    type: "inbox",
    isFavorite: true
}, {
    id: "2",
    title: "2nd Title",
    description: "Some Description 2",
    type: "sent",
    isFavorite: true
},
{
    id: "3",
    title: "3rd Title",
    description: "Some Description 3",
    type: "sent",
    isFavorite: true
}
]


const filters = {
    "inbox" : "Inbox",
    "sent": "Sent",
    "starred": "Starred",
    "trash": "Trash",
    "all": "All Mail"
}

const displayMatrix = {
    "inbox": [ "inbox", "starred"]
}