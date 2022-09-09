export default function Button(props) {
  const { onClick, children } = props;
  return <button className="px-3 py-1 text-white font-bold bg-indigo-500 hover:bg-indigo-600 rounded-md" onClick={onClick}>{children}</button>
}