const productOperations={
    addProduct(product){
        firebase.database().ref("product/"+product.id).set(product);
    },
}