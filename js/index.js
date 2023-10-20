function insertRows() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `localhost:8888/api/insertRows`);
    xhr.onload = function () {
        document.getElementById("insertRowsResponse").innerHTML = xhr.responseText;
    };
    xhr.send();
}

function executeQuery() {
    const query = document.getElementById("query").value.trim();
    if (query.startsWith("SELECT") || query.startsWith("INSERT")) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `localhost:8888/api/query`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            document.getElementById("executeQueryResponse").innerHTML = xhr.responseText;
        };
        xhr.send(JSON.stringify({ query }));
        console.log(query)
    } else {
        document.getElementById("executeQueryResponse").innerHTML = "Invalid query type";
    }
}