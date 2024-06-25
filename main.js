console.log("Main.js working");

const populate = async (value, currency) => {
    let myStr = "";
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_VR5QUq1QZzNo0CZQKeHfGIn8xwq51tMGLSFw9M0Z&base_currency=INR`;
    try {
        let response = await fetch(url);
        let rJson = await response.json();
        console.log(rJson);

        for (let key in rJson["data"]) {
            myStr += `
            <tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${rJson["data"][key]["value"]}</td>
            </tr>
            `;
        }

        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = myStr;
    } catch (error) {
        console.error("Error fetching the currency data: ", error);
    }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("button is clicked");

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("input[name='currency']").value;

    await populate(value, currency);
});
