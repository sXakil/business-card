$(document).ready(function () {
  WebFont.load({
    google: {
      families: ["Lato:100,300,400,700"],
    },
    active: function () {
      $("#canvas").css("font-family", "Lato");
      var canvas = $("#canvas")[0];
      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext("2d");
      var bg = $("#source")[0];
      ctx.drawImage(bg, 0, 0, width, height);
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 72,
        height: 72,
      });
      function drawCard() {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(bg, 0, 0, width, height);

        ctx.font = "300 20px 'Lato'";
        ctx.fillStyle = "white";
        ctx.fillText("+88 02 4712 1677", 360, 162);
        ctx.font = "300 18px 'Lato'";
        ctx.fillText("Globe Chamber (6th Floor)", 355, 208);
        ctx.font = "300 15px 'Lato'";
        ctx.fillText("104, Motijheel C/A, Dhaka-1000", 355, 225);
        ctx.font = "300 18px 'Lato'";
        ctx.fillText("americanvisacenterbd@gmail.com", 330, 260);
        ctx.fillText("americanvisacenterbd.com", 330, 278);

        var firstName = $("#fName").val();
        ctx.font = "100 24px 'Lato'";
        ctx.fillText(firstName, 330, 50);

        var firstNameWidth = ctx.measureText(firstName).width;

        var lastName = $("#lName").val();
        ctx.font = "700 24px 'Lato'";
        ctx.fillText(" " + lastName, 330 + firstNameWidth, 50);

        var position = $("#position").val();
        ctx.font = "400 18px 'Lato'";
        ctx.fillStyle = "#ffcf00";
        ctx.fillText(position, 330, 70);

        var phone = $("#phone").val();
        ctx.font = "300 20px 'Lato'";
        ctx.fillStyle = "white";
        ctx.fillText(phone, 355, 110);
      }
      var st;
      function drawQR() {
        clearTimeout(st);
        var phone = $("#phone").val();
        if (!phone) phone = "https://americanvisacenterbd.com";
        else if (phone.startsWith("01")) {
          phone = "+88" + phone;
        }
        qrcode.clear();
        qrcode.makeCode("https://wa.me/" + phone);
        st = setTimeout(function () {
          var qr = $("#qrcode > img")[0];
          ctx.drawImage(qr, 127, 205, 68, 68);
        }, 500);
      }

      drawCard();
      drawQR();
      $("form input").keyup(drawCard);
      $("#phone").keyup(drawQR);
      $("#download").removeClass("loading");
    },
  });
  $("#download").click(function () {
    var canvas = $("#canvas")[0];
    var link = document.createElement("a");
    link.download = "card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
