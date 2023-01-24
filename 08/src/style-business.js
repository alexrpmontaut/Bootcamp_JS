const getNodeStyle = function(account) {
    if (account.money < 0) {
        return "color: red";
    }

    return "color: blue";
}

export {getNodeStyle};