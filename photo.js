//显示放大的图片
function showImage(eObj) {
    var obj = eObj.srcElement || eObj.target;
    if (obj.nodeName != "IMG")
        return;    

    //显示遮罩层以及图片对话框
    document.getElementById("overlay_mask").style.display = "block";
    document.getElementById("mask_dialog").style.display = "block";
    var bigImage = document.getElementById("mask_dialog").getElementsByTagName("img")[0];   

    //得到图片的宽度和高度，根据比例进行缩放，固定宽度和高度的比例为 1.2
    var rate = 1.2;
    var img = new Image();
    img.src = obj.src;
    if (img.width / img.height > rate)
        bigImage.style.width = "600px";
    else
        bigImage.style.height = "500px";

    bigImage.src = obj.src;
}

//关闭遮罩层
function closeMask() {
    document.getElementById("overlay_mask").style.display = "none";
    document.getElementById("mask_dialog").style.display = "none";
}

//显示更多照片，一次显示 3 个
var totalImage = 21;
function showMore() {
    var photo_box = document.getElementById("photo_box");
    var imagesCount = photo_box.getElementsByTagName("li").length;
    if (imagesCount < totalImage) {
        //循环所有的ul，为每个ul添加一个 li
        var ulNodes = photo_box.getElementsByTagName("ul");
        for (var j = 1; j < 4; j++) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.setAttribute("src", "images/image" + (imagesCount + j) + ".jpg");
            li.appendChild(img);

            var h2 = document.createElement("h2");
            h2.innerText = "新照片，说点什么吧！";
            li.appendChild(h2);

            ulNodes[j-1].appendChild(li);
        }
    }
    else {
        document.getElementById("photo_info").style.display = "block";
    }
}
