const productOperations = {
    addProduct(product) {
        try {
            firebase.database().ref("product/" + product.id).set(product);
            alert("Prdoduct Added");
        } catch (error) {
            console.log(error);
        }
    },
    generateId() {
        try {
            var prod = firebase.database().ref("product/");
            prod.on("value",(snapshot)=>{
                // console.log(snapshot.val());
                id=snapshot.val().length;
            });
        } catch (error) {
            console.log(error);
        }
    }
}