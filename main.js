    const url=new URL(window.location.href)
    var str=url.searchParams.get("html")
    if (str!=null){
        document.getElementById("body").innerHTML=str;
    }
