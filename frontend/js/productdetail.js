$(function () {

    var searchParams = new URLSearchParams(window.location.search);
    var pid = searchParams.get("pid");
    var url = "/api/products/" + pid;

    // Get data when first time open
    getData();

    function getData() {
        // #14 Get a selected product and display as a form
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

    // Save edited product data
    $("#saveproduct").click(function () {
        var editproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }
        $.ajax({
            url: url,
            type: 'PUT',
            data: editproduct,
            success: function (result) {
                //Show updated status
                $("#modalbody").text("Updated product " + pid);
                $('#alertModal').modal('toggle');
                // Refresh data
                getData();
            }
        });
    });

    $("#deleteproduct").click(function () {
        $('#confirmModal').modal('toggle');
    });

    $("#confirmdelete").click(function () {
        // #15 Get a selected product and go back to product list
        // use $.get and winidow.location.href

        // ===============================
    });
});