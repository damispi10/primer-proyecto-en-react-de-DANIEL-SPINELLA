
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css'

export function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className={styles.layout}>
                {children}
            </main>
            <Footer />

        </div>);
}
