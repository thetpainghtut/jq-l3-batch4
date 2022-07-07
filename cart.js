$(function () {
    getData();

    $("button.atcbtn").on("click",function () {
        var id = $(this).data("id");
        var name = $(this).data("name");
        var price = $(this).data("price");

        var item = {
            id: id,
            name: name,
            price: price,
            qty: 1
        }
        // console.log(item)

        var cartStr = localStorage.getItem('cart');
        if(!cartStr){
            var itemArr = new Array(); // first time
        }else{
            var itemArr = JSON.parse(cartStr) 
        }
        itemArr.push(item); // 
        
        localStorage.setItem('cart', JSON.stringify(itemArr));
    })

    function getData(){
        var cartStr = localStorage.getItem('cart');
        var data="";

        if(!cartStr){
            data += `Your Cart is Empty!`;
        }else{
            data += `Show items here!`
        }

        $("#cartitems").html(data);
    }
})