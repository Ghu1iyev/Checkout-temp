import Input from "./Input";
import Backbak from '../assets/images/pexels-athena-2081199 (1).jpg'
import Shoes from "../assets/images/pexels-melvin-buezo-2529157.jpg"
import {styled} from 'styled-components'

const Checkout = () => {
  return (
    <Container>
     <div>
     <div>
        <h2 className="font-montserat text-[36px] font-semibold text-dark-liver">
          Checkout
        </h2>
      </div>
      <div>
        <h2 className="font-montserat text-dark-liver font-semibold text-[18px] mt-5">
          Contact information
        </h2>
      </div>
        <Input contact="Email" icon="fa-solid fa-envelope fa-xl" placeholder="Enter your email..."/>
        <Input contact="Phone" icon="fa-solid fa-phone fa-xl" placeholder="Enter your phone..."/>

        <div>
        <h2 className="font-montserat text-dark-liver font-semibold text-[18px] mt-5">
          Shipping address
        </h2>
        <Input contact="Full name" icon="fa-solid fa-user fa-xl" placeholder="Your fullname..."/>
        <Input contact="Address" icon="fa-solid fa-house fa-xl" placeholder="Your address..."/>
        <Input contact="City" icon="fa-solid fa-city fa-xl" placeholder="Your city.."/>
        <div className="flex gap-52 md:flex-col md:gap-0 sm:flex-col sm:gap-0  xs:flex-col xs:gap-0">
        <div className="mb-20">
        <p className="text-old-silver text-[12px] font-semibold font-montserat mt-5">
          Country
        </p>
       <div className="absolute">
       <input
          className="border-2 border-old-silver rounded-lg w-[215px] h-[55px] px-12 xs:w-[350px]"
          type="text"
          placeholder="You city..."
        />
        <i className="fa-solid fa-earth-americas fa-xl absolute text-old-silver left-[15px] top-2/4"></i>
       </div>
      </div>
      <div className="mb-20 ">
        <p className="text-old-silver text-[12px] font-semibold font-montserat mt-5">
         Postal Code
        </p>
       <div className="absolute">
       <input
          className="border-2 border-old-silver rounded-lg w-[215px] h-[55px] px-12 xs:w-[350px]"
          type="text"
          placeholder="You postal code..."
        />
        <i className="fa-brands fa-usps fa-xl absolute text-old-silver left-[15px] top-2/4"></i>
       </div>
      </div>
        </div>
        </div>
        <div>
        <input type="checkbox" />
        <span className="font-semibold font-montserat text-dark-liver ml-5">Save this information for next time</span>
     </div>
     <div className="mt-5">
        <button className="bg-royal-orange text-white w-[165px] h-[55px] rounded-lg">Continue</button>
     </div>
     </div>
     <div className="w-[385px] h-[535px] bg-anti-flash-white rounded-xl mt-20 p-8">
        <div className="flex justify-between">
            <img className="w-[165px] h-[135px] object-cover rounded-lg" src={Backbak} alt="" />
            <div>
                <h2 className="font-montserat font-semibold text-[16px] text-dark-liver">Vintage Backbag</h2>
                <div className="flex items-center gap-2 mb-8">
                <span className="text-[18px] font-semibold text-royal-orange">$54.99</span>
                <span className="text-[14px] line-through font-montserat font-semibold text-dark-liver">$94.99</span>
                </div>
                <div className="w-[135px] h-[52px] border-2 border-old-silver rounded-xl flex items-center justify-between p-2">
                    <button className="bg-chinese-white rounded-md text-[20px] px-1 py-0 text-old-silver"><i className="fa-solid fa-minus"></i></button>
                    <button className="font-montserat font-semibold">1</button>
                    <button className="bg-chinese-white rounded-md text-[20px] px-1 py-0 text-old-silver"><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-10">
            <img className="w-[165px] h-[135px] object-cover rounded-lg" src={Shoes} alt="" />
            <div>
                <h2 className="font-montserat font-semibold text-[16px] text-dark-liver">Levi Shoes</h2>
                <div className="flex items-center gap-2 mb-8">
                <span className="text-[18px] font-semibold text-royal-orange">$74.99</span>
                <span className="text-[14px] line-through font-montserat font-semibold text-dark-liver">$124.99</span>
                </div>
                <div className="w-[135px] h-[52px] border-2 border-old-silver rounded-xl flex items-center justify-between p-2">
                    <button className="bg-chinese-white rounded-md text-[20px] px-1 py-0 text-old-silver"><i className="fa-solid fa-minus"></i></button>
                    <button className="font-montserat font-semibold">1</button>
                    <button className="bg-chinese-white rounded-md text-[20px] px-1 py-0 text-old-silver"><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
        <div className="mt-24">
            <hr />
            <div className="flex justify-between my-2">
            <h2 className="font-montserat font-semibold text-dark-liver">Shipping</h2>
            <span className="font-montserat font-semibold text-[15px] text-dark-liver">$19</span>
            </div>
            <hr />
            <div className="flex justify-between my-2">
            <h2 className="font-montserat font-semibold text-dark-liver">Total</h2>
            <span className="font-montserat font-semibold text-[15px] text-dark-liver">$148.98</span>
            </div>
        </div>
     </div>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    margin: 0 200px;

    @media (max-width: 1260px){
        margin: 0 100px;
    }
    @media (max-width: 1024px){
        flex-direction: column-reverse;
    }
    @media (max-width: 640px){
        margin: 10px;
    }
`
