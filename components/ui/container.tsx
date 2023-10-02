///we create an interface for the container to get the children from the navbar that will be used for this container
interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
