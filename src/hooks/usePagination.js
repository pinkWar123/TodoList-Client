import { useEffect, useState } from 'react';

const usePagination = ({ getNumDates, getTasks, pageSize }) => {
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const [numDates, setNumDates] = useState();
    useEffect(() => {
        const fetchNumDates = async () => {
            const response = await getNumDates();
            if (response && response.status === 200) {
                setNumDates(response.data);
            }
        };
        fetchNumDates();
    }, []);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks({ page, pageSize });
            console.log(response);
            if (response && response.status === 200) {
                setTasks(response.data);
            }
        };
        fetchTasks();
    }, []);

    const fetchMoreTasks = async () => {
        const response = await getTasks({ page: page + 1, pageSize });
        console.log(response.data);
        if (response && response.status === 200) {
            if (Array.isArray(response.data) && response.data.length > 0) {
                setTasks((prev) => [...prev, ...response.data]);
                setPage((prev) => prev + 1);
            }
        }
    };

    const isLastPage = page * pageSize < numDates;

    return { fetchMoreTasks, isLastPage, tasks, setTasks, page, pageSize };
};

export default usePagination;
