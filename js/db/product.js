const productOperations = {
    addProduct(product) {
        try {
            firebase.database().ref("product/" + product.id).set(product);
            alert("Prdoduct Added");
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    },
    generateId() {
        try {
            var prod = firebase.database().ref("product/");
            prod.on("value", (snapshot) => {
                // console.log(snapshot.val());
                id = snapshot.val().length;
            });
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    },
    retrieveProducts() {
        try {
            var pr = new Promise((resolve, reject) => {
                var product = firebase.database().ref("product/");
                product.on("value", snapshot => {
                    // console.log(snapshot.val());
                    resolve(snapshot.val());
                });
                setTimeout(() => reject("Product Error"), 5000);
            });
            return pr;
        } catch (error) {
            console.log(error);
        }
    }
}