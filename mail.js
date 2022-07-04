(function () {
    let currentView = "inbox"

    const filterListDOM = document.getElementById("filterList")
    const mailListDom = document.getElementById("mails");
    const deletebutton = document.getElementById("delete");

    deletebutton.onclick = () => {
        const nodes = document.querySelectorAll(".mailCheckbox:checked");
        nodes.forEach((node) => {
            const mail = listOfMails.find(({ id }) => id == node.value);
            
            mail.type = "trash";
            appendMails(listOfMails);
        })
    }

    function appendFilters(filterList) {

        Object.entries(filterList).forEach(([key, value]) => {

            const clickHandler = function () {
                currentView = this;
                console.log("clickHandler", currentView)
                appendMails(listOfMails)
            }.bind(key)

            var li = document.createElement("li");
            li.innerHTML = value;
            li.className = key === currentView ? "filter active" : "filter"
            li.onclick = clickHandler;
            console.log(filterList)
            filterListDOM.appendChild(li)
        })
    }

    function appendMails(listOfMails) {
        mailListDom.innerHTML = "";
        console.log("appendMails", {
            listOfMails,
            currentView
        });

        listOfMails.filter(({ type }) => type == currentView).forEach((mail) => {
            console.log("filter", mail)
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="checkbox"><input type="checkbox" value=${mail.id} name="mail" class="mailCheckbox"></div>
                <div class="title">${mail.title}</div>
                <div class="description">${mail.description}</div>`;
            mailListDom.appendChild(li)
        });
    }


    appendFilters(filters)
    appendMails(listOfMails)

})();