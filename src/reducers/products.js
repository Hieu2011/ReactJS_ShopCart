var initialState = [
    {
        id : 1,
        name :'Iphone X',
        image : 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-400x400.jpg',
        price : 500000,
        description : 'Sản phẩm do apple sản phẩm',
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name :'Iphone 11',
        image : 'https://www.pngitem.com/pimgs/m/516-5165169_refurbished-apple-iphone-11-64gb-red-vodafone-a.png',
        price : 1500000,
        description : 'Sản phẩm do samsung sản phẩm',
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        description : 'Sản phẩm do china sản phẩm',
        name :'Iphone 12',
        price : 2500000,
        image : 'https://static.esrgear.com/wp-content/uploads/2021/01/iPhone-12-HD-Clear-Tempered-Glass-Camera-Lens-Protector.jpg',
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;