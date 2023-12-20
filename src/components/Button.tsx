type ButtonProps = {
    className?: string
}

export default function Button({ className = "" }: ButtonProps) {
   return <button className={`bg-pink-500 p-2 rounded-sm ${className}`}>Hello Button</button>
}