//��ʾ�Ŵ��ͼƬ
function showImage(eObj) {
    var obj = eObj.srcElement || eObj.target;
    if (obj.nodeName != "IMG")
        return;    

    //��ʾ���ֲ��Լ�ͼƬ�Ի���
    document.getElementById("overlay_mask").style.display = "block";
    document.getElementById("mask_dialog").style.display = "block";
    var bigImage = document.getElementById("mask_dialog").getElementsByTagName("img")[0];   

    //�õ�ͼƬ�Ŀ�Ⱥ͸߶ȣ����ݱ����������ţ��̶���Ⱥ͸߶ȵı���Ϊ 1.2
    var rate = 1.2;
    var img = new Image();
    img.src = obj.src;
    if (img.width / img.height > rate)
        bigImage.style.width = "600px";
    else
        bigImage.style.height = "500px";

    bigImage.src = obj.src;
}

//�ر����ֲ�
function closeMask() {
    document.getElementById("overlay_mask").style.display = "none";
    document.getElementById("mask_dialog").style.display = "none";
}

//��ʾ������Ƭ��һ����ʾ 3 ��
var totalImage = 21;
function showMore() {
    var photo_box = document.getElementById("photo_box");
    var imagesCount = photo_box.getElementsByTagName("li").length;
    if (imagesCount < totalImage) {
        //ѭ�����е�ul��Ϊÿ��ul���һ�� li
        var ulNodes = photo_box.getElementsByTagName("ul");
        for (var j = 1; j < 4; j++) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.setAttribute("src", "images/image" + (imagesCount + j) + ".jpg");
            li.appendChild(img);

            var h2 = document.createElement("h2");
            h2.innerText = "����Ƭ��˵��ʲô�ɣ�";
            li.appendChild(h2);

            ulNodes[j-1].appendChild(li);
        }
    }
    else {
        document.getElementById("photo_info").style.display = "block";
    }
}
