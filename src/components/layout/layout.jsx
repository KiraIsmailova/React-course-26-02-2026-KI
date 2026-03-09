export const Layout = ({ children }) => {
  return (
    <div>
      <header>This is header</header>
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  );
};
