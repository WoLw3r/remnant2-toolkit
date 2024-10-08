import * as React from "react"
import { type SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor" 
    viewBox="0 0 51.423 114.362"
    {...props}
  >
    <path
      d="M210.376 131.841c-.737-.034-1.496.26-1.554.986l.296 57.631c.004.717-.443 1.518-1.613 1.708-6.186 1.003-10.557 3.453-13.829 6.787-1.158 1.18 1.155 3.211 2.21 2.046 1.94-2.143 6.56-5.766 13.115-6.331l-.023 9.822c-.001.407-.405.853-.9.959-11.624 2.494-17.03 8.749-20.274 15.513-3.907 8.15-3.073 16.314-2.902 24.712.017.818 2.42.687 2.39-.422-.448-16.071.963-25.94 10.106-32.457 2.904-2.07 6.49-4.032 11.259-5.23.691-.173 1.36-.022 1.765-.504.576.544 1.186.35 1.764.505 4.75 1.269 8.356 3.16 11.26 5.23 9.142 6.516 10.553 16.385 10.106 32.456-.031 1.109 2.372 1.24 2.39.422.17-8.398 1.005-16.563-2.903-24.712-3.243-6.764-8.66-12.975-20.274-15.513-.523-.114-.898-.4-.9-.96l-.023-9.821c6.554.565 11.175 4.188 13.115 6.331 1.055 1.165 3.368-.867 2.21-2.046-3.271-3.334-7.642-5.784-13.828-6.787-1.17-.19-1.609-.991-1.614-1.708l-.25-36.405.324-21.226c.029-.588-.686-.951-1.423-.986zm-.011 81.462a7.75 7.75 0 1 0 0 15.499 7.75 7.75 0 0 0 0-15.499zm0 2.666a5.259 5.259 0 1 1 0 10.517 5.259 5.259 0 0 1 0-10.517z"
      transform="translate(-184.71 -131.839)"
    />
  </svg>
)
export default SvgComponent