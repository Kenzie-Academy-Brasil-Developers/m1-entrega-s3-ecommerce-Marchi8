const produtos = [
    {
        id: 1,
        image: "/img/Men-Jacket-Front-Black__15466 1 (6).png",
        category: "Camisetas",
        title: "Lightweight Jacket",
        description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
    {
        id: 2,
        image: "/img/Men-Jacket-Front-Black__15466 1 (1).png",
        category: "Acessórios",
        title: "Black Hat",
        description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
    {
        id: 3,
        image: "/img/Men-Jacket-Front-Black__15466 1 (2).png",
        category: "Acessórios",
        title: "Mask",
        description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
    {
        id: 4,
        image: "/img/Men-Jacket-Front-Black__15466 1 (3).png",
        category: "Camisetas",
        title: "T-Shirt",
        description: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
    {
        id: 5,
        image: "/img/Men-Jacket-Front-Black__15466 1 (4).png",
        category: "Camisetas",
        title: "Short-Sleeve T-Shirt",
        description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais fino...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
    {
        id: 6,
        image: "/img/Men-Jacket-Front-Black__15466 1 (5).png",
        category: "Camisetas",
        title: "Champion Jacket",
        description: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        price: 100,
        cart: "Adicionar ao carrinho",
    },
]

const itens = []

const lista = document.getElementById("itens")

function cards(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        const li = document.createElement("li")
        li.className = "card"
        li.id = produtos[i]["id"]
        const divImg = document.createElement("div")
        divImg.id = "imagem"
        const cardImg = document.createElement("img")
        cardImg.src = produtos[i]["image"]
        const mainCard = document.createElement("main")
        mainCard.id = "product-main"
        const categoria = document.createElement("p")
        categoria.id = "category"
        categoria.innerText = produtos[i]["category"]
        const cardName = document.createElement("h1")
        cardName.id = "product-title"
        cardName.innerText = produtos[i]["title"]
        const descricao = document.createElement("p")
        descricao.id = "product-description"
        descricao.innerText = produtos[i]["description"]
        const preco = document.createElement("h4")
        preco.id = "product-price"
        preco.innerText = "R$ " + produtos[i]["price"] + ".00"
        const addCart = document.createElement("p")
        addCart.id = "add-cart"
        addCart.classList.add(produtos[i]["id"])
        addCart.innerText = produtos[i]["cart"]


        lista.appendChild(li)
        li.appendChild(divImg)
        divImg.appendChild(cardImg)
        li.appendChild(mainCard)
        mainCard.appendChild(categoria)
        mainCard.appendChild(cardName)
        mainCard.appendChild(cardName)
        mainCard.appendChild(descricao)
        mainCard.appendChild(preco)
        mainCard.appendChild(addCart)
        itens.push(li)
    }
}

cards(produtos)

lista.addEventListener("click", cartAdd)

let cart = [];

function cartAdd(event) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i]["id"] == event.target.classList[0]) {
            cart.push(produtos[i])
        }
    }
    cartItens()
}

const sectionCart = document.getElementById("cart-itens")

function cartItens() {

    sectionCart.innerHTML = ""
    if (cart.length > 0) {
        document.getElementById("empty").style.display = "none"
        document.getElementById("vazio").style.display = "none"
    } else {
        document.getElementById("empty")
        document.getElementById("vazio")
    }


    let quantidade = 0
    let valor = 0

    for (let j = 0; j < cart.length; j++) {
        const divCart = document.createElement("div")
        divCart.id = "image-cart"
        const imgCart = document.createElement("img")
        imgCart.src = cart[j]["image"]
        imgCart.id = "cart-img"
        const divInf = document.createElement("div")
        divInf.id = "cart-inf"
        const cartProduct = document.createElement("h1")
        cartProduct.id = "cart-title"
        cartProduct.innerText = cart[j]["title"]
        const cartPrice = document.createElement("h4")
        cartPrice.id = "cart-price"
        cartPrice.innerText = "R$ " + cart[j]["price"] + ".00"
        const remove = document.createElement("p")
        remove.id = "remove-cart"
        remove.innerText = "Remover produto"
        remove.classList = j


        sectionCart.appendChild(divCart)
        divCart.appendChild(imgCart)
        sectionCart.appendChild(divInf)
        divInf.appendChild(cartProduct)
        divInf.appendChild(cartPrice)
        divInf.appendChild(remove)

        valor += cart[j]["price"]
        quantidade++

    }
    document.getElementById("valor").innerText = quantidade
    document.getElementById("valorTotal").innerText = "R$ " + valor.toFixed(2)
}


cartItens()

function remover(event) {
    if (event.target.innerText === "Remover produto") {
        cart.splice(event.target.classList[0], 1)
        cartItens()
    }
}
sectionCart.addEventListener("click", remover)


const menu = document.getElementById("head")
console.log(menu)

const all = document.getElementsByClassName("all")[0]
const accessories = document.getElementsByClassName("accessories")[0]
const shoes = document.getElementsByClassName("shoes")[0]
const shirts = document.getElementsByClassName("shirts")[0]

all.addEventListener("click", () => {
    lista.innerHTML = ""
    cards(produtos)
})


// accessories.addEventListener("click", () => {
//     lista.innerHTML = ""
//     for (let i = 0; i < produtos.length; i++) {
//         if (produtos[i]["category"] === produtos[1]["category"]) {
//             cards(produtos)
//         }
//     }
// })


// shoes.addEventListener("click", () => {
//     lista.innerHTML = ""
    
// })

// shirts.addEventListener("click", () => {
//     lista.innerHTML = ""
    
// })

