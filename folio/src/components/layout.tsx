const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <div>
          {children}  // Layout structure only, no style imports
      </div>
  );
};

export default Layout;