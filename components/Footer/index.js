import React from "react";
import moment from "moment";
function Footer() {
  return (
    <div className="flex justify-center w-full bg-primary1 border-t-[1px] py-5 border-black ls:w-[360px]  text-center  text-black  sm:py-2  sm:items-center">
      <div >{`fingameon © ${moment().format(
        // eslint-disable-next-line prettier/prettier
        "YYYY"
      )} . All rights reserved.`}</div>
    </div>
  );
}

export default Footer;