import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import { WorksList } from '../../components/WorksList';
import { Title } from '../../components/Title';
import { UIProvider } from "@yamada-ui/react";

const Works: React.FC = () => {
    return (
        <UIProvider>
            <Header />
            <Title title="Works" />
            <WorksList />
            <Footer />
        </UIProvider>
    );
}

export default Works;