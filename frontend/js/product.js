$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData() {
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get


        $.get(url, function (data, status) {
            console.log(status);
            console.log(data);

            if (status == 'success') {
                for (index in data) {
                    var item = data[index];
                    var row = `<tr>
                         <td scope="row">${item.photo}</td>
                         <td>${item.serialno}</td>
                         <td>${item.name}</td>
                         <td>${item.category}</td>
                         <td>${item.price}</td>
                         <td>${item.action}</td>
                         <td>
                         <a class="btn btn-primary" href="userdetail.html?id=${item.id}">view detail</a>
                         </td>
                         </tr>`;
                    $('#plist').append(row);
                }
            }
        })

        // ===============================
    }

    // Update photo when URL has changed
    $("#photo").change(function () {
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $("input").keyup(function () {
            var txt = $("input").val();
            $.POST(""), { Suggest: txt }, function (result) {
                $("span").html(result);
            }
        });

      
        // ===============================
    });
})