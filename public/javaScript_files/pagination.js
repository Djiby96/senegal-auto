
var data = [
    {
        id: 1,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 2,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 3,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 4,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 5,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 6,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 7,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 8,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 9,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 10,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 11,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 12,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 13,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 14,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 15,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 16,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 17,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 18,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 19,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 20,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 21,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 22,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 23,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 24,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 25,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 26,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 27,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 28,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 29,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 30,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 31,
        firstname: "Djiby",
        lastname: "Diop"
    },
    {
        id: 32,
        firstname: "Djiby",
        lastname: "Diop"
    },{
        id: 33,
        firstname: "Djiby",
        lastname: "Diop"
    }
]

var state = {
    data: data,
    page: 1,
    rows: 2,
    current_liste: 10
}

function pagination(data, page, rows){
    var trimStart = (page -1)*rows;
    var trimEnd = trimStart + rows;
    var trimData = data.slice(trimStart, trimEnd);
    var pages = Math.ceil(data.length/rows);

    return {
        data_page: trimData,
        pages: pages
    }

}

const pagination_wrapper = document.getElementById("pagination_wrapper");
function pageButtonsPagination(pages){
    pagination_wrapper.innerHTML = '';

    var maxLeft = state.page - Math.floor(state.current_liste/2);
    var maxRight = state.page + Math.floor(state.current_liste/2);

    if(maxLeft < 1){
        maxLeft = 1;
        maxRight = state.current_liste;
    }

    if(maxRight > pages){
        maxLeft = pages - (state.current_liste - 1);
        maxRight = pages;
        if(maxLeft < 1){
            maxLeft = 1;
        }
    }

    for(let i=maxLeft; i <= maxRight; i++){
        var button_pagination = `
            <button value="${i}" class="pagination_button btn btn-sm btn-info mx-1">${i}</button>
        `
        pagination_wrapper.insertAdjacentHTML('beforeend', button_pagination);
    }
}

const table_client = document.getElementById("table_client");
function buildtable(){
    data_info = pagination(state.data, state.page, state.rows);
    liste_client = data_info.data_page;
    for(let i = 0; i < liste_client.length; i++){
        var row = `
        <tr class="border-bottom">
                    <td>${liste_client[i].id}</td>
                    <td>${liste_client[i].firstname}</td>
                    <td>${liste_client[i].lastname}</td>
        </tr>
        `
        table_client.insertAdjacentHTML('beforeend', row);
    }

    pageButtonsPagination(data_info.pages)
}

buildtable();

const pagination_button = document.querySelectorAll(".pagination_button");
pagination_button.forEach((button) =>{
    button.onclick = () =>{
        table_client.innerHTML = "";
        var page =  parseInt(button.getAttribute("value"));
        state.page = page;
        buildtable();
    }
});