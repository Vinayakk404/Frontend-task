import axios from 'axios';

// Action creator for fetching data from the API
export const requestData = () => async (dispatch) => {
    try {
        // Fetch data from the API
        const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");
        
        // Dispatch an action with the fetched data
        dispatch({ type: 'FETCH_DATA', payload: data });
    } catch (error) {
        // Dispatch an action in case of an error
        dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
    }
};

// Action creator for selecting and organizing data based on grouping and ordering
export const selectData = (group, Tickets, orderValue) => async (dispatch) => {
    try {
        // Initialize variables
        let arr = [], 
        selectedData = [];
        let user = false;
        let s1 = new Set();
      

        // Grouping logic based on the selected group criteria
        if (group === 'status') {
            // Group by status
            Tickets.map((elem) => {s1.add(elem.status);});
            s1.add("Cancelled")
            arr = [...s1];
            arr.map((elem, index) => {let arr = Tickets.filter((item) => {
                    return elem === item.status;
                });

                selectedData.push({[index]: {title: elem,value: arr}
                });
            });
        } else if (group === 'user') {
            // Group by user
            user = true;
            Tickets?.User?.forEach((elem, index) => {arr = Tickets?.Tickets?.filter((Elem) => {
                    return elem.id === Elem.userId;
                });

                selectedData.push({
                    [index]: {title: elem.name,value: arr}
                });
            });
        } else {
            // Group by priority
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((elem, index) => {
                arr = Tickets.filter((Elem) => {
                    return index === Elem.priority;
                });

                selectedData.push({
                    [index]: {
                        title: elem,
                        value: arr
                    }
                });
            });
        }

        // Sorting logic based on the selected order criteria
        if (orderValue === "title") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        if (orderValue === "priority") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => b.priority - a.priority);
            });
        }

        // Dispatch an action with the selected and organized data
        dispatch({ type: 'DATA_SUCCESS', payload: { selectedData, user } });

    } catch (error) {
        // Dispatch an action in case of an error
        dispatch({ type: 'DATA_FAILURE', payload: error.message });
    }
};
