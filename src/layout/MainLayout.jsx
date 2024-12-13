// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
}
