const userOperations = {
    addUser(user) {
        try {
            firebase.database().ref("users/" + user.username).set(user);
        } catch (error) {
            console.log(error);
            throw new Error("Sign Up Error");
        }
    },
    verifyUser(email, password) {
        var pr = new Promise((resolve, reject) => {
            var user = firebase.database().ref("users/" + email);
            user.on("value", (snapshot) => {
                console.log(snapshot.val());
            });
        });
        return pr;
    },
    generateUserId() {
        try {
            var users = firebase.database().ref("users/");
            users.on("value", snapshot => {
                if (snapshot.val()) {
                    console.log("Snapshot : ",snapshot.val());
                    userId=snapshot.val().length;
                }
            })
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    }
}