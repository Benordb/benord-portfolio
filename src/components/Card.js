export default function Card({ title, desc, background, bool, children }) {
  let b = [];
  return (
    <>
      <div
        className={`h-24 flex items-center justify-center border-4 border-indigo-500 ${background}`}>
        {title}
        {desc}
        {bool.toString()}
        {children}
        {background}
      </div>
    </>
  );
}
