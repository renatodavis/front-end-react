
const Footer :React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-800 text-white py-4 flex justify-center items-center absolute bottom-0">
        <p>
            &copy; {currentYear}
        </p>
    </footer>
    );
};

export default Footer;
