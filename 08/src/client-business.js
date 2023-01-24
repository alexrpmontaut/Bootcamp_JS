import * as AccountBusiness from "./account-business";
import * as DataBusiness from "./data-business";

const getClientElement =function(client) {
    const allAccounts = DataBusiness.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
        clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = AccountBusiness.getClientAccountsElement(clientAccounts);

    node.appendChild(ul);

    return node;
}

const getClientNode = function(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));

    return li;
}

const getFullName = function(client) {
    return client.first_name + " " + client.last_name;
}

export {getClientElement, getClientNode, getFullName};