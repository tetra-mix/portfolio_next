
import { WorksList } from '../../components/WorksList';
import { Center } from "@yamada-ui/react";
import { PageTemplate } from '../../components/PageTemplate';


const Works: React.FC = () => {
    return (
        <PageTemplate title="Works">
            <Center>
                <div className="p-4 m-16 rounded-lg text-xl">
                    私が今まで作ってきた作品/参加した作品です。
                    かなり昔に作ったものもあり至らないところもあると思いますが、ご容赦ください。
                </div>
            </Center>
            <div className='pt-4 pb-16'>
                <WorksList />
            </div>
        </PageTemplate>
    );
}

export default Works;