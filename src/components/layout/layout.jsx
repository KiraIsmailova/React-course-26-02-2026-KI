import { CustomFooter } from '../CustomFooter/CustomFooter';
import { CustomHeader } from '../CustomHeader/CustomHeader';

export const Layout = ({ children }) => {
  return (
    <div>
      <CustomHeader />
      <main>{children}</main>
      <CustomFooter />
    </div>
  );
};
