 
 function toggle(source) {

        checkboxes = document.getElementsByName('restaurants[]');

        for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
        }

        }


function getRest() {
        
        var cboxes = document.getElementsByName('restaurants[]');
        var len = cboxes.length;
        var listRes= [];
        var cout = 0;

        for (var i=0; i<len; i++) {
        if (cboxes[i].checked) {
        listRes[cout]= cboxes[i].value;
        cout++;
        };
        }
        
        var count = 10;
        var speed = 100;
        var name = "";
        var location1,location2;
        
        var ran = setInterval(function(){
        name = listRes[Math.floor(Math.random()*cout)];
        speed+=100;
        switch(name) {
        
        case "ลาบ ลู้ ส้า ดิบ เดือด โฉด":
        location1 = 18.7585446;
        location2 = 99.0070043;
        break;
        case "ข้าวมันไก่ น้องสาวขาขาวจัง":
        location1 = 18.7575699;
        location2 = 99.0491225;
        break;
        case "พรอมเมด้า ป้าทำไมแพงจัง":
        location1 = 18.766369;
        location2 = 99.036162;
        break;
        case "ป้าแสง พลังช้าง":
        location1 = 18.764395;
        location2 = 99.055076;
        break;
        case "กระเพราเป็ด เสี่ยวเอ้อ":
        location1 = 18.7634445;
        location2 = 99.0258321;
        break;
        case "รถไฟ ซาลาเปา สามสหาย":
        location1 = 18.7585446;
        location2 = 99.0070043;
        break;
        case "มาลี เริงระบำ":
        location1 = 18.7585446;
        location2 = 99.0070043;
        break;
        case "บุญถาวร ไหข้าอยู่ไหน":
        location1 = 18.7585446;
        location2 = 99.0070043;
        break;
        case "หนมจีนบ้านชิ ขาวจริงขาวจัง ลูกชิ้น นูนมาก":
        location1 = 18.8022731;
        location2 = 99.0216409;
        break;
        
        default:
        }

        document.getElementById("Ar").innerHTML = name;
        if (speed == 2000) {
        clearInterval(ran);
        getMap(location1,location2);
        }
        
        },speed);

        }

function getMap(location1,location2) {
        var myCenter = new google.maps.LatLng(location1,location2);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 18};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
        position:myCenter,
        animation: google.maps.Animation.BOUNCE
        });
        marker.setMap(map);
        google.maps.event.addListener(marker,'click',function() {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
        });

}
        
      