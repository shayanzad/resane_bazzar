import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={97}
    height={83}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#ajobs)">
      <path
        d="M2.752 59.27c12.761 23.146 38.73 25.206 53.006 23.009C68.794 80.287 97 69.436 96.07 48.419 95.177 27.404 79.56-2.712 47.055.206 14.55 3.091-8.118 39.526 2.752 59.271Z"
        fill="#49D3FF"
      />
    </g>
    <g clipPath="url(#bjobs)" fill="#1D1929">
      <path d="M94.688 43.85c-.229.366-.435.846-.869.892-1.097.137-.845.868-.914 1.576-.434 4.982-.274 9.986-.502 14.967-.183 4.045-.503 8.067-1.326 12.043a23.961 23.961 0 0 1-1.37 4.341c-.48 1.097-1.28 1.714-2.492 1.897-4.433.731-8.866.434-13.276-.137-1.53-.183-3.062-.457-4.501-1.097-1.897-.846-2.811-2.308-2.948-4.365-.137-1.965-.183-3.953-.206-5.94-.023-1.806-.114-3.588-.137-5.394 0-.616-.206-.868-.845-.868-1.92.023-3.84.023-5.759-.023-.64 0-.845.229-.845.869.046 1.53 0 3.039.023 4.57 0 .868-.046 1.714-.343 2.513-.228.594-.023.754.571.732 1.029-.023 2.08-.092 3.085.205.891.252 1.714.594 2.33 1.348 1.372 1.668.87 3.702-1.165 4.41-1.988.709-4.067.755-6.146.64a99.078 99.078 0 0 0-5.21-.114 805.9 805.9 0 0 0-10.512.023c-3.267.023-6.512.114-9.78.16-1.6.023-3.176-.137-4.707-.548-1.622-.435-2.49-1.394-2.536-2.72-.046-1.234.89-2.422 2.33-2.97 1.371-.526 2.811-.434 4.25-.412.343 0 .778.138.686-.525-.388-2.422-.274-4.844-.183-7.29.046-1.233.046-1.233-1.165-1.233-4.639-.023-9.255.023-13.893-.069-3.062-.046-6.147-.046-9.163-.868-.709-.183-1.394-.434-2.08-.686-2.216-.868-3.29-2.536-3.519-4.89-.32-3.199-.342-6.375-.342-9.574 0-7.975-.366-15.95-.16-23.948.091-4.455.48-8.98 1.096-13.482.526-3.861 2.674-5.94 6.559-6.672C10.529.868 12.357.8 14.162.708 18.458.526 22.754.48 27.027.251 31.803.023 36.578.046 41.354 0c5.576-.046 11.151.229 16.704.251 4.867.046 9.666-.137 14.487-.137 3.68 0 7.358.115 10.992.914.685.16 1.325.434 1.987.663 2.308.823 3.36 2.56 3.542 4.936.115 1.416.229 2.856.32 4.273.297 4.958.16 9.917-.068 14.876-.183 3.793-.48 7.609.662 11.333.297 1.006.709 1.669 1.828 1.828 1.44.229 2.354 1.189 2.88 2.514v2.4ZM45.193 1.805c-3.587.137-7.084.092-10.602.16-7.061.137-14.122.617-21.16.846-1.463.045-2.902.16-4.365.457-3.267.64-4.318 1.668-5.004 4.935-.091.389-.137.777-.183 1.166-.228 2.33-.434 4.661-.685 6.992-.297 2.81-.32 5.667-.343 8.478 0 4.25.228 8.523.297 12.773.046 3.016 0 6.033 0 9.049 0 2.034 0 2.034 2.01 1.828 5.234-.548 10.512-.754 15.768-.8 7.22-.045 14.418.046 21.64.389 7.426.365 14.852.16 22.279.434.754.023.982-.274.89-.96-.113-1.188-.296-2.353-.296-3.542 0-.548-.046-.845-.594-1.12-1.029-.48-1.6-2.17-1.303-3.45.206-.914.846-1.302 2.308-1.325.663 0 .8-.274.891-.869.457-3.039.914-3.427 4.045-3.381.365 0 .731 0 1.097.023 4.753.137 9.505.182 14.258.182.686 0 .983-.137.983-.914 0-3.633.183-7.243.343-10.854.228-4.913-.114-9.803-.366-14.693-.137-2.788-.8-3.542-3.473-4.433a.82.82 0 0 1-.252-.091c-3.29-1.143-6.74-1.051-10.122-1.051-9.415.023-18.784-.115-28.06-.229ZM60.23 59.8c1.645 0 3.29-.046 4.936.023.73.023 1.005-.114.96-.868-.206-2.582-.16-5.165-.16-7.77 0-.662-.23-.89-.915-.914-2.445-.023-4.867-.091-7.312-.114-7.243-.091-14.487-.343-21.73-.548-10.65-.32-21.298-.297-31.946.457-.617.045-.777.274-.777.845.023 1.12.092 2.24.183 3.36.16 2.01 1.097 3.358 3.04 3.998 1.964.64 3.998.777 6.032.846 4.616.16 9.254.32 13.87.342 6.604.046 13.208.229 19.811.389 4.685.137 9.346-.16 14.008-.046ZM70.74 43.713c-.64 0-1.28-.046-1.92.023-1.05.114-1.622.731-1.485 1.782.297 2.628.252 5.279.48 7.907.046.594.229.777.846.708 1.53-.16 3.085-.297 4.638-.32 4.16-.091 8.34-.206 12.5-.388 1.28-.046 2.559-.114 3.839-.137.365 0 .822 0 .8-.503-.092-2.01.48-3.999.388-6.01-.046-1.05-.549-1.645-1.6-1.965-1.21-.366-2.445-.48-3.679-.548-4.958-.32-9.894-.16-14.807-.549Zm-24.838 27.49c1.85 0 3.724.022 5.575 0a9.805 9.805 0 0 0 3.04-.572c1.233-.434 2.056-1.257 2.079-2.582.045-1.737-.023-3.473-.046-5.21 0-.822-.389-1.074-1.188-1.05-3.017.022-6.033.045-9.05-.07-4.135-.137-8.271-.045-12.407-.137-.526 0-.8.183-.777.732.091 1.965.091 3.953.228 5.918.092 1.348.595 1.828 1.92 2.194l.891.205c3.222.777 6.49.549 9.734.572Zm34.641 6.626c1.942 0 3.45-.068 4.981-.205 1.806-.16 2.148-.366 2.743-2.126.73-2.148 1.074-4.364 1.416-6.58.115-.709-.205-.892-.868-.892-4.433-.045-8.889-.114-13.322-.182-2.125-.046-4.25.137-6.375-.138-.549-.068-.686.206-.663.686.069 1.485.091 2.97.137 4.479.069 2.673.914 3.701 3.588 4.204 2.902.503 5.827.777 8.363.754Zm.16-22.6c-4.022-.045-8.02.092-12.042.32-.572.024-.8.206-.754.824.183 2.993.365 6.01.502 9.026.023.662.229.89.914.89 6.536.023 13.094-.136 19.63.16.685.023.982-.16 1.05-.89.229-3.154.343-6.307.48-9.484.046-.845-.206-1.142-1.074-1.074-2.925.183-5.827.297-8.706.229Zm-30.46 19.835h10.214c.457 0 .914.046 1.349-.182.548-.275 1.188-.549 1.165-1.257 0-.709-.663-.891-1.211-1.074-1.485-.503-2.994-.434-4.525-.229-2.216.297-4.41.8-6.672.868-5.598.206-11.174.138-16.75-.708-1.896-.297-3.816-.388-5.712.069-.731.16-1.691.343-1.691 1.257 0 .913.96 1.096 1.668 1.256 1.394.32 2.834.252 4.25.229 5.987-.115 11.951-.297 17.915-.229Zm17.161-35.372c-.388 0-.8-.046-1.188 0-.526.068-1.074.16-1.097.845-.046.708.388 1.074 1.028 1.165.297.046.617.069.914.023 1.371-.251 2.742-.205 4.09-.114 3.2.229 6.376.297 9.575.366 2.97.068 5.964.25 8.866.982.823.206 1.668.343 2.536.252.549-.069 1.006-.275 1.166-.869.137-.594-.183-1.005-.64-1.302-.251-.16-.548-.252-.823-.366-1.028-.365-2.102-.434-3.153-.434-7.107-.023-14.19-.366-21.274-.549Zm17.55-1.006h2.924c.297 0 .617.023.686-.411.205-1.326-.434-2.217-1.783-2.468a6.718 6.718 0 0 0-1.165-.114c-5.027-.046-10.031.023-15.059-.183-1.713-.069-2.01.228-2.399 1.92-.16.64-.023.89.663.89 5.392-.068 10.762.275 16.132.366Z" />
      <path d="M39.526 17.252c0 1.76.023 3.542-.343 5.279-.548 2.513-2.102 3.427-4.593 2.742-1.668-.457-3.13-1.303-4.615-2.171-.343-.206-.64-.434-.709.251-.16 1.417-1.12 2.148-2.353 2.651-1.189.48-2.422.64-3.657.663-2.125.022-4.25-.046-6.375-.297-.32-.046-.662-.092-.982-.183-2.148-.594-2.994-2.034-2.514-4.228.297-1.325.868-2.536 1.554-3.678 1.69-2.811 3.04-5.827 5.233-8.341 1.53-1.76 2.856-1.714 4.181.206.252.365.503.777.709 1.165.845 1.463.845 1.485 2.4.708 1.827-.89 3.747-1.622 5.735-2.102.685-.16 1.37-.32 2.056-.411 1.554-.229 2.65.365 3.405 1.714.571 1.028.822 2.148.868 3.313.023.891 0 1.805 0 2.72Zm-4.821-6.124c-.16.023-.594.046-1.006.137-2.33.549-4.478 1.508-6.604 2.582-.57.298-.41.64-.205 1.052.845 1.69 1.416 3.496 1.92 5.3.09.344.205.686.57.892 1.851 1.005 3.68 2.057 5.713 2.605 1.508.411 2.422-.046 2.65-1.6.412-2.924.595-5.872.024-8.797-.343-1.6-1.166-2.194-3.062-2.17ZM21.84 25.158c1.257.023 2.49-.114 3.702-.388.64-.137 1.21-.411 1.622-.96.64-.845.548-2.033-.229-2.445-1.759-.937-3.313-2.125-4.73-3.541-.868-.892-.982-1.669-.137-2.606.526-.57 1.143-.982 1.805-1.37.32-.206.64-.389.412-.846-.389-.823-.777-1.645-1.371-2.354-.48-.57-1.006-.594-1.6-.182-.662.48-1.12 1.12-1.485 1.828-1.211 2.285-2.445 4.57-3.633 6.855-.526 1.005-.96 2.034-1.234 3.13-.343 1.326.046 2.034 1.325 2.445.366.115.777.206 1.166.229 1.462.091 2.924.137 4.387.206Zm5.37-5.232c-.503-1.805-1.12-3.268-1.828-4.707-.092-.16-.206-.366-.412-.298-.708.298-1.416.64-1.782 1.349-.32.64.137 1.096.548 1.508.937.89 2.057 1.462 3.474 2.148ZM79.56 16.544c-.114 2.194.16 4.616.16 7.06 0 1.989-.091 3.954-.502 5.896-.48 2.24-1.6 3.062-3.885 2.902-.571-.046-1.165-.023-1.737-.046-2.993-.045-4.387-1.302-4.524-4.295-.16-3.405-.023-6.81.251-10.215.046-.662.069-1.325.023-2.01-.228-2.4-.046-4.8.252-7.198.182-1.531 1.12-2.308 2.673-2.354 1.074-.023 2.125 0 3.176.183 2.628.48 3.634 1.576 3.953 4.25.229 1.874.115 3.747.16 5.827Zm-6.558 8.866c-.64 0-1.28.046-1.92-.023-.547-.046-.707.16-.662.663.069.937.092 1.896.229 2.81.183 1.166.914 1.851 2.102 1.92.96.068 1.942.068 2.925.023.982-.046 1.622-.572 1.965-1.509.343-.913.366-1.896.503-2.856.091-.525-.229-.685-.686-.731-1.485-.114-2.948-.366-4.456-.297Zm5.347-2.72v-.456c0-1.44-.023-1.486-1.416-1.326-1.463.16-2.902.137-4.365.137-1.92 0-1.92 0-2.034 1.943-.022.251-.045.48-.068.73-.069.526.137.664.685.595 1.783-.206 3.588-.16 5.37 0 1.851.206 1.828.251 1.828-1.622Zm-7.746-4.547v.457c0 1.257 0 1.303 1.257 1.234 1.554-.068 3.085-.228 4.639-.32 1.736-.114 1.736-.114 1.69-1.873-.022-1.211-.114-1.303-1.393-1.326-1.463-.023-2.903.252-4.365.137-1.828-.16-1.828-.137-1.828 1.691Zm3.976-6.1v.045c-1.005 0-2.01.023-3.016 0-.526-.023-.777.183-.777.731 0 .571 0 1.166-.092 1.737-.091.617.16.754.709.731 1.462-.069 2.925-.137 4.364-.16 2.4-.068 2.377-.046 2.263-2.445-.023-.503-.16-.685-.709-.64-.937.046-1.85 0-2.742 0Zm-.046-1.143c.572-.046 1.326-.137 2.08-.183 1.302-.046 1.462-.366.777-1.508-.183-.297-.389-.571-.686-.709-1.325-.662-2.742-1.05-4.227-.936-1.211.091-2.125 1.782-1.645 2.856.114.274.342.297.594.32.982.046 1.942.091 3.107.16ZM45.879 15.813c0-1.212.594-1.714 1.942-1.257 2.217.731 4.456 1.417 6.764 1.897.274.045.525.16.777.25 1.713.686 2.125 1.6 1.234 3.177-.526.914-.297 1.303.457 1.874 2.536 1.92 2.582 2.81.434 5.095-.526.549-1.029 1.12-1.577 1.669-.731.73-1.257.708-1.92-.069a118.248 118.248 0 0 1-2.673-3.245c-.343-.457-.594-.525-1.005-.114-.32.32-.663.64-1.051.868-1.28.8-2.263.366-2.537-1.096-.137-.777-.205-1.577-.274-2.354-.183-2.17-.366-4.319-.571-6.695Zm9.483 3.062c.023-.503-.297-.777-.709-.96-.754-.343-1.576-.48-2.376-.571-1.577-.183-2.925-1.006-4.41-1.44-.709-.206-.914 0-.777.686.457 2.148.525 4.341.845 6.512.069.503-.046 1.188.434 1.394.549.228.96-.366 1.371-.731 1.189-1.029 1.509-1.052 2.514.183.731.89 1.417 1.828 2.102 2.764.343.457.709.549 1.12.092.503-.526 1.005-1.051 1.508-1.6.434-.457.457-.96.046-1.485-.48-.64-1.188-1.051-1.828-1.485-.937-.64-1.006-.983-.48-1.966.251-.434.617-.845.64-1.393ZM28.215 30.163c-4.113.114-8.294-.137-12.499-.206-.48 0-1.234.16-1.211-.571.023-.64.777-.503 1.211-.503 6.81-.183 13.642-.457 20.451-.114.937.046 1.897.023 2.834.046.457.022 1.12-.092 1.097.617-.023.617-.64.525-1.074.548-3.588.16-7.153.274-10.809.183ZM28.078 33.27c-4.067.115-8.226-.137-12.408-.205h-.183c-.41-.069-1.005.046-1.028-.503-.023-.64.594-.48.983-.48 6.74-.32 13.504-.502 20.268-.205 1.074.045 2.125.023 3.2.068.456.023 1.142-.091 1.165.571.022.686-.64.572-1.12.595-3.588.16-7.175.25-10.877.16ZM28.604 36.378c-4.593.137-8.752-.114-12.91-.183h-.092c-.434-.045-1.097.069-1.12-.502-.023-.686.663-.48 1.074-.48 6.01-.32 12.042-.389 18.075-.32 1.76.023 3.519.114 5.278.183.16 0 .297 0 .457.045.32.069.731.092.731.526.023.503-.388.571-.754.594-1.234.069-2.49.16-3.747.16-2.468 0-4.936-.023-6.992-.023ZM29.084 39.486c-5.096.137-9.323-.069-13.55-.183-.184 0-.367 0-.55-.046-.274-.068-.57-.16-.548-.502.023-.343.297-.434.594-.457.8-.046 1.577-.138 2.377-.138 5.301-.09 10.58-.32 15.881-.182 1.897.045 3.77.114 5.667.182.16 0 .297 0 .457.046.32.069.708.114.685.572-.022.434-.365.525-.73.525-1.075.069-2.126.137-3.2.16-2.628.023-5.278.023-7.084.023ZM28.26 42.593c-4.272.115-8.522-.022-12.773-.16-.182 0-.365-.022-.548-.045-.251-.046-.503-.16-.503-.457 0-.343.274-.457.549-.48.914-.069 1.828-.137 2.742-.16 5.141-.069 10.282-.297 15.424-.183 1.92.046 3.839.114 5.758.183.206 0 .434.046.64.069.274.068.548.16.548.502 0 .389-.274.526-.594.549a57.23 57.23 0 0 1-2.833.16c-2.788.023-5.599.023-8.41.023ZM49.055 54.704c0 2.171-1.76 4.182-3.679 4.16-2.08 0-4.067-1.806-4.09-3.703-.023-1.85 2.216-4.021 4.159-4.044 2.079 0 3.61 1.508 3.61 3.587Zm-1.394.16c0-1.348-.96-2.353-2.24-2.376-1.507 0-2.993 1.257-2.97 2.513.023 1.212 1.486 2.514 2.81 2.491 1.235-.023 2.4-1.28 2.4-2.628ZM79.858 57.104c2.17-.023 3.656 1.44 3.701 3.633.046 2.468-1.965 4.73-4.227 4.73-2.217 0-4.022-1.782-4.045-3.953-.045-2.33 2.103-4.388 4.57-4.41Zm-.138 1.416c-2.056.046-3.153 1.097-3.107 2.971.045 1.44 1.165 2.582 2.536 2.582 1.668 0 2.97-1.53 2.902-3.405-.023-1.462-.823-2.193-2.33-2.148Z" />
    </g>
    <defs>
      <clipPath id="ajobs">
        <path fill="#fff" d="M0 0h96.105v83H0z" />
      </clipPath>
      <clipPath id="bjobs">
        <path fill="#fff" transform="translate(1)" d="M0 0h93.688v80H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent