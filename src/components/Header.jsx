export default function Header({ children }) {
  return (
    <header className="m-0 p-2 flex justify-center items-center">
      <div id="header-title" className="flex items-center gap-6">
        {/* <h1 className="text-3xl font-bold underline">HELLO BHASKAR</h1> */}
      </div>
      <nav>{children}</nav>
    </header>
  );
}
