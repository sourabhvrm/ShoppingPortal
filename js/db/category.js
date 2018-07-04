const categoryOperations = {
    addCategory(category) {
        try {
            firebase.database().ref("category/" + category.id).set(category.name);
            alert("Category Added");
        } catch (error) {
            console.log(error);
        }
    },
    retrieveCategory() {
        var pr = new Promise((resolve, reject) => {
            var category = firebase.database().ref("category/");
            category.on("value", (snapshot) => {
                resolve(snapshot.val());
            });
            setTimeout(() => reject("Error"), 5000);
        });
        return pr;
    },
    generateCatId() {
        try {
            var category = firebase.database().ref("category/");
            category.on("value", (snapshot) => {
                if (snapshot.val()) catId = snapshot.val().length;
            });
        } catch (error) {
            console.log(error);
        }
    }
}