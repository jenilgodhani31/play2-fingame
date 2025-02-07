import Ads from '@components/Ads';
import React, { Fragment, useState } from 'react'

function DiamondCodes() {
  const [isOpen, SetIsOpen] = useState(false)
  const [giftCode, setGiftCode] = useState('')

  function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
      code += characters[Math.floor(Math.random() * characters.length)];
      // Add a space after every 4 characters, except at the end
      if ((i + 1) % 4 === 0 && i < 15) {
        code += ' ';
      }
    }
    return code;
  }
  function handelClick() {
    const newCode = generateCode();
    setGiftCode(newCode)
    SetIsOpen(true)
  }
  return (
    <Fragment>
      <div className="mx-auto  ls:w-[360px]  bg-white">

        <div className="flex flex-col  justify-center pt-10 px-5 pb-5">

          <Ads
          data-ad-slot="3067284912"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

          <div className=" text-black  font-bold pb-2 text-[25px]">
            3 Ways to Earn Lots of Free Diamonds in Free Fire!
          </div>


          <div className="text-black font-bold text-left  pt-5 pb-[5px] text-[20px]">
            Google Pay gift card code generator
          </div>
          <p className="pt-5 text-primary4">Our latest code that visitors use:</p>

          <div className="flex item-center  justify-center">
            <button type="button" onClick={() => handelClick()} className="bg-primary5  rounded-md flex items-center justify-between text-white px-8 py-2 font-bold text-[20px] mt-5">
              Generate Code
            </button>
          </div>
          {isOpen && (
            <p className="pt-5 flex-col text-center text-[22px] text-primary6">Seu código de gift card é:<samp className="font-bold"> "{giftCode}" </samp></p>
          )

          }

          <p className="pt-5 text-primary4">See here and try <samp className="font-bold">"YF7I Q6MM BD0C DI02" </samp></p>


          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            New codes are available every Tuesdays
          </div>



          <a href='/'>
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Diamond Codes on Free Fire
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>



          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            How to Use a Diamond Generator in Your Favorite Game
          </div>
          <p className='pt-5 text-primary4'>Diamond generators are tools widely used by players to acquire valuable resources in their favorite games.</p>
          <p className="pt-5 text-primary4">If you want to maximize your gaming experience without spending real money, follow these simple steps to use a Diamond Generator.</p>


          <a href="/">
            <div className="" >
              <img src="/gameImage/Free-Fire-Redeem-Code.jpg" className="h-[200px] pt-5" />
            </div>
          </a>

          <div className=" text-black pt-5 font-bold pb-2 text-[26px]">
            Step 1: Research and Choose a Reliable Generator
          </div>
          <p className='pt-5 text-primary4'>Before you start, it's essential to research and select a reliable and safe diamond generator. Read comments and opinions from other users online to ensure its legitimacy and effectiveness.</p>
          <p className=" text-primary4">Make sure you choose a generator that is compatible with your specific game and is up-to-date to avoid problems.</p>


          <div className=" text-black pt-5 font-bold pb-2 text-[26px]">
            Step 2: Access the Diamond Generator
          </div>
          <p className='pt-5 text-primary4'>Once you've chosen a suitable diamond generator, access its platform via your browser or mobile app. Some generators may require you to create an account, while others allow anonymous access. Follow the instructions provided to access the generator.</p>


          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            How to Use Gift Certificate Codes on Free Fire
          </div>
          <p className='pt-5 text-primary4'><strong>Step 1:</strong> Open the Google Play Store </p>
          <p className='pt-5 text-primary4'>Launch the Google Play Store app on your Android device and make sure you are logged into the correct Google account. </p>

          <p className='pt-5 text-primary4'><strong>Step 2:</strong>  Redeem Gift Certificate Code </p>
          <p className='pt-5 text-primary4'>In the top right corner, click on your profile icon. </p>
          <p className='pt-5 text-primary4'>Then choose "Payments and <br></br> subscriptions" from the menu. </p>
          <p className='pt-5 text-primary4'>Tap on "Redeem code" on the next screen, enter the code (e.g. "YF7I Q6MM BD0C DI02") and press "Redeem".</p>


          <p className='pt-5 text-primary4'><strong>Step 3:</strong> Confirm redemption </p>
          <p className='pt-5 text-primary4'>Check the information displayed and confirm by tapping "Confirm".</p>
          <p className='pt-5 text-primary4'>The balance of the gift certificate will be added to your Google Play account. </p>


          <p className='pt-5 text-primary4'><strong>Step 4:</strong>   Open Free Fire </p>
          <p className='pt-5 text-primary4'>Launch the Free Fire app on your device, making sure you are logged into your account. </p>


          <p className='pt-5 text-primary4'><strong>Step 5:</strong>Buy diamonds</p>
          <p className='pt-5 text-primary4'>On the Free Fire home screen, click on the diamond icon and choose the quantity you want to buy.</p>
          <p className='pt-5 text-primary4'>This will open the Google Play screen to make the payment. </p>


          <Ads
            data-ad-slot="3067284912"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <p className='pt-5 text-primary4'><strong>Step 6:</strong>Checkout</p>
          <p className='pt-5 text-primary4'>On the Google Play screen, select "Payment methods" and confirm that the Google Play balance (added with the gift certificate) is selected.</p>
          <p className='pt-5 text-primary4'>Proceed to confirm the purchase, which will be deducted from your balance. </p>
          <p className='pt-5 text-primary4'>Once the purchase is complete, the diamonds will be added to your Free Fire account.</p>



          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Using the Diamond Generator
          </div>
          <p className=" text-primary4 pt-5">hen accessing the Diamond Generator, select the game you want and the platform you're playing on, such as Android or iOS. It's important to enter the correct information to ensure compatibility and the delivery of resources.</p>
          <p className="pt-5 text-primary4"> Then specify the number of diamonds you want to generate. Be careful, as requesting excessive amounts could raise suspicions and compromise your account. Follow the generator's instructions to enter the desired amount safely.</p>



          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Human verification (if necessary)
          </div>
          <p className=" text-primary4 pt-5">Some generators may ask you to complete a quick check to prevent abuse. This may include filling in a survey, downloading an application or similar actions. Follow the guidelines provided by the generator to complete this step.</p>



          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Manage Your Diamondss
          </div>
          <p className=" text-primary4 pt-5">To reach higher ranks quickly in Free Fire, it's essential to master certain advanced strategies and techniques that will allow you to stand out on the battlefield. Below are some essential tips that will help you improve your performance and rise through the ranks in Free Fire.</p>
          <p className="pt-5 text-primary4"> After verification if required, start the diamond generation process. The time required may vary, so wait until you receive confirmation that your diamonds have been successfully generated.</p>


          <div className="flex left-0 text-black pt-5 font-bold pb-2 text-[25px]">
            Enjoy Your Diamonds and Play Responsibly
          </div>
          <p className="pt-5 text-primary4"> Congratulations! Now that you have your diamonds, use them to improve your gaming experience. However, it is essential to play responsibly and not abuse the use of generators, as this can lead to negative consequences, such as the suspension of your account. Use your diamonds conscientiously and follow the rules of the game to avoid complications.</p>

          <a href="/diamondcodes">
            <button className="bg-primary5  rounded-md flex items-center justify-between w-full text-white px-8 py-2 font-bold text-[22px] mt-5">
              Diamond Codes on Free Fire
              <span className="ml-2 flex items-center">
                <img src="/gameImage/svg/true.svg" alt="true" className="h-5 w-5" />
              </span>
            </button>
          </a>


          <div className="pt-5 font-bold">
            <div className="font-bold text-[30px] md:text-[25px]">Download App and get Free 5000 Diamond 💎</div>
            <a href="/">
              <div >
                <img src="/gameImage/unnamed.png" className="h-[200px] mt-5" />
              </div>
            </a>
            <a href="/">
              <div className="flex item-center  justify-center ">
                <button type="button" className=" btn btn-pulse bg-primary5  rounded-md flex items-center justify-between text-white px-8 py-2 font-bold text-[20px] mt-5">
                  INSTALL APP 💎
                </button>
              </div>
            </a>


            <p className='pt-5 text-primary4'><strong className="text-[20px] md:text-[18px]">Step 1 : </strong> Click the above button to download the App.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 2 : </strong> Open the App and use it for 5 Days.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 3 : </strong>  After the Completion of the 5th Day You will get redemption.
            </p>
            <p className='pt-5 text-primary4'><strong className="text-[20px]  md:text-[18px]">Step 4 : </strong> You just have to copy and paste it to our site for redemption And you get 5000 Diamond 💎 in your Free Fire Account.
            </p>

          </div>

          <p className=" text-primary4 pt-5">BBy following these simple steps, you can use a Diamond Generator to get valuable resources in your favorite game without having to spend real money. Have fun and enjoy an even better gaming experience!</p>

        </div>

      </div>
    </Fragment>
  )
}

export default DiamondCodes 
