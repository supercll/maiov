const useBack = history => {
    return () => {
        // console.log(history);
        if (history.length > 1) {
            history.goBack();
        } else {
            history.push("/");
        }
    };
};

const useInnerHeight = () => window.innerHeight;

export { useBack, useInnerHeight };
