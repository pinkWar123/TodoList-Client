import { useEffect, useState } from 'react';

const usePagination = ({ getNumDates, getTasks, page, setPage, pageSize, tasks, setTasks }) => {
    let [_tasks, _setTasks] = useState([]);
    if (tasks) {
        _tasks = tasks;
        _setTasks = setTasks;
    }

    let [_page, _setPage] = useState(1);
    if (page) {
        _page = page;
        _setPage = setPage;
    }
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
            if (response && response.status === 200) {
                _setTasks(response.data);
            }
        };
        fetchTasks();
    }, []);

    const fetchMoreTasks = async () => {
        const response = await getTasks({ page: page + 1, pageSize });
        if (response && response.status === 200) {
            if (Array.isArray(response.data) && response.data.length > 0) {
                _setTasks((prev) => [...prev, ...response.data]);
                _setPage((prev) => prev + 1);
            }
        }
    };

    const isLastPage = page * pageSize < numDates;
    console.log(numDates);
    return { fetchMoreTasks, isLastPage, tasks: _tasks, setTasks: _setTasks, page: _page, pageSize: _setPage };
};

export default usePagination;
