const { useRef, useEffect } = require('react');

const useEditableRef = (initialValue, needFocus = true) => {
    const editableRef = useRef(null);
    const setEndOfContenteditable = (contentEditableElement) => {
        var range, selection;
        if (document.createRange) {
            range = document.createRange();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    useEffect(() => {
        // Set the initial content when the component mounts
        if (editableRef.current) {
            editableRef.current.innerHTML = initialValue;
            if (needFocus) setEndOfContenteditable(editableRef.current);
        }
    }, [initialValue, needFocus]);
    const clearAndFocusEditableDiv = () => {
        editableRef.current.innerHTML = '';
        editableRef.current.focus();
    };
    return { editableRef, clearAndFocusEditableDiv };
};

export default useEditableRef;
