import { FC } from 'react';
import { createRoot } from 'react-dom/client';

const Index: FC = () => {
    return <div>index</div>;
};

createRoot(document.getElementById('root') as HTMLDivElement).render(<Index />);

export default Index;
