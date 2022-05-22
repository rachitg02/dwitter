type Props ={
    label: string
    onClick: ()=>void
}

const Button: React.FC<Props>=({label,onClick})=>{
    return(
        <button className='opacity-80 transition ease-in-out delay-80 bg-gradient-to-r from-blue-400 to-blue-500 hover:-translate-y-1 hover:scale-110 hover:from-blue-500 hover:to-blue-400 duration-300 rounded-xl py-2 px-6 text-white'
         onClick={onClick}
         >{label}
         </button>
    )
}

export default Button