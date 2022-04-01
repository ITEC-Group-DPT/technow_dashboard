import color from "../../constant/color"
const styles = {
    main: {
        backgroundColor: color.background,
        marginLeft: "365px",

        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    pageTitle: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "38px",
    },
    pageSubTitle: {
        fontSize: "20px",
        color: "#9d9c9c",
        fontWeight: "100",
    },
    sectionRow: {
        mt: "28px",
        display: "flex",
        justifyContent: "space-between",
    },
}

export default styles;