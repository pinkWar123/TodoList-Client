const { useEffect } = require('react');

const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) callback();
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    });
};

export default useClickOutside;
