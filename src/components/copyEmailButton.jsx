import React from "react"

const CopyEmailButton = () => {
  return (
    <button className = "realtive px-4 py-4 text-sm text-center rounded-full font-extralight bg-primary e-[12rem] cursor-pointer overflow-hidden">
        <p className= "flex items-center justify-center gap-2 ">Copy Email Address
            <img src="assets/copy.svg" alt="copy icon" className="w-5" />
        </p>
    </button>
  )
}

export default CopyEmailButton
