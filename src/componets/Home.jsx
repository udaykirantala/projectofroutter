import cat1 from '../assets/category-1.jpg'
import cat2 from '../assets/category-2.jpg'
import cat3 from '../assets/category-3.jpg'
import cat4 from '../assets/category-4.jpg'
import cat5 from '../assets/category-5.jpg'
import pro1 from '../assets/product-1-1.jpg'
import pro2 from '../assets/product-2-1.jpg'
import pro3 from '../assets/product-3-1.jpg'
import pro4 from '../assets/product-4-1.jpg'
import pro5 from '../assets/product-5-1.jpg'
import pro6 from '../assets/product-6-1.jpg'
import pro7 from '../assets/product-7-1.jpg'
import pro8 from '../assets/product-8-1.jpg'
import herosectionimg from '../assets/home-img.png'
import '../componets/Home.css'

function Herosection(){
    return(
        <>
        <section className='herosection'>
            <div className='herosectionpromotions'>
                <h3>Hot Promotions</h3>
                <h2>Fashion Trending</h2>
                <span><h2>Great Collection</h2></span>
                <p>Save more with coupons & up to 20% off</p>
                <button>Shope</button>
            </div>
            <div>
                <img src={herosectionimg} alt='Heropage'/>
            </div>
        </section>
        </>
    )
}

function Home(){
    const products = [
        {
          id: 1,
          category: "Clothing",
          name: "Colorful Pattern Shirts",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "Hot",
          image: pro1,
        },
        {
          id: 2,
          category: "Clothing",
          name: "Colorful Pattern Shirts",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags:"Hot",
          image:pro2,
        },
        {
          id: 3,
          category: "Clothing",
          name: "Colorful Pattern Shirts",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "Hot",
          image: pro3,
        },
        {
          id: 4,
          category: "Clothing",
          name: "Pattern Trousers",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "Hot",
          image: pro4,
        },
        {
          id: 5,
          category: "Clothing",
          name: "Pattern Scarf Cap",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "-30%",
          image: pro5,
        },
        {
          id: 6,
          category: "Clothing",
          name: "Floral Shirt",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "-27%",
          image: pro6,
        },
        {
          id: 7,
          category: "Clothing",
          name: "Loose Floral Top",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "-23%",
          image: pro7,
        },
        {
          id: 8,
          category: "Clothing",
          name: "Half-Zip Color Block Shirt",
          price: 238.85,
          oldPrice: 245.8,
          rating: 4,
          tags: "-25%",
          image:pro8,
        },
      ];
    const category=[
        {
            name:"T-Shirt",
            img:cat1,
        },
        {
            name:"Bags",
            img:cat2,
        },
        {
            name:"Sandal",
            img:cat3,
        },
        {
            name:"ScarfCap",
            img:cat4,
        },
        {
            name:"Shoes",
            img:cat5,
        },
      ];
    return(
        <>
        <Herosection/>
        <section>
          <div className='newArrivalsContent'>
            <p><span>Popular</span> Categories</p>
            <div className='newArrivalsContentbut'><button><i class="fa-solid fa-less-than"></i></button>
            <button><i class="fa-solid fa-greater-than"></i></button></div>
          </div>
          <div className='newArrivalsSection'>
            {category.map((item)=>(
              <div className='newArrivalsCarts'>
                <img src={item.img} alt={item.name}/>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className='feturedCatigorySection'>
            <span><p>Featured</p></span>
            <p>Popular</p>
            <p>New Added</p>
          </div>
          <div className='feturedCatigoryCarts'>
            {products.map((item)=>(
                <div className='feturedCatigoryCart'>
                  <div>
                    <img src={item.image} alt={item.name}/>
                  </div>
                  <div>
                    <span><p>{item.category}</p></span>
                    <p>{item.name}</p>
                    <p>{item.price}<span>${item.oldPrice}</span></p>
                  </div>
                </div>
            ))}
          </div>
        </section>
        </>
    )
}
export default Home