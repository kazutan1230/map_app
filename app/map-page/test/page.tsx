import { GetServerSideProps } from 'next';
import ServerComponent from '@/components/parts/serverComponent'

interface ServerPageProps {
  id: string;
}

const ServerPage: React.FC<ServerPageProps> = ({ id }) => {
  return (
    <div>
      <h1>サーバーコンポーネント</h1>
      <p>URLから取得した値: {id}</p>
      <ServerComponent id={id} />
    </div>
  );
};
