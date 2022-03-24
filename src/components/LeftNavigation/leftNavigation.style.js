const styles = {
    main: {
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 99,
        // background: "rgba(0,0,0,0.5)"
    },
    container: {
        position: "relative",
        background: "white",

        display: "flex",
        flexDirection: "column",

        border: "none",
        padding: 0,


        
        boxShadow: "0.5px 0px rgba(0,0,0, 0.25)",
        height: "100vh",
    },

    openContainer: {
        position: "relative",
        background: "white",

        display: "flex",
        flexDirection: "column",

        border: "none",
        padding: 0,

        width: 330,
        height: "100vh",
    },

    avatarBox: {
        margin: "80px 14px",
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        width: "56px",
        height: "56px",
    },
    username: {
        fontWeight: "600",
        fontSize: "24px",
        marginLeft: "28px",
    },

    choosenIc: {
        background: "rgba(0,0,0,0.03)",
        borderLeft: "2px solid #070707",
    },
    tabIc: {
        width: "24px",
        height: "24px",
    },
    tabName: {
        marginLeft: "44px",
        fontSize: "18px",
        lineHeight: "24px",

        textTransform: "capitalize",
    },
    icBox: {
        width: "100%",
        py: "24px",
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
        py: "12px",
        alignItems: "center",

    },

}

export default styles;