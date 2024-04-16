

import '../globals.css';
import Footer from './components/FooterComponet/Footer';
import NavView from './components/NavView/NavView';

export const metadata = {
    title: "Ronda",
    description: "Generated by create next app",
}

export default function layout({ children }) {
    return (
        <body>
            <header>
                <NavView />
            </header>

            <>{children}</>

            <Footer />
        </body>
    );
}
