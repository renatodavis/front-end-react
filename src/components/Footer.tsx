
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col bottom-0">
            <footer className="bg-gray-800 p-4 w-full text-center text-white">
                <p>&copy; {currentYear} Renato Davis</p>
            </footer>
        </div>
    );
};

export default Footer;
