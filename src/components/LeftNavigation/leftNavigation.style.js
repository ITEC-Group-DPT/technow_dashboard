const styles = {
    main: {
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
        // background: "rgba(0,0,0,0.5)"
    },
    container: {
        position: "relative",
        background: "white",
        display: "inline-block",

        boxShadow: "0.5px 0px rgba(0,0,0, 0.25)",
        height: "100%",
    },
    avatar: {
        margin: "80px 14px",
        width: "56px",
        height: "56px",

    },
    choosenIc: {
        background: "rgba(0,0,0,0.03)",
        borderLeft: "2px solid #070707",
    },
    tabIc: {
        width: "24px",
        height: "24px",
    },
    icBox: {
        width: "100%",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        borderRadius: 0,
    },
    bottomBox: {
        position: "absolute",
        width: "100%",
        bottom: 30,
    },
    bottomIc: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        borderRadius: 0,
        padding: "12px",
    },
}

export default styles;