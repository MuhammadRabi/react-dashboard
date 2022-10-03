import React from "react"
import WidgetLayout from "../Layout/WidgetLayout"
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <>
      <WidgetLayout>
        <h3 className="content-headline">Social media stats</h3>
        <div className="social-box flex justify-between items-center text-white mb-2 mt-8">
          <div className="icon p-4 mr-4">
            <FaTwitter size="24" />
          </div>
          <span className="mr-auto text-sm">5000 followers</span>
          <button className="social-buttons">follow</button>
        </div>
        <div className="social-box flex justify-between items-center text-white mb-2">
          <div className="icon p-4 mr-4">
            <FaFacebookF size="24" />
          </div>
          <span className="mr-auto text-sm">5000 followers</span>
          <button className="social-buttons">follow</button>
        </div>
        <div className="social-box flex justify-between items-center text-white mb-2">
          <div className="icon p-4 mr-4">
            <FaYoutube size="24" />
          </div>
          <span className="mr-auto text-sm">5000 followers</span>
          <button className="social-buttons">follow</button>
        </div>
        <div className="social-box flex justify-between items-center text-white mb-2">
          <div className="icon p-4 mr-4">
            <FaLinkedin size="24" />
          </div>
          <span className="mr-auto text-sm">5000 followers</span>
          <button className="social-buttons">follow</button>
        </div>
      </WidgetLayout>
    </>
  )
}

export default SocialMedia
