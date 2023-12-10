const input=document.querySelector('#search')
const all=document.querySelector('#all')
const nije=document.querySelector('#nije')
const vyshe=document.querySelector('#vyshe')
const list=document.querySelector('.list')

const drinks1=[
    {name:'Mirinda',price:85,size:'1',img:'https://www.bigbasket.com/media/uploads/p/xxl/40094180-9_3-mirinda-soft-drink.jpg'},
    {name:'Coca-Cola',price:90,size:'1',img:'https://halitlar.com/file/foodsbeverages/coca-cola-original-plastic-bottle-15-l'},
    {name:'Fanta',price:90,size:'1',img:'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/4c/c1/f190317bf973304b3ccfe87f338c.jpg'},
    {name:'Nitro',price:65,size:'0.5',img:'https://apofiz-media.s3.amazonaws.com/media/a342bc242ce42ebc/6f02052c-206d-44c8-a4c8-dc027f070715-dc0ddc5a.jpg'},
    {name:'Sultan chai',price:55,size:'1',img:'https://static.tildacdn.com/stor6163-3166-4137-a566-643363313863/63988401.png'},
    {name:'Lets Go',price:60,size:'1',img:'https://backend.magnit.tj/uploads/images/eda5292f6853caa2057235a6feb21812-1024x1024.jpg'},
    {name:'Pepsi',price:90,size:'1',img:'https://images.heb.com/is/image/HEBGrocery/000026101-1'},
];
const drinks2=[
    {name:'Lets Go',price:45,size:'0.5 ',img:'https://backend.magnit.tj/uploads/images/ce0a1ac35c77fe719d186469df050294-1024x1024.jpg'},
    {name:'Coca-Cola',price:45,size:'0.5',img:'https://arigato.kg/wp-content/uploads/2022/12/cola-600x600-1.png'},
    {name:'Fanta',price:45,size:'0.5',img:'https://wasabi.kg/wp-content/uploads/2022/03/media-share-0-02-05-f2e064c2eabe4f7c927b2a645a7707cb1a6f4616870881094e6be3da4b9967a6-picture.jpg'},
    {name:'Pepsi',price:45,size:'0.5',img:'https://globus-online.kg/upload/iblock/6aa/6aa67178782f399855dc57b728143b0a.png'},
    {name:'Sultan chai',price:25,size:'0.5',img:'https://globus-online.kg/upload/iblock/bae/bae4ceaf1d02579fdd13ab1922b1fe95.png'},
    {name:'G-Energy',price:50,size:'0.5',img:'https://main-cdn.sbermegamarket.ru/mid9/hlr-system/146/757/065/010/171/741/100032408192b0.jpg'},
];
    const drinksArray = [...drinks1, ...drinks2];
    //
    function showAll(array){
    list.innerHTML=''
    for (const name of array){
        list.innerHTML+=`
        <div class="alls">
        <img  max width='30%' src='${name.img}'/>
        <h2> ${name.name}</h2>
        <h2>Литр${name.size}</h2>
        <h2> Цена ${name.price}</h2>
        </div>
        `
    }
}
    input.onchange=()=>{
    const drink1Filter = drinksArray.filter(el=>el.name.toLocaleLowerCase()===input.value.toLocaleLowerCase())
    showAll(drink1Filter)
}
    all.onclick=()=>{
          showAll(drinksArray)
}
    nije.onclick=()=>{
    showAll(drinks2)
}
    vyshe.onclick=()=>{
    showAll(drinks1)
}

