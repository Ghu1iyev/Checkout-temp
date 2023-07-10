import { styled } from "styled-components";

const Input = ({contact,icon,placeholder}) => {
  return (
    <>
    <div className="mb-20">
        <p className="text-old-silver text-[12px] font-semibold font-montserat mt-5">
          {contact}
        </p>
       <div className="absolute">
       <input
          className="border-2 border-old-silver rounded-lg w-[465px] h-[55px] px-12 xs:w-[350px]"
          type="text"
          placeholder={placeholder}
        />
        <Icon className={icon}></Icon>
       </div>
      </div>
    </>
  )
}

export default Input


const Icon = styled.i`
color: #828282;
position: absolute;
top: 50%;
left: 15px;
`