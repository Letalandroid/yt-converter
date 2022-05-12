const convert = document.querySelector("#convert"),
      pintarApi = document.querySelector(".result"),
      url = document.querySelector("#link");

if (screen.width <= 479) {

    const formato = [
        "mp3",
        "360",
        "480",
        "720",
        "1080",
        "4k",
        "8k",
    ];

    const select = document.createElement("select");
    select.setAttribute("id", "select");

    const o1 = document.createElement("option");
    o1.setAttribute("value", formato[0]);
    o1.innerHTML = formato[0];

    const o2 = document.createElement("option");
    o2.setAttribute("value", formato[1]);
    o2.innerHTML = `MP4 - ${formato[1]}`;

    const o3 = document.createElement("option");
    o3.setAttribute("value", formato[2]);
    o3.innerHTML = `MP4 - ${formato[2]}`;

    const o4 = document.createElement("option");
    o4.setAttribute("value", formato[3]);
    o4.innerHTML = `MP4 - ${formato[3]}`;

    const o5 = document.createElement("option");
    o5.setAttribute("value", formato[4]);
    o5.innerHTML = `MP4 - ${formato[4]}`;

    const o6 = document.createElement("option");
    o6.setAttribute("value", formato[5]);
    o6.innerHTML = `MP4 - ${formato[5]}`;

    const o7 = document.createElement("option");
    o7.setAttribute("value", formato[6]);
    o7.innerHTML = `MP4 - ${formato[6]}`;

    select.appendChild(o1);
    select.appendChild(o2);
    select.appendChild(o3);
    select.appendChild(o4);
    select.appendChild(o5);
    select.appendChild(o6);
    select.appendChild(o7);

    document.querySelector(".convert").insertAdjacentElement("afterend", select);

}

convert.addEventListener("click", () => {

    pintarApi.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.setAttribute("scrolling", "no");

    if (screen.width >= 480) {

        iframe.setAttribute("style", "width:800px;height:264px;border:0;overflow:hidden;margin-top:20px");
        iframe.setAttribute("src", `https://loader.to/api/card/?url=${url.value}`);

    } else if (screen.width <= 479) {

        const optionSelect = document.getElementById("select");

        iframe.setAttribute("style", "width:100%;height:80px;border:0;overflow:hidden;margin-top:20px");
        iframe.setAttribute("src", `https://loader.to/api/button/?url=${url.value}&f=${optionSelect.value}`)

    }

    pintarApi.insertAdjacentElement("beforeend", iframe);

});