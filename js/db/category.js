const categoryOperations={
    addCategory(category){
        firebase.database().ref("category/",category.id).set(category);
    }
}