//syntax: $.getJSON(url, [data],[callback]);

function getFromServer(){
  $.getJSON('http://127.0.0.1:3000/seller/add', function(data) {
        var text ="<ul>";
        data.forEach(function(item){    
        text = text + `<p> ID: ${item.seller_id}<br>
                    Name: ${item.seller_name}<br>
                    Wallet: ${item.seller_wallet} </p>`
        
        });

        text += "</ul>";
        $(".mypanel").html(text);
    });
  }


   