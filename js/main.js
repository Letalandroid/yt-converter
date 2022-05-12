const convert = document.querySelector("#convert"),
      pintarApi = document.querySelector(".result"),
      url = document.querySelector("#link");

const css = "#f00";

convert.addEventListener("click", () => {

    pintarApi.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width:800px;height:264px;border:0;overflow:hidden;margin-top:20px");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("src", `https://loader.to/api/card/?url=${url.value}`);

    pintarApi.insertAdjacentElement("beforeend", iframe);

})
