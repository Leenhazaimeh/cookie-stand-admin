import styles from '../styles/Home.module.css'
export default function Header({ title, children }) {

    return (
        <header className="flex items-center justify-between p-4 bg-green-500 text-gray-50">
           <h1 className={styles.title}>
        Cookie Stand Admin 
        </h1>
            {children}
        </header>
    )
}