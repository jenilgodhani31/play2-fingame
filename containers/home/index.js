import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Ads from "@components/Ads";


const Modal = dynamic(() => import("@components/model"), { ssr: false });
function Home() {
  const [isClient, setIsClient] = useState(true);
  const [isOpen, setIsOpen] = useState(true)


  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsOpen(true);

  }, []);



  return (
    <Fragment>
      <div className="mx-auto  ls:w-[360px]  bg-white">
        <div className="flex flex-col  justify-center pt-10 px-5 pb-5">

          <Ads data-ad-slot="3067284912"
            data-ad-format="auto"
            data-full-width-responsive="true" />

          <div className="pt-5 font-bold">
            <div className="font-bold text-[30px] md:text-[25px]">Download App and get Free 5000 Diamond 💎</div>
            <a href="https://freediamonds.fingameon.com/">
              <div >
                <img src="/gameImage/unnamed.png" className="h-[200px] mt-5" />
              </div>
            </a>
            <a href="https://freediamonds.fingameon.com/">
              <div className="flex item-center  justify-center pt-5">
                <button type="button" className="btn btn-pulse  bg-primary5 rounded-md flex items-center justify-between text-white  px-4 py-2 font-bold md:text-[20px]  mt-5">
                  CLAIM 5000 💎
                </button>
              </div>
            </a>




            <p className='pt-5 text-primary4'><strong className="text-[20px] md:text-[18px]">Step 1 : </strong> Click the above button to download the App.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 2 : </strong> Open the App and use it for 5 Days.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 3 : </strong>  After the Completion of the 5th Day You will get redemption.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 4 : </strong> You just have to copy and paste it to our site for redemption And you get 5000 Diamond 💎 in your Free Fire Account.
            </p>


          </div>


          <div className=" text-black  font-bold pb-2 text-[25px] pt-5">
            Diamonds, Skins and Free Fire Pass
          </div>
          <p className="text-primary4 text-left pb-[25px]">
            Here are details on how to acquire <br />
            Diamonds and other rewards in Free Fire. <br />
            Read on to explore the full methods.
          </p>


          <a href="/visit">
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Get Free Diamonds in Free Fire
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>


          <div className="px-2">
            <a href="/freefire">
              <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-4 py-2 font-bold text-[20px] mt-5">
                Free Fire Redeem Codes
                <span className="ml-2 flex items-center">
                  <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
                </span>
              </button>
            </a>
          </div>
          <div className="px-4">
            <a href="/freefire">
              <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-2 py-2 font-bold text-[22px] mt-5">
                💎 Diamond Generator


                <span className="ml-2 flex items-center">
                  <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
                </span>
              </button>
            </a>


          </div>
          <p className="pt-5 text-primary4">If you have any questions, make sure you read to the end to get all the information you need! Imagine yourself dreaming of amassing a treasure trove of diamonds in free fire.</p>
          <p className="pt-5 text-primary4">Ready to unlock stunning skins, exclusive characters and powerful weapons. We recognize how electrifying and rewarding it can be to enhance your gaming experience with these valuable resources.</p>


          <Ads
            data-ad-slot="3067284912"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <p className="pt-5 text-primary4">And the best part? You can now win diamonds without spending a single penny! Our homepage is your gateway to exploring foolproof methods of earning diamonds for free in Free Fire. Diamonds represent the game's premium currency, essential for unlocking a variety of exclusive items that take your gameplay to the next level.</p>
          <p className="pt-5 text-primary4">Our tried and trusted methods not only reveal how to get free diamonds, but also explain in detail how each approach works. From exciting sweepstakes to strategic missions, the world of diamonds is at your fingertips.</p>

          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Methods to Earn Diamonds in Free Fire
          </div>
          <p className=" text-primary4">There are methods for acquiring diamonds and skins in Free Fire, which are divided into two types: internal and external. Internal methods use tools provided by the game itself, while external methods generally reward players with codes redeemable in the game.</p>
          <p className="pt-5 text-primary4"> <strong>Seasonal events: </strong>Take advantage of the events offered by the developer on a regular basis. Among the unique rewards of skins and emotes, there's also the chance to win diamonds!</p>
          <p className="pt-5 text-primary4"> <strong>Redemption codes: </strong>There are external apps that offer options for redeeming diamonds in Free Fire, as well as other rewards, via codes or balances.</p>
          <p className="pt-5 text-primary4"> <strong>Applications:  </strong>There are external apps that offer options for redeeming diamonds in Free Fire, as well as other rewards, via codes or balances.</p>
          <p className="pt-5 text-primary4"> <strong>Tournaments:  </strong>Taking part in tournaments can earn you diamonds and other rewards. Keep an eye out for them and take advantage of every opportunity, as well as being aware of the best strategies to stand out.</p>


          <div className=" text-black pt-5 font-bold pb-2 text-[26px]">
            Why Use These Methods?
          </div>
          <p className=" text-primary4">You may be wondering why you should dedicate yourself to these methods of earning free diamonds. The answer is straightforward: to satisfy your in-game needs. Whether it's to acquire the most stylish skins, the most powerful characters or to gain a competitive edge, diamonds are essential to achieving these goals. Our exclusive methods are not only ways to save money, but also to realize your ambitions in Free Fire.</p>




          <div className=" text-black pt-5 font-bold pb-2 text-[25px]">
            Unlocking Incredible Advantages
          </div>
          <p className=" text-primary4">We understand that you are already familiar with the methods in general. However, here we provide information that goes beyond the basics. Increase your chances in draws, optimize your participation in events and maximize your daily earnings. Our expert insights will ensure that you are well prepared to make the most of each method.</p>
          <a href="/visit">
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Claim Free Diamonds
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>


          <div className="px-2">
            <a href="/freefire">
              <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-4 py-2 font-bold text-[20px] mt-5">
                Claim Skins of Guns
                <span className="ml-2 flex items-center">
                  <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
                </span>
              </button>
            </a>
          </div>




          <div className="px-4">
            <a href="/freefire">
              <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-4 py-2 font-bold text-[22px] mt-5">
                Get New Character
                <span className="ml-2 flex items-center">
                  <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
                </span>
              </button>
            </a>


          </div>


          <a href="/freefire">
            <div className="pt-5" >
              <img src="/gameImage/imageOne.png" className="h-[200px]" />
            </div>
          </a>
          <p className="pt-5 text-primary4"> Now that you've discovered the secrets of free diamonds in Free Fire and understand why these methods are essential to enhancing your gaming experience, it's time to take action! Don't waste any more time! Click on the button below and find out everything!</p>


        </div>


      </div>
      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="  md:mt-[18px] mt-[20px]"
          >
            <Ads display={true} data-ad-slot="2593755237" />
          </div>

        </Modal>
      )}


    </Fragment>
  );
}


export default Home;
