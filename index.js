const items =[
    {
        id:0,
        nome:'camiseta',
        img:'img/camiseta.jpg',
        quantidade:0
    },
    {
        id:1,
        nome:'short',
        img:'img/short.jpg',
        quantidade:0
    },
    {
        id:2,
        nome:'sapato',
        img:'img/sapato.jpg',
        quantidade:0
    }
]



inicializarLoja = () =>{
    let containerProdutos = document.getElementById('produtos');
    
    items.map((val)=>{
        
        containerProdutos.innerHTML += 
            `  
                <div class="produto-single"> 
                    <img src="` +val.img+ `" />
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`" href="#">Adiconar ao carrinho!<a/>
                
                </div>
            `
        
    });
}
inicializarLoja()

atualizarCarrinho =()=>{
    let containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML ="";
    items.map((val)=>{
        if(val.quantidade >0){
            containerCarrinho.innerHTML += 
                `  
                    <div class="info-single-checkout">
                        <p style="float:left;">Produto: `+val.nome+`</p>
                        <p style="float:right;">Quantidade: `+val.quantidade+`</p>
                        <div style="clear:both"></div>
                        
                    </div>
            `
        }
    });
 }


 var links = document.getElementsByTagName("a");


 for(let i = 0; i<links.length;i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
       
    })
 }



