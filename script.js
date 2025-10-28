const produtosLive = [
    {
        nome:'Vestido azul-tiffany',
        preço: 240.00,
        img:'Assets/vestido1.jpg',
        descrição:'corte reto com botões frontais, mistura de casual e sofisticado.',
        type: 'vestido'
    },
    {
        nome:'Vestido rosa',
        preço: 199.99,
        img:'Assets/vestido2.png',
        descrição:'modelo justo ao corpo, perfeito para eventos noturnos.',
        type: 'vestido'
    },
    {
        nome:'Vestido laranja',
        preço: 174.99,
        img:'Assets/vestido3.webp',
        descrição:'fluido e elegante, ideal para ocasiões especiais.',
        type: 'vestido'
    },
    {
        nome:'Vestido branco',
        preço: 220.00,
        img:'Assets/vestido4.webp',
        descrição:'comprimento médio, leve e com estampa delicada.',
        type: 'vestido'
    },
    {
        nome:'Blusa verde',
        preço: 110.00,
        img:'Assets/blusa1.webp',
        descrição:'leve e fresca, com caimento suave e ideal para o verão.',
        type: 'blusa'
    },
    {
        nome:'Blusa vermelho-sangue',
        preço: 140.00,
        img:'Assets/blusa2.jpg',
        descrição:'modelo curto, com modelagem moderna e perfeita para combinações casuais.',
        type: 'blusa'
    },
    {
        nome:'Blusa vermelho',
        preço: 89.99,
        img:'Assets/blusa3.png',
        descrição:'tecido elástico que se ajusta ao corpo, ideal para dias mais frios.',
        type: 'blusa'
    },
    {
        nome:'Blusa branca',
        preço: 49.99,
        img:'Assets/blusa4.webp',
        descrição:'modelo leve e confortável, com corte reto e gola redonda.',
        type: 'blusa'
    },
    {
        nome:'Calça jeans',
        preço: 190.00,
        img:'Assets/calca1.jpeg',
        descrição:'clássica e versátil, com corte tradicional e tecido resistente.',
        type: 'calça'
    },
    {
        nome:'Calça bege',
        preço: 149.99,
        img:'Assets/calca2.jpg',
        descrição:'modelo amplo e fluido, que garante conforto e elegância.',
        type: 'calça'
    },
    {
        nome:'Calça branca',
        preço: 139.99,
        img:'Assets/calca3.webp',
        descrição:'caimento sofisticado, ideal para looks formais ou profissionais.',
        type: 'calça'
    }
]

const inputSearch = document.getElementById('search-input');
const buttonSearch = document.querySelector('.btn-input');
const productsContainerDiv = document.querySelector('.products-container');
const emptySpace = document.querySelector('.empty-space')




const productsRefresh = ()=>{
    produtosLive.map((i)=>{
        const productsCards = document.createElement('div');
        productsCards.classList.add('product-card');
        const productsImg = document.createElement('img');
        productsImg.src = i.img
        productsImg.classList.add('produto-img')
        const productsName = document.createElement('h2');
        productsName.innerHTML = i.nome
        productsName.classList.add('produto-name')
        const productsPrice = document.createElement('h4');
        productsPrice.innerHTML = 'R$ '+ (i.preço.toFixed(2)).replace(',','.')
        productsPrice.classList.add('produto-price')
        const productsDescription = document.createElement('p');
        productsDescription.innerHTML = i.descrição
        productsDescription.classList.add('produto-description')
        
        productsCards.appendChild(productsImg)
        productsCards.appendChild(productsName)
        productsCards.appendChild(productsPrice)
        productsCards.appendChild(productsDescription)
        
        productsContainerDiv.appendChild(productsCards)
        
    })
    
};

buttonSearch.addEventListener('click',()=>{
    const searchTerm = inputSearch.value.toLowerCase()
    const allProducts = document.querySelectorAll('.product-card')
    
    
    allProducts.forEach((el)=>{
        if(el.textContent.toLowerCase().includes(searchTerm)){
            el.classList.remove('invisible')
            
        }else{
            el.classList.add('invisible')
            
        }
    })
    const anyVisible = Array.from(allProducts).some((el)=>{
        return !el.classList.contains('invisible')
    })
    if(anyVisible){
        emptySpace.classList.add('invisible');
    }else{
        emptySpace.classList.remove('invisible');
        
    }
})

window.onload = ()=>{
    productsRefresh()
}; 

