import { Outlet } from "react-router-dom";

export default function PageContent() {
  return (

    <div className="flex-col justify-center flex h-screen">
      <div>
        <div className='cube-lg'>
          {CubeXl()}
        </div>

        <div className='cube-md'>
          {CubeMd()}
        </div>

        <div className='cube-md-2'>
          {CubeMd()}
        </div>
      </div>
      <Outlet />
    </div>
  )
}


const CubeXl = () => (
  <svg width="256px"
    height="256px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000" transform="rotate(90)">
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}" }} /></defs>

      <polygon fill='#82d2f9' points="40.86 14.3 23.89 4.5 7.03 14.23 24 24.03 40.86 14.3" />
      <polygon fill='#61AAD6' points="24 24.03 7.03 14.23 7.03 33.7 24 43.5 24 24.03" />
      <polygon fill='#3D6AA0' points="40.86 14.3 24 24.03 24 43.5 40.86 33.77 40.86 14.3" />
    </g></svg>

);


const CubeMd = () => (
  <svg width="56px"
    height="56px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000" transform="rotate(40)">
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier"><defs><style dangerouslySetInnerHTML={{ __html: ".a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}" }} /></defs>

      <polygon fill='#82d2f9' points="40.86 14.3 23.89 4.5 7.03 14.23 24 24.03 40.86 14.3" />
      <polygon fill='#61AAD6' points="24 24.03 7.03 14.23 7.03 33.7 24 43.5 24 24.03" />
      <polygon fill='#3D6AA0' points="40.86 14.3 24 24.03 24 43.5 40.86 33.77 40.86 14.3" />
    </g></svg>
);

