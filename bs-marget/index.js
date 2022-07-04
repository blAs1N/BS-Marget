axios
  .get("https://fd9315c2-a1b9-493d-a4ec-b178df0454ef.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신 결과: ", result);
    const products = result.data.products;

    let productsHtml = "";
    for (let i = 0; i < products.length; ++i) {
      product = products[i];

      productsHtml +=
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        product.imageUrl +
        '" />' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        product.name +
        "</span>" +
        '<span class="product-price">' +
        product.price +
        "</span>" +
        '<div class="product-seller">' +
        '<img class="product-avartar" src="images/icons/avatar.png" />' +
        "<span>" +
        product.seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }

    document.querySelector("#product-list").innerHTML = productsHtml;
  })
  .catch(function (error) {
    console.error("error 발생: ", error);
  });
