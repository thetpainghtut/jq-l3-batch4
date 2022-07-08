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
        // Please try here!
        
        localStorage.setItem('cart', JSON.stringify(itemArr));
        getData()
    })

    function getData(){
        var cartStr = localStorage.getItem('cart');
        var data="";

        if(!cartStr){
            data += `Your Cart is Empty!`;
        }else{
            var cartArr = JSON.parse(cartStr);
            var total=0;
            $.each(cartArr, function (i,v) {
                total += v.qty*v.price;

                data += `<tr>
                        <td>${i}</td>
                        <td>${v.name}</td>
                        <td>${v.price}</td>
                        <td>${v.qty}</td>
                        <td>${v.qty*v.price}</td>
                        </tr>`
            })
            data += `<tr>
                    <td colspan="4">Total</td>
                    <td>${total}</td>
                </tr>`
        }

        $("#cartitems").html(data);
    }
})