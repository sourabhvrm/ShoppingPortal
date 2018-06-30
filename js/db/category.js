const categoryOperations={
    addCategory(category){
        firebase.database().ref("category/",category.id).set(category);
    },
    retrieveCategory(){
        var pr=new Promise((resolve,reject)=>{
            var category=firebase.database().ref("category/");
            category.on("value",(snapshot)=>{
                resolve(snapshot.val());
            });
        });
        return pr;
    }
}