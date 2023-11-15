export function getData(page){

    if(page==1)
        return [{id:1,name:'LG Mouse',price:50000,quantity:2},
            {id:2,name:'Samsung Tv',price:2500,quantity:1},
            {id:3,name:'Asus Motherboard',price:6000,quantity:3}]

    if(page==2)
        return [{id:4,name:'Farasoo Keyboard',price:30000,quantity:3},
            {id:5,name:'Logitech Keyboard',price:25000,quantity:3},
            {id:6,name:'Asus Monitor',price:30000,quantity:5}]
}
export function getTotalPageCount(){
    return 2;
}