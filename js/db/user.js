const userOperations = {
    addUser(user) {
        try {
            firebase.database().ref("users/" + user.username).set(user);
            firebase.database().ref("users/userId").set(++(user.id));
        } catch (error) {
            console.log(error);
            throw new Error("Sign Up Error");
        }
    },
    verifyUser(username, password) {
        var pr = new Promise((resolve, reject) => {
            var user = firebase.database().ref("users/" + username);
            user.on("value", (snapshot) => {
                if (snapshot.val()) {
                    if (snapshot.val().password == password) {
                        resolve(snapshot.val());
                    } else resolve(false);
                }
                else {
                    resolve(false);
                }
            });
        });
        return pr;
    },
    generateUserId() {
        try {
            var users = firebase.database().ref("users/userId");
            users.on("value", snapshot => {
                if (snapshot.val()) {
                    console.log("Snapshot : ", snapshot.val());
                    userId = snapshot.val();
                }
            })
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    }
}