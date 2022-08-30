// type Props
interface Props {
  title: string;
  isActive?: boolean;
}

function NavButtons({ title, isActive }: Props) {
  return (
    <button
      className={`${isActive && 'bg-[#036756]'}
     hover:bg-[#036756] 
    text-white py-2 px-4 rounded font-bold`}
    >
      {title}
    </button>
  );
}
export default NavButtons;
