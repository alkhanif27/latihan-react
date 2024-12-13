import Navbar from "../components/ui/Navbar";

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <h1>Footer</h1>
    </div>
  );
}
