const sellerOperations = {
    verifyLogin(username, password) {
        var pr = new Promise((resolve, reject) => {
            var adminRef = firebase.database().ref("seller/");
            adminRef.on("value", (snapshot) => {
                resolve(snapshot.val());
            });
        });
        return pr;
    }
}