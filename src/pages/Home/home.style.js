import color from "../../constant/color"
const styles = {
    main: {
        backgroundColor: color.background,
        marginLeft: "84px",
        pl: "10%",
        pr: "7%",
        minHeight: "100vh",

        display: "flex",
    },
    leftData: {
        paddingTop: "50px",
        flex: 6,
    },
    rightData: {
        flex: 4,
        mt: "100px",
        mb: "40px",
        marginLeft: "5%",
        background: "#ECECEC",
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