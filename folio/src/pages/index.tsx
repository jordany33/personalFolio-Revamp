import Layout from '../components/layout';
import About from '../components/about';
import Experience from '../components/experience';
import Header from '../components/header';

const HomePage = () => {
    return (
        <Layout>
            <Header />
            <About />
            <Experience />
        </Layout>
    );
}

export default HomePage;