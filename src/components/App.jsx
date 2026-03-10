import { restaurants } from '../../materials/mock';
import { Tabs } from './tabs/Tabs';
import { Layout } from './layout/layout';

export const App = () => {
  return (
    <Layout>
      <Tabs items={restaurants} />
    </Layout>
  );
};
