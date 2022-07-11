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

        var status = false;
        $.each(itemArr,function (i,v) {
            if(v.id == id){
                v.qty++;
                status = true;
                return false;
            }
        })

        if(status == false){
            itemArr.push(item);
        }
        
        localStorage.setItem('cart', JSON.stringify(itemArr));
        getData()
    })

    function getData(){
        var cartStr = localStorage.getItem('cart');
        if(!cartStr){
            var data = `<h2 style="text-align: center;">Your Cart is Empty!</h2>`;
            $(".mytable").hide();
            $(".mycart").show();
            $(".mycart").html(data);
        }else{
            var body;
            var cartArr = JSON.parse(cartStr);
            var total=0;
            $.each(cartArr, function (i,v) {
                total += v.qty*v.price;
                let id = ++i;
                body += `<tr>
                        <td>
                            ${id}
                            <button class="delebtn">X</button>
                        </td>
                        <td>${v.name}</td>
                        <td>${v.price}</td>
                        <td>
                        <button class="minbtn">-</button>
                        ${v.qty}
                        <button class="maxbtn">+</button>
                        </td>
                        <td>${v.qty*v.price}</td>
                        </tr>`
            })
            body += `<tr>
                    <td colspan="4">Total</td>
                    <td>${total}</td>
                </tr>`

            $(".mycart").hide();
            $("#cartitems").html(body);
            $(".mytable").show();
        }

        
    }
})