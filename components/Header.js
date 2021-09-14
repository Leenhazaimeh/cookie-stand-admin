import Link from 'next/link'
export default function Header({ title, children }) {

    return (
        <header className="flex items-center justify-between p-4 bg-green-500 ">
            <h1 className="text-4xl">{title}</h1>
         
            <button className="  text-xl h-12" >Overview </button>
           
            {children}
        </header>
    )
}