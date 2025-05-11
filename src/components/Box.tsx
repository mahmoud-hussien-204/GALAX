interface IProps {
  children: React.ReactNode;
}

const Box = ({children}: IProps) => {
  return <div className=''>{children}</div>;
};

export default Box;
