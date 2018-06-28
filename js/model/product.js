class Products{
    constructor(id,name,desc,catId,sellerId,images,date,price,discount,paymentMethod,rating,valid){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.catId=catId;
        this.sellerId=sellerId;
        this.valid=valid;
        this.images=images;
        this.rating=rating;
        this.date=date;
        this.paymentMethod=paymentMethod;
        this.price=price;
        this.discount=discount;
    }
}

const productOrder=[
    "id",
    "name",];